import React from 'react';
import TextField from '@mui/material/TextField';

export interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      variant="outlined"
    />
  );
};

export default Input;