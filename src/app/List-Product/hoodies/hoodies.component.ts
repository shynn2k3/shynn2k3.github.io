import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-hoodies',
  templateUrl: './hoodies.component.html',
  styleUrls: ['./hoodies.component.css']
})
export class HoodiesComponent implements OnInit {

  listProduct: any;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getHoodie().subscribe((data) => {
      this.listProduct = data;
      console.log(data)
    })
  }
}
