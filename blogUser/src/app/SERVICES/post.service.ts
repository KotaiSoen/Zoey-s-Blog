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
    this.postCollection = afs.collection<Post>('posts', ref => ref.orderBy('date', 'asc'));
    this.posts = this.postCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getOnePost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`).valueChanges();
  }

  getAboutText() {
    this.aboutDoc = this.afs.doc('about-text/1');
    return this.aboutDoc.valueChanges();
  }

  getBlogName() {
    return this.afs.doc('blog-name/1').valueChanges();
  }

  sendEmails(emailInfo: Object) {
    this.afs.doc(`emails/${Math.random().toString(36).substring(2)}`).set(emailInfo);
  }
}
