import { Component, computed } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../../models/Post';

@Component({
  selector: 'app-subway',
  standalone: true,
  imports: [],
  templateUrl: './subway.component.html',
  styleUrl: './subway.component.css'
})
export class SubwayComponent {
  postBody: string = "";
  /**
   * The line below will not work if postsByUser is not a computed signal
  */
  // postsByUser: Post[] = this.postsService.postsArray()

  /**
   * A computed signal derives its value from other signals,
   * whenever 'postsArray' updates, Angular knows that anything which
   * depends on it will need to update as well.
   */
  postsByUser = computed(() => {
    const posts = this.getPostsFromSpecificUser(this.postsService.postsArray());
    return posts;
  });


  constructor(public postsService: PostsService) {
    /**
     * The console log will display an empty arrary because the information has * not been received from the service, also it is not aware it needs
     * to update.
     */
    console.log("subway constructor", this.postsService.postsArray())
    /**
     * postBody will remain an empty string because it is defined
     * at runtime and not aware it needs to change.
     */
    this.postBody = this.postsService.postsInfo().body ?? "";
    /**
     * The line below will not work if postsByUser is not a computed signal
     */
    // this.postsByUser = this.getPostsFromSpecificUser(this.postsService.postsArray());
  }


  getPostsFromSpecificUser(posts: Post[]) {
    const filteredPosts = posts.filter((post) => {
      return post.userId == 4
    })
    console.log("getPostsFromSpecificUser", filteredPosts)
    return filteredPosts;
  }
}
