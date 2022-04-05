import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFormPage } from '../modal-form/modal-form.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  ubicaciones: any[] = [
    {
      nombre: 'La Puntilla',
      latitud: 19.805445180801385,
      longitud: -70.69598029664434
    },
    {
      nombre: 'Teleférico de Puerto Plata',
      latitud: 19.78841241246406,
      longitud: -70.70999398099104
    },
    {
      nombre: 'Playa Alicia, Sosúa',
      latitud: 19.765043705317552,
      longitud: -70.51886059482611
    },
  ];

  constructor(private router: Router,
              public modalController: ModalController) { }

  ngOnInit() {
  }
  clickBuscar(){
    this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalFormPage,
      initialBreakpoint: 0.4,
      breakpoints: [0, 0.4, 1]
    });
    return await modal.present();
  }

  buscar(u){
    this.router.navigate(['/mapa',u.nombre,u.latitud,u.longitud]);
  }

}
