import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Post } from 'src/app/MODELS/post';
import { PostService } from 'src/app/SERVICES/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('blogPosts')
  posts!: QueryList<ElementRef>

  observer: any;

  intersected: boolean = false;

  blogPosts: Post[] = []


  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.intersectionObserver();
    this.postService.posts.subscribe((res) => {
      this.blogPosts = res;
      console.log(this.blogPosts);
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.posts);
    console.log(this.posts.last.nativeElement);
    this.observer.observe(this.posts.last.nativeElement);
    }, 2000)
  }

  intersectionObserver() {
  let options = {
    rootMargin: '0px',
    threshold: 0.05,
  }

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.intersected = true;
      }
    }, options);
  }

}
