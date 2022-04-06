import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import { Component } from 'react';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick'
import Bind from './Components/Bind'
import ChildComponent from './Components/ChildComponent'
import ParentComponent from './Components/ParentComponent'
import UserGreeting from './Components/UserGreeting'
import NameList from './Components/NameList';
import PersonList from './Components/Personlist';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import ParentComp from './Components/ParentComp';
import RegComp from './Components/RegComp';
import PureComp from './Components/PureComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary'
import ClickCounter from './Components/ClickCounter';
import { UserProvider } from './Components/UserContext';
import ComponentC from './Components/ComponentC';


class App extends Component {
  render(){
  return (
    <div className="App">
      

      <ClickCounter/>
      <UserProvider>
        <ComponentC />
      </UserProvider>
     
      <ErrorBoundary>
      <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"/>
      </ErrorBoundary>
      <FocusInput/>
      <RefsDemo/>
      <PortalDemo/>
        {/* <ParentComp/>*/}
      {/* <Form/>*/}
      {/* <LifecycleA/>*/}
      {/*<PersonList/>*/}

      {/*<UserGreeting/>
      <NameList/>*/}
      
      {/*<ClassClick/>*/}
      {/*<FunctionClick/>*/}
      {/*<Bind/>*/}
      {/*<ParentComponent/>*/}
      {/*<Greet  name="adarsh">*/}
      {/* <h1>PROPS EXAMPLE</h1>*/}
      {/*</Greet>*/}
      {/*<Counter/>*/}
      {/*<Message/>*/}
      {/*<Welcome name="this is welcome" className="class name"/>*/}
      {/*<Hello/>*/}
      </div>
  )}
}

export default App;
