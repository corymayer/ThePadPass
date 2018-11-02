import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import BarcodeScanner from '../components/barcode-scanner'
import LoadingDialog from '../components/loading-dialog'

var code = "";

class IndexPage extends React.Component {
  state = {
    curBarcode: "",
    loadingDialogOpen: false
  };

  render() {
    return (
      <Layout>
        <h1>Create Pass</h1>
        <p>Welcome! Scan your membership card here to generate a pass for 
          Apple Wallet.</p>
        <div>
          <BarcodeScanner onFoundBarcode={(barcode) => {
            this.setState({ curBarcode: barcode, loadingDialogOpen: true })
          }} />
        </div>
        <LoadingDialog code={ this.state.curBarcode } 
                       open={ this.state.loadingDialogOpen } />
      </Layout>
    )
  }
}

export default IndexPage
