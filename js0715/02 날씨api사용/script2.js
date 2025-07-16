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
const weatherFeel = document.querySelector('.weatherFeel');
const weatherRain = document.querySelector('.weatherRain');


function showWeather(country) {
  // 난 이렇게 했고
  // const lat = countryCoordinates[country]['latitude'];
  // const lon = countryCoordinates[country]['longitude'];

  // 쌤은 이렇게 하심. 키값 꺼내는 방법이 2개 있다는 걸 있지 말자~
  const lat = countryCoordinates[country].latitude;
  const lon = countryCoordinates[country].longitude;
  
  const APIKEY = 'e638c68039a331b999f735bc8bd48b7b';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;
  
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      // 확인용
      // console.log(data);
      
      weatherName.innerHTML = data.name;
      weatherTemp.innerHTML = `${data.main.temp}°`;
      weatherDesc.innerHTML = data.weather[0].description;
      weatherFeel.innerHTML = `체감온도 ${data.main.feels_like}°`;
      
      const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherIcon.setAttribute('src', iconURL);

      const isRain = data.rain;
      if(isRain!=undefined)
        weatherRain.innerHTML = `강수량 : ${data.rain['1h']}`;
      else
        weatherRain.innerHTML = '강수량 : -';

    })
    .catch((e) => {
      alert('날씨 정보 가져오기 오류');
    })
}


countrySelect.addEventListener('change', (e) => {
  showWeather(e.target.value); 
});

showWeather('한국');