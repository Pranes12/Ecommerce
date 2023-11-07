import { Component, OnInit } from '@angular/core';
import { StyledetailsService } from 'src/app/services/styledetails.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private service:StyledetailsService){}
  styleData:any

  ngOnInit(): void {
    this.styleData = this.service.styleDetails
  }

}
