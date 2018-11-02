import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import 'typeface-roboto';

class LoadingDialog extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          open={ this.props.open }
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Generating Pass..."}</DialogTitle>
          <DialogContent>
            <LinearProgress />
            <div style={{ width: "100%", height: 16 }} />

            <DialogContentText id="alert-dialog-description">
              If this takes more than a 10 seconds, feel free to refresh the page.
              <div style={{ width: "100%", height: 8 }} />
              <code>{ this.props.code }</code>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default LoadingDialog;