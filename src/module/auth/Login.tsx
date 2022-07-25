import React, {useState} from "react"
import { BaseSyntheticEvent } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { Button } from "../../components/Button"
import { Input } from "../../components/form/Input"
import { Box } from "../../components/layout/Box"
import { Container } from "../../components/layout/Container"
import { Card } from "../../components/testComponents/Card"
import { Title } from "../../components/text"
import { setActiveUser } from "../../redux/auth"
import { setToken } from "../../utils/auth"
import { isValid, validate, VALIDATION } from "../../utils/validator"


const LoginContainer = styled.div`
    background-color: white;
    padding: 1rem;
    max-width: 750px;
    margin: 0 auto;
    `

export const Login = () => {

    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({username: [], password: []})
    const fields = {
        username: [VALIDATION.REQUIRED, VALIDATION.EMAIL],
        password: [VALIDATION.REQUIRED]
    }

    const handleOnChange = (event: BaseSyntheticEvent)=> {
        event.preventDefault()
        const { name, value } = event.target 
        setLoginData({...loginData, [name]: value})
    }

    const onLogin = (event: BaseSyntheticEvent) => {
        event.preventDefault()
        console.log(loginData)
        const newErrors: any=validate(loginData, fields)
        setErrors(newErrors)
        if(isValid(errors) ){
            console.log('Los datos son validos')
            setToken('token_test')
            dispatch(setActiveUser(true))

            //TODO: metodo para hacer el login
        }
    }

    return (
        <Container>
            <form action="" onSubmit={onLogin} >
                <LoginContainer>
                    <Input type="text" 
                    inputProps={{name: "username"}}
                    placeholder="Username"
                    value={loginData.username} onChange={handleOnChange}
                    errors={errors.username} />
                
                    <Input type="password" 
                    inputProps={{name: "password"}}
                    placeholder="Password"
                    value={loginData.password} onChange={handleOnChange} 
                    errors={errors.password} />
                    
                    <Box mt={1}>
                        <Button type="submit">Enviar</Button>
                    </Box>
                </LoginContainer>
                
            </form>
        </Container>
    )
    }