import React from 'react';

import './App.css';

class Date extends React.Component {

render() {
    const {date} = this.props;
return (

<div>
<h1> The book date is {date} </h1>
</div>
);
}
}
export default Date;
