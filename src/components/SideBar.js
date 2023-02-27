import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


const NSideBar = styled.div`
  height: 100vh;
  width: 20vw;
  background-color: rgba(191, 196, 241, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`



function SideBar() {

    const navigate = useNavigate();

    return (
        <NSideBar>
            <div className='container__sidebar__logo'>WORKETYAMO</div>
            <button class="learn-more" onClick={() => navigate('/new-user')}>
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow">
                    </span>
                </span>
                <span class="button-text" >Inscriptions</span>
            </button>
            <button class="learn-more" onClick={() => navigate('/booking')}>
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow">

                    </span>
                </span>
                <span class="button-text" >Reservations </span>
            </button>
            <button class="learn-more" onClick={() => navigate('/current-booking-dashboard')}>
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text"  >res. en cours</span>
            </button>
            <button class="learn-more" onClick={() => navigate('/user-list')} >
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text" >Yamo users</span>
            </button>
            <button class="learn-more" onClick={() => navigate('/all-booking-dashboard')}>
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text" >all res.</span>
            </button>
        </NSideBar>
    )
}

export default SideBar
