const Todo = require('../models/Todo')
const User = require('../models/User')

module.exports = {
    getUser: async (req,res)=>{
        console.log(req.params.id)
        try{
            const user = await User.findOne({_id:req.params.id})
            const todoItems = await Todo.find({userId:req.params.id})
            const itemsLeft = await Todo.countDocuments({userId:req.params.id,completed: false})
            res.render('user.ejs', {todos: todoItems, left: itemsLeft, user: user})
        }catch(err){
            console.log(err)
        }
    },
    
}    