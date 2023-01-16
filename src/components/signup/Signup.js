// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import './signup.css'

// function Signup({ addNewUser }) {
//     const initFormState = {
//         firstname:'',
//         lastname:'',
//         username: '',
//         email: '',
//         password: ''
//     }

//     const navigate = useNavigate()

//     const [formState, setFormState] = useState(initFormState);
//     const [passConfirmation, setPassConfirmation] = useState({passwordConfirm: ''})


//     const formChange = (e) => {
//         const { name, value } = e.target;
//         setFormState((prevState) => ({...prevState, [name]: value}))
//     }

//     const passwordConfChange = (e) => {
//         const { name, value } = e.target;
//         setPassConfirmation((prevState) => ({...prevState, [name]: value}))
//     }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (formState.password !== passConfirmation.passwordConfirm) {
            alert('Passwords do not match! Please try again.')
        } else {
            await fetch ('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
            })
            .then ((resp) => resp.json())
            .then ((newUser) => {
                addNewUser(newUser)
                setFormState(initFormState)
                navigate('/')
            })
        }
    }

    return(
        <div className="signup-box">
            <h2>Signup</h2>
            <form className='formWrapper' onSubmit= {handleSubmit} autoComplete="off">
                <div className="user-box">
                  <label className = 'label' htmlFor = 'firstname'></label>
                  <input className = 'input' id = 'firstname' type = 'text' name = 'firstname' placeholder = 'Firstname' value = {formState.firstname} onChange = {formChange} required />
                </div>
                <div className="user-box">
                   <label className = 'label' htmlFor = 'lastname'></label>
                   <input className = 'input' id = 'lastname' type = 'text' name = 'lastname' placeholder = 'Lastname' value = {formState.lastname} onChange = {formChange} required />
                </div>
                <div className="user-box">
                   <label className = 'label' htmlFor = 'username'></label>
                   <input className = 'input' id = 'username' type = 'text' name = 'username' placeholder = 'Username' value = {formState.username} onChange = {formChange} required />
                </div>
                <div class = "user-box">
                   <label className = 'label' htmlFor = 'password'></label>
                   <input className = 'input' id = 'password' type = 'password' name = 'password' placeholder = 'Password' value = {formState.password} onChange = {formChange} required />
                   <label className = 'label' htmlFor = 'passwordConfirm'></label>
                   <input className = 'input' id = 'passwordConfirm' type = 'password' name = 'passwordConfirm' placeholder = 'Confirm password' value = {passConfirmation.passwordConfirm} onChange = {passwordConfChange} required />
                   <div class = "button-form"></div>
                   <button className = 'formBtn' type = 'submit'>SUBMIT</button>
            </div>
            </form>
        </div>

    )
// }

// export default Signup