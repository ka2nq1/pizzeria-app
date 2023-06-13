import React, { FC, useState } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from './SinglePizza';

interface DisplayPizzasProps {
    pizzasList: Pizza[],
    updatePizza: (newPizza: Pizza) => void,
    deletePizza: (id: number) => void,
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {

    return (
        <ul className='container'>
            {pizzasList.map((pizza) => (
                <SinglePizza key={pizza.id} {...{pizza, updatePizza, deletePizza}}/>
            ))}
        </ul>
    )
}

export default DisplayPizzas;