//https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript


export function ConvertTime(unixTime: number) {
    let date = new Date(unixTime * 1000)
    let hours = date.getHours();

    let time = hours > 10 ? hours + ':00' : "0" + hours + ':00'
    return time;
}

export function ConvertExactTime(unixTime: number, Timezone: number) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date((unixTime + Timezone) * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = date.getMinutes();

    // Will display time in 10:30 format
    var formattedTime = minutes < 10 ? hours + ':' + "0" + minutes : hours + ':' + minutes;

    return formattedTime;
}

export function ToKPH(speedInMPS: number) {
    return speedInMPS * 3.6;            //converts meters per second to kilometers per hour
}

export const Images: any = {
    heavyrain: require('../Icons/Light/heavy-rain.png'),
    moderaterain: require('../Icons/Light/rain.png'),
    clearsky: require('../Icons/Light/sun.png'),
    lightrain: require('../Icons/Light/light-rain.png'),
    brokenclouds: require('../Icons/Light/cloud.png'),
    scatteredclouds: require('../Icons/Light/partly-cloudy-day.png'),
    overcastclouds: require('../Icons/Light/cloud.png'),
    fewclouds: require('../Icons/Light/partly-cloudy-day.png'),
}
//returns a image for the current weather description
export const ImageManager = (description: string) => {
    description = description.replace(/\s+/g, '');          //https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
    return Images[description]
}

export const BackgroundManager = (weather: string) => {
    //takes the weather description and returns a background colour scheme depending on 
    //Rain, Clouds or Sun

    const RainColours = ['#000000', '#023047', '#1d3557', '#457b9d'];
    const CloudyColours = ['#314cbf', '#6384a2', '#f3ebde']
    const SunnyColours = ['#745669', '#d0605e', '#fba55a']

    console.log('description: ' + weather)

    switch (weather) {
        case 'scattered clouds':
            return CloudyColours;
        case 'broken clouds':
            return CloudyColours;
        case 'overcast clouds':
            return CloudyColours;
        case 'heavy rain':
            return RainColours;
        case 'light rain':
            return RainColours;
        case 'moderate rain':
            return RainColours;
        default:
            return SunnyColours
    }
}
