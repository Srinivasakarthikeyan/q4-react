

import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//--------------------------------------------------------

// React component lifecycle



ReactDOM.render(<App />,document.getElementById('root'));





// React API
//--------------------------------------------------------



// let element = <h1>REACT</h1>;  // JSX  ( more recomended )
// // let element = React.createElement('h1', null, 'REACT'); // without JSX
// console.dir(element);
// ReactDOM.render(element,document.getElementById('root'));


//----------------------------------------------------------

// JSX intro 


// function tick() {
//     let timer = <div> <h1>{new Date().toLocaleTimeString()}</h1> </div>;
//     ReactDOM.render(timer, document.getElementById('root'));
// }

// setInterval(() => { 
//     tick();
// },1000);    


//----------------------------------------------------------


// components and props


/*
    1. functional
    2. class components
*/


// function Welcome(props) {
//     return <h1> Welcome {props.name}</h1>
// }


// class Welcome extends Component{
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <h1> Welcome {this.props.name}</h1>
//     }
// }

// // let welcome = <Welcome name="Nag" />
// // ReactDOM.render(welcome, document.getElementById('root'));

// function App() {
//     return (
//         <div>
//             <Welcome name="Nag" />
//             <Welcome name="Indu" />
//             <Welcome name="Ria"/>
//         </div>    
//     );
// }

// ReactDOM.render(<App />, document.getElementById('root'));

//----------------------------------------------------------


// imp note :  Props in React comp are read-only  *
 

// e.g  'pure functions'

// function sum(a, b) {
//     return a + b;
// }


// by default all react-comps must be like 'pure functions'


//----------------------------------------------------------

// state and lifecycle

// class Clock extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {date:new Date()};
//     }
//     tick() {
//         this.setState({date:new Date()});
//     }
//     componentDidMount() {
//         this.timerId=setInterval(() => { 
//             this.tick();
//         },1000);
//     }
//     componentUnmount() {
//         clearInterval(this.timerId);
//     }
//     render() {
//         return (
//             <div>
//                 <h1> Timer </h1>
//                 <h2>{this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// }    

// ReactDOM.render(<Clock />, document.getElementById('root'));

//---------------------------------------------------------------

// Handling Events

// class ActivateLink extends Component {

//     constructor(props) {
//         super(props);
//         this.handleClick=this.handleClick.bind(this)
//     }

//     handleClick(e) {
//         // console.dir(e);
//         console.log(this);
//         e.preventDefault();
//     }  
    
//     render() {
//         return (
//             <a href="/do" onClick={(e) => { e.preventDefault(); console.log(this) }}> Link </a>
//         );
//     }
// }    

// ReactDOM.render(<ActivateLink />, document.getElementById('root'));


//-------------------------------------------------------------------------------



//  JSX - depth


// function MyComponent(props) {
//     return (<h1>{props.prop1},{props.prop2},{props.prop3}</h1>);
// }


// let o = {prop1:1,prop2:2,prop3:3};
// ReactDOM.render(<MyComponent {...o} />, document.getElementById('root'));



//-------------------------------------------------------------------------------

// function MyContainer(props) {
//     return (
//         <div>
//             my children are <br />
//             {props.children}
//         </div>
//     );
// }


// let nagContainer = <MyContainer> <h1> Ria </h1> <h1> No more </h1> </MyContainer>
// let q4Container = <MyContainer> <h1> emp1 </h1> <h1> emp2 </h1> </MyContainer>

// ReactDOM.render(nagContainer, document.getElementById('root'));


//-------------------------------------------------------------------------------

// Props - Type and default values


// class Product extends Component{

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//                 <h2>{this.props.price}</h2>
//                 <p>{this.props.desc}</p>
//            </div>     
//         );
//     }

// }


// Product.propTypes = {
//     name: PropTypes.string.isRequired,
//     price:PropTypes.number    
// };

// Product.defaultProps = {
//     name: 'Nil',
//     price:0.0   
// };



// var product = <Product name={"Laptop"} desc={"bla bla"} />
// ReactDOM.render(product, document.getElementById('root'));



//--------------------------------------------------------------


// Context API

// class Button extends Component{

//     render() {
//         return (
//             <button> {this.context.commonProp} </button>
//         );
//     }
// }

// Button.contextTypes = {
//   commonProp: React.PropTypes.number
// };



// class Message extends Component{
//     render() {
//         return (
//             <div> {this.props.text} <Button level={this.props.level}/> </div>
//         );
//     }
// }

// class MessageList extends Component{

//     getChildContext() {
//      return {commonProp: 1};
//     }

//     render() {
//         let messages=this.props.messages.map((message,index) => { 
//             return <Message key={index} {...message}/>
//         });
//         return (
//             <div>
//                 {messages}
//             </div>     
//         );
//     }
// }

// MessageList.childContextTypes = {
//   commonProp: React.PropTypes.number
// };



// let messages = [
//     { text: 'javascript', level: 0 },
//     { text: 'react', level: 1 },
//     { text: 'redux', level: 3 },
//      {text: 'Node', level: 4 }
// ];

// ReactDOM.render(<MessageList messages={messages}/>, document.getElementById('root'));


//----------------------------------------------------------------------






