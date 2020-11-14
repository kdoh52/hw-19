import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import employees from './employees.json';
import SortButtons from './components/SortButtons';
import FilterButtons from './components/FilterButtons';

let testSort = employees

class App extends React.Component {
  state = {
    employees: employees
  };

  sortId = event => {
    event.preventDefault();
    // console.log("sortId reached")

    let newArray = testSort.sort((a, b) => (a.id > b.id) ? 1 : -1)
    // console.log(newArray)
    this.setState({
      employees: newArray
    });
  }

  sortName = event => {
    event.preventDefault();
    // console.log("sortName reached")

    let newArray = testSort.sort((a, b) => (a.name > b.name) ? 1 : -1)
    // console.log(newArray)
    this.setState({
      employees: newArray
    });
  }

  sortDob = event => {
    event.preventDefault();
    // console.log("sortDob reached")

    let newArray = testSort.sort((a, b) => (a.dob > b.dob) ? 1 : -1)
    // console.log(newArray)
    this.setState({
      employees: newArray
    });
  }

  filterManagers = event => {
    event.preventDefault();
    console.log("managers");

    let newArray = testSort.filter(item => item.title == "Manager");
    this.setState({employees: newArray})
  }

  filterSales = event => {
    event.preventDefault();
    console.log("sales");

    let newArray = testSort.filter(item => item.title == "Salesperson");
    this.setState({employees: newArray})
  }

  filterAccountants = event => {
    event.preventDefault();
    console.log("accountants");

    let newArray = testSort.filter(item => item.title == "Accountant");
    this.setState({employees: newArray})
  }
  

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <SortButtons
          sortId={this.sortId}
          sortName={this.sortName}
          sortDob={this.sortDob}
        />
        <FilterButtons
          filterManagers={this.filterManagers}
          filterSales={this.filterSales}
          filterAccountants={this.filterAccountants}
        />
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
              title={item.title}
            />
          )
        })}
      </Wrapper>
    );
  }
}

export default App;
