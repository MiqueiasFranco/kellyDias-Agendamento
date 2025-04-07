import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA, forwardRef, Injectable } from '@angular/core';
import { DefaultValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormularioComponent } from '../formulario/formulario.component';
import { Servico } from '../../models/servico/servico.module';
import { ServicoService } from '../../services/servico.service';
import { ClientService } from '../../services/cliente.service';
@Component({
  selector: 'app-slide',
  standalone:true,
  imports: [CommonModule, FormsModule,RouterOutlet],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  
})

@Injectable({
  providedIn: 'root'
})

export class SlideComponent {
  

  servicos$ = new Observable<Servico[]>()
  mensagem: string = ''
  router:Router
  constructor(private servicoService: ServicoService, private clienteService: ClientService ,private formularioComponent: FormularioComponent, router: Router){
    this.obterServicosBD()
    this.router= router
  }
  obterServicosBD(){
    this.servicos$ = this.servicoService.obterServico()
  }

  

  cadastrarCliente(servico: string){
    this.clienteService.criarCliente({ nome: this.formularioComponent.nome, celular: this.formularioComponent.celular, horario:this.formularioComponent.horario, servico: servico})
    .subscribe(_=>{this.clienteService.obterClientes})
    this.mensagem = 'Cadastrado com sucesso!'
  }
}
