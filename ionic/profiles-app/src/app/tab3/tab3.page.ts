import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  lat: number = 0;
  lng: number = 0;
  map: HTMLElement;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(
    private geolocation: Geolocation
  ) {}

  ngOnInit() {
    this.getCurrentCoordinates();
  }

  showMap = (lat: number, lng: number): void => {
    const location = new google.maps.LatLng(lat, lng);
    const options = {
      center: location,
      zoom: 20,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(document.getElementById('map'), options);
  }

  getCurrentCoordinates = (): void => {
    this.geolocation.getCurrentPosition().then(response => {
      const { latitude, longitude } = response.coords;
      this.showMap(latitude, longitude);
    }, err => {
      alert(`Ocorreu um erro ao tentar pegar a localização atual: ${err}`);
      this.showMap(-17, 30);
    })
  }

  

}
