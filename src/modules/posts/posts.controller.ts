import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostWithAuthor, PostWithExistingAuthor } from './types/post.type';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPostWithExistingAuthor(
    @Body() postWithExistingAuthor: PostWithExistingAuthor,
  ) {
    const { authorId, title, content, published } = postWithExistingAuthor;
    return this.postsService.createPost({
      title,
      content,
      published,
      author: {
        connect: {
          id: authorId,
        },
      },
    });
  }

  @Post()
  async createPostWithNewAuthor(@Body() postWithAuthor: PostWithAuthor) {
    const { title, content, published } = postWithAuthor;
    const { email, name } = postWithAuthor.author;
    return this.postsService.createPost({
      title,
      content,
      published,
      author: {
        create: {
          name,
          email,
        },
      },
    });
  }
}
