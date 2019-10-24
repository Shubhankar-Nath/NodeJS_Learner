//print something for only 5 intervals
let counter =0;
const intervalid = setInterval(()=>{
    console.log("tada")
    counter+=1;

    if(counter==5){
        console.log("Done");
        clearInterval(intervalid)
    }
}, 1000)