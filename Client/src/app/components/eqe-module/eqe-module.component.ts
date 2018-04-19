import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eqe-module',
  templateUrl: 'eqe-module.component.html',
  styleUrls: ['eqe-module.component.css']
})
export class EqeModuleComponent implements OnInit {
  module_title = 'Eqe Module'
  module_desc = 'Emotional Quantification Engine'
  
  constructor() { }

  ngOnInit() {
  }

}
