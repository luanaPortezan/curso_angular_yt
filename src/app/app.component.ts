import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'Joaquim';

  userData = {
    email: 'joaquim@joaquim.com',
    role: 'Admin'
  };

  title = 'teoria';
}
