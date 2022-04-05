import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Marker } from '../models/marker';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.page.html',
  styleUrls: ['./modal-form.page.scss'],
})
export class ModalFormPage implements OnInit {

  nombre: string = null;
  latitud: number = null;
  longitud: number = null;

  marker: Marker = {
    position: {
      lat: this.latitud,
      lng: this.longitud
    },
    nom: this.nombre
  };

  constructor(private router: Router,
              private toastCtrl: ToastController,
              public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentToast(valor) {
    const toast = await this.toastCtrl.create({
      message: `¡Debe Ingresar ${valor}!`,
      duration: 2000,
      color: 'danger',
      icon: 'warning',
    });
    toast.present();
  }

  async toastOutRange(valor) {
    const toast = await this.toastCtrl.create({
      message: `${valor}`,
      duration: 3000,
      color: 'warning',
      icon: 'information-circle',
    });
    toast.present();
  }

  dismiss() {
    this.modalController.dismiss({});
  }

  buscar(){
    if(this.nombre === null){
      this.presentToast('Un Nombre');
    }
    else if(this.latitud === null){
      this.presentToast('La Latitud');
    }
    else if(this.longitud === null){
      this.presentToast('La Longitud');
    }
    else{
      if(this.latitud < -90 || this.latitud > 90){
        this.toastOutRange('¡Latitud Debe Ser Entre -90 y 90!');
      }
      else if(this.longitud < -180 || this.longitud > 180){
        this.toastOutRange('¡Longitud Debe Ser Entre -180 y 180!');
      }
      else{
        this.router.navigate(['/mapa',this.nombre,this.latitud,this.longitud]);
        this.dismiss();
      }
    }
  }

}
