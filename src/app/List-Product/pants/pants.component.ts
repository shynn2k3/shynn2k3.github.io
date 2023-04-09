import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  listProduct: any;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getPant().subscribe((data) => {
      this.listProduct = data;
      console.log(data)
    })
  }

}
