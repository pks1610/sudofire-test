import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DemoDataService } from '../service/demo-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data = [];
  @Output() show = new EventEmitter();

  constructor(
    private router: Router,
    private dataService: DemoDataService
  ) { }

  ngOnInit(): void { }

  showDetails(i){
    console.log(i);
    this.show.emit(false);
    this.dataService.selectedData.next(this.data[i]);
    localStorage.setItem('item', this.data[i]);
    this.router.navigate(['/details']);
  }

}
