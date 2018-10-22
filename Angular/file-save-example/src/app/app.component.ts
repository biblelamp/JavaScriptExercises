import {Component} from '@angular/core';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Save file';

  constructor() { }

  saveFile() {
    this.saveToFileSystem('Hello world', 'hello.txt');
  }

  private saveToFileSystem(text, filename) {
    const blob = new Blob([text], {type: 'application/*'}); // text/plain // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
    saveAs(blob, filename);
  }
}
