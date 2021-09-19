import { BellIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Image,
    Spacer,
    Stack,
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';

function Header() {
    return (
        <Box display="flex" height="100px" alignItems="center">
            <Image
                marginLeft="100px"
                width="340px"
                src={'/assets/images/logo.svg'}
                alt="Logo"
            />
            <Spacer />
            <BellIcon w={8} h={8}></BellIcon>
            <Wrap>
                <WrapItem alignItems="center" marginRight="50px">
                    <Avatar
                        name="John Doe"
                        src="https://bit.ly/sage-adebayo"
                        marginLeft="30px"
                        marginRight="20px"
                    ></Avatar>
                    <Stack spacing={0} marginLeft="17px" marginRight="150px">
                        <Text fontSize="lg" fontWeight="500">
                            John Doe
                        </Text>
                        <Text fontSize="sm">Unit Kerja</Text>
                    </Stack>
                </WrapItem>
            </Wrap>
        </Box>
    );
}
export default Header;
