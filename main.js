let deadline = new Date("December 31, 2023 23:59:59").getTime();
console.log(deadline);
let x = setInterval(function() {
  
const now = new Date().getTime();
const t = deadline - now;
const days = Math.floor(t / (1000 * 60 * 60 * 24));
const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((t % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days ;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML = seconds; 

if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME UP";
    document.getElementById("day").innerHTML ='0';
    document.getElementById("hour").innerHTML ='0';
    document.getElementById("minute").innerHTML ='0' ; 
    document.getElementById("second").innerHTML = '0'; }
}, 1000);
