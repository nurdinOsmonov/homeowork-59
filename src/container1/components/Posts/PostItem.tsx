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
    console.log('[PostItem] DidUpdate');
  }

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return this.props.title !== nextProps.title;
  }

  render() {
    console.log('[PostItem] render');
    return (
      <>
        <input value={this.props.title} onChange={this.props.onNameChange}/>
        <button onClick={this.props.deletePost}>X</button>
      </>
    );
  }
}


export default PostItem;