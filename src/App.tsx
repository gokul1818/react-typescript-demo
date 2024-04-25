import './App.css';
import { BoldStyle } from './components/boldStyle';
import { Button } from './components/button';
import { Heading } from './components/childrenProps';
import { Counter } from './components/counter';
import { Greet } from './components/greet';
import { Input } from './components/input';
import { Status } from './components/status';

function App() {

  const personObj = {
    firstName: "sowmiya",
    lastName: "G"
  }

  const arrayOfObject = [
    {
      firstName: "sowmiya",
      lastName: "G"
    },
    {
      firstName: "gokul",
      lastName: "B"
    },
    {
      firstName: "Krish",
      lastName: "nan"
    },
  ]
  return (
    <div className="App">
      <BoldStyle>
        <Greet name={"hi Sowmiya"} active={true} personObj={personObj} />
        <Heading>
          <Status status='pending' />
          hi sowiya hfyo rouqoiruqoiwuoiqwuroiquroiqeurouo</Heading>
        ajhsdjgasdfh
      </BoldStyle>
      <Input type="text" value='' handleChange={(x) => console.log(x.target.value)} style={{ color: "red" }} />
      <Button handleclick={(id) => console.log("button click", id,)} btnLabel="Click" id={2} />
      <Counter />

    </div>
  );
}

export default App;
