import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { Grocery } from '../models/grocery.model';
import { Store } from '@ngrx/store';
import { groceryAction } from './store/actions/grocery.action';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BucketComponent,GroceryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private store: Store<{groceries:Grocery[]}>){}
  ngOnInit(): void {
    this.store.dispatch(groceryAction.loadGroceries())
  }
}
