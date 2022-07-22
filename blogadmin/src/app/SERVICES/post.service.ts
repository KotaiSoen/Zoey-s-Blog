import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../MODELS/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  postDoc!: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) { 
    this.postCollection = afs.collection<Post>('posts', ref => ref.orderBy('date', 'desc'));
    this.posts = this.postCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  addPost(post: Post) {
    this.postCollection.add(post);
  }

  deletePost(post: Post) {
    this.postDoc = this.afs.doc<Post>(`posts/${post.id}`);
    this.postDoc.delete();
  }

  updatePost(post: Post) {
    this.postDoc = this.afs.doc<Post>(`posts/${post.id}`);
    this.postDoc.update(post);
  }

  getOnePost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`).valueChanges();
  }
}
