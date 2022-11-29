import React from 'react';

interface Props {
  title: string;
  deletePost: React.MouseEventHandler;
  onNameChange: React.ChangeEventHandler<HTMLInputElement>;
}

class PostItem extends React.Component<Props> {
  componentDidMount() {
    console.log('[PostItem] DidMount');
  }

  componentDidUpdate() {
    console.log('[PostCard] DidUpdate');
  }

  render() {
    console.log('[PostCard] render');
    return (
      <>
        <input value={this.props.title} onChange={this.props.onNameChange}/>
        <button onClick={this.props.deletePost}>X</button>
      </>
    );
  }
}


export default PostItem;