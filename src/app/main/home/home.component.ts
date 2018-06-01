import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeLogicService } from '@main/home/logic.service';
import { Subscription } from 'rxjs';
import { Utilities } from '@shared/services/utils';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any[];
  private _data$: Subscription;

  constructor(private logic: HomeLogicService) { }

  ngOnInit() {
    const dropdownData: any[] = this.logic.createDropdownData();

    this._data$ = this.logic.getSomeObservableData().pipe(filter(_ => Utilities.isDefined(_))).subscribe(_ => {
      this.data = _;
    });
  }

  ngOnDestroy() {
    Utilities.destroySubscriptions(this._data$);
  }
}
