import React from 'react';
const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <span onclick={this.props.deleteMe()}> X</span>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
  deleteMe: '',
};

export default Smurf;