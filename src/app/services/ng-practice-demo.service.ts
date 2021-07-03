import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgPracticeDemoService {

  data: any;
  constructor(private httpclient: HttpClient) { }

  getDataFromCustomAPI() {
    this.httpclient.get('https://localhost:44355/WeatherForecast').subscribe(
      (output) => console.log(output),
      (err) => console.log(err)
    )
  }


}
