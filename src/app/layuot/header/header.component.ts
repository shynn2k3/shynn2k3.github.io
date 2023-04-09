import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword: any;
  list: any;
  listProduct: any;
  length: any;
  filter: any;
  id: any;

  constructor(private CategoryService: CategoryService, private pro: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.CategoryService.getAll().subscribe((data) => {
      this.listProduct = data;
      console.log(data)
    })

    this.pro.getAll().subscribe((data) => {
      this.list = data;
    })

    this.pro.getAll().subscribe(() => { })
    this.pro.lengthCart.subscribe((data) => {
      this.length = data;
      console.log(this.length);
    })

    // this.route.paramMap.subscribe((param: ParamMap) => {
    //   this.id = param.get('id');
    //   this.pro.filterProduct(this.id).subscribe((data) => {
    //     this.filter = data;
    //   })
    // })
  }

}
