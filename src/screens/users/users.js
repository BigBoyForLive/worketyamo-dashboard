import React from 'react'
import Navbar from '../../components/navbar'
import SideBar from '../../components/SideBar'
import styled from 'styled-components'

const ScreenTable = styled.div`
top: 0px;
width: 250%;
height: 3rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 2px;
`

function Users() {
    return (
        <div className='container'>
            <SideBar />
            <div className='container__screen'>
                <Navbar />
                <div className='container__screen__login'>
                    <div className='screen__header'>
                        <div className='screen__header__title'>Liste d'utilisateurs</div>
                        <a className='screen__header__button'>new user</a>
                    </div>
                    <ScreenTable>
                        <p className='title-table'>Full Name</p>
                        <p className='title-table'>Contact</p>
                        <p className='title-table'>Occupation/Etablissements</p>
                        <p className='title-table'>Matricule/CNI</p>
                        <p className='title-table'>Age </p>
                        <p className='title-table'>Quartier </p>
                        <p className='title-table'>Spécialité</p>
                        <p className='title-table'>Date d'inscription</p>
                    </ScreenTable>
                    <ScreenTable>
                        <p>lorem ipsum</p>
                        <p>657464596/657464596</p>
                        <p>étudiant</p>
                        <p>67098YHJHV67875HHBHKJH7785</p>
                        <p>23</p>
                        <p>Date d'inscription</p>
                        <p>Mimboman </p>
                        <p>informatiques</p>
                    </ScreenTable>
                    <ScreenTable>
                        <p>lorem ipsum</p>
                        <p>657464596/657464596</p>
                        <p>étudiant</p>
                        <p>67098YHJHV67875HHBHKJH7785</p>
                        <p>23</p>
                        <p>Date d'inscription</p>
                        <p>Mimboman </p>
                        <p>informatiques</p>
                    </ScreenTable>
                    <ScreenTable>
                        <p>lorem ipsum</p>
                        <p>657464596/657464596</p>
                        <p>étudiant</p>
                        <p>67098YHJHV67875HHBHKJH7785</p>
                        <p>23</p>
                        <p>Date d'inscription</p>
                        <p>Mimboman </p>
                        <p>informatiques</p>
                    </ScreenTable>
                    <ScreenTable>
                        <p>lorem ipsum</p>
                        <p>657464596/657464596</p>
                        <p>étudiant</p>
                        <p>67098YHJHV67875HHBHKJH7785</p>
                        <p>23</p>
                        <p>Date d'inscription</p>
                        <p>Mimboman </p>
                        <p>informatiques</p>
                    </ScreenTable>
                </div>

            </div>
        </div>
    )
}

export default Users
