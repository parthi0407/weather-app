const add =(a,b,cb) =>{
    if(typeof(a)!='number' || typeof(b)!='number'){
        cb("Value should be a number",undefined);
        return;
    }
    setTimeout(()=>{
        cb(undefined,a+b);
    },3000)
}
const sub =(a,b,cb)=>{
    if(typeof(a)!='number' || typeof(b)!='number'){
        cb("Value should be a number",undefined);
        return;
    }
    setTimeout(()=>{
        cb(undefined,a-b);
    },3000)
}
add(3,5,function(err,result){
    if(err){
        console.log("Error Add",err);
        return;
    }
    console.log("Add",result);
    sub(result,"Abcd",function(err,result1){
        if(err){
            console.log("Error Sub",err);
            return;
        }
        console.log("Sub",result1);
    })
})