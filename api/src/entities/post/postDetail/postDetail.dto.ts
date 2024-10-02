import { PostDetail } from "./postDetatil"


type createPostDetailDTO = Omit<PostDetail, "id">
type updatePostDetailDTO = Partial<PostDetail>