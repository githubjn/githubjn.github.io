import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private _url = 'https://jsonplaceholder.typicode.com/posts';



  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this._url);
  }

  createPost(post: any) {
    return this.http.post(this._url, post);
  }

  updatePost(post: any) {
    return this.http.patch(this._url + '/' + post.id, JSON.stringify({ isRead: true }));
    //this.http.put(this._url + '/' + post.id, post)

  }

  deletePost(post: any) {
    return this.http.delete(this._url + '/' + post.id);
  }

}
