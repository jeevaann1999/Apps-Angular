import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-to-do',
  templateUrl: './view-to-do.component.html',
  styleUrls: ['./view-to-do.component.css']
})
export class ViewToDoComponent {

constructor(private api:ApiService)
{
  api.fetchToDo().subscribe(

    (response)=>{
      this.data=response;
    }
  )
}

data:any=[]  
}
