import Bootstrap from "./Components/Bootstrap";
import "./App.css";
import ReactBoostrap from "./Components/ReactBoostrap";
import MediaCard from "./Components/MaterialUI";
import { Bulma } from "./Components/Bulma";
import PersistentDrawerLeft from "./Components/DrawerMaterial";

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft />
      <h1>Frameworks CSS con React</h1>
      <p>para usar bulma no puedes usarlo al tiempo de usar Bootstrap, </p>
      <hr />
      <Bootstrap />
      <hr />
      <ReactBoostrap />
      <hr />
      <MediaCard />
      <hr />
      <Bulma />
      <hr />
    </div>
  );
}

export default App;
