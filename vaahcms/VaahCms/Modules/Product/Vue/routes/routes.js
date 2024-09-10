let routes= [];

import dashboard from "./vue-routes-dashboard";
import category from "./vue-routes-categories";

routes = routes.concat(dashboard);
routes = routes.concat(category);

export default routes;
