import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
 <React.Fragment>
   <Header />
    {props.chidren}
   <Footer />
 </React.Fragment> 
)

export default Layout