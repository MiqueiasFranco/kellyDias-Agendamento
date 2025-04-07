import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from '../../models/clientes/clientes.module';
import { Servico } from '../../models/servico/servico.module';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [SlideComponent, CommonModule,FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class FormularioComponent {
  cliente$ = new Observable<Client>()
  servico$ = new Observable<Servico>()
  nome = ''
  celular = ''
  horario = ''
  constructor(){
    
  }

  pegarDadosFormulario(){
    const dados = [this.nome, this.celular, this.horario]
    return dados
  }
  
}
