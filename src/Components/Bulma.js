import React from "react";

export function Bulma() {
  return (
    <>
      <h2>Estilos con Bulma-css</h2>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://placeimg.com/1280/720/people"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://placeimg.com/50/50/people"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
            <a href="#/hone">@bulmaio</a>.<a href="#/home">#css</a>{" "}
            <a href="#/home">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </>
  );
}
