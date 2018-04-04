import React, { Component } from "react";
import logo from "./img/3000px-Falabella.png";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { camiones } from "./data/data.json";
import "./App.css";

const ListItem = ({ chofer, patente}) =>
  camiones.map(data => (
    <div className="producto">
      <p>{data.chofer}</p>
      <p>{data.patente}</p>
    </div>
  ));

const Viajes = ({ rutas }) => camiones.map(data => <p>{data.id}</p>);

class App extends Component {
  constructor(props) {
    super(props);
    this.chartEvents = [
      {
        eventName: "select",
        callback(Chart) {
          // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
          console.log("Selected ", Chart.chart.getSelection());
        }
      }
    ];
    this.state = {
      options: {
        title: "Age vs. Weight comparison",
        hAxis: { title: "Age", minValue: 0, maxValue: 15 },
        vAxis: { title: "Weight", minValue: 0, maxValue: 15 },
        legend: "none"
      },
      rows: [[8, 12], [4, 5.5], [11, 14], [4, 5], [3, 3.5], [6.5, 7]],
      columns: [
        {
          type: "number",
          label: "Age"
        },
        {
          type: "number",
          label: "Weight"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <div className={"my-pretty-chart-container"}>
          <Chart
            chartType="ScatterChart"
            rows={this.state.rows}
            columns={this.state.columns}
            options={this.state.options}
            graph_id="ScatterChart"
            width="100%"
            height="400px"
            chartEvents={this.chartEvents}
          />
        </div>
        <ListItem />
      </div>
    );
  }
}

export default App;
