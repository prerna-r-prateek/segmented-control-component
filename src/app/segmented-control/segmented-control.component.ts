import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-segmented-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segmented-control.component.html',
  styleUrl: './segmented-control.component.css'
})
export class SegmentedControlComponent {
  @Input() segments: string[] = [];
  @Input() selectedSegment: string = '';
  @Output() segmentChanged = new EventEmitter<string>();

  selectSegment(segment: string) {
    this.selectedSegment = segment;
    this.segmentChanged.emit(this.selectedSegment);
  }
}


