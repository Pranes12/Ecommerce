import { Component, OnInit } from '@angular/core';
import { StyledetailsService } from 'src/app/services/styledetails.service';

@Component({
  selector: 'app-kidoboys',
  templateUrl: './kidoboys.component.html',
  styleUrls: ['./kidoboys.component.css']
})
export class KidoboysComponent implements OnInit {

  constructor(private service:StyledetailsService) { }
  styleData:any
  ngOnInit(): void {
    this.styleData = this.service.styleDetails
  }

}
