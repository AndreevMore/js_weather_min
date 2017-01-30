// var data;

function loadWeather() {
	
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();
	xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=706483&APPID=8b0fa85193ca7bd5828be09f3be5c7db', true);
	xhr.onload = function() {
		var data = JSON.parse(this.responseText);
		showWeather(data);
	}
	xhr.onerror = function() {
		alert( 'Ошибка ' + this.status );
	}
	xhr.send();

}

 function showWeather(data) {

var khCityElement = document.getElementById("khCity"),
	khCityTempElement = document.getElementById("khCityTemp"),
	khCityWindElement = document.getElementById("khCityWind"),
	khCityCloudElement = document.getElementById("khCityCloud"),
	khCityPicElement = document.getElementById("khCityPic");
	
	

	khCityElement.innerHTML = "Город " + '<strong>' + data.name + '</strong>';
	khCityTemp.innerHTML = "Температура " + '<strong>' + Math.round(data.main.temp- 273.15) + '</strong>' + "t";
	khCityWind.innerHTML = "Скорость ветра " + '<strong>' + data.wind.speed + '</strong>' + " км\ч";
	khCityCloud.innerHTML = "Облачность " + '<strong>' + data.clouds.all + '</strong>' + " %";
	khCityPicElement.innerHTML = '<img src=http://openweathermap.org/img/w/' + data.weather[0].icon + '.png>';

    }

  loadWeather();
 
