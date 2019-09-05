import React from 'react';
import './App.css';

class Author extends React.Component {

render() {
  const {name} = this.props;
return (

<div>
<h1> the author name is {name} </h1></div>
);
}
}
export default Author;
