let routes= [];

import dashboard from "./vue-routes-dashboard";
import category from "./vue-routes-categories";
import items from "./vue-routes-items";


routes = routes.concat(dashboard);
routes = routes.concat(category);
routes = routes.concat(items);

export default routes;
