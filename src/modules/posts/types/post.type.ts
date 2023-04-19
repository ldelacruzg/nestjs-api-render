import { Post } from '@prisma/client';

export type PostWithPropsNotRequired = Partial<
  Pick<Post, 'content' | 'published'>
>;

export type PostWithPropsRequired = Required<Pick<Post, 'title' | 'authorId'>>;

export type PostWithExistingAuthor = PostWithPropsNotRequired &
  PostWithPropsRequired;

export type PostWithAuthor = {
  title: string;
  content: string;
  published: boolean;
  authorId: number;
  author: {
    name?: string;
    email: string;
  };
};
