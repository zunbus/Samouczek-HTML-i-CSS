const HTMLpages = [
    {
        title: "Wstęp",
        link: "#"
    },
];

const CSSpages = [
    {
        title: "Wstęp",
        link: "#"
    },
];



const nav = document.getElementById('nav');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const article = document.getElementById('article');
const showNavBtn = document.getElementById('shownavbutton');


function openCSS(url) {
  nav.classList.add('CSSTran');
  header.classList.add('CSSTran');
  footer.classList.add('CSSTran');

  nav.addEventListener('transitionend', function handler() {
    nav.removeEventListener('transitionend', handler);
    window.location.href = url;
  });
}
function openHTML(url) {
  nav.classList.add('HTMLTran');
  header.classList.add('HTMLTran');
  footer.classList.add('HTMLTran');

  nav.addEventListener('transitionend', function handler() {
    nav.removeEventListener('transitionend', handler);
    window.location.href = url;
  });
}
function openMP(url) {
  nav.classList.add('MPTran');
  header.classList.add('MPTran');
  footer.classList.add('MPTran');


  nav.addEventListener('transitionend', function handler() {
    nav.removeEventListener('transitionend', handler);
    window.location.href = url;
  });
}

function hideNav(){
  nav.style.width="0vw";
  article.style.width="100vw";
  showNavBtn.style.visibility="visible";
}

function showNav(){
  nav.style.width="100vw";
  article.style.width="0";
  showNavBtn.style.visibility="hidden";
}

const navList = document.getElementById("subpages");


navList.innerHTML += `
<li>
    <a onclick="hideNav()" href="#" style="position: sticky;" id="hidenavbutton">
        &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
    </a>
</li>
`;

if (type==0){
  CSSpages.forEach(page => {
      navList.innerHTML += `
      <li>
          <a href="${page.link}">${page.title}</a>
      </li>
      `;
  });
}
else if (type==1) {
  HTMLpages.forEach(page => {
      navList.innerHTML += `
      <li>
          <a href="${page.link}">${page.title}</a>
      </li>
      `;
  });
}

