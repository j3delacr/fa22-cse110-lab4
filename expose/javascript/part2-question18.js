function date(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(date, 1000);
