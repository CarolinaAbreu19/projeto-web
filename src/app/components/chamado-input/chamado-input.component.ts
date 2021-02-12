import { Component, OnInit } from '@angular/core';
import { ChamadoInterface } from 'src/app/interfaces/chamado.interface';
import { ChamadoModel } from 'src/app/models/chamado.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-chamado-input',
  templateUrl: './chamado-input.component.html',
  styleUrls: ['./chamado-input.component.css']
})
export class ChamadoInputComponent implements OnInit {

  chamado!: ChamadoInterface;
  inputName: string = "";
  uid: string = "";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
  }

  onChangeName(event: any): void {
    this.inputName = event.target.value;
  } 

  salvar(): void {
    this.apiService.getUidChamado().subscribe((data) => this.uid = data.uid);
    this.chamado = new ChamadoModel({name:this.inputName, uid: this.uid});
    this.inputName = '';
  }

}
