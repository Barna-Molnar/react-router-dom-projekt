import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Cars from './Cars';
import Dogs from './Dogs';
import Recipes from './Recipes';

function Blog() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur mollitia omnis temporibus cumque voluptatibus consequuntur magni blanditiis autem qui quibusdam, consequatur officiis, assumenda dolores placeat facilis voluptas reiciendis eum esse debitis necessitatibus, est ad eveniet beatae. Quas possimus distinctio explicabo beatae, quia nostrum quo suscipit sequi, quae nemo architecto? Sequi rem voluptas voluptates corrupti maiores amet quisquam placeat voluptatem esse modi, itaque tenetur nostrum ab nihil tempora, quidem ut architecto tempore saepe autem! Unde vel quas fuga est sit minima laboriosam. Corrupti consequuntur dolorem incidunt facere unde ut mollitia in, illo quos harum, nulla voluptatibus obcaecati? Quod, iure dolores!
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
