import { Component, OnInit } from '@angular/core';
import { Marker } from './../models/marker';
import { ActivatedRoute } from '@angular/router';

declare let google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  nombre: string;
  latitud: number;
  longitud: number;
  //
  map = null;
  marker: Marker;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.params.nombre;
    this.latitud = parseFloat(this.activatedRoute.snapshot.params.latitud);
    this.longitud = parseFloat(this.activatedRoute.snapshot.params.longitud);
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create myPosition object
    const myPosition = {
      lat: this.latitud,
      lng: this.longitud
    };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myPosition,
      zoom: 14
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      // this.renderMarkers();
      mapEle.classList.add('show-map');
      const marker = {
        position: {
          lat: this.latitud,
          lng: this.longitud
        },
        nom: this.nombre
      };
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.nom
    });
  }

}
