import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../registrar/registrar.component.css',
  ]
})
export class LoginComponent implements OnInit {

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
