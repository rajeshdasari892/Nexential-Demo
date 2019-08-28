import React, { Component } from 'react'; 
import ReactTutorial from './ReactTutorial';
import Python from './Python';
import Android from './Android';
import '../App.css';



class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "python"
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    let selectValue = e.target.value;
    this.setState({ selectValue });
  }
  render() {
    const { selectValue } = this.state;
    return (
      <div>
        <div>
          <span>Select:</span>
          <select className="select" onChange={e => this.onChange(e)}>
            <option value="python">Python</option>
            <option value="react">React</option>
            <option value="android">Android</option>
          </select>
          <hr />
        </div>
        {selectValue === 'react' && <ReactTutorial />}
        {selectValue === 'python' && <Python />}
        {selectValue === 'android' && <Android />}
      </div>
    );
  }
}

export default Jobs;

