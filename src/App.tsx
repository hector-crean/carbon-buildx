import React from 'react';
import './App.scss';

import { Button, Content } from 'carbon-components-react';
import Header from './components/header'

//Pages: 
import { Route, Switch } from 'react-router-dom';
import AnalyticsPage from './content/analytics-page/AnalyticsPage'; 
import Builder3DPage from './content/builder3D-page/Builder3DPage';

function App() {
  return (
    <div className="App">

        <Header />
        <Content>
          <Button>Button</Button>
        </Content>

        <Switch>
        <Route exact path="/" component={Builder3DPage} />
        <Route path="/analytics" component={AnalyticsPage} />
        </Switch>
      
    
    </div>
  );
}

export default App;
