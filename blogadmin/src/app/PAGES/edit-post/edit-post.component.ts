import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CanComponentLeave } from 'src/app/GUARDS/unsaved-changes.guard';
import { Post } from 'src/app/MODELS/post';
import { BlobService } from 'src/app/SERVICES/blob.service';
import { PostService } from 'src/app/SERVICES/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, CanComponentLeave {

  postInfo!: Post;

  post!: string;

  submitted: boolean = false;

  id!: string;

  editorStyle = {
    height: '400px',
  }

  modules = this.blobService.modules;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, private blobService: BlobService, private loader: NgxUiLoaderService) {}

  canLeave(): boolean {
    if(!this.submitted) {
      return window.confirm('You might have some unsaved changes. Save before leaving')
    }
    return true    
  }

  ngOnInit(): void {
    this.loader.start();
    if(localStorage.getItem('reviewText') === null || localStorage.getItem('reviewText') === 'null' || localStorage.getItem('reviewText') === "") {
      this.route.params.subscribe((params) => {
        this.id = params['id'];
        localStorage.setItem('id', this.id);
        this.postService.getOnePost(this.id).subscribe((data) => {
          this.postInfo = data!;
          localStorage.setItem('postInfo', JSON.stringify(this.postInfo))
          this.post = data?.text;
          this.loader.stop();
        })
      })
    } else {
      this.post = localStorage.getItem('reviewText')!;
      this.postInfo = JSON.parse(localStorage.getItem('postInfo')!);
      this.id = localStorage.getItem('id')!;
      this.loader.stop();
    }
  }

  onChange(change: Event) {
    localStorage.setItem('reviewText', this.post);
  }

  onSubmit() {
    const text = this.post;
    // const date = this.postInfo.date;
    const id = this.id;
    const post = { text, id };
    this.postService.updatePost(post);
    localStorage.clear();
    this.submitted = true;
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
    localStorage.clear();
  }

}
