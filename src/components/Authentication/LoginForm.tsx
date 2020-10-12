import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { login } from '../../redux/Authentication/Authentication.actions'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'

const LoginForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
       user: '',
       pass: '' 
    })

    const handleLogin = async() => {
        try {
            //@ts-ignore
            await dispatch(login(form))
            
        } catch (err) {
            Swal.fire(
                'Error', 
                err.response?.data?.message || err.message,
                 'error')
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
    
        setForm({
          ...form,
          [name]: value
        })
      }

    return <Form title="Login - OjtiStock" onSubmit={handleLogin}>
        <Input 
            label="User"
            name="user"
            value={form.user}
            onChange={handleInputChange}
            placeholder="E.g.: your_user_name321"
        />
        <Input
            type="password"
            label="Password"
            name="pass"
            value={form.pass}
            onChange={handleInputChange}
        />
        <Button>
            Login
        </Button>
    </Form>
}

export default LoginForm