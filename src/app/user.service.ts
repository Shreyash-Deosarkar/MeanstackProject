import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


//for json 
//const api="http://localhost:4444/user/";


//for php
const api="http://localhost:3306/casualhai/";
@Injectable({
  providedIn: 'root'
})
export class UserService 
{

    
  constructor(private httpClient:HttpClient) { }

  saveData(data)
  {
    return this.httpClient.post(api+'register.php',data)
  }
  
  getData()
  {
    return this.httpClient.get(api)
  }

  getDataById(id){
    return this.httpClient.get(api+id)
  }

  updateData(id,data)
  {
    return this.httpClient.put(api+id,data);
  }

  deleteData(id)
  {
    return this.httpClient.delete(api+id);
  }


}
