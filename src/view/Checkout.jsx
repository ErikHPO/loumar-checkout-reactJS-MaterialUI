import React from 'react'
import CreditCardForm from '../components/Checkout/CreditCardForm'
import AddressForm from '../components/Checkout/AddressForm'
import { Box, Divider } from '@mui/material'

export default function Checkout() {
  return (
    <Box>
        <Divider sx={{marginTop: '1rem'}} >Endereço da fatura</Divider>
        <AddressForm/>
        <Divider>Dados do cartão</Divider>
        <CreditCardForm/>
    </Box>
  )
}
