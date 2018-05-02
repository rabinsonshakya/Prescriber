import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/observable'
import 'rxjs/Rx'
import { IPrescriber } from './IPrescriber';


@Injectable()
export class PrescriberService {
    _url = 'http://localhost:8090';
    constructor(private _http: Http) {

    }

    prescriberlist: IPrescriber[];

    getPrescriber(): Observable<IPrescriber[]> {
        return this._http.get(this._url + '/prescriber?name=' + (document.getElementById("searchBar") as HTMLInputElement).value + '&dea=' + (document.getElementById("searchBarNumber") as HTMLInputElement).value)
            .map((response: Response) => <IPrescriber[]>response.json());


    }

    getPrescriberById(id): Observable<IPrescriber> {
        return this._http.get(this._url + '/prescriber/' + id)
            .map((response: Response) => <IPrescriber>response.json());
    
    }

    InsertPrescriber(prescriber: IPrescriber): Observable<string> {
        debugger;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this._http.post(this._url + '/prescriber', prescriber, new RequestOptions)
            .map((response: Response) => <string>response.json());
    }

    UpdatePrescriber(prescriber: IPrescriber): Observable<string> {
        debugger;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this._http.put(this._url + '/prescriber', prescriber, new RequestOptions)
            .map((response: Response) => <string>response.json());
    }

    UpdatePrescriberStatus(prescriber: IPrescriber): Observable<string> {
        debugger;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this._http.put(this._url + '/prescriber/s', prescriber, new RequestOptions)
            .map((response: Response) => <string>response.json());
    }


    DeletePrescriber(id): Observable<string> {

        // return newFunction(id);
        return this._http.delete(this._url + '/prescriber/' + id)
            .map((response: Response) => <string>response.json()[0]);
    }

}

