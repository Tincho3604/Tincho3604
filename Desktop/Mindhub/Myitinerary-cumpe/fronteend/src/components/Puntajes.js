import React from 'react'
import Pic from '../components/Pic'

class Puntajes extends React.Component{
   
   
    contarPrecio = num =>  {
        const array=[]
        const imagenLleno = require('../images/globales/billeteLleno.png')
        
        for(var i=0; i < num ; i++){
        array.push(<img style={{width:'8vh',height:'5vh'}}src={imagenLleno}/>)
        
        }
    return array
    }


render(){
    
    const caja= {
        width:'100vh',
        height:'100%',
        margin:'0 auto',
        boxShadow:'10px 10px 40px #d2d2d2',
        background: 'linear-gradient(-90deg, #00fff2, #c3ec94fb)', 
        borderRadius: '100px',
        opacity: '0.9',
        backgroundSize: '100%',
        position: 'relative',
    }
    
return (
<>
<div className="carta">

    <div className="card text-center" style={caja}>

        <div className="card-header" >
            <h5>{this.props.valor.titulo}</h5>
        </div>
        

            <div className="card-body">
                <Pic nombre={this.props.valor.pic} />
                
                <div className="container">
                    <p style={{background: '#fcdbe6', color: '#f15c8e', fontWeight: 'bold', border: '2px solid #fac9d9', borderRadius: '6px'}}>👍 Likes: ❲{this.props.valor.rating}❳</p>
                    <p style={{background: '#bdf0fa', color: '#0c92ac', fontWeight: 'bold', border: '2px solid #abecf9', borderRadius: '6px'}}>⏱ Hours: ❲{this.props.valor.duracion}❳</p>
                    <p style={{background: 'rgb(172, 255, 190)', color: '#0c92ac', fontWeight: 'bold', border: '2px solid #abecf9', borderRadius: '6px'}}>{this.contarPrecio(this.props.valor.precio)}</p> 
                </div>  
            </div>


            <p className="card-text">{this.props.valor.hashtag}</p> 
    
            <div className="card-footer text-muted">
                <button className="btn btn1">View More</button>
            </div>
    
        </div>
    </div>

</>
        )
    }
}
export default Puntajes 