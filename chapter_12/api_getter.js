class Forcast{
    constructor(){
        this.key='bGbpxD17wZ5B0B1vpJHRfjENah36Z7UP'
        this.base1='http://dataservice.accuweather.com/currentconditions/v1/'
        this.base2='http://dataservice.accuweather.com/locations/v1/cities/search'
    }


   

    async getcity(city){
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.base2 + query);
        
        const data = await response.json();
        return data[0];
    }


    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.base1 + query);
        const data = await response.json();
        return data[0];
    }

    async updateCIty(city){
        const city_get = await this.getcity(city);
   
        const weather_get = await this.getWeather(city_get.Key);
        
        //object shorthand notation 
        return{city_get , weather_get};
     };

};
    





