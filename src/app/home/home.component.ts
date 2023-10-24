import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isProjectActive: boolean = false;
  isSidebarHidden: boolean = false;
  isProfileActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.isProjectActive = !this.isProjectActive;
  }
  onSidebarToggle() {
    this.isSidebarHidden = !this.isSidebarHidden;
    this.isProjectActive = false;
  }
  onMouseEnter() {
    this.isProfileActive = true;
  }
  onMouseLeave() {
    this.isProfileActive = false;
  }
}
