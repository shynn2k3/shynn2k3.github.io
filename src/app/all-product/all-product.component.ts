import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  listProduct: any;
  cate: any;

  constructor(private ProductService: ProductService, private CategoryService: CategoryService) { }


  ngOnInit(): void {
    this.CategoryService.getAll().subscribe((data) => {
      this.listProduct = data;
      console.log(data)
    })

    // duyeetj danh sach
    this.ProductService.getAllCate().subscribe((data) => {
      this.cate = data;
    })

    
  }

  fillterpro(id: Number) {
    this.ProductService.filterProduct(id).subscribe((data) => {
      this.listProduct = data;
    })
  }

  add() {
    this.CategoryService.getAll().subscribe((data) => {
      this.listProduct = data;
    })
  }

  
}

