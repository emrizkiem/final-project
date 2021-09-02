import{
    Input,
    FormControl,
    FormLabel,
    Box,
    Image

} from "@chakra-ui/react"

function InputGlobal(props){
    const {label, placeholder, onChange, icon, onFocus,value} = props
    // const label= props.label
    // const placeholder=props.placeholder
    // const onChange = props.onChange
    // const onFocus = props.onFocus
    return(
        <Box mt="1em" >
        <Box fontSize="0.9rem" fontWeight="400" pb="0.6em" color="#66686A">{label}</Box>
        <Box position="relative" >
        <Input onFocus={()=>onFocus?onFocus():null} defaultValue={value} autoComplete="off" onChange={e=>onChange(e.target.value)}  type="text"  placeholder={placeholder}/>
        { icon && <Image position="absolute" src={"./calendar.png"} alt="calendar" height="20px" width="20px" right="1em" top="7px" />
        }
        </Box>
      </Box>

      )

    }


export default InputGlobal