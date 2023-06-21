const date=new Date()

const hour=date.getHours()


const logger=(req,res,next)=>{
    if (hour > 18) {
       res.json('arja3 demain') 
    }
    else{
        next()
    }
    
}
module.exports=logger