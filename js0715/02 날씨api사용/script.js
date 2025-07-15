  const weatherName = document.querySelector('.weatherName');
  const weatherTemp = document.querySelector('.weatherTemp');
  const weatherDesc = document.querySelector('.weatherDesc');
  const weatherIcon = document.querySelector('.weatherIcon');

function connectGeo(position) {
  //       경로는 콘솔로 확인해서 잘 가져오기
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log(`위도:${lat} 경도:${lon}`);

  const APIKEY = 'e638c68039a331b999f735bc8bd48b7b';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;

  
  
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const name = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;
      
      weatherName.innerHTML = name;
      weatherTemp.innerHTML = temp;
      weatherDesc.innerHTML = desc;
      
      const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      weatherIcon.setAttribute('src', iconURL);

    })
}

function errorGeo() {
  alert('위치 정보 연결 실패');
}

//  위치정보 허용 여부 묻기                   허용 시      거부 시
navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);
