import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  count = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  inc(){
    this.count++;
  }

  dec(){
    this.count--;
  }

  goToHome(){
    window.location.reload();
  }
}
