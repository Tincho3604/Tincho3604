import React from 'react'
import notFound from '../images/globales/notFound.png'
class Error extends React.Component{



render(){
    const caja= {
        width:'90vh',
        height:'70vh',
        margin:'0 auto', 
        display:'flex',
        justifyContent:'center',
        // paddingLeft: '15vh',     
        background: 'linear-gradient(-90deg, #fad3cc, #f35959fb)',
        background:'black',
        borderRadius: '100px',
        position: 'relative',
        overflow: 'hidden',
    }

    const imagen = {
        width:'100%',
        height:'50vh',
        margin:'0 auto',
    }
    
    
    

    return (
<>
<div className="carta">
    <div style={caja}>
        <div className="card-header">
            <h4>Itinerario no encontrado</h4>
            <h6>¡Lo sentimos! No se han cargado itinerarios</h6>
            <img style={imagen} src={require(`../images/globales/notFound.png`)} className="img-responsive"/>
        </div>
    </div>
</div>
</>



        )
    }
}
export default Error 