const mongoose = require('mongoose');

const DB = 'mongodb+srv://projectivity:ajay%40projectivity@cluster0.a5ltmwd.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection ${err}`));