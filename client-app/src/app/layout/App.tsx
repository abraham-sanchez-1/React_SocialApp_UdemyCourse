import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[]
}


class App extends Component<{}, IState> {
  readonly state: IState = {
    activities: []
  }

  componentDidMount() {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
    .then((response) => {
      this.setState({
        activities: response.data
      })
    })
    // this.setState({
    //   values: [{id: 1, name: 'Value 101'}, {id: 2, name: 'Value 102'}]
    // })
  }


  render() {
  return (
    <div >
      <Header as='h2'>
        <Icon name='plug' />
      <Header.Content>Reactivities</Header.Content>
      </Header>
      <List>
      {this.state.activities.map((activity) => (
              <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
  
  </List>
        <ul>
          
        </ul>

    </div>
  );
  }
}
// function App() {
//   return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

export default App;
