const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mentordb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("DB conectada");
    } catch (e) {
        console.log(e);
        throw new Error("Error al conectar a la bd");
    }
};

module.exports = {
    dbConnection,
};