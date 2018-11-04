import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import LoadingDialog from '../components/loading-dialog'
import PageScanBarcode from '../components/page-scan-barcode'
import PageEnterInfo from '../components/page-enter-info'
import PageFinished from '../components/page-finished'

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const passGenerateURLBase = "https://qsohh8av3a.execute-api.us-west-2.amazonaws.com/dev?";

class IndexPage extends React.Component {
  state = {
    curBarcode: "",
    curName: "",
    loadingDialogOpen: false,
    activeStep: 0
  };

  handleNext = () => {
    if (this.state.activeStep === 1) {
      // we need to generate the pass
      this.setState(state => ({
        loadingDialogOpen: true
      }));
      window.location = passGenerateURLBase + "memberName=" + this.state.curName
        + "&memberNum=" + this.state.curBarcode;
      this.setState(state => ({
        loadingDialogOpen: false,
        activeStep: state.activeStep + 1
      }));
    }
    else {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  getStepContent(step) {
    switch (step) {
      case 0:
        return <PageScanBarcode onFoundBarcode={(barcode) => { 
          this.setState({ curBarcode: barcode, activeStep: 1 }) 
        }} />;
      case 1:
        return <PageEnterInfo curBarcode={ this.state.curBarcode }
                              onNameChange={(name) => {
          this.setState({ curName: name }) 
        }} />;
      case 2:
        return <PageFinished />;
      default:
        throw new Error('Unknown step');
    }
  }

  render() {
    const { activeStep } = this.state;

    return (
      <Layout>
        <React.Fragment>
          <Paper style={{
            "boxShadow": "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
            "backgroundColor": "0xFFF"
          }}>
            <React.Fragment>
              { this.getStepContent(activeStep) }
            </React.Fragment>
            <div style={{
              padding: 16
            }}>
              { activeStep !== 0 && (
                <Button onClick={this.handleBack} style={{
                  marginRight: 8
                }}>
                  Back
                </Button>
              )}
              { 
                (activeStep !== 0) && (activeStep !== 2) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                  >
                    {activeStep === 1 ? 'Generate Pass' : 'Next'}
                  </Button>
                )
              }
            </div>
          </Paper>
        </React.Fragment>
        <LoadingDialog code={ this.state.curBarcode } 
                          open={ this.state.loadingDialogOpen } />
      </Layout>
    )
  }
}

export default IndexPage
