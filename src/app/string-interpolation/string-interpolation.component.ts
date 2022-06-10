import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "John";

  person = {
    firstname: "_john_",
    lastname: "carter",
    age: 100,
    address: "Route 100"
  };
  constructor() { }

  ngOnInit() {
  }

}
