import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM

// WHAT: This variable returns contains the html to render
let name = "O. James";
let output = <span>{name} is 12 years old</span>;

// WHERE: A DOM element that will contain the entire react generated html
const container = document.getElementById("root");

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(output);
