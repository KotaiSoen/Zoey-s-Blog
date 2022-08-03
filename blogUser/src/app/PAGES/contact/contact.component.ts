import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/SERVICES/post.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  focus: boolean[] = [];

  emailForm = this.fb.group({
    name : ['', Validators.required],
    email : ['', [Validators.required, Validators.email]],
    content : ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {

  }

  submit() {
    this.postService.sendEmails(this.emailForm.value);
  }

  onFocus(index: number) {
    this.focus[index] = true;
  }

  onBlur(index: number) {
    this.focus[index] = false;
  }

}
