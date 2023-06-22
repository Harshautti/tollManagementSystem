import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TollManagement';

  constructor(private http:HttpClient){}

  getjsondata(){
    this.http.get('assets/db.json').subscribe((data:any)=>{
     console.log(data)
      data.forEach((ele:any)=>{
        console.log(ele)
       })
    })
  }
}
