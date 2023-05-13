/* eslint-disable prettier/prettier */
import './index.css'




const CoponentItem = (props) => {
    const { data,onclick,pass } = props
    const { webInput, passwordInput, usernameInput, passList,id } = data
    
    const deletingpass=()=>{
        onclick(id)
    }
    return (
        <li className='passItem'>
            <p className='profile-first-name'>{usernameInput[0]}</p>
            <div className='pass-info-container'>
                <div className='pass-name-pass-web-container'>
                    <p className='webinput'>{webInput}</p>
                    <p className='username'>{usernameInput}</p>
                    {pass ? <p className='password'>{passwordInput}</p> : <img className='pass-img' src='https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png' alt='stars' />}
                </div>
                <div>

                    <button data-testid="delete" onClick={deletingpass} type="button" className="button"><img className='delete-btn' src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png' alt='delete' /></button>
                </div>
            </div>
        </li>
    )

}
export default CoponentItem