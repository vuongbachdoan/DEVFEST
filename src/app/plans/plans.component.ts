import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, Subject, takeUntil } from 'rxjs';
import { generateSuggestion } from '../utils/utils';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  result: any[] = [];
  isFetch: boolean = true;

  constructor(private db: AngularFireDatabase) {
  }
  observable$!: Observable<any>;
  unsubscribe$: Subject<void> = new Subject<void>();
}
