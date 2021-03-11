import React from 'react';
import { ROOT } from '../../navigation/CONSTANTS'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { decrement, increment } from '../../store/Stock/Stock.actions';

export const Page1: React.FC = () => {
    const dispatch = useDispatch();
    const stock = useSelector<RootState>(state => state.stock);

    return (
        <div>
            <Link to={ROOT}>Home</Link>
            <h2>Page 1</h2>
            { stock }
            <button onClick={() => dispatch(increment())}>Somar</button>
            <button onClick={() => dispatch(decrement())}>Subtrair</button>
        </div>
    )
}
