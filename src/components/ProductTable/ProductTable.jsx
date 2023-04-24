import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, Hidden } from '@mui/material';
import { useTheme } from '@emotion/react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { rows} from './tableDataCreator';
import Row, {StyledTableCell} from './ProductRow';







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
            <Typography fontFamily={'Montserrat'} >
          AVANÇAR
            </Typography>

            </Button>
        </Box>
    </TableContainer>
  );
}
