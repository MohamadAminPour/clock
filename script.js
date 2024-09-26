let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')

setInterval(function () {


   
   hour.innerHTML = new Date().getHours()
   minute.innerHTML = new Date().getMinutes()
   second.innerHTML = new Date().getSeconds()

   if (hour.innerHTML < 10) {
      hour.innerHTML = '0' + hour.innerHTML
   }
   if (minute.innerHTML < 10) {
      minute.innerHTML = '0' + minute.innerHTML
   }
   if (second.innerHTML < 10) {
      second.innerHTML = '0' + second.innerHTML
   }


}, 1000)