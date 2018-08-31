import React from 'react';

const onChange = (evt, updateState) => {
  updateState({family: evt.target.value})
} 

const ChangeFamily = ({family, updateState}) => (
  <div>
    <p>Change the name of the family</p>
    <input type="text" defaultValue={family} onChange={evt => onChange(evt, updateState)} />
  </div>
)

export default ChangeFamily
