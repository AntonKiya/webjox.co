import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {MainPage} from "./components/pages/MainPage";
import {Blog} from "./components/pages/Blog";
import {VacancyPage} from "./components/pages/VacancyPage";
import {ServicesPage} from "./components/pages/ServicesPage";
import {PortfolioPage} from "./components/pages/PortfolioPage";
import {CreateservPage} from "./components/pages/CreateservPage";
import {AboutvacPage} from "./components/pages/AboutvacPage";
import {NotFound} from "./components/pages/NotFound";
import {OrderPage} from "./components/pages/OrderPage";
import {Letterok} from "./components/pages/Latterok";
import {AboutartlePage} from "./components/pages/AboutartPage";

export const useRoutes = () => {


    return(
        <Switch>
            <Route path="/" exact   >
                <MainPage/>
            </Route>
            <Route path="/portfolio" exact>
                <PortfolioPage/>
            </Route>
            <Route path="/services" exact>
                <ServicesPage/>
            </Route>
            <Route path="/createserv" exact>
                <CreateservPage/>
            </Route>
            <Route path="/vacancy" exact>
                <VacancyPage/>
            </Route>
            <Route path="/aboutvac/:id">
                <AboutvacPage/>
            </Route>
            <Route path="/blog" exact>
                <Blog/>
            </Route>
            <Route path="/aboutart/:id">
                <AboutartlePage/>
            </Route>
            <Route path="/order" exact>
                <OrderPage/>
            </Route>
            <Route path="/letterok" exact>
                <Letterok/>
            </Route>
            <Route>
                <NotFound path="" />
            </Route>
        </Switch>
    );
};