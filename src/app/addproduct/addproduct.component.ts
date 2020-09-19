import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';
import { from } from 'rxjs';
//interface- whose methods going to implement here
import {Product} from '../product';
import {ProductService} from '../product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  form:FormGroup

  addproduct(){

    this.productservice.saveData(this.form.value).subscribe((res)=>{

      console.log("success");

    })

  }

// creating an object of service
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    this.form= new FormGroup({
      brand_name : new FormControl(""),
      size:new FormControl(""),
      color: new FormControl(""),
      price: new FormControl("")


    })
  }


}
