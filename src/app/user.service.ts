import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



//globaly declared
const apiServer = "http://localhost:3333/user/";

@Injectable({
  providedIn: 'root'
})

export class UserService {
   

  constructor(private httpClient: HttpClient) { }

  save(data){
      return this.httpClient.post(apiServer,data);
   }

}
