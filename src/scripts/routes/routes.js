import List from '../views/pages/list';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
    '/': List,
    '/list': List,
    '/detail/:id': Detail,
    '/favorite': Favorite,
};

export default routes;