import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  currentPosts: any[] = [];

  constructor(private postService: PostService) { }

  async ngOnInit() {
    this.posts = await this.postService.getPosts();
  }

}
