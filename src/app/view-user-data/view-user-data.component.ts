import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-user-data',
  templateUrl: './view-user-data.component.html',
  styleUrls: ['./view-user-data.component.css']
})
export class ViewUserDataComponent {

constructor(private api:ApiService)
{
  api.fetchUserData().subscribe
  (

    (response)=>{
      this.data=response;
    }
  )
}

data:any=[]
}
