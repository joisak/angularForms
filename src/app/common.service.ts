import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {

  apiUrl: string = 'http://localhost:9008/Api/Request/v1/CreateRequest';

  constructor(private http: HttpClient) { }

  onSubmit(x) {
    console.log(x);
    console.log('Values');
    console.log('JUST SNYGGT --->, ', x.form.value);
  }

  postForm(object: any) {
    let textString = '';
    let keyValue = [];

    for (const [key, value] of Object.entries(object)) {
      textString += `<b>${key}</b><br/>\n`;
      textString += `${value}<br/><br/>\n\n`;

      if (value === null) {
        keyValue.push({
          key: key,
          value: ''
        });
      } else {
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
