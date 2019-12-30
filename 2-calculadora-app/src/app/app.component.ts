import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator Application';
  operatingA: number;
  operatingB: number;
  result: number;

  onAdd(): void {
    this.result = this.operatingA + this.operatingB;
  }
}
