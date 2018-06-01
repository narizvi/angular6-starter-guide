import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@main/home/home.component';
import { HomeLogicService } from '@main/home/logic.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [HomeLogicService],
  declarations: [HomeComponent]
})
export class MainModule { }
