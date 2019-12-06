import React from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import './App.css';

class Filter extends React.Component {
    render() {
      return  <div className="filter-container">
          <DropdownButton id="filter" title="Filter by">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

<DropdownButton id="sort" title="Sort by">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
      </div>
    }
  }
  
export default Filter;