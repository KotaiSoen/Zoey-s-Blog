import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/MODELS/post';
import { PostService } from 'src/app/SERVICES/post.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  editorText = '';
  id!: string;
  postInfo!: Post;
  post!: string;

  constructor(private route: ActivatedRoute, private postService: PostService) { 
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.postService.getOnePost(this.id).subscribe((data) => {
        this.postInfo = data!;
        this.post = data?.text;
      })
    })
  }

  ngOnInit(): void {
  }

}
