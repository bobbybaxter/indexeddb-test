import * as React from 'react';
import { Link } from 'react-router-dom';
import { BUCKETS, BUSINESS_UNITS, STATUS } from '../../services/DBService';

export default class HomeComponent extends React.Component {
  render() {
    let refs = []
    BUCKETS.forEach(bu => {
      BUSINESS_UNITS.forEach(b => {
        STATUS.forEach(s => {
          let path = "/serviceOrders/bucket/" + bu + "/businessUnit/" + b + "/status/" + s
          refs.push(<Link to={path}>{path}</Link>)
        })
      })
    })
    return <div>
      <h3>Some Routes</h3>
      {refs.map((r, i) => <li key={i}>{r}</li>)}
    </div>
  }
}