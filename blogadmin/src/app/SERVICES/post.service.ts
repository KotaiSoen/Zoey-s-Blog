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

  aboutDoc!: AngularFirestoreDocument;


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

  getAboutText() {
    this.aboutDoc = this.afs.doc('about-text/1');
    return this.aboutDoc.valueChanges();
  }

  createAboutText(text: Object) {
    this.afs.doc('about-text/1').set(text);
  }

  createBlogName(blogName: Object) {
    this.afs.doc('blog-name/1').set(blogName);
  }

  getBlogName() {
    return this.afs.doc('blog-name/1').valueChanges();
  }
}
