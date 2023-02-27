import React, { useState } from 'react'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/navbar'
import { BookMock } from '../../mocks/booking.mock'
import styled from 'styled-components'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export const ScreenTable = styled.div`
top: 0px;
width: 200%;
height: 3rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 2px;
`

function CurrentBookingDashboard() {
  const [checked, setChecked] = useState(false)

  return (
    <div className='container'>
      <SideBar />
      <div className='container__screen'>
        <Navbar />
        <div className='container__screen__login'>

        <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

        </div>

      </div>
    </div>
  )
}

export default CurrentBookingDashboard



