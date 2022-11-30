import React, {useEffect, useState} from 'react';
import {MemeCard} from "../../../types";
import MemePost from "./MemePost";

const url = 'https://api.chucknorris.io/jokes/random'

const Meme = () => {
  const [posts, setPosts] = useState<MemeCard[]>([]);

  // const [postFormShown, setPostFormShown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (response.ok) {
        const posts: MemeCard[] = await response.json();
        const newPosts = posts.map(post => ({
          ...post,
          value: post.value
        }));
        setPosts(newPosts);
      }
    };
    fetchData().catch(console.error);
  }, []);

  // const togglePosts = setPostFormShown(prev => !prev);

  const click = async () => {
    const response = await fetch(url);

    if (response.ok) {
      const posts: MemeCard[] = await response.json();
      const newPosts = posts.map(post => ({
        ...post,
        value: post.value
      }));
      setPosts(newPosts);
  }

  return (
    <>
      {posts.map(post => (
        <MemePost clicked={() => click()} value={post.value}/>
      ))}
    </>
  );
};

export default Meme;