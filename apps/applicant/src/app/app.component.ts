import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home.component';

@Component({
  imports: [AppHomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'applicant';
}
