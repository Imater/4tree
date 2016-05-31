import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import Tasks from 'containers/Tasks';
import Notes from 'containers/Notes';
import Accordion from 'containers/Accordion';
import NotFound from 'containers/NotFound';
import Components from 'containers/Components';
import DropDownTitle from 'containers/DropDownTitle';
import IconTabs from 'containers/IconTabs';

export default store => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>
      { /* Catch all route */ }
      <Route path="tasks" component={Tasks}/>
      <Route path="notes" component={Notes}/>
      <Route path="accordion" component={Accordion} />
      <Route path="components" component={Components}/>
      <Route path="dropDownTitle" component={DropDownTitle}/>
      <Route path="iconTabs" component={IconTabs}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
