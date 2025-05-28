import { FullPost } from "types/types";
import Card from "../Card";
import EmptyStateMessage from "../EmptyStateMessage";
import React from "react";

interface ListContentProps {
  postsPromise: Promise<FullPost[]>;
}

function ListContent({ postsPromise }: { postsPromise: Promise<FullPost[]> }) {
  const posts = React.use(postsPromise);

  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </>
  );
}

export default ListContent;