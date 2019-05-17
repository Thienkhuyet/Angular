import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService) { }
  tocken: any;
  ngOnInit() {
    this.loginFrom = this.fb.group({
      grant_type: ['password'],
      username: ['reader', Validators.required],
      password: ['reader', Validators.required]
    })
  }
  onSubmit() {
    const { value, valid } = this.loginFrom;
    console.log(value);
    if (valid) {
      this.loginService.login(value.username, value.password).subscribe(tocken => {
        this.tocken = tocken;
        console.log(tocken);
      })
    } else {
      console.log("loi login");
    }
  }
}
