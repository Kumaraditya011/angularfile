import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyappserviceService {
dt:Date;
  GetDate(){
return this.dt= new Date();
}
  constructor() { }
}
