import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/SERVICES/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkInForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', Validators.required)
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.checkInForm.value)
      .then(() => this.router.navigate(['home']))
      .catch(() => this.checkInForm.setErrors({ unauthenticated: true }));
  }

  resetPassword(email: string) {
    if (!email) {
      alert('Type in your email first');
    }
    console.log('hello')
    console.log(email);
    this.authService.changePassword(email)
      .then(() => alert('A password reset link has been sent to your email address'))
      .catch(e => alert('An error occurred while attempting to reset your password'))
  }


}
