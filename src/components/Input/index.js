import{
    Input,
    FormControl,
    FormLabel,
    Box

} from "@chakra-ui/react"

function InputGlobal(props){
    const {label, placeholder, onChange, onFocus,value} = props
    // const label= props.label
    // const placeholder=props.placeholder
    // const onChange = props.onChange
    // const onFocus = props.onFocus
    return(
        <Box mt="1em">
        <Box fontSize="0.9rem" fontWeight="400" pb="0.6em" color="#66686A">{label}</Box>
        <Input onFocus={()=>onFocus?onFocus():null} defaultValue={value} autoComplete="off" onChange={e=>onChange(e.target.value)}  type="text"  placeholder={placeholder}/>
      </Box>
      )

    }


export default InputGlobal