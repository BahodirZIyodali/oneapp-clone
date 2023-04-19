import React from 'react'
import Intro from './Intro'
import Works from './Works'
import Comp from '../Home/Companies';

import './style.css'
const index = () => {
  return (
 <>
   <Intro/> 
    <Comp/>
    <Works/>
 </>
    )
}

export default index