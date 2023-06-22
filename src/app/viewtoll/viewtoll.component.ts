import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewtoll',
  templateUrl: './viewtoll.component.html',
  styleUrls: ['./viewtoll.component.css']
})
export class ViewtollComponent {
  
  constructor(private data:DataService){}

  tolldata=this.data.addtolldata

  deletetoll(index:any){
    this.data.deletetoll(index)
  }
//  displaydata(){
//   console.log(this.tolldata)
//   this.tolldata.map((data)=>{
//     console.log(data.carjeepvan)
//   })
//  }
}
