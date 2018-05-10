import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  title = 'Morti-OS: Toolbox'
  rtcIsActive = true
  eqeIsActive = false
  lsiIsActive = false
  
  constructor() { }

  ngOnInit() {
  }

}
