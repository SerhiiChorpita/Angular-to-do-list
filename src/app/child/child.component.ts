import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() fromChild = new EventEmitter();
  @Input() arrNames: Array<string> = [];
  @Input() countOfTask!: number;
  public allIndex = this.arrNames.length;
  public editIndex!: number;
  public progress: boolean = false;
  public classCheck!: any;
  public btnCheck!: any;
  public prDone: string = 'Done';
  public prInProg: string = 'in PROGRESS';
  public editStatus: boolean = false;
  public editName!: string;

  constructor() { }

  ngOnInit(): void { }

  check(index: number, name: string) {
    this.editIndex = index;
    this.arrNames[this.editIndex];
    this.classCheck = name + this.editIndex + 'check';
    this.btnCheck = name + this.editIndex + 'dlt';
    if (
      document.getElementsByClassName(this.classCheck)[0].textContent ===
      this.prInProg
    ) {
      document.getElementsByClassName(this.classCheck)[0].textContent =
        this.prDone;
      document
        .getElementsByClassName(this.classCheck)[0]
        .setAttribute('style', 'color:green');
      document
        .getElementsByClassName(this.btnCheck)[0]
        .setAttribute('style', 'background-color:red');
      document
        .getElementsByClassName(this.btnCheck)[0]
        .removeAttribute('disabled');
      console.log(document.getElementsByClassName(this.btnCheck)[0]);
    } else if (
      document.getElementsByClassName(this.classCheck)[0].textContent ===
      this.prDone
    ) {
      document.getElementsByClassName(this.classCheck)[0].textContent =
        this.prInProg;
      document
        .getElementsByClassName(this.classCheck)[0]
        .setAttribute('style', 'color:red');
      document
        .getElementsByClassName(this.btnCheck)[0]
        .setAttribute('style', 'background-color:rgba(211, 0, 0, 0.404)');
      document
        .getElementsByClassName(this.btnCheck)[0]
        .setAttribute('disabled', 'disabled');
    }
  }
  checkEditStatus(index: number) {
    this.editIndex = index;
    this.editStatus = !this.editStatus;
  }
  toEditName() {
    this.editName = this.arrNames[this.editIndex];
  }
  saveEdit() {
    this.editStatus = !this.editStatus;
    this.arrNames[this.editIndex] = this.editName;
    this.editName = '';
  }
  delete(index: number): void {
    this.arrNames.splice(index, 1);
  }
  deleteCountNum(res: boolean) {
    this.fromChild.emit(res);
  }
}