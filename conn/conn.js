const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/todolists', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb connected successfully'))
    .catch((err) => console.error('Server error', err))
}

module.exports = Conn;