import ReactDOM from 'react-dom';
import el from './App'
import Student from './Student';


ReactDOM.render(el,document.getElementById("2ndroot"));
//ReactDOM.render(<Student name="Kaley" roll="1001"/>,document.getElementById("root"));
ReactDOM.render(<Student name="Kaley" roll={100+1}/>,document.getElementById("root"));

// here whether it is class based or function based index.js is same for both ok

/*
we practice jsx(javascript xml) in APP.js and props concept in Student.js ok 
*/