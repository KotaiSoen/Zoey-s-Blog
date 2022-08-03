import { Component, OnInit } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material/icon';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(private postService: PostService, private blobService: BlobService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.postService.getAboutText().subscribe(text => {
      this.aboutText = text!.text;
      this.spinner.hide();
    });
    this.aboutImageUrl = this.blobService.getAboutImage();
    
  }

}
