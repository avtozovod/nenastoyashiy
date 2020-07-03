new Mmenu(
    document.querySelector('#menu'),
    {
      extensions: ['theme-dark', 'shadow-page'],
      setSelected: true,
      counters: true,
      searchfield: {
        placeholder: 'Поиск по меню...',
      },
      iconbar: {
        use: '(min-width: 450px)',
        top: [
        '<a href="#/"><span class="fa fa-home"></span></a>',

        ],
        bottom: [
        '<a href="#/"><span><i class="fab fa-vk"></i></span></a>',                           
        '<a href="#/"><span><i class="fab fa-instagram-square"></i></span></a>',
        '<a href="#/"><span><i class="fab fa-google-drive"></i></span></a>',
        '<a href="#/"><span><i class="fab fa-youtube"></i></span></a>',
        '<a href="#/"><span><i class="fab fa-google"></i></span></a>',
        '<a href="#/"><span><i class="fab fa-github"></i></span></a>',
        '<a href="#/"><span><i class="fab fa-gitlab"></i></span></a>'



        ],
      },
      sidebar: {
        collapsed: {
          use: '(min-width: 1650px)',
          hideNavbar: false,
        },
        expanded: {
          use: '(min-width: 1650px)',
        },
      },
      navbars: [
      {
        content: ['searchfield'],
      },
      {
        type: 'tabs',
        content: [
        '<a href="#panel-menu"><i class="fa fa-bars"></i> <span>Меню</span></a>',
        '<a href="#panel-account"><i class="fa fa-book"></i> <span>Статьи</span></a>',
        '<a href="#panel-cart"><i class="fa fa-user"></i> <span>Аккакнт</span></a>',
        ],
      },
      {
        content: ['prev', 'breadcrumbs', 'close'],
      },
      {
        position: 'bottom',
        content: [
        '<a href="http://mmenu.frebsite.nl/wordpress-plugin" target="_blank">Ne.nastoyashiy</a>',
        ],
      },
      ],
    },
    {
      searchfield: {
        clear: true,
      },
      navbars: {
        breadcrumbs: {
          removeFirst: true,
        },
      },
    }
    );

  document.addEventListener('click', function (evnt) {
    var anchor = evnt.target.closest('a[href^="#/"]');
    if (anchor) {
      alert("Thank you for clicking, but that's a demo link.");
      evnt.preventDefault();
    }
  });