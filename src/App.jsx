import { useRef, useState } from 'react'
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
import LifeCycle from './LifeCycle'
import UseRef from './UseRef'
import UnControlled from './UnControlled'
import PassFunction from './PassFunctionAsParameter'
import Ref from './ForwardRef'
import HandleForm from './HandleForm'
import Transition from './Transition'
import Derived from './DerivedState'
import AddUser from './LiftingUpState'
import DisplayUser from './DisplayUser'
import ObjectsInState from './UpdateObjectsInState'
import UpdateArray from './UpdatingArrayInState'
import UseActionHook from './UseAction'
import IdHook from './UseIdHook'


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
  const [count, setCounter] = useState(0);



  const fruit = (name) => {
    alert("ander wala " + name); // ander wala chalta he jub ander or bahir same name sy hun
  }

  const displayName = (name) => {
    alert(name);
  }

  const valueRef = useRef(null);

  const handlevalue = () => {
    valueRef.current.focus();
    valueRef.current.style.color = 'green';
    valueRef.current.value = '1234';
  }

  const [user,setuser]=useState('');

  return (
    <>
      <h1>Hello Kokab</h1>

      <IdHook/>
      
      <UseActionHook/>

    
      <UpdateArray/>

      <ObjectsInState/>

      <AddUser adduser={setuser}/>
      <DisplayUser newuser={user}/>

      <Derived/>

      <Transition/>

      <HandleForm/>

      <Ref ref={valueRef}/>
      <button onClick={handlevalue}>Focus</button>
      <br />


      <PassFunction displayname={displayName} name="Kokab" />
      <PassFunction displayname={displayName} name="Hafsa" />
      <PassFunction displayname={displayName} name="Sabar" />
      <PassFunction displayname={displayName} name="Fahad" />

      <UnControlled />

      <UseRef />

      {
        display ? <LifeCycle count={count} /> : null
      }

      <button onClick={() => setCounter(count + 1)}>Counter</button>
      <button onClick={() => setdisplay(!display)}>Toggle</button>



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
        userData.map((item,index) => (
          <div key={index}>
            <Repeat user={item} />
          </div>
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
