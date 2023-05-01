import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  exports: [
    HeaderComponent, SpinnerComponent, SelectComponent
  ],
    imports: [
      CommonModule,
      RouterLink,
      HttpClientModule,
      ReactiveFormsModule
    ]
})
export class SharedModule { }
