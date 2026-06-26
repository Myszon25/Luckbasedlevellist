// navbar.js

const navbar = document.createElement("div");

navbar.innerHTML = `
<div class="topbar">
    <div class="topbar-left">
        <img src="logo.png" class="logo">
        
        <div class="list-info">
            <div class="list-name">My Demon List</div>
            <div class="list-subtitle">Hardest Levels Ranking</div>
        </div>
    </div>

    <a href="https://discord.gg/TWOJLINK" target="_blank" class="discord-btn">
        Discord
    </a>
</div>
`;

document.body.prepend(navbar);

const style = document.createElement("style");

style.textContent = `
.topbar{
    position:sticky;
    top:0;
    z-index:1000;

    width:100%;
    height:70px;

    display:flex;
    align-items:center;
    justify-content:space-between;

    padding:0 20px;
    box-sizing:border-box;

    background:#0a0a0a;
    border-bottom:2px solid white;
}

.topbar-left{
    display:flex;
    align-items:center;
    gap:12px;
}

.logo{
    width:48px;
    height:48px;
    border-radius:10px;
    object-fit:cover;
}

.list-info{
    display:flex;
    flex-direction:column;
}

.list-name{
    font-size:22px;
    font-weight:800;
}

.list-subtitle{
    font-size:12px;
    opacity:.8;
}

.discord-btn{
    color:white;
    text-decoration:none;

    background:#5865F2;

    padding:10px 18px;

    border-radius:12px;

    font-weight:700;
}

.discord-btn:hover{
    filter:brightness(1.1);
}
`;

document.head.appendChild(style);
