import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {

  apiUrl: string = 'http://localhost:9008/Api/Request/v1/CreateRequest';

  constructor(private http: HttpClient) { }

  postForm(object: any) {
    let textString = '';
    let keyValue = [];

    for (const [key, value] of Object.entries(object)) {


      if (value === null || value === undefined) {
        textString += `<b>${key}</b><br/>\n`;
        textString += `------<br/><br/>\n\n`;

        keyValue.push({
          key: key,
          value: ''
        });
      } else {
        textString += `<b>${key}</b><br/>\n`;
        textString += `${value}<br/><br/>\n\n`;
        keyValue.push({
          key: key,
          value: value
        });
      }
    }

    let dataToSend = {
      "RequestorName": object['FirstName'] + ' ' + object['LastName'],
      "RequestorEmail": object['Email'],
      "ProcessFormName": object['FormName'],
      "HtmlFormData": textString,
      "KeyedData": keyValue
    }

    console.log(dataToSend);

    return this.http.post(this.apiUrl, dataToSend).subscribe(
      results => {
        console.log('Success');
      },
      error => {
        console.log('Error: ', error);
      }
    )
  }

}
