//task 3
const fs=require('fs/promises');


async function count(){
    try{
        const data=await fs.readFile('\data.txt',{encoding:'utf-8'});
        console.log(data.trim().split(/\s+/).length);
    }catch(err){
        console.log(err);
    }
}

count()