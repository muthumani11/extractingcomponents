import React from 'react';
import Appname from './Appname';
import Author from './Author';
import Date from './Date';
import './App.css';

class App extends React.Component {

render() {
return (

<div>
<h1> Hello World </h1>
<Appname name=" saramuthu"/>
<Author name=" Michal"/>
<Date date=" 11/jan/2017"/>

</div>
);
}
}
export default App;
