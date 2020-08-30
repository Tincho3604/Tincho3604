import React from 'react'

class Destinos extends React.Component{

render(){
return (
<>
<div className="imagenesCiudades">

<figure>
<img src={require(`../images/cities/${this.props.valor.imagen}.jpg`)} className="img-responsive"/>

    <div className="tituloCiudades">
        <h4>{this.props.valor.ciudad},  {this.props.valor.provincia}</h4>
    </div> 

</figure>
</div>


</>
        )
    }
}
export default Destinos 