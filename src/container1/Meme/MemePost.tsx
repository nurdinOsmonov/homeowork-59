import React from 'react';

interface Props {
  value: string;
  clicked: React.MouseEventHandler
}

const MemePost: React.FC<Props> = (props) => {
  return (
    <>
      <div>
        <h1>{props.value}</h1>
        <button onClick={props.clicked}>Show</button>
      </div>
    </>
  );
};

export default MemePost;