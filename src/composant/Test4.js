import React,{Component} from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import App from '../App.js'
 
class Test4 extends Component {
 
  submit = (props) => {
    confirmAlert({
      title: '',
      message: 'Confirmer la suppression',
      buttons: [
        {
          label: 'oui',
          onClick: () =>console.log(props.user)
        },
        {
          label: 'Non',
          onClick: () => console.log("blabla")
        }
      ]
    })
  }
 
  render() {
    return (
      <div className="container">
        <button onClick={this.submit } >X</button>
      </div>
    ); 
  }
}
export default Test4