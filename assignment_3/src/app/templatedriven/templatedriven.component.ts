import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setDisable = true;  
  submitData(data:any){
    console.log(data.value)
    alert("Thank You for registering")
  }

}
