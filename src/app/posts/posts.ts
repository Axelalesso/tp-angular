import { Component, inject } from '@angular/core';
import { Post, PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
    posts : Post[]=[]
    loading:boolean=true
    error : string | null = null
    private   postService = inject(PostsService)
    

    ngOnInit(){
      let observable = this.postService.getPost()
      observable.subscribe(
          {
            next:(posts)=>{
              this.posts = posts
              this.loading =false
            },
            error:(error)=>{
              console.error("el observable fallo en la ejecucion",error)
              this.error ='fallo critico al obtener productos'
              this.loading = false
            }
          }


      )
    }

  }
