const express=require('express')

const app=express();
//task 2
function sumofArray(arr){
    return arr.reduce((total,value)=>total+value,0);

}


//task 1
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})