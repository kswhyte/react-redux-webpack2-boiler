import { configure } from '@storybook/react';
import '../src/public/css/dist/core_build.css';

import './app/assets/css/bootstrap.css';
import './app/assets/css/bootstrap-theme.css';

const req = require.context('../src/components', true, /(!jest_test|_test|_spec)\.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);