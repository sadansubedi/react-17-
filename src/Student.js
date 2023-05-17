//import React from "react";
import React, { Component } from "react";
/*
//function based component
const Student = props =>{
    return(
        <div>
            <h1>Hello {props.name} dai</h1>
            <h1>Your Roll no: {props.roll} </h1>
        </div>
    );
};
export default Student;
*/


//class based component where component is import line no 2 and (this) keyword used for props ok
class Student extends Component{
  render(){
    return(
        <div>
            <h1>Hello {this.props.name} dai</h1>
            <h1>Your Roll no: {this.props.roll} </h1>
        </div>
    )
  }
}
export default Student;
