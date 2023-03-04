import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import {FiAlertTriangle} from 'react-icons/fi'
const Navbar = () => {
  return (
    <div>Navbar
        {/* <Button text="Hola"/>
        <Button text="Hola" color="#fff" background="purple"/>
        <Button text="Hola" variant="primary"/>
        <Button text="Hola" variant="success"/>
        <Button text="Hola" variant="danger"/>
        <Button text="Hola" variant="warning"/>
        <Button text="Hola que tal" variant="danger" size="xs"/>
        <Button text="Hola como estas" variant="warning" size="s"/>
        <Button text="Nuevo archivo" disabled/> */}
        <p>Ximena Silva </p>
        <spam>Portafolio</spam>
        <Input icon={<FiAlertTriangle/>}/>
        <Input width="20%"/>
        <Input icon={<FiAlertTriangle/>} disabled/>
        <Input disabled />
        <Input/>

    </div>
  )
}

export default Navbar