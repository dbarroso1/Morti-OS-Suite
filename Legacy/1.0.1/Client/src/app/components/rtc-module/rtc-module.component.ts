import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rtc-module',
  templateUrl: './rtc-module.component.html',
  styleUrls: ['./rtc-module.component.css']
})
export class RtcModuleComponent implements OnInit {

  module_info = {
    'module_title': 'RTC Module',
    'module_desc': 'Relationship Trained Communications',
    'module_links': ['Chatroom', 'Training', 'Logs']
  }

  today = Date.now()
  user = {
    'name': 'You',
    'message': ''
  }
  morti = {
    'name': 'Morti',
    'message': ''
  }
  constructor() { }

  ngOnInit() {
  }

}
