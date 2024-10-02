import { Post } from './post';



type createPostDTO = Omit<Post, "id">
type updatePostDTO = Partial<Post>