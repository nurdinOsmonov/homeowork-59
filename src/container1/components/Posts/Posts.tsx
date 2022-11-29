import React from 'react';
import PostItem from "./PostItem";
import {FilmPost} from "../../../../types";

interface Props {
  posts: FilmPost[];
  changeName: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  deletePost: (id: string) => void;
}

const Posts: React.FC<Props> = ({posts, changeName, deletePost}) => {
    return (
      <>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.title}
            onNameChange={event => changeName(event, post.id)}
            deletePost={() => deletePost(post.id)}/>
        ))}
      </>
    );

}

export default Posts;