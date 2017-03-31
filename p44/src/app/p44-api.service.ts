import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Headers, Jsonp, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class P44APIService {

  constructor(private http:Http, private jsonp: Jsonp) { }


  getImage(code:string, proNumber:string, documentType:string, imageFormat:string, postalCode:string) {

    var headers = new Headers();
    headers.append('Content-Type','application/json');
		headers.append('Authorization', '[*** CHANGE ME ***]');
         
    var body = 
            {"capacityProviderAccountGroup": {
              "accounts":[
                {
                  "code":code
                }	
                ]
            },
            "proNumber": proNumber,
            "destinationAddress": {
                "postalCode": postalCode,
                "country": "US"
            },
            "documentType": documentType,
            "imageFormat": imageFormat};

    var requestOptions = new RequestOptions();
    requestOptions.headers = headers;
    requestOptions.body = body;
    requestOptions.method = RequestMethod.Post;

    var params = new URLSearchParams();
    params.append('name','ken');
    requestOptions.params = params;

    requestOptions.url = 'http://localhost:8081/getImage';
    
    return this.http.post('http://localhost:8081/getImage', body, requestOptions)
      .map((res:Response) => res.json());
  }

}
