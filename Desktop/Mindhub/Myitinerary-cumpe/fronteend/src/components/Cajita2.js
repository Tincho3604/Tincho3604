import React from 'react'

class Cajita2 extends React.Component{
    render(){
    
    const wos = this.props.data1
        return( 
    <>

      <div className="contenedor">
        
        <figure>

        
        <img  src={require(`../images/slider2/${this.props.data}.png`)} className="img-responsive" />
            <div className="capa">

    <h3>{this.props.data}</h3>
            </div>
        </figure>
    </div>
 







        </>
        )
    }
}


export default Cajita2