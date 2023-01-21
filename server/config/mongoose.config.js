const mongoose = require('mongoose')



mongoose.connect(`mongodb://127.0.0.1/movies`,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((res)=>{
    console.log('Successfully connnected to the DB!')
})
.catch((err)=>{
    console.log('something went wrong when connecting to the DB')
})
