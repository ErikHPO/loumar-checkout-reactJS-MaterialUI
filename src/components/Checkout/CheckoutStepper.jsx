import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

const StepperWrapper = ({ children }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const steps = React.Children.map(children, (child, index) => {
    return <Step key={index} >{child.props.label}</Step>;
  });

  const content = React.Children.toArray(children)[activeStep];

  const clonedChildren = React.Children.map(children, (child) =>
  React.cloneElement(child, { handleNext, handleBack })
);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = { alternativeLabel: true };
          return (
            <Step key={index}>
              <StepLabel  {...labelProps}>{step.props.children}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
      {clonedChildren[activeStep]}

      
    </Box>
  );
};

const StepWrapper = ({ children, label , ...props}) => {
  // pass all props to the children
  const clonedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { ...props })
  );
  return <React.Fragment>{clonedChildren}</React.Fragment>;
};

export { StepperWrapper, StepWrapper };