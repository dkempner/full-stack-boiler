import React from "react";
import logo from "./logo.svg";
import { Button } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./App.css";

function App() {
  const [bag, setBag] = React.useState([]);
  const removeEffect = React.useEffect(() => {
    setBag(["Initial Memes"]);
  }, []);

  const onClick = () => {
    fetch("/express_backend")
      .then(res => res.json())
      .then(res => {
        setBag([...bag, JSON.stringify(res)]);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary" onClick={onClick}>Make Request</Button>
        <List>
          {bag.map(b => {
            return <ListItem>
              <ListItemText>{b}</ListItemText>
            </ListItem>;
          })}
        </List>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
