import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/SERVICES/post.service';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  blogName!: Observable<any>;

  faTwitter = faTwitter;

  faFacebook = faFacebook;

  faInstagram = faInstagram;

  faCopyright = faCopyright;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.blogName = this.postService.getBlogName();
  
  }

}
