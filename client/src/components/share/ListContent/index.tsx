import { FullPost } from "types/types";
import Card from "../Card";
import EmptyStateMessage from "../EmptyStateMessage";
import React from "react";

interface ListContentProps {
  postsPromise: Promise<FullPost[]>;
}

function ListContent({ posts }: { posts: Promise<FullPost[]> }) {
  const data: FullPost[] = React.use(posts);

  return data.length === 0 ? (
    <EmptyStateMessage />
  ) : (
    <>
      {data.map((post) => (
        <Card {...post} key={post.id} />
      ))}
    </>
  );
}

export default ListContent;