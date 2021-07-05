const request = require("request");
const forecast = (data, cb) =>{
    request({
        url : `http://api.weatherstack.com/current?access_key=088ed63ea3366468dcdfd68cb884a687&query=${data[0]},${data[1]}`,
        json : true
    }, function(error,response){
        if(!response.body.current.weather_descriptions.length){
            cb("Enter the valid city name",undefined);
            return;
        }
        cb(undefined,response.body.current.weather_descriptions[0]);
    })
}
module.exports = forecast;