// Functional Components
//Props - properties object props.property

function Pizza(props) {
  return (
    // JSX - Javascript XML
    // React.createElement(div, ...)

    <div class="pizza">
      <h1>{props.name}</h1>
    </div>
  );
}

//function(Components), where to add on the DOM
ReactDOM.render(<Pizza name="PizzaHut" />, document.getElementById("root"));
ReactDOM.render(<Pizza name="Domino's" />, document.getElementById("root2"));
