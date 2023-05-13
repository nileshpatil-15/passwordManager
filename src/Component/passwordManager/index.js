/* eslint-disable prettier/prettier */
import { Component } from 'react'

import { v4 } from 'uuid'
import './index.css'
import CoponentItem from '../coponentItem'

export default class PasswordManager extends Component {
    state = {
        webInput: '',
        usernameInput: '',
        passwordInput: '',
        searchInput: '',
        isPasswordShown: false,
        passList: []

    }

     showNoHistoryImage=()=>(

   <div className='no-pass-container'>
         <img className='no-pass-img' src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png' alt='no passwords'/>
         <p className='no-pass'>No Passwords</p>
    </div>
   
)

getFilteredList=()=>{
    const {passList,searchInput}=this.state
const list=passList.filter(eachpass=>eachpass.webInput.toLowerCase().includes(searchInput.toLowerCase())) 
return list
}

deletePassword=(id)=>{
    
this.setState(prevState=>({passList:prevState.passList.filter(eachpass=>eachpass.id!==id)}))
}

onChangebox=()=>{
    this.setState(prevState=>({isPasswordShown:!prevState.isPasswordShown}))
}

    onChangeWebsite = (event) => {
        this.setState({ webInput: event.target.value })
    }

    onChangeSearch = (event) => {
        this.setState({ searchInput: event.target.value })
    }

    onChangeUser = (event) => {
        this.setState({ usernameInput: event.target.value })
    }

    onChangePassword = (event) => {
        this.setState({ passwordInput: event.target.value })
    }

    addPassword = (event) => {

        event.preventDefault()

        const { webInput, usernameInput, passwordInput } = this.state
        const newPassword = {
            webInput,
            usernameInput,
            passwordInput,
            id: v4()
        }

        this.setState(prevState => ({
            passList: [...prevState.passList, newPassword],
            webInput: '',
            usernameInput: '',
            passwordInput: ''
        }))
    }

    render() {
        const { webInput,passwordInput, usernameInput, passList,isPasswordShown } = this.state
        // const renderListOrImage=passList.length
        console.log(passList)
        const filteredList=this.getFilteredList()
        console.log(isPasswordShown)
        return (
            <div className='app-container'>
                <div className='inner-container'>
                    <div className='password-manager-image-container'>
                        <img className='pass-manager-logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' alt='app logo' />
                    </div>
                    <div className='history-input-container'>

                        <img className='pass-manager-img' src='https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png' alt='password manager' />
                        <div className='input-container'>
                            <h1 className='title'>Add New Password</h1>
                            <form onSubmit={this.addPassword}>
                                <div className='item-input-container'>
                                    <img className='earth-logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png' alt='website' />
                                    <input value={webInput} className='input-decoration' onChange={this.onChangeWebsite} placeholder='Enter Website' type='text' />
                                </div>
                                <div className='item-input-container'>
                                    <img className='earth-logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png' alt='username' />
                                    <input className='input-decoration' value={usernameInput} onChange={this.onChangeUser} placeholder='Enter Username' type='text' />
                                </div>
                                <div className='item-input-container'>
                                    <img className='earth-logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png' alt='password' />
                                    <input className='input-decoration' value={passwordInput} onChange={this.onChangePassword} placeholder='Enter password' type='password' />
                                </div>
                                <div className='add-btn-container'>
                                    <button className='add-btn' type="submit">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='main-history-container'>
                        <div className='search-count-container'>
                            <h1 className='password-text'>Your Passwords <span className='count'>{passList.length}</span></h1>
                            <div className='search-container'>
                                <img className='search-logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png' alt='search' />
                                <input type='search' onChange={this.onChangeSearch} className='search-element' placeholder='Search' />
                            </div>
                        </div>
                        <hr />
                        <div className='tick-untick-container'>
                            <input type='checkbox' onChange={this.onChangebox} className='checkbox' />
                            <p className='show-pass-text'>Show Passwords</p>
                        </div>
                        <ul className='password-item-container'>
                            {filteredList.length > 0 ? filteredList.map(eachItem => <CoponentItem data={eachItem} key={eachItem.id} onclick={this.deletePassword} pass={isPasswordShown} />) : this.showNoHistoryImage()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
