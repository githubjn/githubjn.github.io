import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private service: PostService) { 
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        (response: any)=>{
          this.posts = response;
      },
        error =>{
          alert('Unexpected error occured.');
          console.log(error); 
      });
  }

  createPost(input: HTMLInputElement){
    let post: any = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          post.id = response;
          this.posts.splice(0, 0, post);
          console.log(response);
      },
      (error: Response) =>{
        if (error.status === 400){
          // this.form.setErrors(error.json());
        }
        else{
          alert('Unexpected error occured.');
          console.log(error); 
        }
    })
  }

  updatePost(post: any){
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
      },
        error =>{
          alert('Unexpected error occured.');
          console.log(error); 
    })
  }

  deletePost(post: any){
    this.service.deletePost( post.id )
    // this.service.deletePost('220')
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          console.log(response);
      },
        (error: Response) =>{
          if (error.status === 404)
            alert('This post has already been deleted :(');
          else{
            alert('Unexpected error occured.');
            console.log(error);
          }           
    })
  }

}
