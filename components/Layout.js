import React from 'react';
import Header from './Header';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div class = "ui container">
            <Head>
                <link 
                    rel="stylesheet" 
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css">
                        
                </link>
            </Head>
            
            <Header/>
            {props.children}
        </div>
    )
}

export default Layout;