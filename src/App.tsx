import React, {useState} from 'react';
import Posts from "./container1/components/Posts/Posts";
import Form from "./container1/components/Form/Form";
import {FilmPost} from "../types";

function App() {
  const [posts, setPosts] = useState([
    {title: 'the office', id: '1'},
    {title: 'love, death and robots', id: '2'},
    {title: 'arcane', id: '3'}
  ])

  const addPost = (newPost: FilmPost) => {
    setPosts(prev => [...prev, newPost])
  };

  const changePost = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setPosts(prev => prev.map(post => {
      return post.id === id ? {
        ...post,
        title: event.target.value,
      } : post;
    }));
  }

  const deleteInput = (id: string) => {
    const index = posts.findIndex(p => p.id === id);
    const postsCopy = [...posts];
    postsCopy.splice(index, 1);
    setPosts(postsCopy);
  }

  return (
    <>
      <Form onSubmit={addPost}/>
      <Posts changeName={changePost} posts={posts} deletePost={deleteInput}/>
    </>
  );
}

export default App;
