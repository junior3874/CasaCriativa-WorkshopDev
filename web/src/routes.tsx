import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import FormModal from './components/FormModal';

import HomePage from './pages/HomePage'
import IdeaList from './pages/IdeaList';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={HomePage} />
            <Route path="/ideias" exact component={IdeaList} />
            <Route path="/modal" exact component={FormModal} />
        </BrowserRouter>
    );
}
export default Routes;