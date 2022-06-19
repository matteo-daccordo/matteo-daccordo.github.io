AOS.init({
  duration: 800,
  easing: "slide",
});

const PAGES_HTML = [
  "about.html",
  "experience.html",
  "education.html",
  "skills.html",
  "navigation.html",
  "more.html",
  "footer.html",
];
const PAGES_FOLDER = "pages/";
const PAGES_ID_PREFIX = "#index_";

$(function loadIndex($) {
  $(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  $.Scrollax();

  loader();

  carousel();

  fullHeight();

  burgerMenu();

  pageProgress();

  setSections();

  animateCounters($);

  loadGitProjects();
});

function loader() {
  if ($("#ftco-loader").length > 0) {
    $("#ftco-loader").removeClass("show");
  }
}

function setSections() {
  PAGES_HTML.forEach(function (page) {
    $.get(PAGES_FOLDER + page, function (data) {
      $(PAGES_ID_PREFIX + page.replace(".html", "")).html(data);
    });
  });
}

function pageProgress() {
  $(window).on("scroll", function () {
    let wintop = $(window).scrollTop(),
      docheight = $(".page").height(),
      winheight = $(window).height(),
      totalScroll = (wintop / (docheight - winheight)) * 100;
    $(".progressBar").css("width", totalScroll + "%");
  });
}

function burgerMenu() {
  $(".js-colorlib-nav-toggle").on("click", function (event) {
    event.preventDefault();
    if (!$("body").hasClass("menu-show")) {
      $("body").addClass("menu-show");
      $("#colorlib-main-nav").on("click", function () {
        if ($("body").hasClass("menu-show")) {
          $("body").removeClass("menu-show");
        }
      });
    }
  });
}

function fullHeight() {
  $(".js-fullheight").css("height", $(window).height());
  $(window).on("resize", function () {
    $(".js-fullheight").css("height", $(window).height());
  });
}

function carousel() {
  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    dots: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    items: 1,
    navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {},
  });
}

function animateCounters($) {
  $(window).on("scroll", function () {
    if (!$(this.element).hasClass("ftco-animate")) {
      $(".number").each(function () {
        let $this = $(this);
        $this.animateNumber(
          {
            number: $this.data("number"),
            numberStep: $.animateNumber.numberStepFactories.separator(","),
          },
          3500
        );
      });
    }
  });
}

async function loadGitProjects() {
  const repos = await fetch("https://api.github.com/users/matteo-daccordo/repos")
    .then(res => {
      if (res.status === 200) return res.json();
    });
  console.log('REPOS:' + JSON.stringify(repos[0]));
  repos.sort((a, b) =>
      new Date(b.updated_at) - new Date(a.updated_at)
    ).
    forEach(repo => {
      fetch(repo.languages_url)
        .then(res => {
          if (res.status === 200) return res.json();
        })
        .then(langs =>
          $.get(
            PAGES_FOLDER + "git-project.html",
            data =>
              $("#projects")
                .append(
                  formatHTML(
                    data,
                    repo.html_url,
                    repo.name,
                    repo.description,
                    Object.keys(langs).join(", "),
                    new Date(repo.created_at).getMonth() + 1,
                    new Date(repo.created_at).getFullYear(),
                    new Date(repo.updated_at).getMonth() + 1,
                    new Date(repo.updated_at).getFullYear()
                  )
                )
          )
        );
    }
  );
}

function formatHTML() {
  let s = arguments[0];
  for (let i = 0; i < arguments.length - 1; i++) {
    let reg = new RegExp("\\{" + i + "\\}", "gm");
    s = s.replace(reg, arguments[i + 1]);
  }
  return s;
}
