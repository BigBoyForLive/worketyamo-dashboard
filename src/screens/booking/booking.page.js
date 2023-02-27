import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import SideBar from '../../components/SideBar'
import Navbar from '../../components/navbar'
import { Playground, Container, Wrapper, Box, InputDiv } from "../../components/utils"




function Booking() {

    const [value, onChange] = useState(new Date());
    return (
        <Container>
            <SideBar />
            <Playground>
                <Navbar />
                <Box>
                    <div className="metier__body__slider">
                        <div className="metier__body__slider__calendar">
                            <Calendar onChange={onChange} value={value} />
                        </div>
                        <div className="metier__body__slider__input">
                            <input type="text" className="calendar__input" placeholder="nom" />
                            <input type="number" className="calendar__input" placeholder="nombre d'heures" />
                            <InputDiv>
                                <input type="number" className="calendar__input__sub" placeholder="poste" />
                                <input type="number" className="calendar__input__sub" placeholder="pc nbr" />
                            </InputDiv>
                            <button className="signInButton">
                                <span>valider</span>
                            </button>
                        </div>
                    </div>
                </Box>
            </Playground>
        </Container >
    )
}

export default Booking
