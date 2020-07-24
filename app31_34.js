// task No. 01:

// var currenttime= new Date();
// document.write(currenttime);

// task No. 02:


// var c = new Date();

// var b = c.getMonth();
// var monthNames = ["january", "feburary", "march", "april", "may", "june", "july" , "august" , "september" , "october" , "november" , "december"];
// var c_month = monthNames[b];
// alert("Cuurent Month:" + " " + c_month)

// task No. 03:

//  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var a = new Date();
// var b = a.getDay();
// var c_day = dayNames[b];
// var aa = c_day.slice(0,3);
// alert("Today is :" + " " + aa);

// task No. 04:


// var a = new Date();
// var b = a.getDay();
// if (b==0 || b==6) {
//     alert("“It’s Fun day”");
// }
// else{
//     alert("“It’s a Working day”");

// }

// task No. 05:

// var c_date = new Date();
// var f = c_date.getMonth();
// if (f<16) {
//     alert("“First fifteen days of the month");
// } else {
//     alert("“Last fifteen days of the month");
// }

// task No. 06:

// var w = new Date();
// var e = w.getTime();
// var r = e/60;
// document.write( "Current Date:" + " " + w + "<br>")
// document.write( "Elapssed seconds since midnight, Jan. 1, 1970 = " + " " + e + "<br>")
// document.write( "Elapssed minutes since midnight, Jan. 1, 1970 = " + " " + r)

// task No. 07:

// var s = new Date();

// var d = s.getHours();
// r
// if (d<12) {
//     alet("It's AM")
// } else {
//     alert("It's PM")
// }

// task No. 08:

// var d = new Date("december 31, 2020");
// document.write(d);

// task No. 09:

// var d = new Date().getTime();
// var f = new Date("june 18 , 2015").getTime();
// var g = (d - f)/(1000*60*60*24)
// alert( "Days elaspsed since 1st ramdan 2015" + "=" + Math.floor(g));

// task No. 10:

// var d = new Date().getTime();
// var f = new Date("january 01 , 2020").getTime();
// var g = (d - f)/(1000)
// alert( "seconds elaspsed since start of 2015" + "=" + Math.floor(g));

// task No. 11:

// var d = new Date().getTime();
// var f = new Date("january 01 , 2020").getTime();
// var g = (d - f)/(1000)
// alert( "seconds elaspsed since start of 2015" + "=" + Math.floor(g));

// task No. 12:

// var d = new Date();
// document.write(d + "<br>")
// d.setHours(13);
// document.write( "01 hour ago"+ "==" + d);

// task No. 13:

// var age = prompt("enter your age");
// var c_d = new Date();
// var d = c_d.getFullYear()
// alert( "your age is" + ": " + age + " " + "and your birth year" + " :" +  (d-age));

// task No. 14:

// document.write("K ELECTRIC BILL" + "<br>")
// document.write("customer name = ali" + "<br>")

// var d = new Date();
// var k = d.getMonth()+1;
// document.write( "current month :" + k  + "<br>");
// var f = 50;
// document.write("units =" + f + "<br>")
// var g = 12
// document.write("cost per unit =" + " " + g + "<br>")
// var b = (f*g);
// document.write("net payable amount =" + " " + b + "<br>")
// var h = 36;
// document.write("surcharge =" + " " + h + "<br>")
// var j = (b+h);
// document.write("net payable amount after due date =" + " " + j + "<br>")


