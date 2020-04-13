// Require Mongoose
var mongoose = require('mongoose');

const devs = require('./devs');

// Define a schema
var Schema = mongoose.Schema;

// Models are defined using the Schema interface
var QuestionModelSchema = new Schema({
    question: {type: String, required: true},
    postedBy: {type: String, required: true, enum: devs.names},
    category: {type: String, required: true},
    time: Date,
    testAnswers: {type: [Schema.Types.ObjectId], ref: 'AnswerModel' , required: false},
    answers: {
        type: [{
            answerBy: String,
            answer: String,
            time: Date,
        }],
        required: false
    }
});

// Compile model from schema
/**The first argument is the singular name of the collection
 * that will be created for your model
 * (Mongoose will create the database collection for
 * the above model QuestionModel above), and the second
 * argument is the schema you want to use
 * in creating the model. */
const QuestionModel = mongoose.model('QuestionModel', QuestionModelSchema);

module.exports = QuestionModel;