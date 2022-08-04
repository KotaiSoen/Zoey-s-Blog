import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SPINNER } from 'ngx-ui-loader';
import { Observable } from 'rxjs';
import { Post } from 'src/app/MODELS/post';
import { BlobService } from 'src/app/SERVICES/blob.service';
import { PostService } from 'src/app/SERVICES/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  SPINNER = SPINNER;

  intersected: boolean = false;

  blogPosts: Post[] = [];

  backgroundImageUrl!: string;

  blogName!: Observable<any>;


  constructor(private postService: PostService, private blobService: BlobService, private loader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.loader.start()
    this.blobService.getBiImage().then((data) => {
      this.backgroundImageUrl = data;
    })
    this.blogName = this.postService.getBlogName();
    this.postService.posts.subscribe((res) => {
      this.blogPosts = res;
      this.loader.stop();
    })
  }

  delete(post: Post) {
    this.postService.deletePost(post);
  }
}
