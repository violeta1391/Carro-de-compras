import { Component } from 'react';

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#FFF',
        padding: '15px 20px',
        border: 'solid 1px #eeee',
        borderRadius: '5px', 
        cursor: 'pointer',
    }
}

class Button extends Component {

    render() {
        return (
            <button style={styles.button} {...this.props}/>
        )
    }

}

export default Button;