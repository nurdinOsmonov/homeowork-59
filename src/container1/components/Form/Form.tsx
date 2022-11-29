import React, {useState} from 'react';
import {FilmPost, FilmPostMutation} from "../../../../types";

interface Props {
  onSubmit: (post: FilmPost) => void;
}

const Form: React.FC<Props> = ({onSubmit}) => {
  const [post, setPost] = useState<FilmPostMutation>({
    title: '',
  })

  const onPostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setPost(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...post,
    })
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input onChange={onPostChange}/>
      <button type="submit">Add</button>
    </form>
  )
}



export default Form;