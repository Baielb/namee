import { Button as MuiButton } from '@mui/material';

const Button = (props) => {
  const { children, bgcolor, color } = props

  return (
    <MuiButton variant="contained"
      sx={{
        background: bgcolor ? bgcolor : "#F0F0F0",
        textTransform: 'none',
        color: color ? color : "#524C6F",
        '&:hover' : {
          background: '#3ab67d',
          color: '#fff'
        }
      }}
    >{children}</MuiButton>
  )
}

export default Button