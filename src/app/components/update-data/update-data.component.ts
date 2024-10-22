import { Component } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-data.component.html',
  styleUrl: './update-data.component.css',
})
export class UpdateDataComponent {
  constructor(private shareDataService: ShareDataService) {}

  data = '';

  submitHandler() {
    this.shareDataService.updateData(this.data);
    this.data = '';
  }
}
