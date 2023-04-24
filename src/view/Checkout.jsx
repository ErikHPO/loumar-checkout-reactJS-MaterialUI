import React from 'react'
import CreditCardForm from '../components/Checkout/CreditCardForm'
import AddressForm from '../components/Checkout/AddressForm'
import ProductTable from '../components/ProductTable/ProductTable'
import {StepperWrapper, StepWrapper} from '../components/Checkout/CheckoutStepper'
import { Box, Container, Divider } from '@mui/material'
import CongratulationsPage from '../components/Checkout/CongratulationsPage'

export default function Checkout(props) {
  return (
    <Container sx={{marginY:'2rem'}}> 
      <StepperWrapper>
          <StepWrapper label='Verifique sua compra'>
                    <ProductTable/>
          </StepWrapper>
          <StepWrapper label={'Preencha os dados para pagamento'}> 
                
                    <Divider sx={{marginTop: '1rem'}} >Endereço da fatura</Divider>
                    <AddressForm/>
                    <Divider>Dados do cartão</Divider>
                    <CreditCardForm />
                
          </StepWrapper>
          <StepWrapper label={'Divirta-se em Foz'}>
                    <CongratulationsPage/>
            </StepWrapper>
        </StepperWrapper>
    </Container>
  )
}
