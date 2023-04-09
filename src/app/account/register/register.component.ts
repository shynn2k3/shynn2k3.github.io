import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccssService } from 'src/app/service/accss.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(private accssService: AccssService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.accssService.register(this.formData.value).subscribe((data) => {
      if (data) {
        Swal.fire({
          icon: 'success',
          title: 'Đăng kí thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/login']);
      }
    })
    console.log(this.formData.value);
  }






  get f(): any {
    return this.formData.controls;
  }

}
