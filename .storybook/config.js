import { configure } from '@kadira/storybook';
import './app/assets/css/bootstrap.min.css';
import '../src/public/css/bundle/core.css';

const req = require.context('../src', true, /(_test|_spec)\.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
