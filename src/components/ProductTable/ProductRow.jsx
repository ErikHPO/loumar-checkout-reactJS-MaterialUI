import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from '@emotion/styled';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { Box, Hidden, Table, TableBody, TableRow, Typography } from '@mui/material';
import PropTypes from 'prop-types';


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


export default function Row(props) {
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
      observations: PropTypes.array.isRequired,
    }).isRequired,
  };
  
export { StyledTableRow, StyledTableCell };