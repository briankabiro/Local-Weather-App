/*http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
/data/2.5/weather?q=London
walter =a3f34a5c7889738a9f8a9be43162c15f
Default=543d48a9fcbbc9faa580899563312853 
	$.get(url,function(){
		$("#weather-card").append(icon depending on weather and the temperature)
	})
check if geolocation is possible, if possible get lat and long
append the coordinates to api call and return data

add visibility check and weather icon 
*/
window.onload = function(){
	console.log('Dom is ready');
	navigator.geolocation.getCurrentPosition(function(position) {
  		var longitude = position.coords.longitude;
		var latitude = 	position.coords.latitude;
		var url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=543d48a9fcbbc9faa580899563312853";
		getWeatherData(url)
	});
	function getWeatherData(url){
		$.get(url, function(data){
			//data.sys.country, data.name - Nairobi, data.main.temp = data.main.temp - 273 degree symbo = &#8451
			var temperature  = Math.floor(data.main.temp - 273);
			$("#area").text(data.name + ", " + data.sys.country);
			$("#temperature").html(temperature + ' &#8451;');
		})
	}

}
