import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class OutsideURLService {

    data: any = {};

    constructor(private httpClient: HttpClient){}

    getDataFromOutsideURL() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/2');
        
    }

}
