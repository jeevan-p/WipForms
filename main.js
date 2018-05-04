import React from 'react';

import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import CreateFormView from './client/views/CreateFormView.jsx';

import './client/styles/style.css';

injectTapEventPlugin();

ReactDom.render(<CreateFormView />,document.getElementById("content"));
