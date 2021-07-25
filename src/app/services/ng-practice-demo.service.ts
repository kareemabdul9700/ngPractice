import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDetails } from '../itemDetails.model';

@Injectable({
  providedIn: 'root'
})
export class NgPracticeDemoService {

  data: any;
  constructor(private httpclient: HttpClient) { }

  getDataFromCustomAPI(tName: string) {
    this.httpclient.get('https://localhost:44378/api/Test?name=' + tName ).subscribe(
      (output) => console.log(output),
      (err) => console.log(err)
    )
  }


  saveItemDetails(itmDtls: ItemDetails){

    const headers = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };
   // const headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'application/json'};
    const body=JSON.stringify(itmDtls);

    this.httpclient.post<string>('https://localhost:44378/api/home', body, headers).subscribe(
      (output) => console.log(output),
      (err) => console.log(err)
    );
  }
}
