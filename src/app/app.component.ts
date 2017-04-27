import { Component } from '@angular/core';

import { NavigationService } from '../app/shared/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationService]
})
export class AppComponent {
  constructor(public navigationService: NavigationService) {}
}
