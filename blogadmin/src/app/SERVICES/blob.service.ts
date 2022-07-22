import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ImageHandler, Options } from 'ngx-quill-upload';
import Quill from 'quill';
import 'quill-emoji/dist/quill-emoji.js';
import BlotFormatter from 'quill-blot-formatter';
Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register('modules/imageHandler', ImageHandler);


import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PostService } from './post.service';


@Injectable({
  providedIn: 'root'
})
export class BlobService {

  constructor(private storage: AngularFireStorage, private postService: PostService) { }

  modules = {
    'emoji-shortname': true,
    'emoji-textarea': false,
    'emoji-toolbar': true,
    blotFormatter: {

    },
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video'],                         // link and image, video
        ['emoji'],
      ],
    },
    imageHandler: {
      upload: (file: File) => {
        return new Promise((resolve, reject) => {
          if (file.size < 5000000) {
            return this.uploadFile(file)
              .then(result => {
                resolve(result)
              })
              .catch(error => {
                reject('Upload failed');
                console.error('Error: ', error);
              });
          } else {
            return reject('Size too large');

          }
        })
      },
      accepts: ['png', 'jpg', 'jpeg', 'jfif']
    } as Options
  }

  // downloadURL!: Observable<string>;

  async uploadFile(file: File) {
    const filePath = `/images/${Math.random().toString(36).substring(2)}`;
    const fileRef = this.storage.ref(filePath);
    await this.storage.upload(filePath, file);
    const downloadURL = await fileRef.getDownloadURL().toPromise();

    return downloadURL;

    

    
    

  }
}
