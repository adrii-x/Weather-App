

const cityFORM = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')
const forcast = new Forcast();

const updateUI = (data) => {
    // const city_get = data.city_get;
    // const weather_get = data.weather_get;


    //    destructuring (above)
    const {city_get, weather_get} = data;

    // update details
    details.innerHTML=`
    <h5 class="my-3">${city_get.EnglishName}</h5>
                <div class="my-3">${weather_get.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather_get.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    
    `


    //update day and night and icon images



    
    let timeSrc = null;
    if (weather_get.IsDayTime) {
        timeSrc = 'day (2).jpg';
        time.setAttribute('src', timeSrc);
    }
    else{
        timeSrc = 'images.jpg';
        time.setAttribute('src', timeSrc);
    }
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }



    const iconSrc = `icons/${weather_get.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

}




cityFORM.addEventListener('submit', e=>{
   //prevent default vaction
   e.preventDefault();

   //get city value
   const city= cityFORM.city.value.trim();
   cityFORM.reset();

   //update the ui whth new city
   forcast.updateCIty(city)
   .then(data => updateUI(data))
   .catch(err => console.log(err));

   localStorage.setItem('city',city);



});

if(localStorage.getItem('city')){
  forcast.updateCIty(localStorage.getItem('city')).then(data => updateUI(data))
  .catch(err => {
      return console.log(err);
  });
}

// Ternary Operator
const result= false ? 'value1' : 'value2';
console.log(result);