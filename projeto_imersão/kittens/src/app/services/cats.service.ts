import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

var baseUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=";

@Injectable({
  providedIn: 'root'
})


export class CatsService {

  constructor(private http: HttpClient) { }

  nome: string = '';

  /*
    Nós precisamos fazer a comunicação da nossa aplicação com a The Cat API, para isso usaremos nosso token, e uma requisição do tipo GET.
  */
  procurarGato(nome: string): Observable<any>{
    return this.http.get(baseUrl + nome).pipe(map((res: any) => {
      return res;
    }))
    
  }
}
