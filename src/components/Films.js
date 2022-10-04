import { FilmsInfo } from "../shared/ListOfFilms";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContents";

export default function Films() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="container" style={{ backgroundColor: theme.backgroundColor }}>
      {FilmsInfo.map((film) => (
        <div className="column">
          <div className="card">
            <img src={film.img} />
            <h3 style={{ color: theme.color }}>{film.name}</h3>
            <p className="year" style={{ color: theme.color }}>{film.year}</p>
            <p className="nation" style={{ color: theme.color }}>{film.nation}</p>
            <Link to={`detail/${film.id}`}>
              <p>
                <button>Detail</button>
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

