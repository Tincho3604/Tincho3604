import React from 'react'


class Browser extends React.Component{
render(){

const flecha = require(`../images/globales/${this.props.archivo}.png`)

return (
<>
    <div className="flech">
        <img src={flecha} id="flechita" alt="Flecha"/>
        
    </div>
</>
        )
    }
}
export default Browser