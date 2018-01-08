import { Component } from '@angular/core';
import { SmartService } from './smart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor() {

  }

  public ngOnInit() {
    this.myErrorInvoke();
  }

  private myErrorInvoke() {
    JSON.parse("test");
  }

}
