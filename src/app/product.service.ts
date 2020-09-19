import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


// api is global variable
const api="http://localhost:4444/hoodies/";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //injecting HttpClient dependencies to make instance
  constructor(private httpclient:HttpClient) { }

  saveData(data){
     return this.httpclient.post(api,data);
  }

  //to fetch data we use get()
  getData(){
    return this.httpclient.get(api);
  }

  getDataById(id){
    return this.httpclient.get(api+id);
  }

  update(id,data){
    return this.httpclient.post(api+id,data);
  }

  deleteData(id){
    return this.httpclient.delete(api+id);
  }
  
}
