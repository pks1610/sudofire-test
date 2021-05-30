import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoDataService } from '../service/demo-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailData = {};

  constructor(
    private demoDataServie: DemoDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.demoDataServie.selectedData.subscribe(item => {
      this.detailData = item;
      console.log(this.detailData);
    })
  }

}
