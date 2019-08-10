import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  Islogin= false;
  nm="adi";
  Student=[];
  city = "lko";


  constructor() {
    this.Student=[
      { "id":1, "Name":"adi","Fees":4000},
      { "id":2, "Name":"ankur","Fees":5000},
      { "id":3, "Name":"ayush","Fees":7000},
      { "id":4, "Name":"ram","Fees":48000},
  
    ];
   }
   newData(){
    this.Student=[
      { "id":1, "Name":"adi","Fees":4000},
      { "id":2, "Name":"ankur","Fees":5000},
      { "id":3, "Name":"ayush","Fees":7000},
      { "id":4, "Name":"ram","Fees":48000},
      { "id":5, "Name":"guru","Fees":48000},

  
    ];

   }
   trackByid(index: number, k: any){
     return k.id;
   }
   
  ngOnInit() {
  }

}
