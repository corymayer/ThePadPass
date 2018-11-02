import React from 'react'
import Quagga from 'quagga'
import cpus from 'cpus'

/*
 * This component uses Quagga to scan code-128 barcodes.
 */
class BarcodeScanner extends React.Component {
    render() {
        return (
            <div id="barcodeScannerView" className="viewport" style={{
                position: 'relative'
            }}>
                <video className="videoCamera" autoPlay={true} preload="auto" src="" muted={true}
                        playsInline={true}></video>
                <canvas className="drawingBuffer" style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}></canvas>
            </div>
        )
    }

    componentDidMount() {
        Quagga.init({
            inputStream : {
              name : "Live",
              type : "LiveStream",
              target: document.querySelector('#barcodeScannerView'),
            },
            decoder : {
              readers : ["code_128_reader"],
              debug: {
                drawBoundingBox: true,
                drawScanline: true,
                showPattern: true,
                showFrequency: false
                }
            },
            numOfWorkers: cpus().length,
            multiple: false,
            locate: true
        }, function(err) {
            if (err) {
                console.log(err);
                return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });

        Quagga.onProcessed(function(result) {
            var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;
    
            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                    });
                }
    
                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
                }
    
                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
                }
            }
        });

        let onDetected = (result) => {
            Quagga.offDetected(this);
            Quagga.stop();
            this.props.onFoundBarcode(result.codeResult.code);
        }

        Quagga.onDetected(onDetected);
    }

    componentWillUnmount() {
        Quagga.stop();
    }
}
export default BarcodeScanner
