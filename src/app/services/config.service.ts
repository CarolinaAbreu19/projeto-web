import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Chamado } from '../interfaces/chamado';
import { CHAMADOS } from '../interfaces/mock-chamados';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class ConfigService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET chamados from the server */
  getChamados(): Observable<Chamado[]> {
    const chamados = of(CHAMADOS);
    this.messageService.add('ConfigService: fetched chamados');
    return chamados;
  }

}
