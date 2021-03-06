// Require Mongoose
var mongoose = require('mongoose');

const devs = require('./devs');

// Define a schema
var Schema = mongoose.Schema;

// Models are defined using the Schema interface
const SessionModelSchema = new Schema({
    name: { 
        type: String,
        required: true, 
        enum: devs.names
    },
    loginTime: { 
        type: Date,
        required: true
    },
    logoutTime: { 
        type: Date,
        required: false
    },
    postedQuestions: {type: [Schema.Types.ObjectId], required: false},
    answeredQuestions: {questions: {type: [Schema.Types.ObjectId]}, passed: Boolean, required: false},
    stack: [String],
});

// Compile model from schema
/**The first argument is the singular name of the collection
 * that will be created for your model
 * (Mongoose will create the database collection for
 * the above model AnswerModel above), and the second
 * argument is the schema you want to use
 * in creating the model. */
var SessionModel = mongoose.model('SessionModel', SessionModelSchema);

module.exports = SessionModel;