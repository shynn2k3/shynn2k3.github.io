import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Cart } from '../card';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail: any = {};
  dataCart = new Cart();
  quantily: any
  index: any;
  length: any;
  sizeChoose: any;

  constructor(private detailService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let _id = this.router.snapshot.params['id']
    this.detailService.getDeatil(_id).subscribe((data) => {
      this.detail = data;
    })
  }

  mark(mark: any) {
    let quantily: any = document.getElementById('quantily')
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
      }
    } else {
      quantily.value = Number(quantily.value) + 1
    }
  }


  size(value: any) {
    let sizes: any = document.querySelectorAll('.btn-size')

    sizes.forEach((size: any) => {
      size.classList.remove('active')
      if (value === size.getAttribute('data-size')) {
        size.classList.add('active')
        this.sizeChoose = value
      }
    });
  }


  addCart() {
    let temp: any = document.getElementById('quantily')
    this.quantily = Number(temp.value)
    this.dataCart.id_product = this.detail.id
    this.dataCart.title = this.detail.title
    this.dataCart.avatar1 = this.detail.avatar1
    this.dataCart.content = this.detail.content
    this.dataCart.quantity = this.quantily
    this.dataCart.size = this.sizeChoose
    console.log(this.dataCart)
    this.detailService.getCart().subscribe(data => {
      this.index = data.find((data: any) => {
        return data.id_product == this.dataCart.id_product
      })
      console.log(this.index);

      if (this.index) {
        this.index.quantity += this.quantily
        this.detailService.putCart(this.index).subscribe(data => {
        })
        Swal.fire({
          icon: 'success',
          title: 'Đã thêm vào giỏ hàng!',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        this.detailService.postCart(this.dataCart).subscribe((data) => {
          if (data) {
            Swal.fire({
              icon: 'success',
              title: 'Đã thêm vào giỏ hàng!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
    })
  }
}
