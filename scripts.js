//after the page loads, this function runs!?
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationCity = document.querySelector('.location-city');

    //the navigator exists in the browser
    //get the exact location of the user
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
        long = position.coords.longitude;
        lat = position.coords.latitude;
        locationID = 4167147;
        // get api call
        //use 'https://cors-anywhere.herokuapp.com/' to make it work
        const api = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=${locationID}&APPID=ce87cc05ff87da24b3c2bebc90c1499e&units=imperial`

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                // get some data to display
                const {temp} = data.main; 
                const tempDescription = data.weather[0].description;
                //set DOM elements from the API
                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = tempDescription;
                locationCity.textContent = data.name;
            })

        })
    }else{
        h1.textContent = "Please allow your navigator"
    }

    // function setIcons(icon, iconID){
    //     const skycons = new skycons({color: "white"}):
    //     const currentIcon = 
    // }
});