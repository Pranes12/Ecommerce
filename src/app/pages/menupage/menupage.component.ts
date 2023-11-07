import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { StyledetailsService } from 'src/app/services/styledetails.service';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:StyledetailsService) { }
  getstyleId:any
  styleData:any
  ngOnInit(): void {
    this.getstyleId=this.param.snapshot.paramMap.get('id')
    console.log(this.getstyleId,'getmenu');
    if(this.getstyleId)
    {
      this.styleData=this.service.styleDetails.filter((value)=>{
        return value.id==this.getstyleId
      });
      console.log(this.styleData,'stylData>>');
    }
  }

}
