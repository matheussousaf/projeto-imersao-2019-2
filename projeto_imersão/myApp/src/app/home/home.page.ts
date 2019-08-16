import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Environment, GoogleMap, GoogleMaps, GoogleMapOptions, GoogleMapsEvent, MyLocation, LatLng, GoogleMapsAnimation, Marker, Geocoder, ILatLng } from '@ionic-native/google-maps';
import { RouteConfigLoadEnd } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  //Aqui nós estamos importando o elemento "map", mapeado no home.page.html
  @ViewChild('map', {static: true}) mapElement: any;
  //Variável para a mensagem de loading
  private loading: any;

  //Variável para o mapa
  private map: GoogleMap;

  //Variável para o autocomplete
  public search: string = ''; 

  //Autocomplete do Google
  private autocomplete = new google.maps.places.AutocompleteService();

  //Resultados
  public searchResults = new Array<any>();
  
  //Marcador de origem
  private originMarker: Marker;

  //Destination
  public destination: any;

  private directionservice = new google.maps.DirectionsService();



  /**
   * 
   * @param platform O que é Platform?: é uma função para verificar em que plataforma o app está rodando.
   * @param loadingCtrl O que é LoadingController?: é um simples controller do angular para imprimir a mensagem de loading para o usuário.
   */

  constructor(private platform: Platform, private loadingCtrl: LoadingController, private ngZone: NgZone ) 
  {}

  //Ao iniciar o aplicativo
  async ngOnInit(){
    //Elemento para receber o mapa
    this.mapElement = this.mapElement.nativeElement;

    //Largura mínima do mapa (necessário para o funcionamento)
    this.mapElement.style.width = this.platform.width() + "px";

    //Largura máxima do mapa (necessário para o funcionamento)
    this.mapElement.style.height = this.platform.height() + "px";

    //Chamando a função de loading
    this.loadMap();

    try{
      await this.map.one(GoogleMapsEvent.MAP_READY);

      this.addOriginMarker();
    } catch(error){
      console.error(error);
    }

  }
  
  //Função ASSÍNCRONA (não funciona assim que o código é executado, e sim só depois que "alguma coisa" aconteceu) para carregar o mapa
  async loadMap(){
    
    //Display de loading
    this.loading = await this.loadingCtrl.create({message: "Por favor, aguarde..."});
    await this.loading.present();
    
    //Necessário para o browser  
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDX2XiZJYktmIJHTHsGvIi18W6xJYOxfu8',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDX2XiZJYktmIJHTHsGvIi18W6xJYOxfu8'
    });
    
    const mapOptions: GoogleMapOptions = {
      controls:{
        zoom: false
      }
    } 
    
    //Visualisando o mapa no elemento mapElement
    this.map = GoogleMaps.create(this.mapElement, mapOptions);

    //Adicionando o marcador vermelho no mapa
    try{
      await this.map.one(GoogleMapsEvent.MAP_READY);

      this.addOriginMarker();
    }catch(error){
      console.error(error);
    }
  }
  
  //Função para adicionar o marcador vermelho de "sua localização no mapa"
  //
  //Obs.: Também assíncrona, uma vez que depende da comunicação do servidor da Google com o aplicativo
  async addOriginMarker(){
    try{
      const myLocation: MyLocation = await this.map.getMyLocation();
      
      //Move a câmera até a posição - Latitude e longitudo
      await this.map.moveCamera({
        target: myLocation.latLng,
        zoom: 18
      });

      //Adicionando o marcador
      this.originMarker = this.map.addMarkerSync({
        title: 'Origem', 
        icon: "#000",//Mude para a cor que você mais preferir 
        animation: GoogleMapsAnimation.DROP, 
        position: myLocation.latLng
      });

    } catch(error){
      console.error(error);
    } finally{
      this.loading.dismiss();
    }
  }

  searchChanged(){
    if(!this.search.trim().length) return;

    this.autocomplete.getPlacePredictions({input: this.search}, predictions =>{
      this.ngZone.run(() => {
        this.searchResults = predictions;
      })
    });
  }
  
  //Calculando a rota
  async calcRoute(item: any){
    this.search = '';
    this.destination = item;

    //"Traduzindo a rota" de um endereço para latitude e longitude
    const info: any = await Geocoder.geocode({address: this.destination.description});

    let destinationMarker: Marker = this.map.addMarkerSync({
      title: this.destination.description,
      icon: "#000",
      animation: GoogleMapsAnimation.DROP,
      position: info[0].position
    });

    this.directionservice.route({
      origin: this.originMarker.getPosition(),
      destination: destinationMarker.getPosition(),
      travelMode: 'DRIVING'
    }, async results => {
      const points = new Array<ILatLng>();
      
      const routes = results.routes[0].overview_path;

      for(let i =0; i < routes.length ; i++){
        points[i] = {
          lat: routes[i].lat(),
          lng: routes[i].lng() 
        }
      }

      await this.map.addPolyline({
        points: points,
        color: "#000",
        width: 3
      });

      this.map.moveCamera({
        target: points
      })

    });
  }
}
