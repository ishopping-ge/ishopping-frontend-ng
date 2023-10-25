import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class PostsSsrService {
    #apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {
    }

    fetchDataFromApi(): Observable<any> {
        return this.http.get(this.#apiUrl);
    }
}
