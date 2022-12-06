import { Component } from '@angular/core';
import {WeatherService} from '../services/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})



export class WeatherComponent {
  Weather:any;
  WeatherD:any;
 j:any;
  currentDate = new Date();
  days:any;
  dayName:any;
  cityname:any
  Phone:any;
  image: any;
  constructor(private weatherService:WeatherService){
    this.getWeather()
   this. days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
this.dayName = this.days[this.currentDate.getDay()];
this.j=this.currentDate.getDay();
  }
  
  
  ngOninit(){
this.getWeather()

  }

  getWeather(){
    this.weatherService.LoadForecastWeather(this.cityname).subscribe( res =>{
    this.Weather=res
    let lat =this. Weather.coord.lat;
    let lon =this. Weather.coord.lon;
    this.getDatafor7days(lat, lon);
    console.log(this.Weather)
    } )
  }

  getDatafor7days(lat:any, lon:any){
    this.weatherService.getDatafor7days(lat,lon).subscribe(res =>{
     this.WeatherD=res
     this.getImage(this.WeatherD.current.weather[0].description)
    })
  }
  getDay(day:any,i:any){
    this.j=this.j+1;
    if(this.j==7){
     this. j=0
    }
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
   
    return days[this.j]
  }

  getImage(data:any){
    this.weatherService.getImage(data).subscribe(x=>{
      this.Phone=x
      console.log(this.Phone.body)
      this.image=this.Phone.body.results[1].urls.regular
    
    })
  }
}
