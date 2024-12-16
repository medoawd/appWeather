// varbiers



let todalocation = document.getElementById("toda-location")

let DegreeTemper = document.getElementById("Degree-Temper")

let imgWeather = document.querySelector("#imgWeather")
let texWeather = document.querySelector("#texWeather")
let huMan = document.querySelector("#huMan")
let wind = document.querySelector("#wind")
let windDirection = document.querySelector("#windDirection")
let NextMaxTemp = document.querySelectorAll(".NextMaxTemp")
let NextMinTemp = document.querySelectorAll(".NextMinTemp")
let icontow = document.querySelectorAll(".icontow")
let Weathertype = document.querySelectorAll(".Weathertype")
let firstDay = document.querySelector("#first-day")
let dataNumfistDay = document.querySelector("#data-NumfistDay")
let dataMunsfistDay =  document.querySelector("#data-MunsfistDay")
let search =  document.querySelector("#search")



let nextDay = document.querySelectorAll(".nextDay")












async function getWeatherData(cityName) {
    let weatherRespons = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=efee43a4d17e4f49a5e153453241106&q=${cityName}&days=3`)

    let WeatherData = await weatherRespons.json()


    return WeatherData


}








// // toDay data

function disPlayToData(Data) {


    let DateDay = new Date()
    firstDay.innerHTML = DateDay.toLocaleDateString("en-us", { weekday: "long" })
    dataMunsfistDay.innerHTML = DateDay.toLocaleDateString("en-us", { month: "long" })
    dataNumfistDay.innerHTML = DateDay.getDate()




    todalocation.innerHTML = Data.location.name
    DegreeTemper.innerHTML = Data.current.temp_c
    texWeather.innerHTML = Data.current.condition.text
    huMan.innerHTML = Data.current.humidity + "%"
    wind.innerHTML = Data.current.wind_kph + "km/h"
    windDirection.innerHTML = Data.current.wind_dir




    imgWeather.setAttribute("src", Data.current.condition.icon)

}


function dataNextDay(Data) {
    let forecastData = Data.forecast.forecastday



    for (let i = 0; i < 2; i++) {
      let nextDateDay = new Date(forecastData[i+1].date).toLocaleDateString("en-us", {weekday: "long"} )
      nextDay[i].innerHTML = nextDateDay
    

        NextMaxTemp[i].innerHTML = forecastData[i + 1].day.maxtemp_c
        NextMinTemp[i].innerHTML = forecastData[i + 1].day.mintemp_c
        icontow[i].setAttribute("src", forecastData[i + 1].day.condition.icon)
        Weathertype[i].innerHTML = forecastData[i + 1].day.condition.text


    }



}
search.addEventListener("input", function() {
    startApp(search.value)

})










async function startApp(city = "cairo") {

    let wearherData = await getWeatherData(city)

    if (!wearherData.error) {
        disPlayToData(wearherData)
    dataNextDay(wearherData)

    }
    


}

startApp()

























