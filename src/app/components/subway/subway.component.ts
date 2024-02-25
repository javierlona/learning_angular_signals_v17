import { Component, computed } from '@angular/core';
import { BulletinService } from '../../services/bulletin.service';
import { Post } from '../../../models/Post';

@Component({
  selector: 'app-subway',
  standalone: true,
  imports: [],
  templateUrl: './subway.component.html',
  styleUrl: './subway.component.css'
})
export class SubwayComponent {

  justBody: string = "";
  postsByUser = computed(() => {
    const posts = this.getPostsFromSpecificUser(this.bulletinService.bulletinArray());
    return posts;
  });


  constructor(public bulletinService: BulletinService) {
  }


  getPostsFromSpecificUser(posts: Post[]) {
    const filteredPosts = posts.filter((post) => {
      return post.userId == 4
    })
    console.log("getPostsFromSpecificUser", filteredPosts)
    return filteredPosts;
  }
}
