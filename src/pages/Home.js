import React from "react";

function Home() {
  return (
    <div>
      <header>
        <div className="navbar">
          <nav className="navigation hide" id="navigation">
            <span className="close-icon" id="close-icon" onClick={showIconBar}>
              <i className="fa fa-close"></i>
            </span>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="forums.html">Forums</a>
              </li>
              <li className="nav-item">
                <a href="posts.html">Posts</a>
              </li>
              <li className="nav-item">
                <a href="detail.html">User</a>
              </li>
            </ul>
          </nav>
          <a className="bar-icon" id="iconBar" onClick={hideIconBar}>
            <i className="fa fa-bars"></i>
          </a>
          <div className="brand">Home</div>
        </div>

        {/* SearchBox Section */}
        <div className="search-box">
          <div>
            <select name="" id="">
              <option value="Everything">Everything</option>
              <option value="Titles">Titles</option>
              <option value="Descriptions">Descriptions</option>
            </select>
            <input type="text" name="q" placeholder="search ..." />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="subforum">
          <div className="subforum-title">
            <h1>General Information</h1>
          </div>
          <div className="subforum-row">
            <div className="subforum-icon subforum-column center">
              <i className="fa fa-car center"></i>
            </div>
            <div className="subforum-description subforum-column">
              <h4>
                <a href="#">Description Title</a>
              </h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div className="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div className="subforum-info subforum-column">
              <b>
                <a href="">Last post</a>
              </b>{" "}
              by <a href="">JustAUser</a>
              <br />
              on <small>12 Dec 2020</small>
            </div>
          </div>
        </div>
      </div>
      <div className="forum-info">
        <div className="chart">
          MyForum - Stats &nbsp;<i className="fa fa-bar-chart"></i>
        </div>
        <span>
          <u>5,369</u> Posts in <u>48</u> Topics by <u>8,124</u> Members.
        </span>
        <br />
        <span>
          Latest post:{" "}
          <b>
            <a href="">Random post</a>
          </b>{" "}
          on Dec 15 2021 By <a href="">RandomUser</a>
        </span>
        <br />
        <span>
          Check <a href="">the latest posts</a>.
        </span>
        <br />
      </div>

      <footer>
        <span>&copy; Selmi Abderrahim | All Rights Reserved</span>
      </footer>
    </div>
  );
}

export default Home;

function showIconBar() {
  // Implement showIconBar logic here
}

function hideIconBar() {
  // Implement hideIconBar logic here
}
