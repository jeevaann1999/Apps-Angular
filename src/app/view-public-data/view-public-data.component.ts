import { SplitInterpolation } from '@angular/compiler';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-public-data',
  templateUrl: './view-public-data.component.html',
  styleUrls: ['./view-public-data.component.css']
})
export class ViewPublicDataComponent {

constructor(private api:ApiService){
  api.fetchPublicdata().subscribe(

  (response)=>{
    this.pub=response;
  }
  )
}

pub:any=[]
}