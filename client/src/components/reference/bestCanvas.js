import React from 'react'; 
import images from '../img';

const styles = { 
    theme_default : {
        backgroundColor : 'white', 
    }, 
    theme_sky : { 
        backgroundColor : 'lightblue', 
    }, 
    texts : {
        title : { fontSize : 20, fontWeight: 'bold' },
        contents : { fontSize : '1.2rem' },
        date : { fontSize : '1rem', color : 'gray'},
        align : { textAlign : 'center' }
    }, 
    image : { 
        width : 200, 
        height : 100, 
        padding : '2rem'
    },
    button : { 
        backgroundColor : 'blue', 
        color : 'white', 
        fontSize : 20
    }, 
    border : "2px solid rgba(0, 0, 0, 0.05)"
}

class BestCanvas extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = { 
            clicked : false
        }
    }

    // setState(updater func, [callback])
    clickHandler = ()=>{
        this.setState( (state)=>{
            return { clicked : !state.clicked }
        });
    }

    render() { 
        const state = this.state; 
        const date = new Date(); 
        return (
            <div style={state.clicked ? styles.theme_sky : styles.theme_default}>

                <div style={styles.theme_default}>Best Canvas This Week</div>
                    <div className='best-canvas' style={
                        { 
                            display: 'flex', 
                            flexWrap: 'nowrap'
                        }}>
                        <img src={images[0]} style={styles.image} alt="cat"/>
                        <div className='texts'>
                            <h3>My first cat drawing</h3>    
                            <p style={styles.texts.contents}>Author : Jake Sung</p>    
                            <p style={styles.texts.date}>Created at : {date.toLocaleDateString()}</p>    
                        </div>                        
                    </div>
                    <div className="buttons" style={
                        {   
                            display:'flex',
                            flexDirection:'column',
                            position: 'absolute', 
                            right: 0,
                            top: 80,
                            border: "2px solid black"
                        }}>
                        <button onClick={this.clickHandler}>
                            {state.clicked ? "Reset" : "Change color"}
                        </button>
                        <button>Explore more</button>
                    </div>
            </div>
        )
    }
}

export default BestCanvas; 