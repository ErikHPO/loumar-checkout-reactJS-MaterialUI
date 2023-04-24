import { ptBR } from 'date-fns/locale';

  function createData(type, description, quantity, checkin, checkout, price, observations) {
    return {
      type,
      description,
      quantity,
      checkin,
      checkout,
      price: price.toFixed(2),    
      observations
    };
  }

const rows = [
    createData('Aéreo', 'Azul - [IGU-CWB] Adulto',1, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 930.50, '[Voo 3555] Foz do Iguaçu - Curitiba - 07:00 - 08:20'),
    createData('Aéreo', 'Azul - [IGU-CWB] 2 a 11 anos',1, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 4500.00),
    createData('Hospedagem', 'Hotel: [Águas do Iguaçu] Apto. Duplo ' , 2 , new Date().toLocaleDateString(ptBR), new Date("2023-04-28").toLocaleDateString(ptBR), 349.00),
    createData('Atrativos', 'Parque das Aves - Inteiro', 2, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 30.00),
    createData('Atrativos', 'Parque das Aves - Meia', 1, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 15),
    createData('Transfer', 'Transfer Comércio Paraguaio [Cellshop]', 2, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 60, 'Horário de Ida: 07:30 - Horário de Volta: 17:00'),
    createData('Atrativos', 'Macuco Safari - Inteiro', 2, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 250.00),
    createData('Atrativos', 'Macuco Safari - Meia', 1, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 125.00),
  ];


  export {createData, rows}