const { Schema, model } = require("mongoose");

const MessageUseSchema = Schema({
    usuario: {
        type: String,
        required: true,
    },
    contenido: {
        type: String,
        required: true
    },
    puerto: {
        type: String,
        required: true
    }
});

// MessageUseSchema.method("toJSON", function () {
//     const { _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// });

module.exports = model("Message_use", MessageUseSchema);