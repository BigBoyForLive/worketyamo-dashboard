import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Signbox = styled.div`
width : 500px;
height : 500px;

display : flex;
align-items : center;
justify-content : space-around;
flex-direction : column;
background-color : rgba(109, 157, 197, 0.08);
-webkit-box-shadow: -3px 0px 14px -4px rgba(0,0,0,0.52); 
box-shadow: -3px 0px 14px -4px rgba(0,0,0,0.52);
`;
const Title = styled.div`
width : 100%;
height : 30%;
text-align : center;
display : flex ;
align-items : center;
justify-content : center;
font-size : 24px;
font-weight : bold;
color : #0D2149;
`;

const InputWrapper = styled.div`
width : 100%;
height : 80%;
text-align : center;
display : flex ;
align-items : center;
justify-content : space-around;
flex-direction : column;

padding-bottom : 10%;
`;

const InputContainer = styled.input`
height: 50px;
width: 70%;
border-radius : 10px;
font-size : 18px;
text-align : center;
border : solid 1px gray;
color : #0D2149;
font-weight : 500;
margin : 15px;

`


function SubAdmin() {
    const navigate = useNavigate();


    return (

        <div className='admin-container'>
            <Signbox>
                <Title>
                    Create Admin
                </Title>
                <InputWrapper>
                    <InputContainer placeholder='user name' />
                    <InputContainer placeholder='admin password' type='password' />
                    <InputContainer placeholder='password' type='password' />
                    <button className='signInButton' onClick={() => navigate('/booking')}>
                        <span>Sign In</span>
                    </button>
                </InputWrapper>
            </Signbox>
        </div>


    )
}

export default SubAdmin