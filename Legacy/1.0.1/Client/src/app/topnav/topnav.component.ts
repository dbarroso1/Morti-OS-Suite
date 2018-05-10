import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: 'topnav.component.html' ,
  styleUrls: ['topnav.component.css']
})
export class TopnavComponent implements OnInit {
  modTitle='Morti OS: RTC Chatroom'
  modDesc='GET'
  modLinks = [
    'NAVLINK1',
    'NAVLINK2',
    'NAVLINK3'
  ]
  constructor() { }

  ngOnInit() {
  }

}
