//To Do: make a script to print something with the same function after a 4 sec delay and a 8 sec delay
const func = delay =>{
     console.log("hi" + delay + "\n")
 };

 //Working with timeout fucntion
 setTimeout(func, 4*1000, 4);
 setTimeout(func, 8*1000, 8);