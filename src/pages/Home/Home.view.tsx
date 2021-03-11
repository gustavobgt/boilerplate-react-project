import React from 'react'
import { DASHBOARD, ROOT } from '../../navigation/CONSTANTS'
import { useHistory } from 'react-router-dom'

import { HomeProps }  from './Home.model'

const HomeView: React.FC<HomeProps> = props => {
    const history = useHistory();

    const goTo = (path: string):void => {
        history.push(path || ROOT);
    }
    
    return (
        <div>
          <h2>HomeView {props.title}</h2>
          <button onClick={()=>goTo(DASHBOARD)}>Dashboard</button>
        </div>
    );
}

export default HomeView
