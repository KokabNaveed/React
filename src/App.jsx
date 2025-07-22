import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import State from './State'
import User from './User'
import Skills from './Skills'
import Gender from './Gender'
import Array from './ArrayofObjects'
import Repeat from './RepeatComponent'
import Clock from './Clock'
import College from './College'
import Effect from './useEffectHook'


const fruit = (name) => {
  alert("bahir wala " + name); // jub ander wala nae ho ga tub bahir wala chalta
}


function App() {
  const userData = [
    {
      name: 'KOKAB',
      age: '23',
      email: "kokab@text.com",
      id: 1
    },
    {
      name: "Hafsa",
      age: '24',
      email: "hafsa@test.com",
      id: 2
    },
    {
      name: "Sabar",
      age: '21',
      email: "sabar@test.com",
      id: 3
    },
    {
      name: "Fahad",
      age: '18',
      email: "fahad@test.com",
      id: 4
    },
    {
      name: "Najeeb",
      age: '26',
      email: "najeeb@test.com",
      id: 5
    }
  ]

  const college = [
    {
      name: "UET",
      city: "Lahore",
      web: "uet.com",
      student: [
        {
          name: "kokab",
          age: '21',
          email: "kokab@test.com"
        },
        {
          name: "hafsa",
          age: '22',
          email: "hafsa@test.com"
        },
        {
          name: "sabar",
          age: '20',
          email: "sabar@test.com"
        }
      ]
    },
    {
      name: "UMT",
      city: "Islamabad",
      web: "umt.com",
      student: [
        {
          name: "kokab",
          age: '21',
          email: "kokab@test.com"
        },
        {
          name: "hafsa",
          age: '22',
          email: "hafsa@test.com"
        },
        {
          name: "sabar",
          age: '20',
          email: "sabar@test.com"
        }
      ]
    },
    {
      name: "Comsats",
      city: "Karachi",
      web: "cui.com",
      student: [
        {
          name: "kokab",
          age: '21',
          email: "kokab@test.com"
        },
        {
          name: "hafsa",
          age: '22',
          email: "hafsa@test.com"
        },
        {
          name: "sabar",
          age: '20',
          email: "sabar@test.com"
        }
      ]
    },
    {
      name: "Lums",
      city: "Lahore",
      web: "lums.com",
      student: [
        {
          name: "kokab",
          age: '21',
          email: "kokab@test.com"
        },
        {
          name: "hafsa",
          age: '22',
          email: "hafsa@test.com"
        },
        {
          name: "sabar",
          age: '20',
          email: "sabar@test.com"
        }
      ]
    }
  ]

  const [display, setdisplay] = useState(true);
  const [color, setColor] = useState('Purple');



  const fruit = (name) => {
    alert("ander wala " + name); // ander wala chalta he jub ander or bahir same name sy hun
  }

  return (
    <>
      <h1>Hello Kokab</h1>

      <Effect />

      {
        college.map((college, index) => (
          <div key={index}>
            <College college={college} />
          </div>

        ))
      }



      <select onChange={(event) => setColor(event.target.value)} defaultValue={'purple'} name="time" id="time">
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Yellow">Yellow</option>
        <option value="Pink">Pink</option>
        <option value="Green">Green</option>
        <option value="Purple">Purple</option>
      </select>

      <Clock color={color} />


      {
        // repeat component
        userData.map((item) => (
          <Repeat user={item} />
        ))
      }


      <Array />
      <Gender />

      <Skills />

      <button onClick={() => fruit("Apple")}>Click</button>
      <button onClick={() => fruit("Banana")}>Click</button>

      <button onClick={() => setdisplay(!display)}>Toggle</button>
      {display ? <User /> : null}

      <State />
      <Counter />
    </>
  )
}


export default App;
