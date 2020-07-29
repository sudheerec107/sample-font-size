import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() fontStyleChanged = new EventEmitter();
  @Output() fontSizeChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeFontStyle(val) {
    this.fontStyleChanged.emit(val);
  }

  fontChanged(value) {
    this.fontSizeChanged.emit(value);
    console.log(value);
  }

}
