import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
import fire from './firebase';

class App extends Component {
  state={
    text : ""
  }

  handleText=e=>{
    this.setState({
      text : e.target.value
    })
  }
  handleSubmit=e=>{
    console.log(this.state.text)
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.text);
    this.setState({
      text : ""
    })
  }

  render(){
    return (
      <div className="App-header">
       <input type ="text" onChange={this.handleText} id="inputText"/>
       <br/>
       <button onClick={this.handleSubmit}> Save </button>
      </div>
    );
  }
}

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       title : 'Visitor-Form',
//       act: 0,
//       index: '',
//       datas : [],
//       errors: []
//     }
//   }
//   componentDidMount(){
//     this.refs.name.focus();
//   }
  
//   fSubmit(e){
//     e.preventDefault();
//     console.log("try");

//     let datas = this.state.datas;
//     let name = this.refs.name.value;
//     let pickupLocation = this.refs.pickupLocation.value;
    

//   //  if(name !== '' && pickupLocation !== ''){
//     if(this.state.act === 0 ){ //new
//       let data = {
//         name, pickupLocation
//       };
//       datas.push(data);
//     }else{     // update
//       let index = this.state.index;
//       datas[index].name = name;
//       datas[index].pickupLocation = pickupLocation;
//     }
    
//     this.setState({
//       datas: datas,
//       act: 0
//     });
//     this.refs.myForm.reset();
//     this.refs.name.focus();
//   };

//   fRemove = (i) => {
//     let datas = this.state.datas;
//     datas.splice(i,1);
//     this.setState({
//       datas: datas
//     });
//     this.refs.myForm.reset();
//     this.refs.name.focus();
//   };

//   fEdit = (i) => {
//     let datas = this.state.datas[i];
//     this.refs.name.value = datas.name;
//     this.refs.pickupLocation.value = datas.pickupLocation;
//     this.setState({
//       act: 1,
//       index: i
//     });
//     this.refs.name.focus();
//   }

//   render () {
//     let datas = this.state.datas;
//   return (
//     <div className="App">
//         <Contacts />
//       <h3>{this.state.title}</h3>
//       <form ref= "myForm" className = "myForm">
//         <input type="text" ref="name" placeholder = "Your Name" className="formField" required/>
//         <input type="text" ref="pickupLocation" placeholder = "Your Pickup Location" className="formField" required/>
//         <button onClick = { (e) => this.fSubmit(e)} className = "myButton">Submit</button>
       
//       </form>
//       <pre>
//           { datas.map((data, i) => 
//               <li key = {i} className = "myList">
//                   {i+1}. {data.name}, {data.pickupLocation}
//                   <button onClick = { () => this.fRemove(i)} className = "myButton">Remove</button>
//                   <button onClick = { () => this.fEdit(i)} className = "myButton">Edit</button>
//               </li>
//             )}
//       </pre>
//     </div>
//   );
//   }
// }

export default App;
