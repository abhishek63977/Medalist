const mongoose = require('mongoose');

const url = 'mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mydatabasemern1200?retryWrites=true&w=majority';

mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;