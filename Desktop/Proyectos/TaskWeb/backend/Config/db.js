const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
   useCreateIndex: true,
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useFindAndModify: false   
})

.then(() => console.log("Database Conected"))
.catch(error => console.log(error))