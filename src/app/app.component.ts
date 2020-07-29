import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  underline = false;
  italic = false;
  bold = false;
  fontSize = '1rem';

  setFontStyle(val) {
    if (val === 'underline') {
      this.underline = !this.underline;
    } else if (val === 'bold') {
      this.bold = !this.bold;
    } else if (val === 'italic') {
      this.italic = !this.italic;
    }
  }

  changeFont(value: number) {
    this.fontSize = 1 + (value % 10) / 10 + 'rem';
  }
}
