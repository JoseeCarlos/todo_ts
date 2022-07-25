import { BaseSyntheticEvent, useRef } from "react"
import styled from "styled-components"
import { Button } from "../../components/Button"
import { Input } from "../../components/form/Input"
import { Box } from "../../components/layout/Box"
import { Container } from "../../components/layout/Container"

const RegisterContainer = styled.div`
    background-color: white;
    padding: 1rem;
    max-width: 750px;
    margin: 0 auto;
    `

export const Register = () => {

    const registerRef = useRef<any | undefined>();
    const onRegister = (event: BaseSyntheticEvent) => {
        event.preventDefault()
        console.log(registerRef.current)
        const formData = new FormData(registerRef.current)
        const values = Object.fromEntries(formData)
        console.log(values)
    }

    return (
        <Container>
            <form action="" onSubmit={onRegister} ref={registerRef} >
                <RegisterContainer>
                    <Input type="text" 
                    inputProps={{name: "first_name"}}
                    placeholder="Nombre"
                    />
                    <Input type="text" 
                    inputProps={{name: "last_name"}}
                    placeholder="Apellido"
                    />
                    <Input type="text" 
                    inputProps={{name: "email"}}
                    placeholder="Email"
                    />
                    <Input type="password" 
                    inputProps={{name: "password"}}
                    placeholder="Contraseña"
                    />
                    <Input type="password" 
                    inputProps={{name: "password"}}
                    placeholder="Confirmar contraseña"
                    />
                    
                    <Box mt={1}>
                        <Button type="submit">Registrarse</Button>
                    </Box>
                </RegisterContainer>
                
            </form>
        </Container>
    )

}
