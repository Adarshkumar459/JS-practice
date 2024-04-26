// function multi(num){
//     for (let i = 1; i <=10; i++) {
//        console.log(num*i);
        
//     }
// }
// multi(prompt("enter a number"));
const fun=(n)=>{
    console.log(n**2);
};
fun(4);
let id= setInterval(()=>{
    console.log("hellow world");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);