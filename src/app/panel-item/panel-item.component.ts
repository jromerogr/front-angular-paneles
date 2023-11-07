import { Component, Input } from '@angular/core';
import { PanelItem } from '../models';

@Component({
  selector: 'app-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.scss']
})
export class PanelItemComponent {

  @Input() item : PanelItem
}
