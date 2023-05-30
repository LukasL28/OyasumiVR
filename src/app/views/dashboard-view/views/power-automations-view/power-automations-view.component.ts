import { Component } from '@angular/core';
import { noop } from '../../../../utils/animations';

@Component({
  selector: 'app-power-automations-view',
  templateUrl: './power-automations-view.component.html',
  styleUrls: ['./power-automations-view.component.scss'],
  animations: [noop()],
})
export class PowerAutomationsViewComponent {
  // activeTab: 'CONTROLLERS_AND_TRACKERS' | 'BASE_STATIONS' = 'CONTROLLERS_AND_TRACKERS';
  activeTab: 'CONTROLLERS_AND_TRACKERS' | 'BASE_STATIONS' = 'BASE_STATIONS';
}