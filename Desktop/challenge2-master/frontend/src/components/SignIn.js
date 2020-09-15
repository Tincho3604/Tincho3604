

import React from 'react'
// import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'
import { Alert } from 'reactstrap'

class SignIn extends React.Component{
    state={
        logUser:{
            user:"",
            password:"",    
        },
        error:"",
    visible:true
    }

    onDismiss = () => {
        this.setState({visible:false})
    }


    getForm = e =>{
        e.preventDefault()
        const property = e.target.name
        const value = e.target.value
        this.setState({
            
            logUser:{
                ...this.state.logUser,
                [property]: value
            }
        })
        
        
    }


    submit =  async e => {
 
        e.preventDefault()
        if (this.state.logUser.name ==="" || this.state.logUser.password === "" ){
            this.setState({
                error: <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                ¡Todos los campos son obligatorios!
              </Alert>
            }) 
        }else{
            const logUser= {user:this.state.logUser.user , password: this.state.logUser.password}
            const response =  await this.props.logUser(logUser)
            
            if (response.success === true){
                Swal.fire({  title: 'Welcome!',  text: `It´s nice to have you again, ${response.user}.`,  icon: 'success',  showConfirmButton: false, timer: 2000,allowOutsideClick: false})
                
                
                
                
            }else{
                this.setState({
                    error: response
                })    
            }
        }
    }

    responseGoogle = async (response) =>{
        this.setState({
            ...this.state,
            logUser:{
                user:response.profileObj.email,
                password:response.profileObj.googleId+response.profileObj.familyName.replace(/ /g, "")
            }
        })
        const res = await this.props.getUser(this.state.logUser)
        console.log(res)
        if(res === true){
            const resp =  await this.props.logUser(this.state.logUser)
            console.log(resp)
            Swal.fire({  title: 'Welcome!',  text: `It´s nice to have you again, ${response.profileObj.givenName}.`,  icon: 'success',  showConfirmButton: false, timer: 2000,allowOutsideClick: false})
            }else{
                Swal.fire({  title: 'You must sign up!',  text: `Please go to create an account, ${response.profileObj.givenName}.`,  icon: 'warning',  showConfirmButton: false, timer: 2000,allowOutsideClick: false})
            }
    }

    
    render(){

        return (
            <>
        
            <div className="signContainer">
                <div className="titleContainer">
                    <div className="line"></div>
                    <h1 className="title">Sign In</h1>
                    <div className="line"></div>
                </div>
                <div className="inputs">
                    <span className = {this.state.error === "" ? "" : "logError"}>{this.state.error}</span>
                    <input className="account" name="user" type="text" placeholder="Enter your user" onChange={this.getForm}></input>
                    <input className="password" type="password" name="password" placeholder="Enter your password" onChange={this.getForm}></input>
                    
                    <button onClick={this.submit} className="send">Sign In</button>
                    {/* <GoogleLogin
                        className="googleBtn"
                        clientId="204753879301-j9otsgm2bstkhae2rs9pf2b4kmgqamlu.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /> */}
                </div>
            </div>
 

            </>
        )
    }
}

// const mapDispatchToProps = {
//     logUser: userActions.logUser,
//     getUser: userActions.getUser
// }

// const mapStateToProps = (state)=>{
//     return{
//         userLog: state.userRed
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


export default SignIn