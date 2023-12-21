
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function PasswordInput({ password, handleChangePassword, flag }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
  
  return (
    <FormControl sx={{ m: 1, width: '490px', '@media (max-width: 450px)': {
      width: '100%', // Set width to 60% on screens with a max width of 600px (adjust the value accordingly)
    }, }} variant="standard">
    <InputLabel htmlFor="standard-adornment-password">{flag ? 'Password' : 'Password Check'}</InputLabel>
    <Input
      id="standard-adornment-password"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={handleChangePassword}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
  );
}