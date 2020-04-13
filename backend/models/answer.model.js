// Require Mongoose
var mongoose = require('mongoose');

const devs = require('./devs');

// Define a schema
var Schema = mongoose.Schema;

// Models are defined using the Schema interface
const AnswerModelSchema = new Schema({
  answeredBy: {type: String, required: true, enum: devs.names},
  answer: {type: String, required: true},
  time: Date,
});

// Compile model from schema
/**The first argument is the singular name of the collection
 * that will be created for your model
 * (Mongoose will create the database collection for
 * the above model AnswerModel above), and the second
 * argument is the schema you want to use
 * in creating the model. */
const AnswerModel = mongoose.model('AnswerModel', AnswerModelSchema );

module.exports = AnswerModel;