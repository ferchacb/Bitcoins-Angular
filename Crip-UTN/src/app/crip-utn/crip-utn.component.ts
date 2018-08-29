import { Component, OnInit } from '@angular/core';
import { InfoExtraccionService } from '../info-extraccion/info-extraccion.service';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-crip-utn',
  templateUrl: './crip-utn.component.html',
  styleUrls: ['./crip-utn.component.css']
})
export class CripUTNComponent implements OnInit {

  databloque :any = {};
  dataprecio :any = {};
  datatrans :any = {};
  datatama :any = {};

  constructor(private info: InfoExtraccionService) { }

  ngOnInit() {
    this.info.getinfobloque().subscribe(res => {
      this.databloque = res;
    });
    this.info.getinfoprecio().subscribe(res => {
      this.dataprecio = res;
    });
    this.info.getinfotama().subscribe(res => {
      this.datatama = res;
    });
    this.info.getinfotrans().subscribe(res => {
      this.datatrans = res;
    });
  }

}
