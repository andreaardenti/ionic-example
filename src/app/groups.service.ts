import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  public apiUrl: string = 'https://gitlab.com/api/v4/groups';
  constructor(public httpClient: HttpClient) {
  }

  public all() :Promise<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl).toPromise();
  }
}
