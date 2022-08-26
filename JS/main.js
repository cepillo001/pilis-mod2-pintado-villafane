













/* API clima */
async function getIp() {
    try { 
        let responseClima = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-24.183241513504793&lon=-65.33131935975862&units=metric&appid=67823e81057e9209280832cf8105fa65");
        let locationResponse = await responseClima.json();
        console.log(locationResponse);
        console.log(locationResponse.weather[0].description);
        
        let title = document.getElementById("climaContentTitle");
        let icon = document.getElementById("climaContentIcon");
        let temp = document.getElementById("climaContentTemp");
        let description = document.getElementById("climaContentDescription");
        // innerHTML inyecta el codigo en la pagina
        title.innerHTML = locationResponse.name;
        // para renderizar el icon, usamos la url http://openweathermap.org/img/wn/10d@2x.png, donde "10d" es el icon que recibimos
        icon.innerHTML = "<img src='http://openweathermap.org/img/wn/" + locationResponse.weather[0].icon + "@2x.png'>";
        // con Math.roud redondeo el clima a entero.
        temp.innerHTML = Math.round(locationResponse.main.temp) + " °C";
        description.innerHTML = locationResponse.weather[0].description;

    } catch { 
      console.log("Algo paso, no se pudo resolver...");
    }
  }
  getIp();

  // lat: -24.183241513504793 
  // long: -65.33131935975862
  // apkey: 67823e81057e9209280832cf8105fa65