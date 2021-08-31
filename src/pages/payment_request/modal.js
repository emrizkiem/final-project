import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    Button,
    Divider

    
} from "@chakra-ui/react"
import {useState} from "react"



function BasicUsage() {
    const [isOpen,setIsOpen]=useState(true)
    function handleopenmodal(){
        setIsOpen(true)

    }

    function handleclosemodal(){
        setIsOpen(false)
    }
    
    return (
      <>
        <Button onClick={()=>handleopenmodal()}>Open Modal</Button>

  
        <Modal isOpen={isOpen} onClose={()=>handleclosemodal()} size="2xl">
          <ModalOverlay opacity={0.8} />
          <ModalContent borderRadius="0">
            <ModalHeader>New Payment Request</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody >
                hwollo
            </ModalBody>
  
            <ModalFooter>
              <Button fontFamily="ub" colorScheme="gray.500" variant="outline" mr={3} onClick={()=>handleclosemodal()}> 
                Tutup
              </Button>
              <Button  colorScheme="red" variant="solid">Submit Payment Request</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default  BasicUsage