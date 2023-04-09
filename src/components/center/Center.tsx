import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

export const Center = (children) => {
    return (
        <Box width="100%"  alignItems="center"  >
           {children}
        </Box>
    )
}