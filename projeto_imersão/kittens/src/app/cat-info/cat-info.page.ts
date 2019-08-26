import { Component} from '@angular/core';
import { CatsService } from '../services/cats.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cat-info',
  templateUrl: './cat-info.page.html',
  styleUrls: ['./cat-info.page.scss'],
})
export class CatInfoPage{

  constructor(private catsSrvc: CatsService, private router: Router, public alertController: AlertController) {
  }

  res: any = []
  results: any = {}

  carregou:boolean = false;

  ionViewWillEnter(){
    this.procurandoGato();
  }

  async procurandoGato(){
    try{
      await this.catsSrvc.procurarGato(this.catsSrvc.nome).subscribe(data => {
        this.res = data;

        if((Object.keys(this.res).length <= 0) ||this.catsSrvc.nome == ""){
        this.carregou = false;
        this.presentAlert();
        //this.router.navigateByUrl('/home');
        }
        else{
          this.carregou = true;
        }
      })
    }
    catch(error){
      console.log(error);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Não foi possível encontrar essa raça!',
      buttons: ['OK']
    });
  
    await alert.present();
  }
}
