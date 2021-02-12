import { Component, OnInit, Input } from '@angular/core';
import { Chamado } from '../../interfaces/chamado';

@Component({
  selector: 'app-chamado-detail',
  templateUrl: './chamado-detail.component.html',
  styleUrls: ['./chamado-detail.component.css']
})
export class ChamadoDetailComponent implements OnInit {

  @Input() chamado?: Chamado;

  constructor() { }

  ngOnInit(): void {
  }

}
