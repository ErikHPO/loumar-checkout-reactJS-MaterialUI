import * as yup from 'yup';
import { parse } from 'date-fns';

const creditCardSchema = yup.object().shape({
    cardNumber: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[0-9 ]{15,19}$/, "Número do cartão inválido"),
  cardHolderName: yup.string().required("Campo obrigatório")
  .matches(/^[a-zA-Z ]{0,30}$/, "Insira o nome exatamente como no cartão"),
  expirationDate: yup.string().required("Campo obrigatório")
  .test('valid-date', 'Não é uma data válida', function (value) {
    const [month, year] = value.split('/');
    const expiration = parse(`01/${month}/${year}`, 'dd/MM/yy', new Date());
    const now = new Date();
    return expiration > now;
  }),
  cvv: yup.string().required("Campo obrigatório").matches(/^[0-9]{3}$/, "CVV inválido"),
  installment: yup.string().required("Campo obrigatório"), 
  acceptTerms: yup.boolean().oneOf([true], "Você deve aceitar os termos e condições para prosseguir"),
});

const addressSchema = yup.object().shape({
    street: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    complement: yup.string(),
    CEP: yup.string().required("Campo obrigatório")
    .matches(/^\d{5}-\d{3}$/, "CEP inválido"),
    city: yup.string().required("Campo obrigatório"),
    // .matches(/^[a-z A-Z ]{0,30}$/, "Insira o nome da cidade"),
    state: yup.string().required("Campo obrigatório"),
})

export {creditCardSchema, addressSchema};