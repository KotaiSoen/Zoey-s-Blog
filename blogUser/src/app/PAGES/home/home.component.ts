import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  // @ViewChildren('blogPosts')
  // posts!: QueryList<ElementRef>

  observer: any;

  intersected: boolean = false;

  blogPosts: Post[] = [];

  backgroundImageUrl!: string;

  blogName!: Observable<any>;


  constructor(private postService: PostService, private blobService: BlobService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    // this.intersectionObserver();
    this.blobService.getBiImage().then((data) => {
      this.backgroundImageUrl = data;
    })
    this.blogName = this.postService.getBlogName();
    this.postService.posts.subscribe((res) => {
      this.blogPosts = res;
      console.log(this.blogPosts);
      this.spinner.hide();
    })
  }

}
