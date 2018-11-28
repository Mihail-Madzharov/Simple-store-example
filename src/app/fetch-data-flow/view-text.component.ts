import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-text',
  templateUrl: './view-text.component.html',
  styleUrls: ['./view-text.component.css']
})
export class ViewTextComponent {

  @Input()
  response: any;
}
