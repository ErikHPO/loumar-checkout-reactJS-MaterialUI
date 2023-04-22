import React from 'react';
import { Formik, Form, Field } from 'formik';
import { creditCardSchema } from '../../utils/checkoutValidations';
import {
  TextField,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import InputMask from 'react-input-mask';


function CreditCardForm() {
  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{
          cardNumber: '',
          cardHolderName: '',
          expirationDate: '',
          cvv: '',
          installment: '',
          acceptTerms: false,
        }}
        validationSchema={creditCardSchema}
        onSubmit={(values) => {
            values.cardNumber = values.cardNumber.replace(/\s/g, '');
          console.log(values);
        }}
      >
        {({ errors, touched, values , handleBlur , handleChange}) => (
          <Form>
            <Box m={2}>
              
            </Box>
            <Box m={2}>
              <Field name="cardHolderName">
                {({ field }) => (
                  <TextField
                    label="Nome do titular do cartão"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={touched.cardHolderName && !!errors.cardHolderName}
                    helperText={touched.cardHolderName && errors.cardHolderName}
                  />
                )}
              </Field>
            </Box>
            <Box m={2}>
              <Field name="cardNumber">
                {({ field }) => (
                  <TextField
                    label="Número do cartão"
                    variant="standard"
                    fullWidth
                    type='tel'
                    {...field}
                    error={touched.cardNumber && !!errors.cardNumber}
                    helperText={touched.cardNumber && errors.cardNumber}
                    InputProps={{
                        inputComponent: InputMask,
                        inputProps: {
                            mask: '9999 9999 9999 9999',
                            maskChar: '',
                            placeholder: '____ ____ ____ ____',
                        },
                    }}
                  />
                )}
              </Field>
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} >
                <Box m={2}>
                
                  <Field name="expirationDate">
                    {({ field }) => (
                    <TextField
                    {...field}
                    label="Data de expiração (mm/aa)"
                    variant="outlined"
                    type='tel'
                    fullWidth
                    error={touched.expirationDate && !!errors.expirationDate}
                    helperText={touched.expirationDate && errors.expirationDate}
                    InputProps={{
                        inputComponent: InputMask,
                        inputProps: {
                            mask: '99/99',
                            maskChar: '',
                        },
                    }}
                />
                    )}


                    
                  </Field>

                </Box>
              </Grid>
              <Grid  item xs={12} sm={6}>
                <Box m={2}>
                  <Field name="cvv">
                    {({ field }) => (
                      <TextField
                        label="CVV"
                        variant="outlined"
                        fullWidth
                        type='tel'
                        {...field}
                        error={touched.cvv && !!errors.cvv}
                        helperText={touched.cvv && errors.cvv}
                        InputProps={{
                            inputComponent: InputMask,
                            inputProps: {
                                mask: '999',
                                maskChar: '',
                               
                            },
                        }}
                      />
                    )}
                  </Field>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} >
        <Box m={2}>
            <Field name="installment">
                {({ field }) => (
                <FormControl variant="outlined" fullWidth>
                    <InputLabel>Parcelas</InputLabel>
                    <Select
                    label="Parcelas"
                    {...field}
                    error={touched.installment && !!errors.installment}
                    >
                    <MenuItem value={1} selected >1x</MenuItem>
                    <MenuItem value={2}>2x</MenuItem>
                    <MenuItem value={3}>3x</MenuItem>
                    <MenuItem value={4}>4x</MenuItem>
                    <MenuItem value={5}>5x</MenuItem>
                    <MenuItem value={6}>6x</MenuItem>
                    <MenuItem value={7}>7x</MenuItem>
                    <MenuItem value={8}>8x</MenuItem>
                    <MenuItem value={9}>9x</MenuItem>
                    <MenuItem value={10}>10x</MenuItem>
                    </Select>
                </FormControl>
                )}
            </Field>
         </Box>
             </Grid>
        <Grid item xs={12} sm={6} >
            <Box m={2}>
            <FormControlLabel
                control={
                    <Checkbox
                    checked={values.acceptTerms}
                    onChange={handleChange}
                    name="acceptTerms"
                    color="primary"
                    required
                    />
                }
                    label={<span className="acceptTerms">Li e aceito os termos e condições de compra </span>}
                    error={touched.acceptTerms && values.acceptTerms}
                   
            />
            </Box>
        </Grid>
            </Grid>

            
        <Button variant="contained" color="checkout" type="submit">
          <Typography fontFamily={'Montserrat'}>
          Realizar Pagamento
            </Typography>
        </Button>
      </Form>
    )}
  </Formik>
</Container>
    );
    }

    export default CreditCardForm;