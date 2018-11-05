import React from 'react'
import Typography from '@material-ui/core/Typography';

class PageFinished extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{
                    padding: 16
                }}>
                    <Typography variant="h6" gutterBottom>
                        Enjoy!
                    </Typography>
                    <Typography component="p" variant="body1" gutterBottom>
                        The pass will show up on your lock screen when you get
                        close to the gym. You can use it wherever you normally
                        use your card.
                    </Typography>
                    <Typography component="p" variant="body1" gutterBottom>
                        NOTE: You may need to hold the pass upside down to scan it 🙃
                    </Typography>
                </div>
            </React.Fragment>
        )
    }
}

export default PageFinished