import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor( public httpClient: HttpClient) { }
  readonly endpointDomain : string = 'http://localhost:3000/templates';

  getTemplates() {
    return this.httpClient.get(this.endpointDomain + '/getTemplates')
  }
}
