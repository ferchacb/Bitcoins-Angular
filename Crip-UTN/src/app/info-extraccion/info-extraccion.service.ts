import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
  export class InfoExtraccionService {
      
    constructor(private httpClient: Http) { 
        this.getinfobloque();
        this.getinfoprecio();
        this.getinfotama();
        this.getinfotrans();
        this.getinfoEstadistico();
        this.getinfoGrafico();
      }
      
      public getinfobloque(){
        return this.httpClient.get("https://api.blockchain.info/charts/avg-block-size?timespan=5weeks&rollingAverage=8hours&format=json").map(res => res.json().values);
      }
      public getinfoprecio(){
        return this.httpClient.get("https://api.blockchain.info/charts/market-price?timespan=5weeks&rollingAverage=8hours&format=json").map(res => res.json().values);
      }
      public getinfotrans(){
        return this.httpClient.get("https://api.blockchain.info/charts/n-transactions?timespan=5weeks&rollingAverage=8hours&format=json").map(res => res.json().values);
      }
      public getinfotama(){
        return this.httpClient.get("https://api.blockchain.info/charts/mempool-size?timespan=5weeks&rollingAverage=8hours&format=json").map(res => res.json().values);
      }
      public getinfoEstadistico(){
        return this.httpClient.get("https://api.blockchain.info/stats").map(res => res.json());
      }
      public getinfoGrafico(){
        return this.httpClient.get("https://api.blockchain.info/pools?timespan=5days").map(res => res.json());
      }
  }