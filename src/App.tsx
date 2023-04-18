import React, {useState} from 'react';
import './App.css';
import AddProfile from './component/AddProfile';
import List from './component/List';

 export interface IState{
    people: {
      name: string
      age: number
      url: string
      desc?: string
    }[]
  }

function App() {

  const celebrities = [
    {
    name: 'James Franco',
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bj_9-dXunubsa_7iZF7SouFPzR70vN08wg&usqp=CAU",
    age: 44,
    desc: "Actor who is in the movie Pineapple Express"
    },
    {
    name: 'David Beckham',
    url: "https://images.businessoffashion.com/profiles/asset/1715/a1f88b4a3c5c5b6761438553fe38ab872d9f59cc.jpeg?auto=format%2Ccompress&fit=crop&h=360&w=660",
    age: 47,
    desc: "Former football player for Manchester United"
    }
  ]
  const [people, setPeople] = useState<IState["people"]>(celebrities)

  return (
    <div className="App">
      <h1>Profile Details</h1>
      <List people={people}/>
      <AddProfile people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
