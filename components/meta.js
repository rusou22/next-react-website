import Head from 'next/head'

export default function Meta({ pageTitle }){
    return (
        <head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} />
        </head>
    )
}