import { BrowserRouter as Router, Route} from "react-router-dom";
import  InputPage  from "./route/InputPage.js";
import  Mockup  from "./route/Mockup"
import { CSSTransition } from 'react-transition-group'


const routes = [
  {path: "/", name: "InputPage", Component: InputPage},
  {path: "/mockup", name: "Mockup", Component: Mockup},
]

export const App = () => {
  return (
  <Router>
    {/* <Switch> */}
      {routes.map(({path, Component}) => (
        <Route exact path = {path} key={path}>
            {({ match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
        </Route>
        ))
      }
    {/* </Switch> */}
  </Router> 
)}


