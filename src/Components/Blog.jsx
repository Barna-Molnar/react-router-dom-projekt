import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Cars from './Cars';
import Dogs from './Dogs';
import Recipes from './Recipes';

function Blog() {
  let { path, url } = useRouteMatch();

  console.log(path, url);
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/recipes`}>Recipes</Link>
        </li>
        <li>
          <Link to={`${url}/dogs`}>Dogs</Link>
        </li>
        <li>
          <Link to={`${url}/cars`}>Cars</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/recipes`} component={Recipes} />
        <Route path={`${path}/cars`} component={Cars} />
        <Route path={`${path}/dogs`} component={Dogs} />
      </Switch>
    </div>
  );
}

export default Blog;
