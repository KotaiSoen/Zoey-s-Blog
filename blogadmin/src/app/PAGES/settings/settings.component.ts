import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlobService } from 'src/app/SERVICES/blob.service';
import { PostService } from 'src/app/SERVICES/post.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private postService: PostService, private blobService: BlobService, private router: Router) { }

  ngOnInit(): void {
  }


  biUpload(event: any) {
    this.blobService.biUpload(event);
  }

  aboutImageUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files![0];
    this.blobService.aboutImageUpload(file);
  }

  createAboutText(text: string, blogName: string) {

    if(text !== '') {
      const aboutText = { text }
      this.postService.createAboutText(aboutText);
    } 

    if(blogName !== '') {
      const blogNameText = { blogName }
      this.postService.createBlogName(blogNameText);
    } 

    this.router.navigate(['home']);

  }
}
