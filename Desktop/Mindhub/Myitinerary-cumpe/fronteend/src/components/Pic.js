import React from 'react'




class Pic extends React.Component{
render(){

    const picUsuario = {
        borderRadius: 10,
        width: '20vh',
        overflow: 'hidden;'
    }
    
    const general = {
    marginRight: 60,
    // overflow: 'hidden;'    
}


    return (
    <>
    <div style={general}>
        <img style={picUsuario} src={require(`../images/pics/${this.props.nombre}.png`)}/>
        <p style={{fontFamily: 'Bebas Neue', fontSize:25}}>{this.props.nombre}</p>
    </div>   
    </>
        )
    }
}

export default Pic