import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class SohailService {
   
    constructor(private httpsrv: HttpClient){}


    getDataFromOutsideURL(p: number): Observable<any> {
       return this.httpsrv.get('https://jsonplaceholder.typicode.com/todos/' + p)
    }

}


