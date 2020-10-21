import * as React from 'react';
import { Service } from '../../services/DBService';
import { Link } from 'react-router-dom';
import { CircularProgress, Table, TableHead, TableCell, TableRow, TableBody, AppBar, Toolbar, Typography } from '@material-ui/core';
import './service-orders-list.css';

export default class ServiceOrdersListComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bucket: this.props.match.params.bucket,
      businessUnit: this.props.match.params.businessUnit,
      status: this.props.match.params.status,
      isLoading: true
    }
    this._getOrders()
  }

  _getOrders() {
    let idx = [this.state.bucket, this.state.businessUnit, this.state.status]
    Service.getAll('ServiceOrders', 'BucketBusinessUnitStatus', idx).then(orders => {
      this.setState({ orders: orders, isLoading: false })
    });
  }

  render() {
    let { bucket, businessUnit, status, isLoading } = this.state
    let { orders } = this.state
    return <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            {bucket} - {businessUnit} - {status}
          </Typography>
        </Toolbar>
      </AppBar>

      {orders && <p>Viewing {orders.length} orders</p>}
      {isLoading && <CircularProgress />}
      {
        !isLoading && <Table>
          <TableHead>
            <TableRow>
              <TableCell className="sticky-header">ID</TableCell>
              <TableCell className="sticky-header">Bucket</TableCell>
              <TableCell className="sticky-header">Business Unit</TableCell>
              <TableCell className="sticky-header">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ overflowY: 'scroll' }}>
            {orders && orders.map(o => <TableRow key={o.id}>
              <TableCell>
                <Link to={'/serviceOrders/' + o.id}>{o.id}</Link></TableCell>
              <TableCell>{o.bucket}</TableCell>
              <TableCell>{o.businessUnit}</TableCell>
              <TableCell>{o.status}</TableCell>
            </TableRow>)}
          </TableBody>
        </Table>
      }
    </div >;
  }
}