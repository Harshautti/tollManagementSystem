import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addtoll',
  templateUrl: './addtoll.component.html',
  styleUrls: ['./addtoll.component.css']
})
export class AddtollComponent {
constructor(private dialog:MatDialog){}

addtoll(){
  this.dialog.open(AddtollComponent)
}

}
