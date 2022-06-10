import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {


  buttonName = "My button 10/06/2022";
  i = 0;
  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log("click!");
  }

  disable(){
  }

  inc(){
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times!";
  }


}
