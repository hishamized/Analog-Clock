setInterval(() => {
   date = new Date();
   htime = date.getHours();
   mtime = date.getMinutes();
   stime = date.getSeconds();
   hrotation = 30*htime + mtime/2;
   mrotation = 6*mtime;
   srotation = 6*stime;

   hour.style.webkitTransform = `rotate(${hrotation}deg)`;
   minute.style.webkitTransform = `rotate(${mrotation}deg)`;
   second.style.webkitTransform = `rotate(${srotation}deg)`;
   console.log("Check")
}, 1000);