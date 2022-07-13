import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('blogPosts', { read: ElementRef})
  posts!: QueryList<ElementRef>

  observer: any;

  intersected: boolean = false;

  blogPosts = [
    {
      'title': 'Hello there',
      'description': 'My name is bumpkin'
    },
    {
      'title': 'Hey girl. There\'s something I gotta tell you. I really love you. More than you can imagine babe',
      'description': 'You are my girl'
    },
    {
      'title': 'Hey baby',
      'description': 'Always be there for me baby'
    },
    {
      'title': 'A woman',
      'description': 'Always thought of as the weaker vessel, but her strength does not lie in her physical power'
    },
    {
      'title': 'Hey baby',
      'description': 'A man has always been the one to shut his feelings off and act like he isn\'t affected by what everyone says. But we all know how sensitive he is within'
    },
    {
      'title': 'Hey God',
      'description': 'Always be there for me God'
    },
  ]

  constructor() {}

  ngOnInit(): void {
    this.intersectionObserver();
  }

  ngAfterViewInit(): void {
    this.observer.observe(this.posts.last.nativeElement);
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
