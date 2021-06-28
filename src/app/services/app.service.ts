import { Injectable } from "@angular/core";


// @Injectable({ //Singleton Service
//     providedIn: 'root',
// })
export class LoginService {

    private name: string = 'i am from service';

    constructor() {}

    public getNameFromService() {
        return this.name;
    }
}