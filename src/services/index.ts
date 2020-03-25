const cors = "https://cors-anywhere.herokuapp.com/";
const url = `${cors}https://www.metaweather.com/api/`;

export const getWeather = async id => {
    const data = await fetch(`${url}location/${id}/`);
    const json = await data.json();

    return json;
};

export const getWeatherByCityId = async value => {
    const data = await fetch(`${url}location/search/?query=${value}`);
    const json = await data.json();

    if (json.length && json.length == 1) {
        return getWeather(json[0].woeid);
    }

    return false;
};
