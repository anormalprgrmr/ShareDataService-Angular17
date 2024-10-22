import { Component } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css',
})
export class DisplayDataComponent {
  constructor(private shareDataService: ShareDataService) {}

  data = '';

  ngOnInit(): void {
    this.shareDataService.observableData.subscribe(newData => this.data = newData);
  }
}
