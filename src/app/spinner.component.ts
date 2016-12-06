import {Component} from '@angular/core';
import { SpinnerService} from './spinner-service';

@Component({
  selector: 'spinner-component',
  'template': '<div *ngIf="active" class="spinner"></div>',
  styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent {
  public active: boolean;

  public constructor(spinner: SpinnerService) {
    spinner.status.subscribe((status: boolean) => {
      this.active = status;
    });
  }
}
