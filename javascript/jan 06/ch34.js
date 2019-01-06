var pastDate = new Date('Jan 01, 1999');

pastDate.setFullYear(2000);

var newDate = new Date();
newDate.setTime(pastDate.getTime());
console.log(newDate.toString());