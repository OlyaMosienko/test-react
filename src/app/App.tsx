import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import { Routes, Route, Link } from 'react-router-dom';
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={'/'} >Главная</Link>
            <Link to={'/about'} >О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;