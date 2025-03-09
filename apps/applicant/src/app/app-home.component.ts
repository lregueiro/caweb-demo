import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppHomeComponent {}
