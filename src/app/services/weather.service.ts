import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions: {
  headers: any;
  observe: any;
  params: any;
  responseType: any;
} = {
  headers: new HttpHeaders({
    Authorization: 'Client-ID ' + "awRYAiTbcFockrFUJpK3qr77Wl83ztlbs0PmW8XkoYo",
    'Content-Type': 'application/json',
  }),
  observe: 'response',
  params: 'HttpParams',
  responseType: 'json',
};
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
 constructor(private http: HttpClient) { }
 api:any='dabc2b57d81c4493c08ab63bb4d9e326';


  LoadForecastWeather(city: any): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.api}&units=metric` );
  }


  getDatafor7days(lat:any, lon:any){
    return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.api}&units=metric` );
  }

  getImage(data:any){
    return this.http.get(`https://api.unsplash.com/search/photos?query=${data}`,httpOptions );
  }
}
