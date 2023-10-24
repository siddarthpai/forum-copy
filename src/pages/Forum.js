// forum.js
import "./page-style.css";
// Create the HTML structure for the Forum component
const forumComponent = document.createElement("div");
forumComponent.classList.add("container");
forumComponent.innerHTML = `
  
<body>
<header>
    <!--NavBar Section-->
    <div class="navbar">
        <nav class="navigation hide" id="navigation">
            <span class="close-icon" id="close-icon" onclick="showIconBar()"><i class="fa fa-close"></i></span>
            <ul class="nav-list">
                <li class="nav-item"><a href="forums.html">Home</a></li>
                <li class="nav-item"><a href="posts.html">Posts</a></li>
                <li class="nav-item"><a href="detail.html">Forums</a></li>
            </ul>
        </nav>
        <a class="bar-icon" id="iconBar" onclick="hideIconBar()"><i class="fa fa-bars"></i></a>
        <div class="brand">Forums</div>
    </div>
    <!--SearchBox Section-->
    <div class="search-box">
        <div>
            <select name="" id="">
                <option value="Everything">Everything</option>
                <option value="Titles">Titles</option>
                <option value="Descriptions">Descriptions</option>
            </select>
            <input type="text" name="q" placeholder="search ...">
            <button><i class="fa fa-search"></i></button>
        </div>
    </div>
<div class="container">
    <!--Navigation-->
    <div class="navigate">
        <span><a href="">MyForum - Forums</a> >> <a href="">random subforum</a> >> <a href="">random topic</a></span>
    </div>

    <!--Topic Section-->
    <div class="topic-container">
        <!--Original thread-->
        <div class="head">
            <div class="authors">Author</div>
            <div class="content">Topic: random topic (Read 1325 Times)</div>
        </div>

        <div class="body">
            <div class="authors">
                <div class="username"><a href="">Username</a></div>
                <div>Role</div>
                <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="">
                <div>Posts: <u>45</u></div>
                <div>Points: <u>4586</u></div>
            </div>
            <div class="content">
                Just a random content of a random topic.
                <br>To see how it looks like.
                <br><br>
                Nothing more and nothing less.
                <br>
                <hr>
                Regards username
                <br>
                <div class="comment">
                    <button onclick="showComment()">Comment</button>
                </div>
            </div>
        </div>
    </div>

    <!--Comment Area-->
    <div class="comment-area hide" id="comment-area">
        <textarea name="comment" id="" placeholder="comment here ... "></textarea>
        <input type="submit" value="submit">
    </div>

    <!--Comments Section-->
    <div class="comments-container">
        <div class="body">
            <div class="authors">
                <div class="username"><a href="">AnotherUser</a></div>
                <div>Role</div>
                <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="">
                <div>Posts: <u>455</u></div>
                <div>Points: <u>4586</u></div>
            </div>
            <div class="content">
                Just a comment of the above random topic.
                <br>To see how it looks like.
                <br><br>
                Nothing more and nothing less.
                <br>
                <br>
                <div class="comment">
                    <button onclick="showReply()">Reply</button>
                </div>
            </div>
        </div>
    </div>
    <!--Reply Area-->
    <div class="comment-area hide" id="reply-area">
        <textarea name="reply" id="" placeholder="reply here ... "></textarea>
        <input type="submit" value="submit">
    </div>


    <!--Another Comment With replies-->
    <div class="comments-container">
        <div class="body">
            <div class="authors">
                <div class="username"><a href="">AnotherUser</a></div>
                <div>Role</div>
                <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="">
                <div>Posts: <u>455</u></div>
                <div>Points: <u>4586</u></div>
            </div>
            <div class="content">
                Just a comment of the above random topic.
                <br>To see how it looks like.
                <br><br>
                Nothing more and nothing less.
                <br>
                <br>
                <div class="comment">
                    <button onclick="showReply()">Reply</button>
                </div>
            </div>
        </div>
    </div>
    <!--Reply Area-->
    <div class="comment-area hide" id="reply-area">
        <textarea name="reply" id="" placeholder="reply here ... "></textarea>
        <input type="submit" value="submit">
    </div>

    

</div>

</body>
`;

// Link the main.js and styles.css
const mainScript = document.createElement("script");
mainScript.src = "main.js";

const stylesLink = document.createElement("link");
stylesLink.rel = "stylesheet";
stylesLink.href = "styles.css";

// Append the components and links to the document
document.head.appendChild(mainScript);
document.head.appendChild(stylesLink);
document.body.appendChild(forumComponent);
