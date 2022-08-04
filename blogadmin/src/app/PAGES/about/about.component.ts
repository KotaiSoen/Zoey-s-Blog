import { Component, OnInit } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { BlobService } from 'src/app/SERVICES/blob.service';
import { PostService } from 'src/app/SERVICES/post.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutText!: string;

  aboutImageUrl!: Promise<any>;

  constructor(private postService: PostService, private blobService: BlobService) { }

  ngOnInit(): void {
    this.postService.getAboutText().subscribe(text => {
      this.aboutText = text!.text;
    });
    this.aboutImageUrl = this.blobService.getAboutImage();
    
  }

}
