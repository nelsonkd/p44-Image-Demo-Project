import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { P44APIService } from './p44-api.service';
import { UrlLink } from './urllink/urllink.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: Object;
  urllink:UrlLink;
  
  loading: boolean = false;

  constructor(public http: Http, public apiService:P44APIService){
//    this.urllink = new UrlLink('','','','');
  }

  getDocument(code:HTMLInputElement, proNumber:HTMLInputElement, documentType:HTMLInputElement, imageFormat:HTMLInputElement, postalCode:HTMLInputElement){

    this.loading = true;
    this.apiService.getImage(code.value, proNumber.value, documentType.value, imageFormat.value, postalCode.value).subscribe(data => {
      this.data = data;
      this.urllink = new UrlLink(data.imageUrl, data.documentType, data.imageFormat, data.proNumber);
      this.loading = false;
    });

  }

}
