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

  // marker: Marker;
  nombre: string = null;
  // nombre = 'manolo';
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
      message: `Debe Ingresar ${valor}!`,
      duration: 2000,
      color: 'danger',
      icon: 'warning',
    });
    toast.present();
  }

  dismiss() {
    this.modalController.dismiss({});
  }

  buscar(){
    if(this.nombre === null){
      // console.log(this.nombre);
      this.presentToast('Un Nombre');
      // this.router.navigate(['/mapa']);
      // this.dismiss();
      // isOpen = false;
    }
    else if(this.latitud === null){
      // console.error('if');
      this.presentToast('La Latitud');
    }
    else if(this.longitud === null){
      // console.error('if');
      this.presentToast('La Longitud');
    }
    else{
      console.error('else');
      console.log(this.nombre);
      console.log(this.latitud);
      console.log(this.longitud);
      console.log('paso de valores');
      this.marker.position.lat = this.latitud;
      this.marker.position.lng = this.longitud;
      this.marker.nom = this.nombre;
      console.log(this.marker.nom);
      console.log(this.marker.position.lat);
      console.log(this.marker.position.lng);
      console.log(typeof(this.marker.nom));
      console.log(typeof(this.marker.position.lat));
      console.log(typeof(this.marker.position.lng));
      // this.router.navigate(['/tabla',this.multiplicado]);
      // this.multiplicado = undefined;
      // this.router.navigate(['/mapa']);
      this.router.navigate(['/mapa',this.nombre,this.latitud,this.longitud]);
      this.dismiss();
    }
  }

}
