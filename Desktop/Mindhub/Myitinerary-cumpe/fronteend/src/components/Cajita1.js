import React from 'react'

class Cajita1 extends React.Component{
    render(){
    
    const wos = this.props.data
        return( 
    <>

        <div className="contenedor">
        
            <figure>
            
            <img  src={require(`../images/slider1/${this.props.data}.png`)} className="img-responsive" />

                <div className="capa">

        <h3>{this.props.data}</h3>

                </div>
            </figure>
        </div> 
    


        </>
        )
    }
}


export default Cajita1