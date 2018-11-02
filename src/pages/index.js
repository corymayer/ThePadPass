import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import BarcodeScanner from '../components/barcode-scanner'

const IndexPage = () => (
  <Layout>
    <h1>Create Pass</h1>
    <p>Welcome! Scan your membership card here to generate a pass for 
      Apple Wallet.</p>
    <div>
      <BarcodeScanner onFoundBarcode={(barcode) => {
        alert("Found barcode: " + barcode);
      }} />
    </div>
  </Layout>
)

export default IndexPage
