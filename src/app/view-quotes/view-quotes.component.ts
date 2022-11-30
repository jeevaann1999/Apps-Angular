import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-quotes',
  templateUrl: './view-quotes.component.html',
  styleUrls: ['./view-quotes.component.css']
})
export class ViewQuotesComponent {

constructor(private api:ApiService)
{
api.fetchQuotes().subscribe(

  (response)=>{

    this.data=response;
  }
)
}

data:any=[]

}
