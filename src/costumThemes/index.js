import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      red: "#E51B23",
      black: "#66686a",
      gray: "#CCCDCE"
    },
  },
  fonts: {
    body: "Ubuntu"
  }
})

export default theme