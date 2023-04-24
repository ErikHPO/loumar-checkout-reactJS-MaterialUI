import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ptBR } from 'date-fns/locale';
import styled from '@emotion/styled';
import { Children } from 'react';
import { Button, Hidden } from '@mui/material';
import { useTheme } from '@emotion/react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      overflow: 'hidden',
    },
    [`&.${tableCellClasses.body}`]: {
        borderRight: '1px solid #E0E0E0',
        fontSize: '1rem',
        //   paddingRight: '1.5rem','
        '&:last-child': {
          border: '1px solid #ffffff',
          width: '100px',
          backgroundColor: theme.palette.neutral.grey,
          [theme.breakpoints.down('sm')]: {
            width: '22%',
        },
      },

},
  }));

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  

  return (
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <Hidden smDown>
        <TableCell size='small' component="th" scope="row">
          {row.type}
        </TableCell>
        </Hidden>
        <StyledTableCell align="right" sx={{width: '20vw', textAlign: 'left' }} >{row.description}</StyledTableCell>
        <StyledTableCell align="center" >{row.quantity}</StyledTableCell>
        <Hidden smDown>
        <StyledTableCell align="center">{row.checkin}</StyledTableCell>
        <StyledTableCell align="center">{row.checkout}</StyledTableCell>
        </Hidden>
       <StyledTableCell align="center"><b>R$ {row.price}</b></StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Observações
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                    <TableRow>
                        {row.observations}
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    checkin: PropTypes.string.isRequired,
    checkout: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('Aéreo', 'Azul - [IGU-CWB] Adulto',1, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 930.50),
  createData('Aéreo', 'Azul - [IGU-CWB] 2 a 11 anos',1, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 4500.00),
  createData('Hospedagem', 'Hotel: [Águas do Iguaçu] Apto. Duplo ' , 2 , new Date().toLocaleDateString(ptBR), new Date("2023-04-28").toLocaleDateString(ptBR), 349.00),
  createData('Atrativos', 'Parque das Aves - Inteiro', 2, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 30.00),
  createData('Atrativos', 'Parque das Aves - Meia', 1, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 15),
  createData('Transfer', 'Transfer Comércio Paraguaio [Cellshop]', 2, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 60, 'Horário de Ida: 07:30 - Horário de Volta: 17:00'),
  createData('Atrativos', 'Macuco Safari - Inteiro', 2, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 250.00),
  createData('Atrativos', 'Macuco Safari - Meia', 1, new Date().toLocaleDateString(ptBR), new Date().toLocaleDateString(ptBR), 125.00),
];

export default function ProductTable({handleNext, handleBack, children, ...props}) {
   
    const theme = useTheme();
    let totalValue = 0;
    rows.forEach((row) => {
        totalValue += +(row.price)*row.quantity;

    });

  return (
    <TableContainer component={Paper} sx={{marginY: '1.5rem'}} >
      <Table aria-label="collapsible table" size='small' padding='none'>
        <TableHead>
            <TableRow>
                <StyledTableCell colSpan={2} sx={{padding:'5px'}}>
                Pedido nº: 123456
                </StyledTableCell>
                <StyledTableCell colSpan={5} >
                Titular: Rodrigo Ciavaglia 

                </StyledTableCell>
            </TableRow>
          <TableRow>
            <StyledTableCell width={'3%'} />
            <Hidden smDown>
            <StyledTableCell  width={'20px'}>Tipo</StyledTableCell>
            </Hidden>
            <StyledTableCell align="left" width={'40%'}>Descrição</StyledTableCell>
            <StyledTableCell align="center" sx={{maxWidth: '45px', width:'2%'}} >QTD</StyledTableCell>
            <Hidden smDown>
            <StyledTableCell align="center" width={'60px'} maxWidth={'100px'} >Check-In</StyledTableCell>
            <StyledTableCell align="center" width={'60px'} >Check-Out</StyledTableCell>
            </Hidden>
            <StyledTableCell align="center" >Valor Unitário</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      <Box backgroundColor={theme.palette.neutral.grey} sx={{display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <Paper elevation={5} sx={{padding: '1rem', width: '30%', textAlign: 'center'}}>
            <b>
                Total: {totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </b>
            </Paper>
            <Button onClick={handleNext} variant='contained' endIcon={<NavigateNextIcon/>} >
                <b>
                AVANÇAR 
                    </b>
            </Button>
        </Box>
    </TableContainer>
  );
}
