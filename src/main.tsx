import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/_main.scss';
import './styles/_dynamic-variables.scss';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DevSupport
    ComponentPreviews={ComponentPreviews}
    useInitialHook={useInitial}
  >
    <App />
  </DevSupport>
);
