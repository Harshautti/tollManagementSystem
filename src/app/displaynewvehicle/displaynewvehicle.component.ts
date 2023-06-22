import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-displaynewvehicle',
  templateUrl: './displaynewvehicle.component.html',
  styleUrls: ['./displaynewvehicle.component.css']
})
export class DisplaynewvehicleComponent {
  constructor(private data:DataService){}

  newvehicle=this.data.addnewvehicle

  filteredvehicle = this.data.filtered
 
}
