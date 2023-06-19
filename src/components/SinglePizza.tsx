import React, { FC, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Pizza from '../models/Pizza';
import EditPizzaForm from './EditPizzaForm';

interface SinglePizzaProps {
    pizza: Pizza,
    updatePizza: (newPizza: Pizza) => void,
    deletePizza: (id: number) => void,
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    return (
        <li className='pizza'>
            <img width='300' src={pizza.img} alt="pizza" />
            <h2>{pizza.title}</h2>
            <span>{pizza.price}₴</span>
            <div className='pizza-controls'>
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={() => deletePizza(pizza.id)}/>
            </div>
            {edit ? 
                <EditPizzaForm data={pizza} {...{updatePizza, handleToggleEdit}}/>
                :
                null
            }
        </li>
    )
}

export default SinglePizza;