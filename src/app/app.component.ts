import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayDataComponent, UpdateDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'behaviorsubject-demo';
}
