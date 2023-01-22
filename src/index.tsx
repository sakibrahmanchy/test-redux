import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';

import { DemoPage, HomePage } from './pages';

(async () => {
    const preloadedState = getPreloadedState();

    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <ReduxProvider store={configureAppStore(preloadedState)}>
                <AppContextProvider>
                    <HomePage />
                    <DemoPage />
                </AppContextProvider>
            </ReduxProvider>
        </React.StrictMode>
    );
})();

// Fetch data everytime app reloads and store them in redux state;
// Use localstorage;
