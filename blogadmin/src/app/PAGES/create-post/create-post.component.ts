import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlobService } from 'src/app/SERVICES/blob.service';
import { PostService } from 'src/app/SERVICES/post.service';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  editor!: FormGroup

  editorStyle = {
    height: '400px',
  }

  editorReviewText = '';

  modules = this.blobService.modules;

  constructor(private builder: FormBuilder, private router: Router, private postService: PostService, private blobService: BlobService) {}

  ngOnInit(): void {
    if(localStorage.getItem('reviewText') != null) {
      this.editorReviewText = JSON.parse(localStorage.getItem('reviewText') || '{}');
    }
    this.editor = this.builder.group({
      text: ''
    })
  }

  onChange(change: Event) {
    // console.log(change);
    localStorage.setItem('reviewText', JSON.stringify(this.editorReviewText));
  }

  onSubmit() {
    const text = this.editor.get('text')?.value;
    const date = new Date();
    const post = { text, date };
    this.postService.addPost(post);
    localStorage.clear();
    this.router.navigate(['home']);
  }

}
