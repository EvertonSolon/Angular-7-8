import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  // string myButton = "My button 10/06/2022";
  buttonName = "My button 10/06/2022";
  i = 0;
  spinnerMode = "determinate";
  spinnerValue = "0";
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log("click!");
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }

  inc(){
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times!";
    this.spinnerValue = this.i.toString();
  }

  cbChanged(event){
    // console.log("event.checked: " + event.checked)
    this.selectDisabled = event.checked;
  }

  selectionChange(event){
    console.log(event);
    this.selectedOption = event.value;
  }


  
}
