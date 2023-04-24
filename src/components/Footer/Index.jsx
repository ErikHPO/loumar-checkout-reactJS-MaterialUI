import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  const theme = useTheme();
  const footerHeight = 100; // altura do Footer em pixels

  const styles = {
    root: {
      position: 'absolute',
      // bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(1),
      boxSizing: 'border-box',
    },
    content: {
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  };

  return (
    <Box paddingTop={'25%'}>
      <Box sx={styles.root}>
        <Box sx={styles.content}>
          <Typography variant="subtitle1">
            © 2023 Loumar - Todos os direitos reservados
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
