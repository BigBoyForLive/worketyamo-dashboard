import React from 'react'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/navbar'
import { TextInput, InputContainer, InputWrapper, Title, LargeInput, PlaygroundConsole, Playground, Container } from "../../components/utils"
function SignUser() {
    return (
        <Container>
            <SideBar />
            <Playground>
                <Navbar />
                <PlaygroundConsole>
                    <Title>INSCRIPTIONS</Title>
                    <InputWrapper>
                        <InputContainer>
                            <TextInput>full name :</TextInput>
                            <LargeInput type='text' placeholder='nom complet' />
                        </InputContainer>

                    </InputWrapper>
                    <InputWrapper>
                        <InputContainer>
                            <TextInput>contact:</TextInput>
                            <LargeInput type='number' placeholder='contacts' />
                        </InputContainer>
                        <InputContainer>
                            <TextInput>Occupation/Ecole:</TextInput>
                            <LargeInput type='text' placeholder='Occupation/Etablissement' />
                        </InputContainer>

                    </InputWrapper>
                    <InputWrapper>
                        <InputContainer>
                            <TextInput>Matricule/CNI:</TextInput>
                            <LargeInput type='text' placeholder='Matricule/CNI' />
                        </InputContainer>
                        <InputContainer>
                            <TextInput>age:</TextInput>
                            <LargeInput type='number' placeholder='age' />
                        </InputContainer>

                    </InputWrapper>
                    <InputWrapper>
                        <InputContainer>
                            <TextInput>Quartier:</TextInput>
                            <LargeInput type='text' placeholder='Quartier' />
                        </InputContainer>
                        <InputContainer>
                            <TextInput>Spécialité:</TextInput>
                            <LargeInput type='text' placeholder='Spécialité' />
                        </InputContainer>

                    </InputWrapper>

                    <button className='signInButton'>
                        <span>Inscrire</span>
                    </button>
                </PlaygroundConsole>
            </Playground>
        </Container>
    )
}

export default SignUser;
