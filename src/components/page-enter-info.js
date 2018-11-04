import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class PageEnterInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{
                    padding: 16
                }}>
                    <Typography variant="h6" gutterBottom>
                        Membership Information
                    </Typography>
                    <Typography component="p" variant="body1" gutterBottom>
                        Please enter your full name.
                    </Typography>
                    <TextField name="name" placeholder="Full name" 
                               required="true" autoComplete="name"
                               defaultValue={ this.props.previousName }
                               onChange={ (event) => {
                                   this.props.onNameChange(event.target.value);
                               } }>
                    </TextField>
                </div>
            </React.Fragment>
        )
    }
}

export default PageEnterInfo