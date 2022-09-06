const Todo = require('../models/Todo')
const User = require('../models/User')

module.exports = {
    getUser: async (req,res)=>{
        console.log(req.params.userName)
        try{
            const user = await User.findOne({userName_lower:req.params.userName.toLowerCase()})
            const todoItems = await Todo.find({userId:user._id})
            const itemsLeft = await Todo.countDocuments({userId:user._id,completed: false})
            res.render('user.ejs', {todos: todoItems, left: itemsLeft, user: user})
        }catch(err){
            console.log(err)
        }
    },
    
}    