import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccssService } from 'src/app/service/accss.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  formData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('')])
  })
  constructor(private dn: AccssService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.dn.login(this.formData.value).subscribe((data) => {
      if (data[0]) {
        localStorage.setItem('acc', JSON.stringify(data[0]));
        this.router.navigate(['/']);
        Swal.fire({
          icon: 'success',
          title: 'Đăng nhập thành công!',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ô ?',
          text: 'Sai Email hoặc Mật Khẩu!',
        })

      }
    })

  }



  get f(): any {
    return this.formData.controls;
  }

}
