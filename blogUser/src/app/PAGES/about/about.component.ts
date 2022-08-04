import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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

  constructor(private postService: PostService, private blobService: BlobService, private spinner: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.spinner.start();
    this.postService.getAboutText().subscribe(text => {
      this.aboutText = text!.text;
      this.spinner.stop();
    });
    this.aboutImageUrl = this.blobService.getAboutImage();
    
  }

}
