import { configure } from '@kadira/storybook';
import './app/assets/css/bootstrap.min.css';

const req = require.context('../src/components/', true, /(_test|_spec)\.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
