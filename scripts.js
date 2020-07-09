//after the page loads, this function runs!?
window.addEventListener('load', ()=> {
    let long;
    let lat;

    //the navigator exists in the browser
    //get the exact location of the user
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
        long = position.coords.longitude;
        lat = position.coords.latitude;

        // get api call
        const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ce87cc05ff87da24b3c2bebc90c1499e/${lat},${long}`

        fetch()

        })
    }else{
        h1.textContent = "Please allow your navigator"
    }
});