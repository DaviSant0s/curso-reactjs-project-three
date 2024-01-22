import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles.js';
import Home from './templates/Home/index.jsx';
import { theme } from './styles/theme.js';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyles/>
    </ThemeProvider>
)
