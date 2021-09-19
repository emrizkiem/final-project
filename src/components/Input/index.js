import { Box, Image, Input } from '@chakra-ui/react';

function InputGlobal(props) {
    const { label, placeholder, onChange, icon, value, onClickIcon, type } = props;
    return (
        <Box mt="1em">
            <Box fontSize="0.9rem" fontWeight="400" pb="0.6em" color="#66686A">
                {label}
            </Box>
            <Box position="relative">
                <Input
                    defaultValue={value}
                    autoComplete="off"
                    onChange={(e) => onChange(e.target.value)}
                    type={type}
                    placeholder={placeholder}
                />

                {icon && (
                    <Image
                        position="absolute"
                        onClick={() => onClickIcon()}
                        justifyContent="flex-end"
                        alignItems="flex-start"
                        src={'./calendar.png'}
                        alt="calendar"
                        height="20px"
                        width="20px"
                        right="1em"
                        top="7px"
                    />
                )}
            </Box>
        </Box>
    );
}

export default InputGlobal;
