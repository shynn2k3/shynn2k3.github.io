import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  listProduct: any;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getShirt().subscribe((data) => {
      this.listProduct = data;
      console.log(data)
    })
  }

}
