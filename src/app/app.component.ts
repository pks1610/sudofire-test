import { Component } from '@angular/core';
import { DemoDataService } from './service/demo-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  demoData: any[] = [];
  show = true;
  
  constructor(private dataService: DemoDataService){
    this.dataService.getData().subscribe(data => {
      this.demoData = data;
    })
  }

  ngOnInit(){
    
  }

  hideTable(e){
    this.show = e;
  }
}
