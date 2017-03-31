import { Component, OnInit, Input } from '@angular/core';
import { UrlLink } from './urllink.model';

@Component({
  selector: 'app-urllink',
  templateUrl: './urllink.component.html',
  styleUrls: ['./urllink.component.css'],
  host: {
    class: 'row'
  }
})
export class UrllinkComponent implements OnInit {

  @Input() urllink: UrlLink;

  constructor() { }

  ngOnInit() {
  }

}
