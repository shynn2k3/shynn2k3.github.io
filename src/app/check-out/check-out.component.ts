import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AccssService } from '../service/accss.service';
import { CardService } from '../service/card.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  [x: string]: any;
  cart: any;
  total: number = 0;
  length:any;
  sizeChoose: any;


  formData = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(9)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private accssService: AccssService, private router: Router, private cartService: CardService, private route: ActivatedRoute, private proService: ProductService) { }

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
        console.log(element);
      });
      
    });
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
  onSubmit() {
    this.accssService.checkout(this.formData.value).subscribe(() => {
      if (this.formData.valid) {
        Swal.fire({
          icon: 'success',
          title: 'Đặt hàng thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/']);
      }

    })
    console.log(this.formData.value);
  }


  get f(): any {
    return this.formData.controls;
  }

}
