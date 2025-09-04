import { useState } from 'react'
import './login.css'
import Button from '../../components/Button/index.jsx'
import Input from '../../components/Input/index.jsx'
import { users } from '../../Users.js'
import Modal from '../../components/Modal/index.jsx'
import { useNavigate } from 'react-router'

const Login = () => {
    const [emailValue, setEmailValue] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [modalState, setModalState] = useState(false)

    const navigate = useNavigate()

    const updateEmailValue = (e) => {
        setEmailValue(e.target.value)
    }
    const updatePasswordValue = (e) => {
        setPassword(e.target.value)
    }

    const validateLogin = (e) => {
        e.preventDefault();
        const userFound = users.find(user => user.email === emailValue && user.password === password)
        if (!userFound) {
            console.log('failed login')
            setMessage('Invalid Account details')
            setModalState(true)
            return;
        }
        const { role, experience, department } = userFound;

        if (role == 'admin') {
            console.log('Access Granted')
            setMessage('Access Granted')
            setModalState(true)


        } else if (role == 'manager' && experience == 2) {
            console.log('Access Granted')
            setMessage('Access Granted')
            setModalState(true)
  

        } else if (role == 'employee' && experience == 3 && (department == 'it' || department == 'hr')) {
            console.log('Access Granted')
            setMessage('Access Granted')
            setModalState(true)

        } else {
            console.log('Access Denied');
            setMessage('Access Denied')
            setModalState(true)
        }
    }
    const closeModal = () => {
        setModalState(false)

    }



    return (
        <>
     <Modal>
        <div className={`modal-overlay ${modalState ? '' : 'd-none'}`}>
            <div className="modal">
                <h2>Login Status</h2>
                <p id="login-message">{message}</p>
                <button onClick={() => closeModal()}>Close</button>
            </div>
        </div>
    </Modal>
            <div className='flex-row-nowrap w-100' style={{ height: '100vh' }}>
                <div className='loginSection flex-col-wrap align-center justify-center'>
                    <h2 className='loginLine'>Sign in to continue. </h2>

                    <div className='inputs'>
                        <Input type='email' placeHolder='jondoe23@gmailcom' inputID='EMAIL' inputName='E-mail' updatedVal={updateEmailValue} />
                        <Input type='password' placeHolder='Password' inputID='PASS' inputName='Password' updatedVal={updatePasswordValue} />
                        <a href="#" className='forgetBtn'>Forget password</a>
                    </div>

                    <div className='btns'>
                        <Button title='Login' btnClass='login' btnFucntiion={validateLogin} />
                    </div>

                    <div className='or'>or</div>

                    <div className='btns'>
                        <Button title='Google' btnClass='holo' btnFucntiion={validateLogin} />
                        <Button title='FaceBook' btnClass='holo' btnFucntiion={validateLogin} />

                    </div>

                </div>
                <div className='loginBackground w-75'>

                </div>
            </div>
        </>
    )
}

export default Login
