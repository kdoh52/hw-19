import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import employees from './employees.json';



let testSort = employees

// by id
let newArray = testSort.sort((a, b) => (a.id > b.id) ? 1 : -1)

// by name
// let newArray = testSort.sort((a, b) => (a.name > b.name) ? 1 : -1)

// by birthday
// let newArray = testSort.sort((a, b) => (a.dob > b.dob) ? 1 : -1)

console.log(newArray);


class App extends React.Component {
  state = {
    employees: employees
  };

  // removeFriend = (id) => {
  //   const newArray = this.state.employees.filter(item => item.id !== id);
  //   this.setState({employees: newArray})
  // }
  

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(item => {
          return (
            <EmployeeCard
              name={item.name}
              id={item.id}
              key={item.id}
              image={item.image}
              phone={item.phone}
              email={item.email}
              dob={item.dob}
              // removeFriend={this.removeFriend}
            />
          )
        })}
      </Wrapper>
    );
  }
}

export default App;
