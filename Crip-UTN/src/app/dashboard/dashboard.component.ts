import { Component, OnInit } from '@angular/core';
import { InfoExtraccionService } from '../info-extraccion/info-extraccion.service';
import 'rxjs/add/observable/of';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any = {};
  public pieChartLabels: string[] = ['AntPool', 'BTC.TOP', 'BTC.com', 'F2Pool', 'SlushPool', 'Bixin', 'BitClub Network', 'Unknown', 'BitFury'
    , 'ViaBTC', 'KanoPool', 'CKPool', 'DPOOL', 'BTCC Pool', 'Bitcoin.com', '58COIN', 'Poolin'];
  public pieChartData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  public pieChartType = 'pie';

  constructor(private info: InfoExtraccionService) {
    this.info.getinfoGrafico().subscribe(res => {
      this.pieChartData = [Number(res.AntPool), Number(res["BTC.TOP"]), Number(res["BTC.com"]), Number(res.F2Pool), Number(res.SlushPool),
      Number(res.Bixin), Number(res["BitClub Network"]), Number(res.Unknown), Number(res.BitFury), Number(res.ViaBTC), Number(res.KanoPool),
      Number(res.CKPool), Number(res.DPOOL), Number(res["BTCC Pool"]), Number(res["Bitcoin.com"]), Number(res["58COIN"]), Number(res.Poolin)];
      this.data = res;
    });
  }

  ngOnInit() {
  }

}
