import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class BlobService {

  constructor(private storage: AngularFireStorage) { }

  async getBiImage() {
    const fileRef = this.storage.ref('/image/background-image');
    return await fileRef.getDownloadURL().toPromise();
  }

  async getAboutImage() {
    const fileRef = this.storage.ref('/image/about-image');
    return await fileRef.getDownloadURL().toPromise();
  }

}
