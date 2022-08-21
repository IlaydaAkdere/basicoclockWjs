let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
 ];


let inputName=prompt ("Lütfen adınızı giriniz: ")
let Name=document.querySelector ("#myName")
Name.innerHTML=`${inputName}`;


function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = days[today.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + "--" + d;
    setTimeout(showTime, 1000);
    
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  showTime()
