import React from 'react';

interface Props {
  title: string;
  deletePost: React.MouseEventHandler;
  onNameChange: React.ChangeEventHandler<HTMLInputElement>;
}

const PostItem: React.FC<Props> = (props) => {
  return (
    <>
      <input value={props.title} onChange={props.onNameChange}/>
      <button onClick={props.deletePost}>X</button>
    </>
  );
}


export default PostItem;