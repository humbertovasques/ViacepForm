import { Component } from '@angular/core';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CepAngular';

  constructor(private cepService : CepServiceService){}

  consultaCep(valor:any, form:any){
    this.cepService.buscar(valor).subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados:any, form:any){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf
    })
  }

}
