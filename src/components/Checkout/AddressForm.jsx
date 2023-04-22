import React from 'react';
import { Formik, Form, Field } from 'formik';
import { addressSchema } from '../../utils/checkoutValidations';
import axios from 'axios';
import {
  TextField,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  FormControlLabel,
} from '@mui/material';
import InputMask from 'react-input-mask';

const brazilianStates = [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];

  async function getAddressByCEP(cep) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

export default function AddressForm(){
    return(
        <Container maxWidth="sm">
      <Formik
        initialValues={{
          street: '',
          number: '',
          complement: '',
          CEP: '',
          city: '',
          state: '',
        }}
        validationSchema={addressSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values , handleBlur , handleChange, setValues, setFieldValue}) => (
          <Form>
            <Box m={2}>
                
                <Field name="CEP">
                    {({ field }) => (
                    <TextField
                    {...field}
                    label="CEP"
                    variant="outlined"
                    fullWidth
                    type="tel"
                    error={touched.CEP && !!errors.CEP}
                    helperText={touched.CEP && errors.CEP}
                    InputProps={{
                        inputComponent: InputMask,
                        inputProps: {
                            mask: '99999-999',
                            maskChar: '',
                            onChange: async( res ) => {
                                if(res.target.value.length === 9){
                                    values.CEP = res.target.value.replace(/-/g, '');
                                    await getAddressByCEP(values.CEP).then((address) => {
                                      console.log('VIA CEP API: ', address);
                                      setValues({
                                        ...values,
                                        CEP: values.CEP,
                                        city: address.localidade,
                                        street: address.logradouro,
                                        // state: address.uf,
                                      });
                                      setFieldValue('state', address.uf);

                                    }).catch((error) => {
                                        console.error(error);
                                    });
                                }
                            }
                        },
                    }}
                />
                    )}
                </Field>

              </Box>
            <Grid container spacing={1}>
                <Grid item xs={8} >
            <Box m={2}>
              <Field name="street">
                {({ field }) => (
                  <TextField
                    label="Logradouro"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={touched.street && !!errors.street}
                    helperText={touched.street && errors.street}
                  />
                )}
              </Field>
            </Box>
                </Grid>
                <Grid item xs={4}>
                <Box m={2}>
              <Field name="number">
                {({ field }) => (
                  <TextField
                    label="Número"
                    variant="standard"
                    fullWidth
                    {...field}
                    error={touched.number && !!errors.number}
                    helperText={touched.number && errors.number}
                    
                  />
                )}
              </Field>
            </Box>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8} >
                <Box m={2}>
                <Field name="city">
                  {({ field }) => (
                  <TextField
                  {...field}
                  label="Cidade"
                  variant="outlined"
                  fullWidth
                  error={touched.city && !!errors.city}
                  helperText={touched.city && errors.city}
              />
                  )}
                </Field>
            </Box>
                </Grid>
                <Grid item xs={12} sm={4} >
                <Box m={2}>
                <Field name="state">
                {() => (
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="state">Estado</InputLabel>
                <Select
                  value={values.state}
                  onChange={handleChange}
                  name='state'
                  inputProps={{
                    name: "state",
                    id: "state",
                  }}
                >
                  {brazilianStates.map((state) => (
                    <MenuItem key={state.value} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
                </Field>
            </Box>
                </Grid>
            </Grid>
            

      </Form>
    )}
  </Formik>
</Container>
    )
}