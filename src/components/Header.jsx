import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  let navigate = useNavigate();

  const [query, setquery] = useState("");

  function navigateTo(path) {
    navigate(`${path}`);
  }

  return (
    <div>
      <header id="header">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <a onClick={navigateTo.bind(this, "home")}>PlayForFun</a>
          </h1>
          <input
            type="search"
            value={query}
            onChange={(e) => props.GetSearch(e.target.value)}
          />

          {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a
                  class="nav-link scrollto active"
                  onClick={navigateTo.bind(this, "home")}
                >
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a
                  class="nav-link scrollto"
                  onClick={navigateTo.bind(this, "aboutus")}
                >
                  <b>About us</b>
                </a>
              </li>
              <li class="dropdown">
                <a class="nav-link scrollto">
                  <span>
                    <b>Games</b>
                  </span>{" "}
                  <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a onClick={navigateTo.bind(this, "flames")}>Flames</a>
                  </li>
                  <li>
                    <a onClick={navigateTo.bind(this, "tictactoe")}>
                      TicTacToe
                    </a>
                  </li>
                  <li>
                    <a onClick={navigateTo.bind(this, "memory-game")}>
                      Memory-Game
                    </a>
                  </li>
                  <li>
                    <a onClick={navigateTo.bind(this, "ask-me")}>Ask-Me</a>
                  </li>
                  <li>
                    <a onClick={navigateTo.bind(this, "calender")}>Calender</a>
                  </li>
                  <li>
                    <a onClick={navigateTo.bind(this, "task-manager")}>
                      Task Manager
                    </a>
                  </li>
                  <li>
                    <a onClick={navigateTo.bind(this, "news-today")}>
                      News Today
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a class="getstarted scrollto">Login</a>
              </li>
              <li>
                <a class="getstarted scrollto">sign in</a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle" data-toggle="collapse"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}
