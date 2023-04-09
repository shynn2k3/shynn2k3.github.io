import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CardService } from '../service/card.service';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;
  total: number = 0;
  length: any;
  x: any;

  constructor(private cartService: CardService, private router: ActivatedRoute, private proService: ProductService) { }

  ngOnInit(): void {
    this.getCart()
    this.proService.lengthCart.subscribe((data) => {
      this.length = data;
      console.log(this.length);
    })
  }

  getCart() {
    this.cartService.getAllCart().subscribe((data) => {
      this.cart = data;

      this.total = 0;
      this.cart.forEach((element: any) => {
        this.total += (element.content * element.quantity)
        console.log(this.total);

        // this.total += (element.content * element.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) as any
      });
    })
  }

  mark(mark: any, id: number) {
    let quantily: any = document.getElementById(`quantily${id}`)
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
        let datas = this.cart.find((item: any) => {
          return item.id == id;
        })
        datas.quantity = Number(quantily.value)
        this.cartService.putCart(datas).subscribe((data) => {

        })
        this.getCart()

      }
    } else {
      quantily.value = Number(quantily.value) + 1
      let datas = this.cart.find((item: any) => {
        return item.id == id;
      })
      datas.quantity = Number(quantily.value)
      this.cartService.putCart(datas).subscribe((data) => {

      })
      this.getCart()

    }
  }


  deleteCart(id: any) {
    if (confirm('Are you sure ?')) {
      this.cartService.deleteCart(id).subscribe((data) => {
        this.getCart()
      })
    }

  }

  order() {
    Swal.fire({
      icon: 'success',
      title: 'Order successfully!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
