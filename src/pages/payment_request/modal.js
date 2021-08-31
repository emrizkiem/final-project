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
              <Button fontWeight="400" color=" #666666" variant="outline" borderRadius="4px" mr={3} onClick={()=>handleclosemodal()}> 
                Tutup
              </Button>
              <Button  bg="brand.red" variant="solid" color="white" borderRadius="4px">Submit Payment Request</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default  BasicUsage