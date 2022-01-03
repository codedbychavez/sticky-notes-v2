import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import initAuth from './utils/initAuth'

initAuth()

const MyApp = ({ Component, pageProps }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
)

export default MyApp
