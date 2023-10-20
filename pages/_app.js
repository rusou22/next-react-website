import layout from "components/layout"
import "style/sample.css"

function MyApp({ Component, pageProps }) {
  return (
    <layout>
     <Component{...pageProps} />
    </layout>
  )
}

export default MyApp