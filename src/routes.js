import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound';
import React from 'react'


const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home/>
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact/>
    },
    {
        path : '/about',
        exact : false,
        main : () => <About/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound/>
    }
]

export default routes