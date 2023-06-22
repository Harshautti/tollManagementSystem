import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addnewentry',
  templateUrl: './addnewentry.component.html',
  styleUrls: ['./addnewentry.component.css']
})
export class AddnewentryComponent {
   constructor(private dialog:MatDialog,
                private router:Router,
                private data:DataService    
    ){}
    opt=this.data.retrivetollname()
    tollnameoption=this.opt
    selectvehicletype=["car/jeep/van","LCV","Truck/Bus","Heavy Vehicle"]
   tollname=''
   vehicle=''
   vehiclenumber=''
   amount:any
   datetime=new Date().toLocaleString()
  

   newvehicle(){
    this.data.pushaddnewvehicle(this.tollname,this.vehiclenumber,this.datetime,this.vehicle,this.amount)
    this.router.navigate(['/'])
    this.dialog.closeAll()
   }
    closedialog(){
    this.dialog.closeAll()
    this.router.navigate(['/'])
   }
   
   


}
