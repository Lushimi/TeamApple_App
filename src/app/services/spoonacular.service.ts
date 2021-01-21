import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
    expressBaseUrl: string = 'http://localhost:8888';

    constructor(private http: HttpClient) { }

    private sendRequestToExpress(endpoint: string): Promise<any> {
        return this.http.get(this.expressBaseUrl + endpoint).toPromise();
        //uses angular's HTTP service to make a get request to the endpoint and return the response as a Promise
    }

    getRecipes_FromIngredients(ingredients: Array<String>) {
    }

}
