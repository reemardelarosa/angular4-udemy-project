import { Component } from '@angular/core';

import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(public navigationService: NavigationService) {}

  onSelect(link: string) {
    this.navigationService.selectFeature(link);
  }
}
