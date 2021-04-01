const mongoose = require('mongoose');

const dbCOnnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true // let us find and modify a document
        });

        console.log('Database connected')
    } catch (err) {
        console.log(err);
        throw new Error('Error starting database');
    }
};

module.exports = {
    dbCOnnection
}