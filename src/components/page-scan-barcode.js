import React from 'react'
import Typography from '@material-ui/core/Typography';

import BarcodeScanner from '../components/barcode-scanner'

class PageScanBarcode extends React.Component {
    state = {
        curBarcode: "",
    };

    render() {
        return (
            <React.Fragment>
                <div style={{
                    padding: 16
                }}>
                    <Typography variant="h6" gutterBottom>
                        Scan Member Card
                    </Typography>
                    <Typography component="p" variant="body1" align="left">
                        Welcome! Scan your membership card here to generate a pass for 
                        Apple Wallet.
                    </Typography>
                </div>
                <BarcodeScanner onFoundBarcode={(barcode) => {
                  this.props.onFoundBarcode(barcode);
                }} />
            </React.Fragment>
        )
    }
}

export default PageScanBarcode