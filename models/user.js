const mongoose =require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI ||'mongodb+srv://userone:userone@task.u99jv.mongodb.net/biraptDB?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(()=> console.log("BiraptDB connected"))
  .catch((error)=>console.log(error));
const Schema = mongoose.Schema;

const UserSchema = new Schema({
            email: {                                              
            type:String,          
            unique: true         // since email is unique we will create it as unique.
},

            name: {
            type: String
},

            phone: {
            type: Number
},
            location: {
            type: String
}

});


const user = mongoose.model('users',UserSchema);

module.exports = user;