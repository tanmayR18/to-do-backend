const Todo = require('../model/Todo')

exports.deleteTodo = async(req,res)=>{
    try{
        const { id } = req.params;
        await Todo.findByIdAndDelete({_id: id})
        
        res.status(200).json(
            {    
                success:true,
                message:`${id} deleted successfully`
            }
        )
    }
    catch(err){
        res.status(500).json(
            {    
                success:false,
                message:"SERVER ERROR",
                error:err.message
            }
        )
    }
}
