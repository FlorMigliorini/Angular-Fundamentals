import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentls';
}
