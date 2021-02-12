import { Component, OnInit } from '@angular/core';
import { Chamado } from '../../interfaces/chamado';
import { CHAMADOS } from '../../interfaces/mock-chamados';
import { ConfigService } from '../../services/config.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  chamado: Chamado = {
    id: 1,
    name: 'Kadan'
  }

  chamados?: Chamado[];
  selectedChamado?: Chamado;

  constructor(private configService: ConfigService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getChamados();
  }

  onSelect(chamado: Chamado): void {
    this.selectedChamado = chamado;
    this.messageService.add(`ChamadosComponent: Selected chamado id=${chamado.id}`);
  }

  getChamados(): void {
    this.configService.getChamados()
        .subscribe(chamados => this.chamados = chamados);
  }

}
