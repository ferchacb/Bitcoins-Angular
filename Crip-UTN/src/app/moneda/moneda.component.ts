import { Component, OnInit } from '@angular/core';
import { InfoExtraccionService } from '../info-extraccion/info-extraccion.service';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css']
})
export class MonedaComponent implements OnInit {

  data :any = {};
  constructor(private info: InfoExtraccionService) { }


  ngOnInit() {
    this.info.getinfoEstadistico().subscribe(res => {
    this.data = res;
    });
  }

}
