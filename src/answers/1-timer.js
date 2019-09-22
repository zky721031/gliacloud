// Please build a timer that display in `hh:mm:ss` format with “start”, “pause” and “stop” functions.
// Vanilla js (without third party package) only
// Note that there are predefined elements in `public/index.html`, you don't need to create them manually.

export default function (selector) {
  // let el = document.querySelector(selector)
  var startTime = 0
  var intervalId
  var isClick = true
  let playbtn = document.querySelector('.play')
  let pausebtn = document.querySelector('.pause')
  let stopbtn = document.querySelector('.stop')

  function updateCounter () {
    let currentTime = Date.now()
    let msecond = ('0' + (currentTime - startTime) % 1000).substr(-3, 3)
    let counter = Math.floor((currentTime - startTime) / 1000)
    let hour = ('0' + Math.floor(counter / 3600)).substr(-2, 2)
    let minute = ('0' + Math.floor((counter % 3600) / 60)).substr(-2, 2)
    let second = ('0' + Math.floor(counter % 60)).substr(-2, 2)
    document.querySelector('.second').textContent = `${second}.${msecond}`
    document.querySelector('.minute').textContent = `${minute}`
    document.querySelector('.hour').textContent = `${hour}`
  }

  playbtn.addEventListener('click', function () {
    if (isClick) {
      isClick = false
      startTime = Date.now()
      intervalId = setInterval(updateCounter, 15)
    }
  })

  pausebtn.addEventListener('click', function () {
    clearInterval(intervalId)
    isClick = true
  })

  stopbtn.addEventListener('click', function () {
    clearInterval(intervalId)
    document.querySelector('.second').textContent = '00'
    document.querySelector('.minute').textContent = '00'
    document.querySelector('.hour').textContent = '00'
    isClick = true
  })
}
