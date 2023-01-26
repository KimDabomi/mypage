import React, { memo } from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import About from './pages/About';
import Project from './pages/Project';

const App = memo(() => {
    return (
        <div>
            <>
                <Header />
                <Main />
                <About />
                <Project />
            </>
        </div>
    );
});

export default App;