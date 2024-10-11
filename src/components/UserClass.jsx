import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: "",
                location:"",
                avatar_url:""
            }
        }
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/kk-harjeeth')
        const json = await data.json()
        this.setState({
            userInfo:json
        })
        console.log(json)
    }
    render(){
        return (
            <div className='user-card'>
                <h2>Name:{this.state.userInfo.name}</h2>
                <h3>Location:{this.state.userInfo.location}</h3>
                <img src={this.state.userInfo.avatar_url} alt="" />
            </div>
          )
    }
}

export default UserClass