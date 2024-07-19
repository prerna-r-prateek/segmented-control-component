import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SegmentedControlComponent } from './segmented-control/segmented-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SegmentedControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segmented-control-app';
  selectedSegment = 'Segment 1';

  onSegmentChanged(segment: string) {
    this.selectedSegment = segment;
  }
}
