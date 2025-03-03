const $ = document.querySelector.bind(document);

const year = $(".year");
const Days = $(".card__item--day");
const Hours = $(".card__item--hour");
const Minutes = $(".card__item--minute");
const Seconds = $(".card__item--second");
const audio = $('.audio')
const box = $('.box')
const header = $('.header')

function autoPlay() {
  function countdown() {
  const dateTime = new Date("Febuary 1, 2022 00:00:00").getTime();
  const nowTime = new Date().getTime();
  const gap = dateTime - nowTime;
  audio.play()
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const textDays = Math.floor(gap / day);
  const textHours = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minute);
  const textSeconds = Math.floor((gap % minute) / second);
  
  textDays < 10 
    ? (Days.innerHTML = `0${textDays}`) 
    : (Days.innerHTML = textDays);
  textHours < 10
    ? (Hours.innerHTML = `0${textHours}`)
    : (Hours.innerHTML = textHours);
  textMinutes < 10
    ? (Minutes.innerHTML = `0${textMinutes}`)
    : (Minutes.innerHTML = textMinutes);
  textSeconds < 10
    ? (Seconds.innerHTML = `0${textSeconds}`)
    : (Seconds.innerHTML = textSeconds);
  
    if(gap <= 1000) {
      year.innerHTML = 2022
      box.classList.add('hide')
      header.innerHTML = 'Happy New Year'
      clearInterval(timeID)
    }
  }
  
  const timeID = setInterval(countdown, 1000)
}

autoPlay()




