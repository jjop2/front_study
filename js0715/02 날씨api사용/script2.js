const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};

const countrySelect = document.querySelector('#countrySelect');
const weatherName = document.querySelector('.weatherName');
const weatherIcon = document.querySelector('.weatherIcon');
const weatherTemp = document.querySelector('.weatherTemp');
const weatherDesc = document.querySelector('.weatherDesc');


function showWeather(country) {
  const lat = countryCoordinates[country]['latitude'];
  const lon = countryCoordinates[country]['longitude'];
  
  const APIKEY = 'e638c68039a331b999f735bc8bd48b7b';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;
  
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      // 확인용
      // console.log(data);
      
      weatherName.innerHTML = data.name;
      weatherTemp.innerHTML = data.main.temp;
      weatherDesc.innerHTML = data.weather[0].description;
      
      const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherIcon.setAttribute('src', iconURL);

    });
}


countrySelect.addEventListener('change', (e) => {
  showWeather(e.target.value); 
});

showWeather('한국');