import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Browser from '../components/Browser'
import Carousel from '../components/Carousel'
import Button from 'react-bootstrap/Button';


class Home extends React.Component{
    render(){
        return( 
            <>
           
            <Menu/>
          
            <Header/>
          
            <Browser/>

            <Carousel/>
            </>
        )
    }
}

export default Home 