import React from 'react'
class Footer extends React.Component{



    render(){
        const face = require("../images/globales/facebook.png")
        const insta = require("../images/globales/instagram.png")

        return (
            <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
            <div className="container text-center">
           <img src={face}/>
           <img src={insta}/>
            </div>
          </footer>
        

        )
    }
}

export default Footer