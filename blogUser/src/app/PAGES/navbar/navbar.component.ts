import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/SERVICES/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  blogName!: Observable<any>;

  innerWidth!: number;

  open: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.blogName = this.postService.getBlogName();

    this.innerWidth = window.innerWidth;
  }

  openNavbar() {
    this.open = !this.open;
  }

}
