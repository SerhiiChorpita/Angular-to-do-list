import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userName: string = 'Ivan Ivanov';
  public arrNames: Array<string> = [];
  public countOfTask: number = 0;
  public checkCount = false;

  public newName!: string;

  addName(): void {
    this.arrNames.push(this.newName);
    this.newName = '';
    this.countOfTask = this.arrNames.length;
  }
  getCount() {
    this.checkCount = true;
    if (this.checkCount) {
      this.countOfTask--;
      this.checkCount = false;
    }
  }
}
