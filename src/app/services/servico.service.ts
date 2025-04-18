import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { Servico } from "../models/servico/servico.module";

@Injectable({
    providedIn: 'root'
})

export class ServicoService {

    private url = `https://kellydiasfullstack.onrender.com/servicos`
    constructor(private httpClient: HttpClient){

    }
    obterServico(){
        return this.httpClient.get<Servico[]>(this.url)
    }
    
}