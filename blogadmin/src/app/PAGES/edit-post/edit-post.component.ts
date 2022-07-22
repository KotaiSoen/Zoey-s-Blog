import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  editorText = '';

  editorStyle = {
    height: '400px',
  }

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe((params) => {
      this.editorText = params['text']
    })
  }

  ngOnInit(): void {
  }

}
