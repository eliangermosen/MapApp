import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFormPage } from '../modal-form/modal-form.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public modalController: ModalController) { }

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

}
