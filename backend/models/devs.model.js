// Require Mongoose
var mongoose = require('mongoose');

const devs = require('./devs');

// Define a schema
var Schema = mongoose.Schema;

// Models are defined using the Schema interface
const DevModelSchema = new Schema({
    name: { 
        type: String,
        required: true, 
        enum: devs.names
    },
    password: {type: String, required: true},
    stack: [String],
});

// Compile model from schema
/**The first argument is the singular name of the collection
 * that will be created for your model
 * (Mongoose will create the database collection for
 * the above model AnswerModel above), and the second
 * argument is the schema you want to use
 * in creating the model. */
var DevModel = mongoose.model('DevModel', DevModelSchema);

module.exports = DevModel;