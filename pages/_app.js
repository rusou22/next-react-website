import Layout from "components/layout"
import "styles/globals.css"

//Font Awesome の設定
//Font AwesomeのCSSをインポート。グローバルスタイルとしてサイト全体に適用します。
import '@fortawesome/fontawesome-svg-core/styles.css'
//Font AwesomeのSVGコアが個別にCSSを適用するのを無効果。
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss =false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Component{...pageProps} />
    </Layout>
  )
}

export default MyApp
