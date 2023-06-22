import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addtollform',
  templateUrl: './addtollform.component.html',
  styleUrls: ['./addtollform.component.css']
})
export class AddtollformComponent {
  constructor(private dialog:MatDialog, private router:Router,
      private data:DataService){} 
  

  tollname:string=''
  vehicle_1=''
  vehicle_2=''
  vehicle_3=''
  vehicle_4=''
  options=[
    {value:'car/jeep/van'},
    {value:'LCV'},
    {value:'truck'},
    {value:'heavyvehicle'}
  ]
  single_1:any
  single_2:any
  single_3:any
  single_4:any
  return_1:any
  return_2:any
  return_3:any
  return_4:any

  tolldata(){

    this.data.pushnewtolldata(this.tollname,this.single_1,this.single_2,this.single_3,this.single_4)
    this.dialog.closeAll()
    this.router.navigate(['/viewtolls'])
  }
  closedialog(){
    this.dialog.closeAll()
    this.router.navigate(['/'])
  }
}
