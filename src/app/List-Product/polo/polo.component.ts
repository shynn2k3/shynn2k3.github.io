import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrls: ['./polo.component.css']
})
export class PoloComponent implements OnInit {

  listProduct: any;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getPolo().subscribe((data) => {
      this.listProduct = data;
      console.log(data)
    })
  }

}
