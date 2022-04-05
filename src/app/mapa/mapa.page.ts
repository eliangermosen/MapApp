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
  // marker: Marker = {
  //   position: {
  //     lat: 19.80545985413853,
  //     lng: -70.69596328739321
  //   },
  //   nom: 'La Puntilla'
  // };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.loadMap();
    // this.marker = {
    //   position: {
    //     lat: this.activatedRoute.snapshot.params.latitud,
    //     lng: this.activatedRoute.snapshot.params.longitud,
    //   },
    //   nom: this.activatedRoute.snapshot.params.nombre
    // };
    //aqui
    this.nombre = this.activatedRoute.snapshot.params.nombre;
    this.latitud = parseFloat(this.activatedRoute.snapshot.params.latitud);
    this.longitud = parseFloat(this.activatedRoute.snapshot.params.longitud);
    //hasta aqui
    // this.marker.nom = this.activatedRoute.snapshot.paramMap.get('nombre');
    // this.marker.position.lat = this.activatedRoute.snapshot.paramMap.get('latitud');
    // this.marker.nom = this.activatedRoute.snapshot.paramMap.get('nombre');
    // console.log('nombre', this.marker.nom);
    // console.log('latitud', this.marker.position.lat);
    // console.log('longitud', this.marker.position.lng);
    // console.log('nombre', this.marker.nom);
    // console.log(typeof(this.nombre));
    // console.log(typeof(this.latitud));
    // console.log(typeof(this.longitud));
    // console.log('latitud', this.marker.position.lat);
    // console.log('longitud', this.marker.position.lng);
    // this.marker = {
    //     position: {
    //       lat: this.marker.position.lat,
    //       lng: this.marker.position.lng
    //     },
    //     nom: this.marker.nom
    //   };
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create myPosition object
    // const myPosition = {
    //   lat: 19.801154158829164,
    //   lng: -70.71492215457017
    // };
    const myPosition = {
      lat: this.latitud,
      lng: this.longitud
    };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myPosition,
      // center: this.marker.position,
      zoom: 14
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      // this.renderMarkers();
      mapEle.classList.add('show-map');
      // const marker = {
      //   position: {
      //     lat: 19.78841241246406,
      //     lng: -70.70999398099104
      //   },
      //   nom: 'Teleférico de Puerto Plata'
      // };
      //aqui
      const marker = {
        position: {
          lat: this.latitud,
          // lng: this.marker.position.lng
          lng: this.longitud
        },
        nom: this.nombre
      };
      //hasta aqui
      // const marker = {
      //   position: {
      //     lat: this.marker.position.lat,
      //     lng: this.marker.position.lng
      //   },
      //   nom: this.marker.nom
      // };
      // console.log(this.marker.nom);
      // console.log(this.marker.position.lat);
      // console.log(this.marker.position.lng);
      // console.log(typeof(this.marker.nom));
      // console.log(typeof(this.marker.position.lat));
      // console.log(typeof(this.marker.position.lng));
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
