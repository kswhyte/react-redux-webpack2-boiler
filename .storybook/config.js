import { configure } from '@kadira/storybook';
import './app/assets/css/bootstrap.min.css';
import '../src/public/css/dist/core_build.css';

const req = require.context('../src/components', true, /(_test|_spec)\.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
