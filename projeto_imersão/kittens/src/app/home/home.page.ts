import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  nome: string = '';

  constructor(private catSrvc: CatsService, private router: Router) {}

  ionViewDidLeave(){
    this.nome = '';
  }

  async procurarGato(nome: string){
    this.catSrvc.nome = this.nome;
    this.router.navigateByUrl('/cat-info');
  }
}
