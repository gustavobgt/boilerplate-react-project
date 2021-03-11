import React from 'react';
import { ROOT } from '../../navigation/CONSTANTS'
import {Link } from 'react-router-dom'

const Dashboard: React.FC = () => {
    return (
        <div>
            <Link to={ROOT}>Home</Link>
            <h2>Dashboard</h2>
        </div>
    )
}

export default Dashboard;