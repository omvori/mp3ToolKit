import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class UsbreaderApi {

    private apiUrl = 'http://127.0.0.1:5000/api/devices'

    constructor(private http: HttpClient){}


    getDevices(): Observable <any>{
        return this.http.get(this.apiUrl)
    }
}
