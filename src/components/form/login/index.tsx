import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { Center } from 'components/center/Center';

export const Login = () => {
    return (
        <Box width="100%"  display="flex" justifyContent="center" mt={10}  >
                <Box bgcolor="blue" width="30%" height="80vh" borderRadius="20px 0px 0px 20px"></Box>
                <Box bgcolor="white" width="30%" height="80vh" borderRadius="0px 20px 20px 0px">
                    <Box >
                        WELCOME
                        <Center>
                            Hello
                        </Center>
                    </Box>
                </Box>
        </Box>
    )
}