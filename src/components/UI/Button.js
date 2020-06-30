import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import color from '../../Color'

export const ButtonBlue = styled(Button)({
    background: color.blue01,
    border: 0,
    borderRadius: 6,
    boxShadow: '0 2px 3px 2px rgba(255, 105, 135, .3)',
    color: color.white,
    height: 48,
    padding: '0 30px',
    
    msOverflowStyle: {
        background: color.blueInactive,
        color: color.textRed,
    }
    
});