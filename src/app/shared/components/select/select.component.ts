import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  @Input() title:string="";
  @Input() items:any[]=[]
  @Output() selectedValue=new EventEmitter();

  itemchanged(event){
    this.selectedValue.emit(event);
  }
}
