import { Component, HostListener, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/MODELS/post';
import { AuthService } from 'src/app/SERVICES/auth.service';
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


  constructor(private postService: PostService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.blogName = this.postService.getBlogName();

    this.innerWidth = window.innerWidth;
  }

  openNavbar() {
    this.open = !this.open;
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['login'])
    })
  }

}
