import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BaseApiService } from './services/api';
import { DataTrackerService } from '@shared/services/trackers';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BaseApiService, DataTrackerService],
  declarations: [DropdownComponent],
  exports: [DropdownComponent]
})
export class SharedModule { }
