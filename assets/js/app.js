
var days1 = document.getElementById("day");
var hours1 = document.getElementById("hour");
var minutes1 = document.getElementById("minute"); 
var seconds1 = document.getElementById("second"); 

function timer(){
  var now = new Date().getTime();
  var deadline = new Date(2022,9,3).getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);

    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);


  function checkTime(i) {
    if (i < 10) {
      i = "0" + i ; //add zero in front of numbers < 10
    }  
    return i;
  }
  checkTime();

 days1.innerHTML = days;
 hours1.innerHTML = hours;
 minutes1.innerHTML = minutes;
 seconds1.innerHTML = seconds; 

 setTimeout(timer, 1000);
}
timer();

/* -------------------------------------------------------------------------------------------------------------------- */

var daysId1 = document.getElementById("dayId1");
var hoursId1 = document.getElementById("hourId1");
var minutesId1 = document.getElementById("minuteId1"); 
var secondsId1 = document.getElementById("secondId1"); 

function timer1(){
  var now1 = new Date().getTime();
  var deadline1 = new Date(2022,7,15).getTime();
  var t1 = deadline1 - now1;
  var days1 = Math.floor(t1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((t1%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes1 = Math.floor((t1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((t1 % (1000 * 60)) / 1000);

    days1 = checkTime1(days1);
    hours1 = checkTime1(hours1);
    minutes1 = checkTime1(minutes1);
    seconds1 = checkTime1(seconds1);


  function checkTime1(i) {
    if (i < 10) {
      i = "0" + i ; //add zero in front of numbers < 10
    }  
    return i;
  }
  checkTime1();

  daysId1.innerHTML = days1;
  hoursId1.innerHTML = hours1;
  minutesId1.innerHTML = minutes1;
  secondsId1.innerHTML = seconds1; 

 setTimeout(timer1, 1000);
}
timer1();

/* -------------------------------------------------------------------------------------------------------------------- */

var daysId2 = document.getElementById("dayId2");
var hoursId2 = document.getElementById("hourId2");
var minutesId2 = document.getElementById("minuteId2"); 
var secondsId2 = document.getElementById("secondId2"); 

function timer2(){
  var now2 = new Date().getTime();
  var deadline2 = new Date(2023,3,3).getTime();
  var t2 = deadline2 - now2;
  var days2 = Math.floor(t2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((t2%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes2 = Math.floor((t2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((t2 % (1000 * 60)) / 1000);

    days2 = checkTime2(days2);
    hours2 = checkTime2(hours2);
    minutes2 = checkTime2(minutes2);
    seconds2= checkTime2(seconds2);


  function checkTime2(i) {
    if (i < 10) {
      i = "0" + i ; //add zero in front of numbers < 10
    }  
    return i;
  }
  checkTime2();

  daysId2.innerHTML = days2;
  hoursId2.innerHTML = hours2;
  minutesId2.innerHTML = minutes2;
  secondsId2.innerHTML = seconds2; 

 setTimeout(timer2, 1000);
}
timer2();



