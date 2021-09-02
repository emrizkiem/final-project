import{
    Input,
    FormControl,
    FormLabel

} from "@chakra-ui/react"

function InputGlobal(props){
    const {label, placeholder, onChange, onFocus} = props
    // const label= props.label
    // const placeholder=props.placeholder
    // const onChange = props.onChange
    // const onFocus = props.onFocus
    return(
        <FormControl id="email">
        <FormLabel fontSize="12px" fontWeight="400" color="#66686A">{label}</FormLabel>
        <Input autoComplete="off" onChange={e=>onChange(e.target.value)} onFocus={()=>onFocus? onFocus() : null} type="text"  placeholder={placeholder}/>
      </FormControl>

    )
}

export default InputGlobal