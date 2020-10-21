import * as React from 'react';
import { Service } from '../../services/DBService';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default class ServiceOrderDetailComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { id: parseInt(this.props.match.params.id) }
    this._getOrder()
  }

  _getOrder() {
    Service.get('ServiceOrders', this.state.id).then(o => {
      this.setState({ order: o })
    })
  }

  _goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { order } = this.state;
    return <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={this._goBack}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Typography variant="h6">
            Order Details
          </Typography>
        </Toolbar>
      </AppBar>
      <pre>{JSON.stringify(order, null, 2)}</pre>
    </div>
  }
}