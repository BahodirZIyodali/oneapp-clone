import React from 'react'
import Intro from './Intro'
import './style.css'
import Componies from './Componies';
import Works from './Works';
import Card from './Card';
import Questions from './Questions';
import Img from './Img';
const index = () => {
  return (
    <>
     <Intro/>
     <Img/>
     <Componies/>
     <Works/>
     <Card/>
     <Questions/>
    </>
  )
}

export default index