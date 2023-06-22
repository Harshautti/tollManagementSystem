import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddtollComponent } from '../addtoll/addtoll.component';
import { AddtollformComponent } from '../addtollform/addtollform.component';
import { AddnewentryComponent } from '../addnewentry/addnewentry.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialog:MatDialog,
              private data:DataService){}

  addtoll(){
    this.dialog.open(AddtollformComponent,{
      disableClose: true,
    })
  }
  addnewentry(){
    this.dialog.open(AddnewentryComponent,{disableClose: true,})
  }
  search=''

  searchinput(){
    this.data.search(this.search)
    // console.log(this.search)
  }
}
