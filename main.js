// var url = ""
var api = "d1edeeb9d8dab7f1ad1e76466d8815d6"
var icon = "http://openweathermap.org/img/wn/"
var icon2 = "@2x.png"

$(document).ready(function(){
    $(document).on('keypress', function(e){
        if (e.which == 13) {
    $("form").submit(function(event){
        event.preventDefault();
        var city = $(".city").val();
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`, function(res){
            var a = "";
            console.log(res);
            a += "<img src=" + icon + res.weather[0].icon + icon2 + ">"
            a += "<h3>" + "City: " + res.name + ", " + res.sys.country + "</h3>"
            a += "<h3>" + "Description: " + res.weather[0].main + "</h3>"
            a += "<h3>" + "Temperature: " + res.main.temp + "°F" + "</h3>"
            a += "<h3>" + "Wind Speed: " + res.wind.speed + " " + "mph" + "</h3>"
            $(".info").html(a);
            
        }, "json");
    })
}
})
})

