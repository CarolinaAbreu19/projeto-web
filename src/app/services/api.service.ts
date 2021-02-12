import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChamadoInterface } from '../interfaces/chamado.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBase: string = 'api/v1'; 
  chamadoEndpoint: string = 'chamado';

  constructor(private http: HttpClient) { }

  getUidChamado(): Observable<ChamadoInterface> {
    return this.http.get<ChamadoInterface>('${this.apiBase}/${this.chamadoEndpoint}/generate-uid');
  }

}
