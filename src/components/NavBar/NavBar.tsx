import { ReactNode } from "react";
import { Router, BrowserRouter, Route, Link } from "react-router-dom";

interface Props {
    children: ReactNode[],
}

function NavBar({children}: Props) {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Router exact path="/" component={children[0]} /> {/* 实现路由映射和页面渲染 */}
        <Router path="/about" component={children[1]} /> {/* 实现路由映射和页面渲染 */}

      </BrowserRouter>
    </div>
  )
}

export default NavBar
