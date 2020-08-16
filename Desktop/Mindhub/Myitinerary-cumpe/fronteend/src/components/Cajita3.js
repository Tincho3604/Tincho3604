import React from 'react'

class Cajita3 extends React.Component{
    render(){
    
   
        return( 
    <>

      <div className="contenedor">
        
        <figure>

        
        <img  src={require(`../images/slider3/${this.props.data}.png`)} className="img-responsive" />
            <div className="capa">

    <h3>{this.props.data}</h3>
            </div>
        </figure>
    </div>
 







        </>
        )
    }
}


export default Cajita3