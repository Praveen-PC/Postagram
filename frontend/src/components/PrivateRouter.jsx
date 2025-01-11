import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { context } from '../App'

const PrivateRouter = ({children}) => {
    const isToken=sessionStorage.getItem('token')
    if(!isToken){
       return <Navigate to='/'/>
    }
   return children

}

export default PrivateRouter
