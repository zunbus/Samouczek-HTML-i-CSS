const HTMLpages = [
  {
    title: "Wstęp",
    link: "html-intro.html"
  },
  {
    title: "Ważne Definicje",
    link: "Definitions.html"
  },
  {
    title: "Podstawowe Znaczniki",
    link: "BasicTags.html"
  },
  {
    title: "Podstawowa struktura pliku",
    link: "BasicStructure.html"
  },
  {
    title: "Znaczniki Stylistyczne",
    link: "StyleTags.html"
  },
  {
    title: "Znacznik &lt;meta&gt;",
    link: "meta.html"
  },
  {
    title: "Listy",
    link: "lists.html"
  },
  {
    title: "Tabele",
    link: "tables.html"
  },
  {
    title: "Odnośniki i kotwice",
    link: "a.html"
  },
  {
    title: "Mapy odsyłaczy",
    link: "map.html"
  },
  {
    title: "Elementy Semantyczne",
    link: "semantic.html"
  },
  {
    title: "Formularze",
    link: "forms.html"
  },
  {
    title: "Multimedia",
    link: "Media.html"
  },
  {
    title: "SVG",
    link: "svg.html"
  }
];

const CSSpages = [
  {
    title: "Wstęp",
    link: "css-intro.html"
  },
  {
    title: "Podstawy",
    link: "Basics.html"
  },
  {
    title: "Formatowanie Tekstu",
    link: "Text.html"
  },
  {
    title: "Budowa Pudełkowa CSS",
    link: "Box.html"
  },
  {
    title: "Układy",
    link: "layouts.html"
  },
  {
    title: "Menu Poziome",
    link: "Horizontal.html"
  },
  {
    title: "Menu Pionowe",
    link: "Vertical.html"
  },
  {
    title: "Pozycjonowanie",
    link: "Position.html"
  },
  {
    title: "Overflow",
    link: "Overflow.html"
  },
  {
    title: "Responsywność",
    link: "responsivity.html"
  },
  {
    title: "Animacje",
    link: "animations.html"
  }
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

