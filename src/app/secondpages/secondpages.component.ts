import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-secondpages',
  templateUrl: './secondpages.component.html',
  styleUrls: ['./secondpages.component.scss']
})
export class SecondpagesComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,

    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['QUATER1 1', 'QUATER 2', 'QUATER 3', 'QUATER 4'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [

    { data: [1000, 1500, 1750, 2000], label: 'LATITUDE' },
    { data: [1800, 1500, 2250, 2800], label: 'XPS' },
    { data: [2850, 2500, 3750, 4000], label: 'INSPIRON'},
    { data: [2400, 2500, 2750, 3000], label: 'PRECISON' },
    { data: [1200, 1300, 1100, 1000], label: 'TABLET' },
    { data: [2000, 2500, 2750, 3000], label: 'RUGGED'},
    { data: [2600, 2800, 3000, 3200], label: 'SERVER'},
    { data: [1350, 1700, 1880, 2240], label: 'DESKTOP'},

  ];

  public chartOption = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

  constructor() { }

  ngOnInit() {
    
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
