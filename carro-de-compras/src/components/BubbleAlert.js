import { Component } from 'react';

const styles = {
    bubble: {
        backgroundColor: '#E9725A',  
        borderRadius: '15px', 
        color: '#FFFF',
        padding: '2px 10px',   
        fontSize: '0.9rem',   
        width: '20px',
    }
}

class BubbleAlert extends Component {
    getNumber(n) {
        if(!n) { return '' }
        return n > 9 ? '9+' : n
    }
    render() {       
        const { value } = this.props
        return (            
            <div>
                <span style={styles.bubble}>
                    {this.getNumber(value)}
                </span>
            </div>
        )
    }
}

export default BubbleAlert;