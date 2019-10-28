import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../guards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthGuard]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
