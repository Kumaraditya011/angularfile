import { Component, OnInit } from '@angular/core';
import { MyappserviceService } from '../myappservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor(private q: MyappserviceService) { }
ds =this.q.GetDate();
  ngOnInit() {
  }

}
