$('head').append(`<style>
.page-loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(120deg, rgba(0,0,0,1) 20%, rgba(70,74,80,1) 60%) !important;
    z-index: 110;
    display: flex;
    align-items: center;
    justify-content: center;
}
.page-loader .ds-loading-indicator {
    width: 3rem;
    height: 3rem;
    display: block;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-animation: spin .6s infinite;
          animation: spin .6s infinite;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  border-top: #f0ab00 0.125rem solid;
  border-right: transparent .125rem solid;
  border-left: #f0ab00 0.125rem solid;
  border-radius: 50%;
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
</style>`);
$('body').prepend(`<div class="page-loader">
<div class="ds-loading-indicator"></div>
</div>`);

let onloadFunction = function() {
    window.isRedesignProcessed = true;

    if(window.pdpTestRun || $('#page').hasClass('pageNotFound')) {
        if($('#page').hasClass('pageNotFound')) {
            $('.page-loader').remove();
            setTimeout(() => {
                $('.page-loader').remove();
            }, timeToRemoveLoader);
        }
        return;
    }
    window.pdpTestRun = true;

    if (!$('#ds-custom-styles').length) {
        $(`<style id="ds-custom-styles">
	header .country-select-opener {
        display: none;
    }
    .login .ds-icon--account, .login .ds-icon--account:before {
        vertical-align: middle !important;
        width: 2rem;
    }
    [class*="ds-icon--"]:not(svg):before, [class*="ds-icon--"]:not(svg):after {
        font-family: "SAP.com Icons, sans-serif";
    }
    .ds-flexGrid {
        max-width: 1439px;
    }
    .top-nav-logo img {
        height: 40px;
    }
    .header #top-nav-menu .search-nav > .search__link {
        display: block;
    }
    .header #top-nav-menu .help__link, header #top-nav-menu .login {
        color: #c6c6c6;
    }
    .header #top-nav-menu .help__link:hover, .header #top-nav-menu .help__link:focus, .header #top-nav-menu .help__link:active,
        .header #top-nav-menu .login:hover, .header #top-nav-menu .login:focus, .header #top-nav-menu .login:active,
         .header #top-nav-menu .login a:hover, .header #top-nav-menu .login a:focus, .header #top-nav-menu .login a:active{
        color: #eaeaea;
    }
    .header #top-nav-menu .help__link i {
        width: 1.5rem;
    }
    .top-nav-menu li.secondary.help {
        height: 1.75rem;
    }
    .top-nav-menu li.flag {
        height: 40px;
        display: flex;
        align-items: center;
        order: 3;
    }
    .header #top-nav-menu  li.flag .sprite-flag-md {
        float: none;
        transform: scale(0.85);
    }
    .header #top-nav-menu .search-nav > .search__link i {
        vertical-align: middle;
    }
    .header #top-nav-menu .search-nav > .search__link i:before {
        font-size: 2rem;
    }
    .suggestions-container ul.suggestions-block {
        list-style-type: none;
        margin: 0;
        display: block;
    }
    .link {
        color: #008FD3;
    }
    .link:hover, .link:focus, .link:active {
        color: #006799;
    }
    .suggestions-block li {
        cursor: pointer;
        display: block;
        margin-left: 0;
    }
    .suggestions-container {
        background: white;
        z-index: 100;
        margin-top: -1px;
        margin-left: -1px;
        box-shadow: 0px 0px 2px;
        white-space: initial;
    }
    .grey-3 {
        color: #969696;
    }
    .search_form {
        color: white;
    }
    .search-nav {
        background-color: #3c3c3c;
        color: white;
        vertical-align: middle;
        max-height: 40px;
        flex-grow: 100;
    }
    @media (max-width: 64em) {
        #country-selection-container.country-selector {
            left: -200px !important;
        }
    }
    .top-nav-menu {
        flex-grow: 100;
        height: 40px;
        position: absolute;
        top: 0;
        right: 0;
    }
    .top-nav-menu > ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 40px;
        flex-wrap: initial;
    }
    .top-nav-menu .country-select-sign {
        color: inherit;
    }
    p {
        margin-bottom: 0;
    }
    .search__link {
        vertical-align: middle;
    }
    
    .header-product-categories div {
        color: white;
        text-align: left;
    }
    .header-product-categories img {
        max-height: 45px;
        max-width: 55px;
    }
    .header-product-categories .img-container {
        height: 50px
    }
    .search_form input {
        background: rgba(0,0,0,0.6)
    }
    
    .search_form #search::placeholder {
        color: #969696;
    }
    
    @media (min-width: 25.875em) {
    
    .search_form input::placeholder, .search_form input:-ms-input-placeholder, .search_form input::-ms-input-placeholder {
        color: white;
        font-family: "BentonSans", Avenir, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-weight: 400;
    }
    
    .search_form #search {
        background: transparent;
        border: none;
        outline: none;
        box-shadow: none;
        color: white;
        height: 40px;
        margin: 0;
    }
    
    
    header .header-search-block img {
        vertical-align: middle;
    }
    
    
    header .product-categories-block > i, header .product-categories-block-active > i {
        color: white;
        margin-left: 0.5rem;
        vertical-align: middle;
        cursor: pointer;
    }
    header .product-categories-block, header .product-categories-block-active {
        color: white;
        cursor: pointer;
        height: 40px;
        display: flex;
        align-items: center;
    }
    
    header .header-product-categories div.ds-heading--s {
        color: white;
    }
    
    .ds-flexGrid.top-nav-inner {
        color: white;
        width: 100%;
        padding: 1em 1.07143rem;
        position: relative;
    }
    .search_form {
        display: flex;
    }
    .search_form .subm_btn {
        background: none;
        padding: 0;
        margin-bottom: 0;
        color: white;
        max-height: 40px;
        height: 100%;
    }
    .search-form-btn {
        border: none;
        margin: 0;
        max-height: 38px;
        color: white;
    }
    .search-form-btn.ds-button--secondary-white:hover, .search-form-btn.ds-button--secondary-white:focus {
        background-color: transparent;
        color: white;
    }
    .grey-4 {
        color: #C6C6C6;
    }
    .suggestions-block {
        list-style-type: none;
        margin: 0;
    }
    .link {
        color: #008FD3;
    }
    .link:hover, .link:focus, .link:active {
        color: #006799;
    }
    .suggestions-block li {
        cursor: pointer;
    }
</style>`).appendTo('head');
    }

    console.log(101, $('#page').hasClass('ngProduct'));
    if(!$('#page').hasClass('ngProduct')) {
        $(`<style>
    #solution-nav.solution-nav dd a {
        line-height: calc(55px - 2rem);
        font-size: 1rem;
    }
    #solution-nav.solution-nav {
        top: 80px !important;
    }
    #solution-nav.solution-nav .row {
        position: initial;
        margin: 0 auto;
    }
    aside.solution-sidebar > #solutionSidebar {
        top: 0 !important;
        z-index: 5;
    }
    aside.solution-sidebar > #solutionSidebar.sidebar-fixed {
        top: 150px !important;
        z-index: 5;
    }
    aside.solution-sidebar > #solutionSidebar.absoluted {
        top: auto !important;
    }
    
    @media only screen and (min-width: 40.063em) and (max-width: 48rem) {
        aside.solution-sidebar > #solutionSidebar {
            top: 100px !important;
        }
    }
    @media only screen and (max-width: 640px) and (min-width: 0px) {
        #hero-mobile-img {
            background-size: 80% auto;
        }
        .header-middle-part .search_form {
            position: relative;
        }
        .header-middle-part .search_form {
            position: relative;
        }
        .header-middle-part .search_form .search-form-btn {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    @media (max-width: 980px) {
        .country-select {
            position: relative;
        }
        .country-select-sign {
            display: none;
        }
        .country-select #country-selection-container.country-selector {
            left: -300px !important;
            top: 1.25rem !important;
        }
        .right-off-canvas-menu .mobileBurgerContent {
            width: 100%;
        }
        .header-product-categories {
            overflow-y: auto;
            max-height: 450px;
        }
        .product-support .product-support-block {
            margin: 0 auto !important;
        }
        div.header-left-part {
            width: auto;
        }
    }
    header.product.header {
        background-color: #969696;
    }
    
    
.header-left-part, .header-middle-part {
    width: 33%;
    float: left;
}
@media only screen and (min-width: 40em) {
    #solution-nav.d4cNav {
        margin-top: 80px;
    }
    
   
    .header-left-part .product-categories-block {
        display: flex;
    }
}

@media only screen and (max-width: 48rem) {
    .header-middle-part {
        width: 100%;
        margin: 0 !important;
        padding: 0 !important;
        margin-top: 1.25rem !important;
    }
    .solution-nav.d4cNav[data-magellan-expedition-clone] + #solution-nav.solution-nav.d4cNav.green-banner-parent {
        height: 70px !important;
    }
}

@media only screen and (max-width: 40em) {
    #top-nav-menu.top-nav-menu li, #top-nav-menu.top-nav-menu .secondary.login {
        display: block;
        margin-left: 0.75rem;
    }
    #page .inner-wrap {
        padding-top: 0;
    }
    .header .top-nav {
        position: fixed !important;
    }
    .top-nav .top-nav-inner {
        height: auto;
    }
    .country-select .country-selector.active {
        display: block !important;
        top: 62px !important;
    }
    .country-select #country-selection-container.country-selector {
        top: 0.85rem !important;
    }
}
    .header-right-part .top-nav-icon {
        display: none;
    }
    
    @media only screen and (min-width: 980px) {
        .header-middle-part {
            display: initial; 
            width: 40%;
        } 
    }
    
    @media only screen and (max-width: 641px) and (min-width: 0px) {
        section.contact-module .opener {
            display: none;
        }
    }
    
    @media only screen and (max-width: 640px) and (min-width: 0px) {
        section.contact-module {
            display: table;
        }
        header div.product-categories-block, header div.product-categories-block-active {
            order: 1;
            margin-left: 0 !important;
        }
        header div.product-categories-block span, header div.product-categories-block-active span {
            display: none;
        }
        .header-left-part {
            display: flex;
        }
        .header-left-part .top-nav-logo {
            order: 2;
        }
        .header.homepage .overlay-panel {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
    
    .ds-icon-trigger {
        position: absolute;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .ds-icon-trigger .ds-icon {
        cursor: pointer;
    }
   
    header.product.header ul.breadcrumbs {
        visibility: hidden;
    }
    
    section[class*='section'] h1 {
        line-height: unset !important;
    }
    
    section[class*='section'] {
        padding-bottom: unset !important;
    }
    /* Custom styles */
    body,
    p,
    a,
    ul {
      margin: 0;
      padding: 0;
    } 
    
    a {
        text-decoration: none;
    }
    
    .hero-section, .footer {
        max-width: 1439px;
        margin: 0 auto;
    }
    /* Footer */
    footer {
      background-color: #222222;
      font-family: "SAPBook", Arial, Helvetica, sans-serif;
      font-weight: normal;
      font-size: 14px;
      line-height: 1.25;
    }
    
    footer nav .footer-list a {
      text-decoration: none;
      color: #999;
      cursor: pointer;
    }
    
    footer nav a:hover,
    footer nav a:focus,
    footer nav a:active,
    footer nav a:visited {
      text-decoration: underline;
    }
    
    footer nav {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    footer .social-networks__list,
    footer ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none outside;
    }
    
    footer .social-networks__item,
    footer .social-networks__list {
      float: left;
      padding: 0 0 0 8px;
      margin: 0;
    }
    
    footer .social-networks__link {
      float: left;
      width: 26px;
      height: 26px;
      border-radius: 2px;
      background: #fff;
      display: flex;
      align-items: center;
    }
    
    footer .social-networks__icon {
      max-width: 16px;
      max-height: 16px;
      display: block;
      margin: 0 auto;
    }
    
    footer .social-networks__headline {
      float: left;
      color: #999;
      line-height: 26px;
    }
    
    footer .social-networks {
      display: flex;
      justify-content: space-between;
    }
    </style>`).appendTo('head');
    } else {
        $(`<style>
#features-section .feature-content.large-8.medium-8 .tripIt-features-panel-right > .paragraph-text, 
#features-section .feature-content.large-8.medium-8 .tripIt-features-panel-right > strong {
    display: block;
}
.ds-stroked-text {
    position: relative;
    display: inline-block;
}
.ds-stroked-text::before {
    content: '';
    border-bottom: 1px solid;
    width: 100%;
    position: absolute;
    right: 0;
    top: 50%;
}
.ds-medium-text {
    font-weight: 500;
}
.tripIt-button.button.ds-button {
    min-width: auto;
}
.demo-btn.ds-button {
    margin-bottom: auto;
}
html, body {
	font-size: unset;
}
.plan-item {
    border-bottom: 1px solid #D8D8D8;
}
#edition-section .editions-actionButton span {
    padding-left: 0;
}
section[class*="section"].ds-p-none {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
}
#edition-section > h1.hcp-choose-edition-h1, #edition-section > .hcp-choose-edition-h4wrap {
    width: 100%;
    justify-content: center;
}
#licensing-section #buySection, #edition-section #buySection {
    margin-bottom: 0;
}
.d4cNav#solution-nav .sub-nav a span.reviews-span {
    display: flex;
    align-items: center;
    justify-content: center;
}
section.tripIt-3upIcons.row.collapse.homepage-links-new .show-for-medium-up {
    display: none !important;
}

section[class*='section'] h1 {
	line-height: unset !important;
}

#hero-mobile-img {
    display: none;
    height: 670px;
    background-size: auto 90%;
    background-repeat: no-repeat;
    background-position: center;
}

@media only screen and (max-width: 640px) and (min-width: 0px) {
    #hero-mobile-img {
        background-size: 80% auto;
    }
    .header-middle-part .search_form {
        position: relative;
    }
    .header-middle-part .search_form {
        position: relative;
    }
    .header-middle-part .search_form .search-form-btn {
        position: absolute;
        top: 0;
        right: 0;
    }
}

section.section1 {
    background: rgb(0,0,0);
    background: linear-gradient(120deg, rgba(0,0,0,1) 20%, rgba(70,74,80,1) 60%) !important;
    position: relative;
    overflow: hidden;
}

@media (max-width: 980px) {
    .country-select {
        position: relative;
    }
    .country-select-sign {
        display: none;
    }
    .country-select #country-selection-container.country-selector {
        left: -300px !important;
        top: 1.25rem !important;
    }
    .right-off-canvas-menu .mobileBurgerContent {
        width: 100%;
    }
    .header-product-categories {
        overflow-y: auto;
        max-height: 450px;
    }
    section.section1 {
        background-position: left;
        background-position-x: 40%;
        height: 1200px;
    }
    section.section1 .hero-section {
        height: 500px;
    }
    #hero-mobile-img {
        display: block;
        max-height: 450px;
    }
    .bg-heroSection {
        display: none;
    }
    .product-support .product-support-block {
        margin: 0 auto !important;
    }
    #resources-section .modal-link-title {
        text-align: left !important;
    }
    #licensing-section .hcp-leftcol .duration-title {
        width: auto;
    }
    div.header-left-part {
        width: auto;
    }
}

.tripIt-3colIcons {
	letter-spacing: unset;
}

#overview-section .ds-heading--s,
#overview-section .ds-heading--l,
#features-section .ds-heading--l,
#features-section .ds-heading--s {
    color: #000000;
}

#overview-section .ds-body {
	text-align: start;
    color: #727272;
}

#overview-section img {
    height: 120px;
    width: unset;
}

#overview-section .ds-heading--l.tripIt-quoteText-h4 {
	width: initial;
    font-family: "BentonSansLightItalic";
    text-align: start;
    color: #3c3c3c;
}

#overview-section .tripIt-quoteContainer {
    margin-top: unset;
}

#overview-section .tripIt-quoteText {
	width: 90%;
	text-align: start;
}

#overview-section .tripIt-quoteText .font-book {
    font-family: "BentonSansBook";
    color: #727272;
}

section[class*='section'] {
    padding-bottom: unset !important;
}

section[class*='section']:nth-of-type(2n+2) {
    background-color: unset;
}

.splitter {
    height: 74px;
    background-image: url('/medias/splitter-2x.png?context=bWFzdGVyfGltYWdlc3w5MjU3NnxpbWFnZS9wbmd8aW1hZ2VzL2g2NC9oYjcvMTMyMDczNDA4NDMwMzgucG5nfDEwMDg1YWMwMWJjNDg4YWEzNDIzMjU2MjlmNzk3Njk4OTAzYmIyNjcwYWJlOTk4YzZiNjdlZGUyYzdlNDg3Mzk');
    background-size: cover;
}

.line {
    border-bottom: 1.1px solid #eaeaea;
}

.ds-button.play-button {
	border-radius: unset;
}

#features-section .ds-button.pdf-mobile-link {
	display: none;
}

#features-section .left-image-large {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

#features-section .right-image-large {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#features-section .right-image-large .tripIt-features-image, #features-section .left-image-large .tripIt-features-image {
    width: 50%;
    padding: 0 30px;
}
#features-section .right-image-large .feature-content {
    margin-bottom: 0;
    margin-top: 0;
}
#features-section .left-image-large .feature-content, #features-section .right-image-large .feature-content {
	width: 50%;
}

@media (max-width: 1024px) {
    #features-section .right-image-large .feature-content, #features-section .left-image-large .feature-content {
        padding: 0 5%;
        width: auto;
    }
    #features-section .right-image-large, #features-section .left-image-large {
        flex-direction: column;
        margin-top: 1rem !important;
    }
    #licensing-section .duration-cont .duration-value {
        margin-left: 5px;
        padding: 0;
    }
}

#features-section .font-book {
	font-family: "BentonSansBook";
    color: #727272;
}

.ds-icon-star:before, .ds-icon-star-outline:before {
	font-size: 1.5rem;
}

#resources-section .tripIt-features-topSpace.homepage-case-study {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#resources-section .tripIt-extra-videos .resource-training-links {
    display: flex;
}

#resources-section .tripIt-extra-videos {
    width: 100%;
}

#resources-section .tripIt-extra-videos .resource-training-links > a {
    display: flex;
    align-items: center;
}

.training-video-title div h4 {
    font-size: unset;
}

@media (max-width: 1024px) {
    #resources-section .training-video-title {
        width: 100%;
        float: none;
    }
}

.product-support .ds-flexRow {
    display: flex;
    justify-content: center;
}

@media only screen and (max-width: 641px) and (min-width: 0px) {
    #solution-nav.d4cNav.solution-nav {
        display: block !important;
    }
    #solution-nav.d4cNav.solution-nav dd:nth-child(1) a {
        padding: 0 1rem !important;
    }
    #overview-section .tripIt-quoteContainer {
        margin: 1.5rem auto !important;
    }
    #overview-section .small-12.columns.zero-padding .columns.section2Column {
        margin-bottom: 0.75rem;
    }
}
#reviewsSection .ds-pagination .ds-pagination__page-counter {
    margin-bottom: 0;
}

#reviewsSection .ds-pagination .ds-pagination__grid {
    display: flex;
}

.solution-nav {
    border-bottom: none;
}
.solution-nav .productName-coub {
    width: 70px;
    min-width: 70px;
    height: 70px;
    border: 1px solid white;
    background: rgba(255,255,255,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
.solution-nav .productName-coub-container {
    color: white;
    float: left;
    display: flex;
    position: relative;
}
.solution-nav .productName-coub-container i.ds-icon {
    color: white;
}
.solution-nav .ds-subname {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.grey-4 {
    color: #C6C6C6;
}
.solution-nav .ds-subname-sub-title {
    color: white;
    margin: 0 !important;
}
.solution-nav .ds-subname-sub-title, .solution-nav .ds-subname-sub {
    white-space: nowrap;
}

#solution-nav.d4cNav {
    height: calc(70px + 1.5rem) !important;
    z-index: 50;
}
#solution-nav.solution-nav.d4cNav.green-banner-parent {
    height: calc(160px + 1.5rem) !important;
}
@media (max-width: 1024px) {
    #solution-nav.solution-nav.d4cNav.green-banner-parent {
        height: calc(140px + 1.5rem) !important;
    }
}
.solution-nav.d4cNav[data-magellan-expedition-clone] + #solution-nav.solution-nav.d4cNav.green-banner-parent {
    height: calc(70px + 1.5rem) !important;
}
@media (max-width: 1024px) {
    .solution-nav.d4cNav[data-magellan-expedition-clone] + #solution-nav.solution-nav.d4cNav.green-banner-parent {
        height: calc(50px + 1.5rem) !important;
    }
}
.header-left-part, .header-middle-part {
    width: 33%;
    float: left;
}
@media only screen and (min-width: 40em) {
    #solution-nav.d4cNav {
        margin-top: 80px;
    }
    
   
    .header-left-part .product-categories-block {
        display: flex;
    }
}

@media only screen and (max-width: 48rem) {
    .header-middle-part {
        width: 100%;
        margin: 0 !important;
        padding: 0 !important;
        margin-top: 1.25rem !important;
    }
    .solution-nav.d4cNav[data-magellan-expedition-clone] + #solution-nav.solution-nav.d4cNav.green-banner-parent {
        height: 70px !important;
    }
}

@media only screen and (max-width: 40em) {
    #top-nav-menu.top-nav-menu li, #top-nav-menu.top-nav-menu .secondary.login {
        display: block;
        margin-left: 0.75rem;
    }
    #page .inner-wrap {
        padding-top: 0;
    }
    .header .top-nav {
        position: fixed !important;
    }
    .top-nav .top-nav-inner {
        height: auto;
    }
    .country-select .country-selector.active {
        display: block !important;
        top: 62px !important;
    }
    .country-select #country-selection-container.country-selector {
        top: 0.85rem !important;
    }
}
.header-right-part .top-nav-icon {
    display: none;
}

@media only screen and (min-width: 980px) {
    .header-middle-part {
        display: initial; 
        width: 40%;
    } 
}

#solution-nav.d4cNav[style*="position: fixed"] {
    z-index: 500;
}

#solution-nav.d4cNav > .row > .small-12 {
    display: flex;
    flex-direction: row-reverse;
    height: calc(70px + 1.5rem);
    align-items: center;
    padding-right: 0;
}

#solution-nav.d4cNav > .row > .small-12 > .sub-nav{
    height: 100%;
    margin: 0;
}

#solution-nav.d4cNav > .row > .small-12 > .sub-nav a[href="#features-section"] {
    text-transform: capitalize;
}
    
#solution-nav.d4cNav .row {
    margin: 0 auto;
    position: relative;
    left: 0;
}

#solution-nav.d4cNav > .row {
    display: flex;
    align-items: center;
    max-width: 1439px;
}

.solution-nav dd:first-child, #solution-nav.d4cNav dd a {
    border-left: unset !important;
}

#solution-nav.d4cNav dd a {
	border-right: unset !important;
}

#solution-nav.d4cNav {
    background-color: rgba(0, 0, 0, 0.2) !important;
    position: relative;
}

#solution-nav.d4cNav + .solution-nav.d4cNav {
    background-color: rgba(0, 0, 0, 0.93) !important;
}

#solution-nav.d4cNav dd a:hover,  #solution-nav.d4cNav dd a:active, #solution-nav.d4cNav dd a.active {
    background: unset !important;
    color: #ffffff !important;
    padding-bottom: calc(1.25rem - 3px) !important;
    border-bottom: 3px solid #f0ab00 !important;
}

dl.sub-nav dd {
    color: #ffffff;
}

.solution-nav dl {
	width: unset !important;
}


dl.sub-nav {
    margin: 0 auto;
}

#solution-nav.d4cNav dd a {
    font-weight: unset !important;
}

#solution-nav.d4cNav dd a {
    border-bottom: 3px solid transparent !important;
	border-top: 3px solid transparent;
}

/* Custom styles */
body,
p,
a,
ul {
  margin: 0;
  padding: 0;
}

a {
    text-decoration: none;
}
/*  */


li.products.main-nav-item {
    margin-right: 2rem;
}


.main-nav {
    margin-bottom: unset !important;
}

a#aBuyNowButton_licensing_0, #aBuyNowButton_hero_0{
    background-color: #008fd3 !important;
    border-color: transparent !important;
    color: white !important;
}

a#aBuyNowButton_licensing_0.ds-button--secondary, a#aBuyNowButton_hero_0.ds-button--secondary {
    background-color: #ffffff !important;
    color: #008fd3 !important;
    border-color: #008fd3 !important;
}

a#aBuyNowButton_licensing_0.ds-button--secondary:hover, a#aBuyNowButton_hero_0.ds-button--secondary:hover, a#aBuyNowButton_hero_0.ds-button--secondary:focus, a#aBuyNowButton_licensing_0:hover, a#aBuyNowButton_licensing_0:focus, #aBuyNowButton_hero_0:hover, #aBuyNowButton_hero_0:focus {
    background-color: #1e6a92 !important;
    color: #ffffff !important;
    border-color: transparent !important;
}

div .container  {
    margin-bottom: unset;
}

section#plans-and-pricing {
    word-break: initial;
}

.header.homepage .overlay-panel {
    margin-top: 0;
    margin-bottom: 0;
}

@media only screen and (max-width: 641px) and (min-width: 0px) {
    section.contact-module .opener {
        display: none;
    }
}

@media only screen and (max-width: 640px) and (min-width: 0px) {
    section.contact-module {
        display: table;
    }
    header div.product-categories-block, header div.product-categories-block-active {
        order: 1;
        margin-left: 0 !important;
    }
    header div.product-categories-block span, header div.product-categories-block-active span {
        display: none;
    }
    .header-left-part {
        display: flex;
    }
    .header-left-part .top-nav-logo {
        order: 2;
    }
    section.section1 {
        padding: 0 !important;
    }
    .header.homepage .overlay-panel {
        margin-top: 0;
        margin-bottom: 0;
    }
    #features-section .right-image-large .tripIt-features-image, #features-section .left-image-large .tripIt-features-image {
        width: 100%;
    }
    #features-section .image-for-mobile {
        width: 100%;
    }
    .solution-nav .ds-subname-sub-title, .solution-nav .ds-subname-sub {
        white-space: initial;
    }
    .solution-nav .productName-coub-container {
        align-items: center;
    }
    section.ds-p-t-xxl, #resources-section.ds-p-t-xxl {
        padding-top: 1rem !important;
    }
    section.ds-m-t-xxl {
        margin-top: 1rem !important;
    }
    #licensing-section .tripIt-features-h1.ds-m-b-xxl, #licensing-section.ds-m-b-xl {
        margin-bottom: 1rem !important;
    }
    .splitter {
        display: none;
    }
}

.ds-icon-trigger {
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
}
.ds-icon-trigger .ds-icon {
    cursor: pointer;
}

/*.d4cNav#solution-nav .sub-nav dd[data-magellan-arrival="reviews"] a > span {
    white-space: nowrap;
    display: flex;
    align-items: center;
}*/

@media only screen and (min-width: 1024px) {
    .d4cNav#solution-nav dd {
        height: 100% !important;
    }
}


.d4cNav#solution-nav .sub-nav dd[data-magellan-arrival="reviews"] a span.ds-color-gold, .d4cNav#solution-nav .sub-nav dd[data-magellan-arrival="reviews"] a span.ds-color-gold i.ds-icon {
    display: inline-flex;
    align-items: center;
    width: auto;
}

.d4cNav#solution-nav .sub-nav dd[data-magellan-arrival="buynow"] {
    display: none !important;
}

/*.sub-nav dd:last-child > a {
    margin-right: 0 !important;
}*/

@media (max-width: 1024px) {
    #solution-nav.d4cNav > .row {
        display: block;
        background-color: rgba(0, 0, 0, 0.93) !important;
        z-index: 10;
    }
    
    #solution-nav.solution-nav .productName-coub {
        width: 50px;
        min-width: 50px;
        height: 50px;
    }
    
    #solution-nav.solution-nav.d4cNav {
        height: calc(50px + 1.5rem) !important;
    }
    
    #solution-nav.d4cNav .productName-coub-container {
        float: none;
    }
    
    #solution-nav.d4cNav > .row > .small-12 {
        z-index: 50;
        height: auto;
        padding-bottom: 3.25rem !important;
    }
    .d4cNav#solution-nav dd {
        display: block !important;
        float: none;
        width: 100% !important;
        height: auto;
    }
    .d4cNav#solution-nav .sub-nav a {
        min-height: auto;
        display: block !important;
        border-top: 0 !important;
        margin-top: 2rem !important;
        border-bottom: none !important;
    }
    .d4cNav#solution-nav .sub-nav a span {
        text-align: left;
        min-height: auto;
    }
    
    #solution-nav.d4cNav dd a:hover, #solution-nav.d4cNav dd a:active, #solution-nav.d4cNav dd a.active {
        border-bottom: none !important;
        border-left: 3px solid #f0ab00 !important;
        padding-bottom: 0 !important;
        border-bottom: none !important;
    }
}

.ds-icon::before {
    font-family: "SAP.com Icons, sans-serif";
}

.splitter {
  height: 74px;
  background-image: url("/medias/splitter-2x.png?context=bWFzdGVyfGltYWdlc3w5MjU3NnxpbWFnZS9wbmd8aW1hZ2VzL2g2NC9oYjcvMTMyMDczNDA4NDMwMzgucG5nfDEwMDg1YWMwMWJjNDg4YWEzNDIzMjU2MjlmNzk3Njk4OTAzYmIyNjcwYWJlOTk4YzZiNjdlZGUyYzdlNDg3Mzk");
  background-size: cover;
}

.hero-section,
.footer,
#at-a-glance,
#key-features,
#resources,
#plans-and-pricing,
#reviews {
  max-width: 1439px;
  margin: 0 auto;
}

/* hero section */

#hero-container {
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}

#resources-section span.ds-icon {
  line-height: 1.5rem;
}

section.section1 .stars {
    display: none;
}

.stars-container .ds-icon:before{
    font-size: 1.4rem;
}

.stars-container .stars-container__in,
.stars-container__out {
  display: inline-flex;
}

.stars-container .stars-container__in {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  overflow: hidden;
  z-index: 2;
}

.stars-container .stars-container__out {
  position: relative;
  z-index: 1;
}

.ds-icon--large {
    font-size: 1.5rem;
}

.hero-section {
  height: 700px;
  display: flex;
  align-items: center;
}

.hero-section .buttons-container {
  display: flex;
}

.hero-section .title,
.title {
  color: #ffffff;
}

.hero-section p {
  color: #c6c6c6;
}

.hero-section .stars,
.hero-section .stars span,
#reviews .stars,
#reviews .stars p {
  color: #969696;
}

.hero-section .color-gold,
#reviews .color-gold, .ds-color-gold {
  color: #f0ab00;
}

@media (max-width: 470px) {
  .hero-section p:not(.ds-stroked-text) {
    width: 100%;
  }

  .ds-heading--xl.title {
    font-size: 2rem;
  }
}

/* top navigation */
.top-navigation {
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.top-navigation .ds-body {
  color: #ffffff;
}

.regular {
  font-family: "BentonSansRegular";
}

.top-navigation .ds-link:hover,
/* .top-navigation .ds-link:focus,  */
.top-navigation .ds-link:active {
  padding-bottom: calc(1.25rem - 3px) !important;
  border-bottom: 3px solid #f0ab00;
}

/* Container */

.container .title,
.container .paragraph {
  color: #000000;
}

.container .title {
  text-align: center;
}

.container .grey,
.container .ds-body, .grey{
  color: #727272 !important;
}

.container .grey-1,
#plans-and-pricing .grey-1 {
  color: #3c3c3c;
}

.container .ds-body.black {
  color: #000000;
}

.container .centered {
  text-align: center;
}

.container #resources .ds-body {
  color: #3c3c3c;
}

.line,
#reviews .reviews {
  border-bottom: 1px solid #eaeaea;
}

#reviews .progress-bar .ds-body.black {
  min-width: 3rem;
  text-align: center;
}

#at-a-glance {
  color: #000000;
}

#at-a-glance img {
  display: block;
  width: 100px;
  height: 120px;
  margin: 0 auto;
}

#at-a-glance img.wider {
  width: 130px;
}

#at-a-glance .quote {
  font-family: "BentonSansLightItalic";
}

.font-book {
  font-family: "BentonSansBook";
  color: #727272;
}

#key-features .ds-flexRow {
  display: flex;
  align-items: center;
}

#key-features img {
  width: 100%;
  display: block;
  margin: 0 auto;
}

#resources-section .ds-flexCol-6 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#resources-section .link-to-resource {
  display: flex;
  text-decoration: none;
  cursor: pointer;
  text-align: left;
}

.product-support img {
  width: 7.5rem;
  height: 6.1rem;
}
.product-support .link-to-resource > img {
    width: 56px; 
    min-width: 56px;
    height: 56px;
    min-height: 56px;
}

.accordion-title:before {
    margin-right: 2rem;
    color: #727272;
    font-family: "SAP.com Icons, sans-serif";
    content: '';
}

.accordion-title {
    transition: 0.4s;
}

.accordion-title:hover {
    cursor: pointer;
    color: #1E6A92;
}

.accordion-title.active:before {
    content: ''; 
}

.product-support img {
    width: unset;
}
.accordion-title.active ~ .ds-accordion__item {
    margin: 1.5rem 0;
}

.ds-list__item.ds-bullet__item:before {
    font-size: x-large;
}

.ds-list .ds-list__item {
    padding: unset;
}

.price {
  position: relative;
  font-family: "BentonSansMedium";
  text-align: center;
}

.price-item,
.overview-item,
.overview-item__description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.price,
.price-prefix {
  color: #f0ab00;
}

.price-prefix {
  position: absolute;
  left: 25%;
  top: 10%;
  font-family: "BentonSansLight";
  font-size: 1.2rem;
}

#plans-and-pricing .ds-flexRow div:first-of-type {
  border-right: 1px solid #eaeaea;
}

#plans-and-pricing .ds-button {
  width: 100%;
  justify-content: center;
}

#reviews .rating-container {
  display: flex;
  flex-direction: row;
}

#reviews .ds-pagination-hidden {
  display: none;
}

#reviews .rating-container .rating-container-out {
  position: relative;
  height: 30px;
  width: 20rem;
  background-color: #eaeaea;
}

#reviews .rating-container .rating-container-in {
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: #f0ab00;
  z-index: 1;
}

#reviews .write-review,
#reviews .progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#reviews .write-review {
  text-align: center;
}
</style>`).appendTo('head');

        $(`<style>
/* Footer */
footer {
  background-color: #222222;
  font-family: "SAPBook", Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.25;
}

footer nav .footer-list a {
  text-decoration: none;
  color: #999;
  cursor: pointer;
}

footer nav a:hover,
footer nav a:focus,
footer nav a:active,
footer nav a:visited {
  text-decoration: underline;
}

footer nav {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

footer .social-networks__list,
footer ul,
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none outside;
}

footer .social-networks__item,
footer .social-networks__list {
  float: left;
  padding: 0 0 0 8px;
  margin: 0;
}

footer .social-networks__link {
  float: left;
  width: 26px;
  height: 26px;
  border-radius: 2px;
  background: #fff;
  display: flex;
  align-items: center;
}

footer .social-networks__icon {
  max-width: 16px;
  max-height: 16px;
  display: block;
  margin: 0 auto;
}

footer .social-networks__headline {
  float: left;
  color: #999;
  line-height: 26px;
}

footer .social-networks {
  display: flex;
  justify-content: space-between;
}

/* Media query */

@media (min-width: 570px) {
  .iframe-container iframe {
    width: 33rem;
    height: 20rem;
  }
}

@media (min-width: 1600px) {
  .price-prefix {
    left: 20%;
  }
}

@media (max-width: 1600px) {
  .price-prefix {
    left: 20%;
  }
}

@media (max-width: 1441px) {
  .price-prefix {
    left: 23%;
  }
}

@media (max-width: 1250px) {
  .price-prefix {
    left: 25%;
  }
}

@media (max-width: 1150px) {
  .price-prefix {
    left: 21%;
  }
}

@media (max-width: 1000px) {
  .price-prefix {
    left: 19%;
  }
}

@media (min-width: 980px) and (max-width: 1100px) {
  #reviews .rating-container .rating-container-out {
    width: 18rem;
  }
}

@media (max-width: 979px) {
  .progress-bar.line {
    border-bottom: unset;
  }

  #web-ide .resources-links, #crystal-reports .resources-links {
    flex-direction: column;
  }
}

@media (max-width: 914px) {
  #key-features .ds-heading--m,
  #key-features .ds-flexCol-6 .ds-heading--l {
    font-size: 1.3rem;
  }

  .price-prefix {
    left: 10%;
  }
}

@media (max-width: 767px) {
  #plans-and-pricing .ds-flexRow div:first-of-type {
    margin-bottom: 4rem;
    padding-bottom: 5rem;
    border-right: unset;
    border-bottom: 1px solid #eaeaea;
  }

  #plans-and-pricing .ds-flexRow div {
    width: 90%;
    margin: 0 auto;
  }

  .price-prefix {
    left: 30%;
  }
}

@media (max-width: 684px) {
  .price-prefix {
    left: 2%;
  }
}

@media (max-width: 600px) {
  #reviews .rating-container .rating-container-out {
    width: 15rem;
  }

  .price-prefix {
    left: 22%;
  }
}

@media (max-width: 570px) and (min-width: 460px) {
  .iframe-container iframe {
    width: 26rem;
    height: 15rem;
  }
}

@media (max-width: 514px) and (min-width: 460px) {
  .price-prefix {
    left: 18%;
  }
}

@media (max-width: 459px) {
  #reviews .rating-container .rating-container-out {
    width: 6rem;
  }

  #key-features .ds-heading--m,
  #key-features .ds-flexCol-6 .ds-heading--l {
    font-size: 1rem;
  }

  .price-prefix {
    left: 15%;
  }
}

@media (max-width: 370px) {
  .price-prefix {
    left: 8%;
  }
}

@media (max-width: 317px) {
  .price-prefix {
    left: 0%;
  }
}

/* Sticky header styles */
.sticky__item_hidden {
  display: none;
}

.sticky_active .section_hero {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5.9375rem;
  min-height: 5.9375rem;
  padding: 0;
}

.sticky_active .hero-section, .sticky_active .main-nav {
  display: none;
}

.sticky_active .top-navigation {
  background-color: rgba(0, 0, 0, 0.93);
}

.sticky_active .section_hero * {
  display: none;
}

.sticky_active .sticky_visible {
  display: block;
}

.sticky_active .sticky__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
}

.sticky_active .sticky__item_hidden {
  display: block;
}

/*SAP styles */

.ds-list {
  display: block;
  position: relative;
  list-style: none outside none;
}

.ds-list .ds-bullet__item:before {
    content: "\\25AA";
    padding: 0 0.5rem 0 0;
    font-size: 0.83333rem;
}
@media (min-width: 25.875em) {
.ds-list .ds-bullet__item:before {
    font-size: 0.76923rem;
 }
}

.ds-list .ds-list__item {
  color: #000;
  padding: 0 0 0.75rem 0;
}

.ds-list .ds-number__item:before {
  content: counter(li);
  counter-increment: li;
  font-weight: 600;
  padding: 0 0.5rem 0 0;
}

.ds-list .ds-icon__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.ds-list .ds-icon__item:before {
  vertical-align: middle;
  padding: 0 0.5rem 0 0;
  font-size: 1.2rem;
}

@media (min-width: 25.875em) {
  .ds-list .ds-icon__item:before {
    font-size: 1.3rem;
  }
}

.ds-list .ds-item__label--normal {
  font-size: 1rem;
  font-family: BentonSans, Avenir, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 300;
  color: #3c3c3c;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  color: #000;
}
@media (min-width: 25.875em) {
  .ds-list .ds-item__label--normal {
    font-size: 1rem;
  }
}

.ds-button--secondary-white {
  background-color: transparent;
  color: #ffffff;
  border-color: #ffffff;
}

.ds-button--secondary-white:hover,
.ds-button--secondary-white:focus {
  background-color: #ffffff;
  color: #3c3c3c;
  border-color: #ffffff;
}

.ds-button--secondary-white:disabled,
.ds-button--secondary-white.ds-button--disabled {
  background-color: transparent;
  color: #c6c6c6;
  border-color: #c6c6c6;
}
</style>`).appendTo('head');
    }


    $(`<style>
html, body, #licensing-section, #edition-section {
    font-size: 16px;
}
.ds-grey-3 {
    color: #969696;
}
.ds-grey-2 {
    color: #727272;
}
div .ds-black {
    color: black;
}
#licensing-edition-section .ds-button--primary, #edition-section .ds-button--primary {
    background-color: #008fd3 !important;
    color: #ffffff !important;
    border-color: transparent !important;
}
.ds-button[href], .ds-button[href]:hover, .ds-button[href]:focus {
    text-decoration: none;
}
.ds-button--primary:hover, .ds-button--primary:focus {
    background-color: #1e6a92 !important;
    color: white !important;
}
.hero-section .ds-button {
    white-space: nowrap;
}
a#aBuyNowButton_licensing_0.ds-button--secondary:hover, a#aBuyNowButton_hero_0.ds-button--secondary:hover, a#aBuyNowButton_hero_0.ds-button--secondary:focus, a#aBuyNowButton_licensing_0:hover, a#aBuyNowButton_licensing_0:focus, #aBuyNowButton_hero_0:hover, #aBuyNowButton_hero_0:focus {
    background-color: #1e6a92 !important;
    color: #ffffff !important;
    border-color: transparent !important;
}
.ds-gold-text {
    color: #F0AB00;
}
#licensing-edition-section .ds-button, #edition-section .ds-button {
    width: 100%;
    justify-content: center;
}
#licensing-edition-section .hcp-leftcol > section, #edition-section .hcp-leftcol > section {
    width: 100%;
}
#licensing-edition-section.sect-customized, #edition-section.sect-customized {
    margin: 0 !important;
    padding: 0 !important;
}
#licensing-edition-section .hcp-leftcol, #edition-section .hcp-leftcol {
    border-right: none !important;
}
#licensing-edition-section .tripIt-resource-text-1, #edition-section .tripIt-resource-text-1 {
    list-style-type: square;
}
#licensing-edition-section .tripIt-resource-text-1 li.ds-list__item, #edition-section .tripIt-resource-text-1 li.ds-list__item {
    width: 100%;
}
.ds-list {
  display: block;
  position: relative;
  list-style: none outside none;
}
.ds-list .ds-icon__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#licensing-edition-section .grey, .ds-body {
    color: #727272;
}

.ds-list .ds-icon__item:before {
  vertical-align: middle;
  padding: 0 0.5rem 0 0;
  font-size: 1.2rem;
  font-family: inherit;
}

@media (min-width: 25.875em) {
  .ds-list .ds-icon__item:before {
    font-size: 1.3rem;
    font-family: inherit;
  }
}

.ds-list .ds-item__label--normal {
  font-size: 1rem;
  font-family: BentonSans, Avenir, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 300;
  color: #3c3c3c;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  color: #000;
}
@media (min-width: 25.875em) {
  .ds-list .ds-item__label--normal {
    font-size: 1rem;
  }
}
a#aBuyNowButton_licensing_0.ds-button--secondary, a#aBuyNowButton_hero_0.ds-button--secondary {
    background-color: #ffffff !important;
    color: #008fd3 !important;
    border-color: #008fd3 !important;
}
#licensing-edition-section .ds-button, #edition-section .ds-button {
    width: 100%;
    justify-content: center;
}
#licensing-edition-section p {
    margin: 0;
}
a#aBuyNowButton_licensing_0, #aBuyNowButton_hero_0 {
    background-color: #008fd3 !important;
    border-color: transparent !important;
    color: white !important;
}


#licensing-edition-section .grey-1 {
    color: #3c3c3c;
}

.price,
.price-prefix {
  color: #f0ab00;
}
.duration-cont .duration-title {
    margin-right: 0;
}
.duration-cont .duration-value {
    font-weight: bold;
}
#licensing-section .hcp-leftcol, #edition-section .hcp-leftcol {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
#licensing-section #subscriptionPurchase {
    width: 100%;
    /*margin-top: auto;*/
}
#licensing-section .ds-heading--xxl.ds-gold-text, #licensing-section h4.ds-gold-text,
#edition-section .ds-heading--xxl.ds-gold-text, #edition-section h4.ds-gold-text {
    margin: 0;
}
#licensing-section .ng-licensing-head-btm, #edition-section .ng-licensing-head-btm {
    margin-top: 0 !important;
}
.ds-box-center {
    margin: 0 auto;
}

#licensing-section .ng-licensing-terms-button {
    padding-left: 1.03rem;
}



.about-publisher-section .tripIt-logo {
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}
.about-publisher-section .tripIt-logo .hcp-left-about {
    margin-right: 0;
    margin-top: 4em;
}



#reviewsSection {
    max-width: 1439px;
    width: auto;
    margin: 0 auto !important;
}
@media (min-width: 1222px) {
    margin: auto auto !important;
}
#reviewsSection a.ds-button:hover, #reviewsSection a.ds-button:focus {
    color: white;
}
#reviewsSection .write-review, #reviewsSection .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#reviewsSection #ratingElem .ng-inner {
    width: auto;
}

#reviewsSection #ratingElem .ng-inner .ng-histo-rate {
    display: flex;
}

#reviewsSection #ratingElem .ng-inner .ng-histo-rate .ng-histo-star {
    width: auto;
    min-width: 3rem;
    color: black;
}

#reviewsSection #ratingElem .ng-inner .ng-histo-rate .ng-bar-block {
    width: 70%;
    margin-left: 7px;
}
#reviewsSection #ratingElem .ng-inner .ng-bar span {
    color: black;
    top: 3px;
}
#reviewsSection #ratingElem .ng-inner .ng-bar-block {
    border: none;
}
#reviewsSection #ratingElem .ng-inner .ng-bar {
    background-image: none;
    background-color: #f0ab00;
    box-shadow: none;
}

#reviewsSection i::before {
    font-family: inherit;
}
#reviewsSection .color-gold {
  color: #f0ab00;
}
#reviewsSection .stars,
#reviewsSection .stars span,
#reviewsSection .stars p {
  color: #969696;
}

#reviewsSection .ds-pagination-hidden {
  display: none;
}

.bg-heroSection {
    position: absolute;
    top: 15%;
    bottom: 10%;
    left: 55%;
    height: 75%;
}
.green-banner-parent + .bg-heroSection {
    top: calc(15% + 5.75rem);
    bottom: calc(10% - 5.75rem);
    height: calc(75% - 5.75rem);
}

.hero-section.ds-flexGrid > .ds-flexRow {
    width: 100%;
}
</style>`).appendTo('head');

// window.onload = function() {
    console.log(102, $('#page').hasClass('ngProduct'));
    console.log('hello');
    const PRODUCTS = [
        /*{
            name: 'Callidus Cloud Clicktools',
            g2_ID: '01217bef-db96-45ab-b643-e8b95b23b118'
        },
        {
            name: 'SAP Concur',
            g2_ID: '8b11372d-0242-48cc-a99c-3021822d17b0'
        },*/
        /*{
            name: 'SAP Business One',
            //trust_radius_ID: '5d5318be9f316200387b2d2',
            g2_ID: 'd8b6b6cc-485a-4ae6-b030-0771ee352885'
        },*/
        /*{
            name: 'SAP Litmos',
            g2_ID: 'b6edfd46-34a8-4b1a-90c3-235fe32b5ff8'
        },*/
        /*{
            name: 'Datahug',
            g2_ID: 'db1ca123-01ae-40d5-b2e5-4af9105ed619'
        },*/
        /*{
            name: 'SAP SQL Anywhere',
            g2_ID: '1443e8eb-61fb-43bc-8e49-3d0bb4fbcc12'
        },*/
        {
            name: 'SAP Analytics Cloud for Business Intelligence',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '40117',
            initials: 'AC',
            trust_radius_ID: '5cfe76dcd6f6a9001f8a8080',
            g2_ID: 'f2fb8118-1947-4dbd-a2ec-86d0eee72ae7',
            heroImg: '/medias/40117-Hero.png?context=bWFzdGVyfGltYWdlc3wxNTI4MjA1fGltYWdlL3BuZ3xpbWFnZXMvaDJkL2g4MS8xMzIwMjUyMDAxNDg3OC5wbmd8MWFkOTExOWI5NTc5ZTkyNThhODEwMmY5MDAzNDExN2E4YmQ1NWQxNGVkNTU1Y2U3NDlhNjZmOWMyNzBjNDUyZA',
            featuresImg: ['/medias/feature1.png?context=bWFzdGVyfGltYWdlc3wxNjM4MjIyfGltYWdlL3BuZ3xpbWFnZXMvaDRhL2g1Zi8xMjA1ODgzMzc4MDc2Ni5wbmd8YWM0ZGI0YTZjZjg5YWRkOGYxOTMwNmEyY2FkMmRjODg2MDQxZjU2MDgwNzM0MzJlOGVjZGZlM2FlZjZjNGI5NA',
                '/medias/feature2.png?context=bWFzdGVyfGltYWdlc3wxMTU2NTY1fGltYWdlL3BuZ3xpbWFnZXMvaGE1L2gzMy8xMjA1ODk1MDE3MjcwMi5wbmd8ZWMzOTc1NTQwN2Q1YjJjOTFjMTk0ZGM1NjRkNGZjM2ZhZWUyYTNlZjU5ZWNjYjI0M2UyN2EzM2M5NDkzZGQyYg',
                '/medias/feature3.png?context=bWFzdGVyfGltYWdlc3w2NDcyNTl8aW1hZ2UvcG5nfGltYWdlcy9oODkvaGMyLzEyMDU5MTMyMTAwNjM4LnBuZ3xhZjlhZTgwMTcwZDIyZmRiNzllOTgxOGRmNWEzZGY0NDI5NGU0ZTY2MjlmNjVhODNiM2I0NmJhODIyOTM3NDlh',
                '/medias/feature4.png?context=bWFzdGVyfGltYWdlc3wxMDAyODkwfGltYWdlL3BuZ3xpbWFnZXMvaGRiL2g0Zi8xMjA2MDI5OTEzMjk1OC5wbmd8NDllYjY4ZjY0ZGYxMDI2YWM5YTM2OWMwYTY1OWI4ZjIyNmU2ZjQwYTYwN2Q0YjJlOTgzMTc4NGE3MTEwOTM2MA'],
            benefitsImg: ['/medias/40117-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3NTIyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5NS9oNGIvMTMyMDI1Mjg4NjIyMzguc3ZnfDBkYTEzZDViMDA5MDhhZGNhMGRlMjgyNTBhOTdlZjg0OGEwMmQ0NTQ4OGEwMWI0OTE2ZjhiNTgzYWEwYzIzZDQ',
                '/medias/40117-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyMjAxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oN2UvaGIxLzEzMjAyNTI5NjQ4NjcwLnN2Z3xlZmExMzY2ZDRmODkxMmE4ODBjMjIzNzhlODRlNDNiYjNkNzY5OWM0MGNiYmJkMzdjYmY5NjUwOTlkNzg2NzI0',
                '/medias/40117-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0NDI3N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oY2UvaGFiLzEzMjAyNTMwNDM1MTAyLnN2Z3wyYWZmZmM1NzBmMjBhMTlkZmQxMzE1Njg3NDc4NGFkNzQyNjVkMmI1MTVmZmRlYjk5YzIxMzI5MGYwODRmYjQ5']
        },{
            name: 'SAP Analytics Cloud for Business Intelligence',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '40117-ja',
            initials: 'AC',
            trust_radius_ID: '5cfe76dcd6f6a9001f8a8080',
            g2_ID: 'f2fb8118-1947-4dbd-a2ec-86d0eee72ae7',
            heroImg: '/medias/40117-Hero.png?context=bWFzdGVyfGltYWdlc3wxNTI4MjA1fGltYWdlL3BuZ3xpbWFnZXMvaDJkL2g4MS8xMzIwMjUyMDAxNDg3OC5wbmd8MWFkOTExOWI5NTc5ZTkyNThhODEwMmY5MDAzNDExN2E4YmQ1NWQxNGVkNTU1Y2U3NDlhNjZmOWMyNzBjNDUyZA',
            featuresImg: ['/medias/feature1.png?context=bWFzdGVyfGltYWdlc3wxNjM4MjIyfGltYWdlL3BuZ3xpbWFnZXMvaDRhL2g1Zi8xMjA1ODgzMzc4MDc2Ni5wbmd8YWM0ZGI0YTZjZjg5YWRkOGYxOTMwNmEyY2FkMmRjODg2MDQxZjU2MDgwNzM0MzJlOGVjZGZlM2FlZjZjNGI5NA',
                '/medias/feature2.png?context=bWFzdGVyfGltYWdlc3wxMTU2NTY1fGltYWdlL3BuZ3xpbWFnZXMvaGE1L2gzMy8xMjA1ODk1MDE3MjcwMi5wbmd8ZWMzOTc1NTQwN2Q1YjJjOTFjMTk0ZGM1NjRkNGZjM2ZhZWUyYTNlZjU5ZWNjYjI0M2UyN2EzM2M5NDkzZGQyYg',
                '/medias/feature3.png?context=bWFzdGVyfGltYWdlc3w2NDcyNTl8aW1hZ2UvcG5nfGltYWdlcy9oODkvaGMyLzEyMDU5MTMyMTAwNjM4LnBuZ3xhZjlhZTgwMTcwZDIyZmRiNzllOTgxOGRmNWEzZGY0NDI5NGU0ZTY2MjlmNjVhODNiM2I0NmJhODIyOTM3NDlh',
                '/medias/feature4.png?context=bWFzdGVyfGltYWdlc3wxMDAyODkwfGltYWdlL3BuZ3xpbWFnZXMvaGRiL2g0Zi8xMjA2MDI5OTEzMjk1OC5wbmd8NDllYjY4ZjY0ZGYxMDI2YWM5YTM2OWMwYTY1OWI4ZjIyNmU2ZjQwYTYwN2Q0YjJlOTgzMTc4NGE3MTEwOTM2MA'],
            benefitsImg: ['/medias/40117-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3NTIyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5NS9oNGIvMTMyMDI1Mjg4NjIyMzguc3ZnfDBkYTEzZDViMDA5MDhhZGNhMGRlMjgyNTBhOTdlZjg0OGEwMmQ0NTQ4OGEwMWI0OTE2ZjhiNTgzYWEwYzIzZDQ',
                '/medias/40117-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyMjAxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oN2UvaGIxLzEzMjAyNTI5NjQ4NjcwLnN2Z3xlZmExMzY2ZDRmODkxMmE4ODBjMjIzNzhlODRlNDNiYjNkNzY5OWM0MGNiYmJkMzdjYmY5NjUwOTlkNzg2NzI0',
                '/medias/40117-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0NDI3N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oY2UvaGFiLzEzMjAyNTMwNDM1MTAyLnN2Z3wyYWZmZmM1NzBmMjBhMTlkZmQxMzE1Njg3NDc4NGFkNzQyNjVkMmI1MTVmZmRlYjk5YzIxMzI5MGYwODRmYjQ5'],
            translation: {
                "Benefits and Features": "メリットと機能",
                "From": "から",
                "fromAfter": true,
                "Key Features": "主な機能",
                "Resources": "リソース",
                "Plans and Pricing": "プランと価格",
                "Reviews": "レビュー",
                "month": "1 カ月あたり",
                "Buy Now": "今すぐ購入",
                "Publisher": "パブリッシャー",
                "PublisherContent": "は、エンタープライズアプリケーションソフトウェアの市場リーダーとして、現代のビジネスとテクノロジーの革命を牽引する存在です。SAP のイノベーションにより、世界の 417,000 社のお客様が効率的なコラボレーションを実現し、効果的にビジネスインサイトを活用しています。",
                "Show Less": "閉じる",
                "More about the edition": "詳細を見る",
                "SAP Analytics Cloud for Business Intelligence": "SAP Analytics Cloud for Business Intelligence",
                "Contact Us": "お問い合わせ",
                "ContactDescription": "ご意見、ご質問、ご感想などをメールでお寄せください。"
            }
        },{
            name: 'SAP Analytics Cloud for Business Intelligence',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '40117-es',
            initials: 'AC',
            trust_radius_ID: '5cfe76dcd6f6a9001f8a8080',
            g2_ID: 'f2fb8118-1947-4dbd-a2ec-86d0eee72ae7',
            heroImg: '/medias/40117-Hero.png?context=bWFzdGVyfGltYWdlc3wxNTI4MjA1fGltYWdlL3BuZ3xpbWFnZXMvaDJkL2g4MS8xMzIwMjUyMDAxNDg3OC5wbmd8MWFkOTExOWI5NTc5ZTkyNThhODEwMmY5MDAzNDExN2E4YmQ1NWQxNGVkNTU1Y2U3NDlhNjZmOWMyNzBjNDUyZA',
            featuresImg: ['/medias/feature1.png?context=bWFzdGVyfGltYWdlc3wxNjM4MjIyfGltYWdlL3BuZ3xpbWFnZXMvaDRhL2g1Zi8xMjA1ODgzMzc4MDc2Ni5wbmd8YWM0ZGI0YTZjZjg5YWRkOGYxOTMwNmEyY2FkMmRjODg2MDQxZjU2MDgwNzM0MzJlOGVjZGZlM2FlZjZjNGI5NA',
                '/medias/feature2.png?context=bWFzdGVyfGltYWdlc3wxMTU2NTY1fGltYWdlL3BuZ3xpbWFnZXMvaGE1L2gzMy8xMjA1ODk1MDE3MjcwMi5wbmd8ZWMzOTc1NTQwN2Q1YjJjOTFjMTk0ZGM1NjRkNGZjM2ZhZWUyYTNlZjU5ZWNjYjI0M2UyN2EzM2M5NDkzZGQyYg',
                '/medias/feature3.png?context=bWFzdGVyfGltYWdlc3w2NDcyNTl8aW1hZ2UvcG5nfGltYWdlcy9oODkvaGMyLzEyMDU5MTMyMTAwNjM4LnBuZ3xhZjlhZTgwMTcwZDIyZmRiNzllOTgxOGRmNWEzZGY0NDI5NGU0ZTY2MjlmNjVhODNiM2I0NmJhODIyOTM3NDlh',
                '/medias/feature4.png?context=bWFzdGVyfGltYWdlc3wxMDAyODkwfGltYWdlL3BuZ3xpbWFnZXMvaGRiL2g0Zi8xMjA2MDI5OTEzMjk1OC5wbmd8NDllYjY4ZjY0ZGYxMDI2YWM5YTM2OWMwYTY1OWI4ZjIyNmU2ZjQwYTYwN2Q0YjJlOTgzMTc4NGE3MTEwOTM2MA'],
            benefitsImg: ['/medias/40117-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3NTIyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5NS9oNGIvMTMyMDI1Mjg4NjIyMzguc3ZnfDBkYTEzZDViMDA5MDhhZGNhMGRlMjgyNTBhOTdlZjg0OGEwMmQ0NTQ4OGEwMWI0OTE2ZjhiNTgzYWEwYzIzZDQ',
                '/medias/40117-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyMjAxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oN2UvaGIxLzEzMjAyNTI5NjQ4NjcwLnN2Z3xlZmExMzY2ZDRmODkxMmE4ODBjMjIzNzhlODRlNDNiYjNkNzY5OWM0MGNiYmJkMzdjYmY5NjUwOTlkNzg2NzI0',
                '/medias/40117-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0NDI3N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oY2UvaGFiLzEzMjAyNTMwNDM1MTAyLnN2Z3wyYWZmZmM1NzBmMjBhMTlkZmQxMzE1Njg3NDc4NGFkNzQyNjVkMmI1MTVmZmRlYjk5YzIxMzI5MGYwODRmYjQ5'],
            translation: {
                "Benefits and Features": "Beneficios y Características",
                "From": "Desde",
                "Key Features": "Características Clave",
                "Resources": "Recursos",
                "Plans and Pricing": "Planes y Precios",
                "Reviews": "Evaluaciones de clientes",
                "month": "mes",
                "Buy Now": "Compre ahora",
                "Publisher": "Editorial",
                "PublisherContent": "Como líder del mercado de software de aplicaciones empresariales, SAP está en el centro de la revolución tecnológica de los negocios de hoy. Nuestras innovaciones permiten a 417.000 clientes en todo el mundo trabajar juntos de manera más eficiente y utilizar la información estratégica de negocio de manera más efectiva.",
                "Show Less": "Mostrar menos",
                "More about the edition": "Más información acerca de esta edición",
                "SAP Analytics Cloud for Business Intelligence": "SAP Analytics Cloud para Business Intelligence",
                "Contact Us": "Contáctenos",
                "ContactDescription": "Envíenos comentarios, preguntas o feedback por correo electrónico."
            }
        },
        {
            name: 'SAP Litmos Training, customer experience edition',
            catImg: '/medias/icon-SAP-Litmos.svg?context=bWFzdGVyfGltYWdlc3wzOTE1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3YS9oOTgvMTMyMjU1MTg2NjE2NjIuc3ZnfDhiNzZmMTAyOTNhNWRiMWNmODA4Zjc2MWU3YTdlOWRkM2ViZmRmYzhlMmFhY2RmZjYzZTQ3ODA3Y2Y5N2Y0ZTM',
            productId: '53316',
            initials: 'LT',
            heroImg: '/medias/53316-Hero.png?context=bWFzdGVyfGltYWdlc3wxMTM1MDg3fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2gyNS8xMzIyNTUxMDk5Mzk1MC5wbmd8YzMwNjc2ZmJkOTY1Y2FiZWIzNjVlYThlMTMxYjFhMzU1NzMxMzQxNjcwZjYzMWQ3ODhiNjkwNjNkODUwYmVjMQ',
            benefitsImg: ['','',''],
            manualTrial: true,
            // stickedPrice: true,
            // stickedTitle: '50% off',
            g2_ID: 'b6edfd46-34a8-4b1a-90c3-235fe32b5ff8'
        },
        /*{
            name: 'SAP Crystal',
            trust_radius_ID: '5d1277c77fde8a00258bd6f1',
        },*/
        {
            name: 'SAP HANA',
            trust_radius_ID: '5d02ed64586940001fbb6652',
            g2_ID: '957daf90-5110-4fc5-8e4f-a42a69449df8'
        },
        {
            name: 'SAP Cloud Platform',
            trust_radius_ID: '5d531a9afdbef20026aedcea',
            g2_ID: '9794404a-7173-4a6d-8423-b1d8d74aa2f5'
        },
        {
            name: 'SAP S/4 HANA',
            trust_radius_ID: '5d531a60f0f6870020723a16',
        },
        {
            name: 'SAP Translation Hub',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '40076',
            initials: 'TH',
            heroImg: '/medias/40076-Hero.png?context=bWFzdGVyfGltYWdlc3wxNjkwNTIxfGltYWdlL3BuZ3xpbWFnZXMvaDMwL2hiMy8xMzE5ODA2NTcyOTU2Ni5wbmd8ZDNhMjRlZWM3NWIwMjQ2ZmFhN2UzMDM4OTUxNjQ1Y2JjMGMxM2MxNWExMmRhMTdiMzBlOGU3MzVjYjM1ODM4Zg',
            benefitsImg: ['/medias/40076-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3OTA4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzMS9oMGQvMTMxOTgwNjgyODU0NzAuc3ZnfDk5NjgyMzE1NTRlYTdiYTk2YmFhZWZjOGUyZTFlMmI1MjU0NWM5NmUwMjNiOTU2MjI1N2ZiZWU4MmVlMGFlOGY',
                '/medias/40076-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDY3M3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNDgvaDNkLzEzMTk4MDcxODU3MTgyLnN2Z3xjNWY4NTBkNTVjZTZjNzJmOTYyNTQ4Y2EzNjUyM2Q1YzViMWIxNWZjNmZjZDBmNjdmNTI0YjZhYThlZjUyZDdi',
                '/medias/40076-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNTUwNXxpbWFnZS9zdmcreG1sfGltYWdlcy9oOTMvaDE3LzEzMTk4MDcyNDQ3MDA2LnN2Z3xjMjYxZGMxMzYyMGY4ODY4YTFhOGQxM2EyOWQ2YTFkYmQxNzhiNDMyMTZmNzg5NDZmMzNkMmUxYjdlM2NlZWRh']
        },
        {
            name: 'SAP Digital Boardroom',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '40120',
            initials: 'DB',
            heroImg: '/medias/40120-Hero.png?context=bWFzdGVyfGltYWdlc3wxMTk1ODI2fGltYWdlL3BuZ3xpbWFnZXMvaDljL2hlZi8xMzE5ODA2NjQ4MzIzMC5wbmd8MDAyNzQ4MjUzMmEyOWQyMjAxMTRlZGVmNDc4MDMyMWFjYmY2ZmE2Mzc2MTZhNTZhOWJlNGEzZjg1NTE5MTZmNw',
            benefitsImg: ['/medias/40120-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMDY5NHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNzMvaGIxLzEzMTk4MDY4MzE4MjM4LnN2Z3xiOTMxNzQwNWFiMGQwOGRkYmNkNjY2ZTgzNWE3MTEzMDg5OTQ0ZmEyZDI0NjMxY2ZjM2QyMWNlNmQ1MjEwZmZl',
                '/medias/40120-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNjAzMnxpbWFnZS9zdmcreG1sfGltYWdlcy9oNTUvaDlhLzEzMTk4MDcxODg5OTUwLnN2Z3wxYTI0ODc4Njg4ZTg4M2FkOWRlZGEwMDgyNDVkYzhiODliZjgxN2E4YzE5ZDE4OTdmOTY5NzRkNDcxNGQyN2M4',
                '/medias/40120-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w5MTMzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmNS9oMmMvMTMxOTgwNzI0Nzk3NzQuc3ZnfGI4NmMzNzg0ZTliNTA3M2FiYjIxMjNmYjVjZmJjYWQ4YzY0ZjdlYjE1ZjI1YWU0Y2FiZjA4MTY2MWZlZGEzOWM'
            ]
        },
        {
            name: 'SAP Analytics Hub',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '40121',
            initials: 'AH',
            heroImg: '/medias/40121-Hero.png?context=bWFzdGVyfGltYWdlc3wxNzU1MDAzfGltYWdlL3BuZ3xpbWFnZXMvaDE2L2hhYS8xMzE5ODA2NjUxNTk5OC5wbmd8M2QyYmE2MDU1ODk3NGYxYTcxN2E1NjIyNWJmYzllOTc1OTdhOWFjNzRmYTNiYzNjNGZiYWJkYzcyYjM1ODE0Yg',
            benefitsImg: ['/medias/40121-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oYTkvaGQ4LzEzMTk4MDY4NzQ0MjIyLnN2Z3xlYTQ2OWVhNTYzMzQ2OWI1Y2I3ZWY4YjgyODEwYjVlYmQxODgxNGViY2FhNTQ5YzI3NDIzZjEwZTYwMTdmYjM0',
                '/medias/40121-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyMDY0OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZmIvaGZlLzEzMTk4MDcxOTIyNzE4LnN2Z3w5ODY0Nzk0Zjc4ZTdkMDIzOGIxY2YxODNmNzhkN2ZhMmNlNjMzZTRiYjhkYzAyYjFmODNmMGI0YWY1YmNhM2Q0',
                '/medias/40121-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyNDIwOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZjQvaDk1LzEzMTk4MDcyNTEyNTQyLnN2Z3wzNmUxYzQ3MzI4MWIzMmFkNDViYjkyNGYyMTg5NGQyZmI0YzRiZjViMTQ2ZGQxOTRiM2Q1MWI2MDBjNmExMTA5'
            ]
        },
        {
            name: 'SAP Market Rates Management, Refinitiv Data Option',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '40127',
            initials: 'MR',
            heroImg: '/medias/40127-Hero.png?context=bWFzdGVyfGltYWdlc3w4MDg5NDB8aW1hZ2UvcG5nfGltYWdlcy9oYmMvaDYwLzEzMTk4MDY2NTQ4NzY2LnBuZ3w1ODk2ZjhiNDUzY2RjMjRkOWVlYTMzNDQ3OTExYzY3YjBlZDcyOGFjZDhmMGEwYjVhOTg4YzM2MWRjZjBhOWYz',
            benefitsImg: ['/medias/40127-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNTE4NXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNDcvaGMzLzEzMTk4MDY4Nzc2OTkwLnN2Z3w3YzI4ODk3ZmU4MmYyZGJjMzM1YzNlYWUzN2U2OTU5YjgzNzM3NTFmOTJlMzVkYmFhZmI3YzU2MGMxZTllMGIw',
                '/medias/40127-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODMxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZDMvaDNiLzEzMTk4MDcxOTU1NDg2LnN2Z3wzYTc2MjAyMDYyYmNjNzNmOTk5ZDZjMWM0ZTQ1NzY5OWQwNDY5ZTc0NTZjN2E5M2E2YTY3NmQwNGI5ZTc4OWJl',
                '/medias/40127-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w4MjY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzOC9oNWYvMTMxOTgwNzI1NDUzMTAuc3ZnfGJkZTY5MDU5NTkxMTFmNWYxYmRiZGRhMWI1ZjFmNGE1NDQyODZjNzQ3ZTI4NmIwMDcxNTRjZjAwYWVkYzRkM2E'
            ]
        },
        {
            name: 'SAP Cloud Platform Mobile Services',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40130',
            initials: 'MS',
            heroImg: '/medias/40130-Hero.png?context=bWFzdGVyfGltYWdlc3wzNzc2NzQ3fGltYWdlL3BuZ3xpbWFnZXMvaDgxL2g3Ni8xMzE5ODA2NjU4MTUzNC5wbmd8MTNiOTZkYjIyZThlOTA5OGM4YzhlNjFmYzQzZjUyMjlkOWNkMDkxYjNlZTI3ZDVhZjI4ZTRkYzM2MmI5YjIwOQ',
            benefitsImg: ['/medias/40130-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyOTkwMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNzUvaDk4LzEzMTk4MDY4ODA5NzU4LnN2Z3w1NDkzOGE5YTJlYWI3YzI2MjIyYTA2ZTRiNzExODExYTQwMzRlYmZiNzEzM2ZjNDgyMDMyNWQ5Y2JkNjE5Yzcx',
                '/medias/40130-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyMjIzOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZmYvaGNlLzEzMTk4MDcxOTg4MjU0LnN2Z3wzZDA1OWM4NWIyN2U5MjQ3MWExNjIzOWVlYmNmY2ZjOGZjYThiNjViYjFkNzI2ZWM4YzY1ZjVhZWI4ZmJhMGFk',
                '/medias/40130-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxOTg5NHxpbWFnZS9zdmcreG1sfGltYWdlcy9oOTQvaDI4LzEzMTk4MDczMTAyMzY2LnN2Z3wxMzQ0ZjQ1MWQxMWY5ZWJmMzVjNGNhNjU1NjlmYjhhYmIzN2EzODU5OTAyOTM1MzgyMzQwMTA0ZjZlN2QyYzFk'
            ]
        },
        {
            name: 'SAP Cloud Platform Identity Authentication',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40132',
            initials: 'IA',
            heroImg: '/medias/40132-Hero.png?context=bWFzdGVyfGltYWdlc3w4MTAxNjZ8aW1hZ2UvcG5nfGltYWdlcy9oNzEvaDJiLzEzMTk4MDY2NjE0MzAyLnBuZ3wwMjFiMjYyNTg3NTgxYzhhN2IwZmExNzZjNWU2NTQ0YWEwOWFkOTk1NGNhNWE5YTVmNmZjODQ5MWY2OGE5MWMy',
            benefitsImg: ['/medias/40132-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3OTkyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzYS9oYWUvMTMxOTgwNjg4NDI1MjYuc3ZnfDZmZGQyMGZiNzlhYTFhYTBmNTZmNzFlMDlkYTFkMDQyYzI5MDlhOGU5YzM3OGExOTE4YjU0NzhlMmI5Zjc5MzY',
                '/medias/40132-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4ODA0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3My9oZGEvMTMyMDA0ODU4NzU3NDIuc3ZnfGVlYjIzNDEzN2JhZTY1ODgxOTljN2VjZWRiYWNlY2UyZWI2NzdmZTczZjRmZjNiOTZhZmUzNzYzNWFkMjMxYmI',
                '/medias/40132-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w2NzQxfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hjYi9oZmUvMTMyMDA0ODY1OTY2Mzguc3ZnfDUyMGZiMzM3ZmI3MWQzMTQwNjViOTlhNDYyMTFjZTJiOTY2ODcwNzc1MjRhNjE5YmEwZDljNTZmMWE0YjgzNGI'
            ]
        },
        {
            name: 'SAP Market Rates Management, Bring Your Own Rates Data Option',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '40135',
            initials: 'MR',
            heroImg: '/medias/40135-Hero.png?context=bWFzdGVyfGltYWdlc3w4NTY4NDZ8aW1hZ2UvcG5nfGltYWdlcy9oYjYvaDk3LzEzMTk4MDY2NjQ3MDcwLnBuZ3w5ODg5YmVjOWVjNGFjMDRkMWNlMzgxNDNiOWQyNGMwN2JjNjg1NTM3NDYyMzY5ZTY3Yzk4OGE1YzJjZmIxZTI5',
            benefitsImg: ['/medias/40135-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w5MTMzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5ZC9oOGUvMTMxOTgwNjg4NzUyOTQuc3ZnfDgyOGFkODRlZWRhMGVjMDAzNzQ5ZmM2NTViZjNkY2JkZGY0Y2Q1MGFjOTQ5YjFkYjA4ZDUzMzNlYzI3NzIwN2U',
                '/medias/40135-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wzOTU0OHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZjQvaGIzLzEzMTk4MDcyMDIxMDIyLnN2Z3w0MTM1ZTkzMGVkZThlZDYwMzg4NGE1N2JkMDlkODk5YzcyYmE4Mzk3Y2ZlYzBlZmI0OGJhMTg4M2EyNGU3NDYx',
                '/medias/40135-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0NzQ4MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oOTcvaGNjLzEzMTk4MDczMTM1MTM0LnN2Z3xiNzUzN2EyNzkxMjBiOWU1YTI4NjA5NzdlYjBjYjAyNDFjMmFlODkxNzAzZTFhMGIzZDBiMmUwNDQzNzBhMjI0'
            ]
        },
        {
            name: 'SAP Cloud Platform Job Scheduler',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40166',
            initials: 'JS',
            heroImg: '/medias/40166-Hero.png?context=bWFzdGVyfGltYWdlc3wxMjU4NTc5fGltYWdlL3BuZ3xpbWFnZXMvaDc0L2hmMi8xMzE5ODA2NjY3OTgzOC5wbmd8OWY5YWZkOWRmZjQzMmFjYjBiMDczMzQ4MDU2MjZjOGQ2ZmVmOTE5ZTA5MmQ3ZTQwNmNkOTk3ZTM2MTFkNjhiOQ',
            benefitsImg: ['/medias/40166-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNzkwNXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNmYvaGNmLzEzMTk4MDY4OTA4MDYyLnN2Z3wxYWViZGM0OWM1MGZmNTdjNTg5MTU3NTcyNDNiMmE3NDA3OWMzMzg1MWQ2Mjc2ZWM4OGMzNjVlMTBhY2RmODk0',
                '/medias/40166-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODMxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oOGQvaDJjLzEzMjAwNDg2MDA2ODE0LnN2Z3xkMGYxN2FhYzY3ZWM1MDRjMDQ0OTliZTViOTMwMjAxYzRkMWNmZGE3ZTg2ZGNjODcwMjZjZTYxNDU4OTU4MjYw',
                '/medias/40166-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w5OTY1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZC9oNDUvMTMyMDA0ODY4OTE1NTAuc3ZnfDUzOTU1NjdkZDMyYTgyMGEwNDU5M2Q3YjM3ZDk0MTExZWNhNDY3YThlZTE4YjAwMjQ3YmE0NmJlMGM1NmZhMGE']
        },
        {
            name: 'SAP Cloud Platform Transport Management',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40168',
            initials: 'TM',
            heroImg: '/medias/40168-Hero.png?context=bWFzdGVyfGltYWdlc3wyMDc1NDE0fGltYWdlL3BuZ3xpbWFnZXMvaDhjL2hhNC8xMzE5ODA2NjcxMjYwNi5wbmd8ZjhmMTZjYzBmYWJjNzc3ZjM3YTJmZGUyZmM1MWIxMzk5YTA1NTMzYzJkMjhiNjY2YzY2NzlmZmY2ZTE0ODE5Mg',
            benefitsImg: ['/medias/40168-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w5MjkyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2ZS9oMzcvMTMxOTgwNjg5NDA4MzAuc3ZnfGI3NDA2Mjk4NTVlZWNlYjJiY2U1MGI0MTU1MzUwN2I3NTY1Y2Y2MzZlM2VjMDcyMGRhN2ZjYzk1YjEzNGU3ZDQ',
                '/medias/40168-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODc3MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oOTIvaDllLzEzMTk4MDcyMDUzNzkwLnN2Z3xkNDU5NWIzZTY1MDM0MDI4NzRiMzAzMTllYjY0NDlkYTNlZTE1NjU1M2IwZGMzMTU0Yjk4MmMxYjBiM2Y5ZDZi',
                '/medias/40168-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNjMyMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oOGEvaDZmLzEzMTk4MDczMTY3OTAyLnN2Z3w5ZDcxMGE2NjA4NjAzYTc0M2ZhOTlmNWQ5NjkxZmNlYmZiMGZiM2Q2NmYzNDk2MzFmM2RmZTU3NGI0Zjk5OWEy'
            ]
        },
        {
            name: 'Redis on SAP Cloud Platform',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '41407',
            initials: 'RE',
            heroImg: '/medias/41407-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDQ3NTQzfGltYWdlL3BuZ3xpbWFnZXMvaDlhL2gxZS8xMzE5ODA2Njc0NTM3NC5wbmd8MDU5ZjIzZmVmYTRiODJlZjFjODZjYThjZDNlM2UxOWNkZTFjYmIxNzM3OTk4ZmJiMmI0MTIxMWVlMWRhZjU1Yg',
            benefitsImg: ['/medias/41407-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NjEzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g0Ni9oZjgvMTMxOTgwNjg5NzM1OTguc3ZnfGUwY2ZhYzQ5NmMzMGY5MTU3NGZlNDEyNzE4ZjM4YjQ4YzczZWNjNDQyMWFkZTQ1OWQ0Y2UxNDJhNTJmYmMzZDU',
                '/medias/41407-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMTIyMXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZjAvaDY5LzEzMTk4MDcyMDg2NTU4LnN2Z3xkZWYyZGM3NmMyZGM4ZWRhNjkwMWExZGE2ZTliYWY2YmYyNGU2YTlmZTEzZTNkMjhiOWYzYTI4YjhiOThmYzMw',
                '/medias/41407-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNTIyMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMzYvaDRlLzEzMTk4MDczMjAwNjcwLnN2Z3xiOGUxYmZlY2VlOWUzMzE3NDY4NTExMzliZGFlMzI5YmJjMzY4NzJhOWU0NDAwNzBjZDg0ZWY1NWFlNjM3ZTQw'
            ]
        },
        {
            name: 'SAP HANA spatial services',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '41643',
            initials: 'HS',
            heroImg: '/medias/41643-Hero.png?context=bWFzdGVyfGltYWdlc3wzMjUxMjMzfGltYWdlL3BuZ3xpbWFnZXMvaDkxL2hkNi8xMzE5ODA2Njc3ODE0Mi5wbmd8YWE3ODdjYjczY2Y0NzU0MDJiM2JhNjZiNTBiNjA2NGU3NTY5NzdlY2FmOTdkYjI0MmZmYWY3YTJhY2JhOThiMQ',
            benefitsImg: ['/medias/41643-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMDg0Mjd8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDYwL2g2YS8xMzE5ODA2OTAwNjM2Ni5zdmd8ZWUwOGZhMWJkOGQwMGVhODM2MTBiZmU3ODNhMjYxYWRlMGM0MTczNzBkMGYzM2VkN2U1Mzc3NzhiYjkyMTc0Yg',
                '/medias/41643-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNTE3N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMDEvaDM4LzEzMTk4MDcyMTE5MzI2LnN2Z3w4YmUyMjliNTEwODM1NjQ2MGZlNzdiM2FhYmEyMGUyYjkxZWJjYThlNTA2N2FjNmJmYWJkYjY2NWYyNzRmOGQy',
                '/medias/41643-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w5MDA4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g0Yy9oYmEvMTMxOTgwNzMyMzM0Mzguc3ZnfGVjZWYwMWZiN2FkYmRhOTVkMTAyZjAyM2JjZWExM2NmMjJkZWFkOTNkNDNlOWMwMDE2NDVjZTNmZDZjYWUyMzA'
            ]
        },
        {
            name: 'RabbitMQ on SAP Cloud Platform',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '42077',
            initials: 'RM',
            heroImg: '/medias/42077-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDY0ODcxfGltYWdlL3BuZ3xpbWFnZXMvaGE3L2hlNC8xMzE5ODA2NjgxMDkxMC5wbmd8N2IzM2IxODhiMjliZTkyNmUxYzQ0NDExMzMzNzJjMmNjMDU1MjYyMDg5NjNhODI4MGVjZjM4YWE3MzM0NDQ3OQ',
            benefitsImg: ['/medias/42077-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxODk2MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oY2MvaDhhLzEzMTk4MDY5MDM5MTM0LnN2Z3w5ZWVjOThhOTA4ZmM3ZWY3YjNiZjRmNTU0MmZhZDBmMWQ4ODgxZTkzOTQwMWViNzE1YmQwY2Y3ODc0MTQzYTEw',
                '/medias/42077-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODQwN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oZTgvaDY5LzEzMTk4MDcyMTUyMDk0LnN2Z3w5ZDNmMDkyNDAwNzA2YzQyNzQwOTA5ZThiNDQ1NmFmMDczNDgxOWQxOTQ1NDIzOGRkZjZhZWNmNmMyMmIxMzRl',
                '/medias/42077-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w4NjEzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlMC9oM2EvMTMxOTgwNzMyNjYyMDYuc3ZnfGIzMmEzOGVjZjRhZjM5NWNmMzQ5NWZiZGY3OGU0MzI4N2U2MDIzMThkZDIwZGQ2ZWJiNmI1NjhmMTdlYzI2ODQ'
            ]
        },
        {
            name: 'SAP Conversational AI',
            catImg: '/medias/category-intelligent-technologies.svg?context=bWFzdGVyfGltYWdlc3wxNjQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkOS9oMDMvMTMyMDczNDA1NDgxMjYuc3ZnfDM4OTQ5YTE4ZDBhZGU5ODJmOWI3ZmVkOGUzOGExZDNhNDNlZTNjNTE5ZWUxMDcyZjk0OWI2MGZkYjAyNmVlZDY',
            productId: '42282',
            initials: 'CA',
            trust_radius_ID: '5d531a32da764f001a550791',
            heroImg: '/medias/42282-Hero.png?context=bWFzdGVyfGltYWdlc3w5Njc0NjR8aW1hZ2UvcG5nfGltYWdlcy9oODAvaDVhLzEzMTk4MDY2ODQzNjc4LnBuZ3wzYTQwMTcxMTMzN2FlNGQxZWVkZmQ5NzliODFmOTBiYTk1MThiYTY0M2MxYWE2MWJjZDI0ZjM5ODkxYjc1Zjgx',
            benefitsImg: ['/medias/42282-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyMzQzM3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMzIvaGRkLzEzMTk4MDY5MDcxOTAyLnN2Z3w3ZjUxNWQ3MzRiNGI5MDA3NDk3YWEzZmEyNmU4MTM5OWQ2ZTE5ODlkODBlMzlmZWFlYTY0NTA4ODMwMGYwOTcw',
                '/medias/42282-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNzU0M3xpbWFnZS9zdmcreG1sfGltYWdlcy9oZGIvaDBjLzEzMTk4MDcyMTg0ODYyLnN2Z3xiMjA0ZjUwZWE0ZjZmMDQ2MTAzNmMxZTJlN2FlYTU0ZjcwM2M1NjA3ZjMxYzJlZWQ4N2Q0NGQ5NmZlM2I5ZWFi',
                '/medias/42282-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w1Mjc1OHxpbWFnZS9zdmcreG1sfGltYWdlcy9oN2UvaDI1LzEzMTk4MDczMjk4OTc0LnN2Z3xkNmVkZjk1ZmM0OTk4MmU0NjI3ZTNhYzYxYTA3MWE1YTIyNWVhYWY4YTEzY2MyNDZkZDMwNDEzZmY4YzE1YjFl'
            ]
        },
        {
            name: 'SAP Web IDE',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '60009',
            initials: 'WI',
            heroImg: '/medias/60009-Hero.png?context=bWFzdGVyfGltYWdlc3wxMjEwODQwfGltYWdlL3BuZ3xpbWFnZXMvaDY3L2g5ZC8xMzIyNTUxMTcxNDg0Ni5wbmd8NjJkNDA1YTg0YjMyOTk0MDFmOWExYTc0YWNhYjZkYjBlYTY5YmM1OGQwNjcxOTkyNTIxNDM4ZDdkMGNlNzBkZA',
            benefitsImg: ['/medias/60009-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w1MjM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2Yi9oMGMvMTMxOTgwNjkxMDQ2NzAuc3ZnfGYxMTE5N2Y3ODk4NTQyMThkM2E4YTFjZGNmYzdlZDQwNjFlOTQ0YmM3MGJjMDU5N2I5M2I3YmUwZjYyMDk3NGM',
                '/medias/60009-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wzNzAzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hjZC9oYWUvMTMxOTgwNzIyMTc2MzAuc3ZnfDViMTk3MGQzNDZiZWI4ODJmNDQ0NTdmOGRmZGY1MWUzMDhjZDY2ZGU4MmUwMjlkY2UxMDc4ODY0ZGM1OTRkMmI',
                '/medias/60009-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w3MjM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g4MC9oNDMvMTMxOTgwNzMzMzE3NDIuc3ZnfDFjYTBlMDc0N2U1YjVjZWM2YmFhNjExYTMxOGEyOWZjNWViYzE3YjczMjEwMWVmNWExNjcxNTA0NGQ1YWZlOTQ'
            ]
        },
        {
            name: 'Address Directories',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '99053',
            initials: 'AD',
            benefitsImg: ['/medias/99053-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyODQzMnxpbWFnZS9zdmcreG1sfGltYWdlcy9oMTgvaGZjLzEzMTk4MDY5MTM3NDM4LnN2Z3xiMWRmMzUyMGU3MDM3NWQxNWIyMjI3MzI1Yjg3MWNkOWI3Y2Y1MGRlZjkzNGJhNWI0YmMwYzk3OWZlYzFkMzUz',
                '/medias/99053-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODAyNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMDQvaGUzLzEzMTk4MDcyMjUwMzk4LnN2Z3w3YWZkNGQ1MTExOWZjMGU2MmQyMDk4MjAyMGJlYWY0NjIyOWE1MWExMmQyNGEwZmYwMmViZDcyYzdkOTg3NjVk',
                '/medias/99053-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNDYxNTl8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaGFjL2hiMS8xMzE5ODA3MzM2NDUxMC5zdmd8OTQ0ZDQ3MTU1MGJjOThhMjAzYjkwNGFlZGNmMDhmZDNiZjQyZjcxM2E2NzU2MjNmYmRjZmU0NWQ3ZGM4MWE2OA'
            ]
        },
        {
            name: 'Geocoding Directories',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '99054',
            initials: 'GD',
            benefitsImg: ['/medias/99054-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyODQzMnxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjMvaGVlLzEzMTk4MDY5MTcwMjA2LnN2Z3wwZmQ1MDhmMTM4ODU2YzBmNjY5Y2EwNjdmNTExMDVkNTI5MGM4NDM2NmZiMWExN2ViZjAyZjAzM2VlYzI3YzE4',
                '/medias/99054-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODAyNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oY2UvaDI3LzEzMTk4MDcyMjgzMTY2LnN2Z3xiMGFlNzJiNDU3M2Y3YzYwNDY0OTBjNDAxMzljYzgwOTgyNDc3NDc0NDU3MDM0Yjk2OWI1MDQzODEyNTg3OWRi',
                '/medias/99054-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNDYxNTl8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDJiL2gwZi8xMzE5ODA3MzM5NzI3OC5zdmd8OTNiNzM4YzQyNjk2YWEzOGEyZDE0NDU4YmFmOTA3ZTZhZmUxNzNlYjkxM2I1OTk4ZWRhMGM3MmEwOWFiMjY1OQ'
            ]
        },
        {
            name: 'SAP HANA, express edition',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '99055',
            initials: 'HE',
            heroImg: '/medias/99055-Hero.png?context=bWFzdGVyfGltYWdlc3wxNzk4Njc0fGltYWdlL3BuZ3xpbWFnZXMvaDVmL2gwZS8xMzE5ODA2NjkwOTIxNC5wbmd8MmEwODhkZDNiMjg5YmY5M2FmNzIwMWQ4NzM2OGRkN2JkMTgyYWIwZDUzNjhjYmMxYzUzMDU3OGFiMDU0ODJmMg',
            benefitsImg: ['/medias/99055-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMTI5MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZTAvaDZmLzEzMTk4MDY5MjY4NTEwLnN2Z3xkZjJiMTA5NWVkOGI4OGY0NzdiOGE0MGVkZTE3OGZmNzM5NGQ1MDA2Yjk0ZmEwYmZhYWY2NGQ3Y2U3NzhjMjRl',
                '/medias/99055-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w3NTIyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzZi9oZjMvMTMxOTgwNzI0MTQyMzguc3ZnfDM0OTZiMzJjMGNhNzMyZTFhNjg2ZGFhN2FmZDExMjM3MmViMjRjOWI0ZWMyOTdlODQ5YjRjMDA0ZWFjMGFkZWM',
                '/medias/99055-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMTk1OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMmEvaDc4LzEzMTk4MDczNDMwMDQ2LnN2Z3wzZjYwMWEwOTc3Mjc1Yzg5YTA0OGY2NTMzY2RlNjg2NDZiMjc1YTAwMWUzNGI0MGFkMTc5NDFjYTQ0MGQ1YjFl'
            ]
            // trust_radius_ID: '5d02ed64586940001fbb6652',
            // g2_ID: '957daf90-5110-4fc5-8e4f-a42a69449df8'
        },
        {
            name: 'SAP Cloud Platform Integration',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40005',
            initials: 'IN',
            heroImg: '/medias/40005-Hero.png?context=bWFzdGVyfGltYWdlc3w4ODQzMDl8aW1hZ2UvcG5nfGltYWdlcy9oMjMvaGQ3LzEzMjAyNTIyMzQxNDA2LnBuZ3w2OWQxYWU3ZTcwMTZlZWFmYzhkMDNlYThkMmM1NGM3NDhkZGEwY2ExMGZkMmVlMTY1YTgxOWQ1ZTg2YTc1Nzlj',
            benefitsImg: ['/medias/40005-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMTI3OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oOTgvaDA0LzEzMjAyNTI5MTU3MTUwLnN2Z3w4ZGEwZTUwNzc1YzhjNzE2Y2QxNjgyNTFlMjU3OWQzOGIwY2Q2Nzk1YjcxOTQzZTUyNGE3YzQ3ZTVjOTgyM2Qy',
                '/medias/40005-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w1MjM3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g0NC9oOTMvMTMyMDI1Mjk5NDM1ODIuc3ZnfDFmYmRkYzU3MThhMGZmMTVhMmRhNTkzNDFkNDk5NGJlMDI3ZTc2ZDVhZTkxZjgzOGM0YmY4YTlkZWIxZmZmMmU',
                '/medias/40005-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMTQ0NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oZjMvaDk4LzEzMjAyNTMwNzMwMDE0LnN2Z3wxMDFkNmYwMjdlZWQ5NzkxYzRjMTJmYjYzZTBjOWFkZDYyZTQ1NzNmNDg3Y2EwODZmZWVkZTRjZTMxOTViMmM0']
        },
        {
            name: 'SAP Learning Hub',
            catImg: '/medias/category-education.svg?context=bWFzdGVyfGltYWdlc3wxNTU0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiNy9oNjIvMTMyMDczNDA0ODI1OTAuc3ZnfDFiNzZkMWIyOWVhMGMxOWYwOTgzZDA3NjRjMDhiMjc3ZGJjODI3NjU5ODYwNTA2ZTc3NTJhNGFkOTEzNTY1N2Q',
            productId: '40062',
            initials: 'LH',
            heroImg: '/medias/40062-Hero.png?context=bWFzdGVyfGltYWdlc3wxNzU3NzQ2fGltYWdlL3BuZ3xpbWFnZXMvaGM1L2gxNi8xMzIwMDQ3ODYzNDAxNC5wbmd8YWEzZDdmOWVkOGZlOGU4MTMwNDc3YjI3N2VjOWI4Y2U4ODY3OTAzM2EzNGVkMjY2NzFjZDUwM2NjOTkwYjMzNQ',
            benefitsImg: ['/medias/40062-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wzMjA4OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oYzQvaGY1LzEzMjAwNDgwMzA1MTgyLnN2Z3xlMzZiNDg4MTY0MTRjODUwYzEyOWYyNDJiYTdhYWZlMWY0NTYxMmQ0MjEyMzRmZWZmOGZlZWI0OWE3N2VlOTk1',
                '/medias/40062-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNTkwMXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZWUvaDhhLzEzMjAwNDgzMDI0OTI2LnN2Z3wwNTI3Y2E0OTFiYjEzYWZiM2RjMTA3ZTMwMDVjZDRlNTBhOTNiNmQwNGUyNWVkZTNlMTk3MDhjN2IxZTYwOWU2',
                '/medias/40062-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMjAyM3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYjMvaGU1LzEzMjAwNDg0MzM1NjQ2LnN2Z3xkNmJjYzI5OTBlZGZmMDYwN2NjMTlkN2MyNDI1NzhmZGFkNjMzNWY2ZjhjMGM4MWE3NjJhNGEzYTljMzQ3YjQx']
        },
        {
            name: 'SAP Learning Hub',
            catImg: '/medias/category-education.svg?context=bWFzdGVyfGltYWdlc3wxNTU0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiNy9oNjIvMTMyMDczNDA0ODI1OTAuc3ZnfDFiNzZkMWIyOWVhMGMxOWYwOTgzZDA3NjRjMDhiMjc3ZGJjODI3NjU5ODYwNTA2ZTc3NTJhNGFkOTEzNTY1N2Q',
            productId: '40062-es',
            initials: 'LH',
            heroImg: '/medias/40062-Hero.png?context=bWFzdGVyfGltYWdlc3wxNzU3NzQ2fGltYWdlL3BuZ3xpbWFnZXMvaGM1L2gxNi8xMzIwMDQ3ODYzNDAxNC5wbmd8YWEzZDdmOWVkOGZlOGU4MTMwNDc3YjI3N2VjOWI4Y2U4ODY3OTAzM2EzNGVkMjY2NzFjZDUwM2NjOTkwYjMzNQ',
            benefitsImg: ['/medias/40062-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wzMjA4OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oYzQvaGY1LzEzMjAwNDgwMzA1MTgyLnN2Z3xlMzZiNDg4MTY0MTRjODUwYzEyOWYyNDJiYTdhYWZlMWY0NTYxMmQ0MjEyMzRmZWZmOGZlZWI0OWE3N2VlOTk1',
                '/medias/40062-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNTkwMXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZWUvaDhhLzEzMjAwNDgzMDI0OTI2LnN2Z3wwNTI3Y2E0OTFiYjEzYWZiM2RjMTA3ZTMwMDVjZDRlNTBhOTNiNmQwNGUyNWVkZTNlMTk3MDhjN2IxZTYwOWU2',
                '/medias/40062-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMjAyM3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYjMvaGU1LzEzMjAwNDg0MzM1NjQ2LnN2Z3xkNmJjYzI5OTBlZGZmMDYwN2NjMTlkN2MyNDI1NzhmZGFkNjMzNWY2ZjhjMGM4MWE3NjJhNGEzYTljMzQ3YjQx'],
            translation: {
                "Benefits and Features": "Beneficios y Características",
                "From": "Desde",
                "Key Features": "Características Clave",
                "Resources": "Recursos",
                "Plans and Pricing": "Planes y Precios",
                "Reviews": "Evaluaciones de clientes",
                "month": "mes",
                "Buy Now": "Compre ahora",
                "Publisher": "Editorial",
                "PublisherContent": "Como líder del mercado de software de aplicaciones empresariales, SAP está en el centro de la revolución tecnológica de los negocios de hoy. Nuestras innovaciones permiten a 417.000 clientes en todo el mundo trabajar juntos de manera más eficiente y utilizar la información estratégica de negocio de manera más efectiva.",
                "Show Less": "Mostrar menos",
                "More about the edition": "Más información acerca de esta edición",
                "SAP Learning Hub": "SAP Learning Hub",
                "Contact Us": "Contáctenos",
                "ContactDescription": "Envíenos comentarios, preguntas o feedback por correo electrónico.",
                "Try Now": "Pruébelo ahora",
                "Write a Review": "Escriba una reseña"
            }
        },
        {
            name: 'SAP Learning Hub',
            catImg: '/medias/category-education.svg?context=bWFzdGVyfGltYWdlc3wxNTU0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiNy9oNjIvMTMyMDczNDA0ODI1OTAuc3ZnfDFiNzZkMWIyOWVhMGMxOWYwOTgzZDA3NjRjMDhiMjc3ZGJjODI3NjU5ODYwNTA2ZTc3NTJhNGFkOTEzNTY1N2Q',
            productId: '40062-ja',
            initials: 'LH',
            heroImg: '/medias/40062-Hero.png?context=bWFzdGVyfGltYWdlc3wxNzU3NzQ2fGltYWdlL3BuZ3xpbWFnZXMvaGM1L2gxNi8xMzIwMDQ3ODYzNDAxNC5wbmd8YWEzZDdmOWVkOGZlOGU4MTMwNDc3YjI3N2VjOWI4Y2U4ODY3OTAzM2EzNGVkMjY2NzFjZDUwM2NjOTkwYjMzNQ',
            benefitsImg: ['/medias/40062-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wzMjA4OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oYzQvaGY1LzEzMjAwNDgwMzA1MTgyLnN2Z3xlMzZiNDg4MTY0MTRjODUwYzEyOWYyNDJiYTdhYWZlMWY0NTYxMmQ0MjEyMzRmZWZmOGZlZWI0OWE3N2VlOTk1',
                '/medias/40062-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNTkwMXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZWUvaDhhLzEzMjAwNDgzMDI0OTI2LnN2Z3wwNTI3Y2E0OTFiYjEzYWZiM2RjMTA3ZTMwMDVjZDRlNTBhOTNiNmQwNGUyNWVkZTNlMTk3MDhjN2IxZTYwOWU2',
                '/medias/40062-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMjAyM3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYjMvaGU1LzEzMjAwNDg0MzM1NjQ2LnN2Z3xkNmJjYzI5OTBlZGZmMDYwN2NjMTlkN2MyNDI1NzhmZGFkNjMzNWY2ZjhjMGM4MWE3NjJhNGEzYTljMzQ3YjQx'],
            translation: {
                "Benefits and Features": "メリットと機能",
                "From": "から",
                "fromAfter": true,
                "Key Features": "主な機能",
                "Resources": "リソース",
                "Plans and Pricing": "プランと価格",
                "Reviews": "レビュー",
                "month": "1 カ月あたり",
                "Buy Now": "今すぐ購入",
                "Publisher": "パブリッシャー",
                "PublisherContent": "は、エンタープライズアプリケーションソフトウェアの市場リーダーとして、現代のビジネスとテクノロジーの革命を牽引する存在です。SAP のイノベーションにより、世界の 417,000 社のお客様が効率的なコラボレーションを実現し、効果的にビジネスインサイトを活用しています。",
                "Show Less": "閉じる",
                "More about the edition": "詳細を見る",
                "SAP Learning Hub": "SAP Learning Hub",
                "Contact Us": "お問い合わせ",
                "ContactDescription": "ご意見、ご質問、ご感想などをメールでお寄せください。"
            }
        },
        {
            name: 'SAP Asset Manager',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '40082',
            initials: 'AM',
            heroImg: '/medias/40082-Hero.png?context=bWFzdGVyfGltYWdlc3w4MDkxOTh8aW1hZ2UvcG5nfGltYWdlcy9oZWMvaGIxLzEzMjAwNDc4NDA0NjM4LnBuZ3w1ODZmYTg2NzQ4NGUwY2E0N2FjMzMyMmQ0NmU1YzkwYWMzZmFjNjIwZmU0ZmU3NTRjMmMyMmRjZGNlZjEwYzZm',
            benefitsImg: ['/medias/40082-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNjcyOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oODkvaDNiLzEzMjAwNDgwMDQzMDM4LnN2Z3wxOTYxOGJhMjRjMTJiMTJmMDg3ZmY5MzZmMmVkNzcyYzMxZDk3NDVlZmJlZDBjMzM0NmRjNzgwYjFmYzY4NDYz',
                '/medias/40082-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMjMyN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMmUvaGY1LzEzMjAwNDgyNzk1NTUwLnN2Z3w4MDhhYjJlY2YwZmQ5N2I4YWE4MDU5NmY2MmMzNjg4N2Y4YjE5MmY1OGY0ZTM3NzI0NDBhZTY2MWU4MDdhMDRj',
                '/medias/40082-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxOTAzM3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYjAvaDE0LzEzMjAwNDg0MDczNTAyLnN2Z3xiNWVmM2JmMTc0M2YxNDdmZTA1NTBlZDllYzBjYzQ0YTI2NTBjMzA3Y2ViMDNjOTJlYTgyZDE0OGZjNmU4ZGZi']
        },
        {
            name: 'SAP Live Access',
            catImg: '/medias/category-education.svg?context=bWFzdGVyfGltYWdlc3wxNTU0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiNy9oNjIvMTMyMDczNDA0ODI1OTAuc3ZnfDFiNzZkMWIyOWVhMGMxOWYwOTgzZDA3NjRjMDhiMjc3ZGJjODI3NjU5ODYwNTA2ZTc3NTJhNGFkOTEzNTY1N2Q',
            productId: '40098',
            initials: 'LA',
            heroImg: '/medias/40098-Hero-SAP-Live-Access.png?context=bWFzdGVyfGltYWdlc3wxMTE0MDI4fGltYWdlL3BuZ3xpbWFnZXMvaDFiL2hkMC8xMzI0Mzc2OTI1ODAxNC5wbmd8OTFkOWJiMTdmZTMzYmMxNjFjNzlkMDYzZTcyZWU5OGMwMTEyZTk4ZTY3NzA4MDE3YTU4ODE5NjNiN2RiYTMyYw',
            benefitsImg: ['/medias/40098-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMTIyMXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMmUvaGFkLzEzMjAwNDgwMzM3OTUwLnN2Z3xlYTY2MjJiNGZmNjM4YTY5ZWIwNjZlYTc5ZmQ1NTc1ZTUwYjY2YjMxNGFjZDIwMzAwOGExYzYyN2Q5OGNkM2E0',
                '/medias/40098-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNTUxM3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMzkvaDM4LzEzMjAwNDgzMDU3Njk0LnN2Z3w3ZTFkYTljN2EzYWE1MjUxYzZjMTYzMjM1YTE0ZDdhM2YzZjViMDI2MGNmODU1MzdmNzUxZTMwZTYyMTk3NDNj',
                '/medias/40098-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNTQwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjAvaDI1LzEzMjAwNDg0MzY4NDE0LnN2Z3w2YmE3MzRmZWI5MTM3MzlmNWFhODMwN2UyODgxNmM1YTczYzU0Y2UxMTk5NjUxODYyZjZkZTMxMmFjY2Q5YjUw']
        },
        {
            name: 'SAP AR Warehouse Picker, Swiftdecoder add-on by Honeywell',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '40099',
            initials: 'AR',
            benefitsImg: ['/medias/40099-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyMTI5N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oM2QvaGJmLzEzMjAyNTI4ODk1MDA2LnN2Z3w4OTYyM2U4ZmEwZmUxNTJhZTNhY2YxODAyNGQzMThhNWMwYjU3ZjU5NTc1MzAwZGJmOTU4YWNmN2U0MjQ1ZWEw',
                '/medias/40099-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w0MjU4MnxpbWFnZS9zdmcreG1sfGltYWdlcy9oMDkvaDllLzEzMjAyNTI5NjgxNDM4LnN2Z3w3YTY4MWU1NGE4MjQ3YjQ4MmNlM2JmYTA3ZDkzYjk0NGUzNDYxOWI3YjA2MGQxNDkzNzRkMGJkYTFjMWM0YTFl',
                '/medias/40099-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyODU0NXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNmMvaDk2LzEzMjAyNTMwNDY3ODcwLnN2Z3w0ZDEwMTBiMmExNWFlZmFiOGIyMDZlODJkMjVlYzQ1ZjUwM2I5OGQzZTgyMzNjMjUwZTdhYjZlYWUwYTE0ZjI1']
        },
        {
            name: 'SAP Cloud Platform Integration, Library add-ons',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40109',
            initials: 'IL',
            heroImg: '/medias/40109-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDk5MzI4fGltYWdlL3BuZ3xpbWFnZXMvaDAwL2gyNy8xMzIwMDQ3ODQ3MDE3NC5wbmd8ZjhjNGI2YTQzMTBkYWI5MjU0OWIxYTBiODdhOWQ4MDZiMTQzMTc3ZmM3YTIwMDliN2EyMGQ1YTlhODBkYWQzOA',
            benefitsImg: ['/medias/40109-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3MDQ3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxOS9oYzgvMTMyMDA0ODAxMDg1NzQuc3ZnfDJmODYyMzY2NzhlMTUwMTRjODZlNjY0MzUzY2JmOWQ0NGEzMjY5OGFiZGIyMmFlZmI4MDkxZDAxNDAwMTdhMDY',
                '/medias/40109-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4MDQ4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oMWYvMTMyMDA0ODI4NjEwODYuc3ZnfDA2ZTFmYWYzNGYyN2Y3YWUwNDI4ZWQ5NWYzMjAwZjdiYmFlYTM1MjAyNmFiODQyNmM1ZTVmMDk4YzE3N2U2YTQ',
                '/medias/40109-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMTIyMXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMzQvaDBhLzEzMjAwNDg0MTM5MDM4LnN2Z3wwYTFhODQ4YWJmNDZjMTliNTEwMmVlNDk1ZWY1ZTEwMzM5MjNhZGMyOWY0OGNlYjY3MjkyMDRjYzMwZGNjMDll']
        },
        {
            name: 'SAP Commerce Cloud, additional storage',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '40110',
            initials: 'AS',
            heroImg: '/medias/40110-Hero.png?context=bWFzdGVyfGltYWdlc3w4NzgxODV8aW1hZ2UvcG5nfGltYWdlcy9oZTQvaDFkLzEzMjAwNDc4NTM1NzEwLnBuZ3xmMmRhZWNmNDNjMzljYjM0MTllNTcxZDI2MDVmNjE2YTNmOTU0ZDUxNWU2NmFmOTNiMGU2NTdkOWIwNzZmODQy',
            benefitsImg: ['/medias/40110-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w1MjM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3ZS9oNTgvMTMyMDA0ODAxNzQxMTAuc3ZnfGNjMzI0OGNlMGZkMGMzODE0NTdiMTFlM2EwZGE0YWZkZmUxMDBjYzZkYTMwNjAyYWExMTkxNmUxYWMxYjc0N2E',
                '/medias/40110-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w3ODQyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZi9oMjUvMTMyMDA0ODI5MjY2MjIuc3ZnfGY1NTFkMWU5ZTY5MzRlNjZkNzA3N2VkZDQwYjQ2ZTgwY2NjYjQxM2FmYTdkM2IyM2JmNDViNWRmYWRlZjJjMTc',
                '/medias/40110-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w1NDExfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5NS9oODgvMTMyMDA0ODQyMDQ1NzQuc3ZnfGE3ODFlNTM4NjkwNGM1OWRhZDgxNjMzODFjZDM2NzhiMjMwNzcxM2ExNmI1M2RiY2YxMTc2MDczOTE1ODY5ZjM']
        },
        {
            name: 'SAP Commerce Cloud, environment add ons',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '40111',
            initials: 'EA',
            heroImg: '/medias/40111-Hero.png?context=bWFzdGVyfGltYWdlc3w5NzkwNDB8aW1hZ2UvcG5nfGltYWdlcy9oZjIvaGEyLzEzMjAwNDc4NTY4NDc4LnBuZ3xhMzFhZGIzNDQ5MWRkYWQxNGVlYTMzODEwMTM4MmVhNzZkOWY2ZDJkZTAzZTFjYzBmNTlkNDljOWNhZGI2OTlm',
            benefitsImg: ['/medias/40111-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxOTQ2M3xpbWFnZS9zdmcreG1sfGltYWdlcy9oY2EvaGJlLzEzMjAwNDgwMjA2ODc4LnN2Z3w5ZTQwOTllMjZkYjg2NTAwMjQ5ODhhZjI3YzdkNzQyYTRiYTU1MmI0Njk0ZDkyMDVmYWQ1OGY1Y2VkZDA4ZTJh',
                '/medias/40111-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w1NDU5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2Zi9oYTYvMTMyMDA0ODUyODU5MTguc3ZnfGRlN2Y3MWI4NjFhNzBkNDQxNWZhNjNjN2I1OWUwYWYxOTkwMGY5YTZkNGZiZDQ2ZjE3OWQxYTlhZjU2ODM5ZmQ',
                '/medias/40111-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNzc2MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oOTcvaDZjLzEzMjAwNDg0MjM3MzQyLnN2Z3w2MjM2NDFiYTczNjIxZDg5YjA1NjIyNGYxYzZiNzJkM2NmNDgwMDY5ZDg0ZjdhMDg4MjE2ZGZjYjM5ZTE3ZTFj']
        },
        {
            name: 'SAP Commerce Cloud, additional data center zone',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '40113',
            initials: 'AD',
            heroImg: '/medias/40113-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDE0MDIwfGltYWdlL3BuZ3xpbWFnZXMvaDQ3L2hkNy8xMzIwMDQ3ODUwMjk0Mi5wbmd8YzNhYmJjNDc1MmQyYzBlYTI4Njc2Yjc2ZDliZWQyZTc1NDE3NzhjNjM5NGQ5YTNlYTg2MGVmNWY3OWViYzcxYQ',
            benefitsImg: ['/medias/40113-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w5ODAzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g1NS9oYjIvMTMyMDA0ODAxNDEzNDIuc3ZnfGRmYjBjNmE3Mzk0NTk2MzQ3ZWI1OTNjNTQ2NDQ2NDNjODAxYTFlMzMyNDM2NzZlMDY4NWUxMWFkMzVhNzk3N2M',
                '/medias/40113-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4OTgwfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oN2MvMTMyMDA0ODI4OTM4NTQuc3ZnfDAzZDljZTJlYTAzZWVjZWFhNjg4NDVjYjUyMGE4OGRmY2RhZjhhODBjYWZkNWVhOWY1YjZlODQxNmRjMWZjZmU',
                '/medias/40113-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oY2MvaDhkLzEzMjAwNDg0MTcxODA2LnN2Z3w5MDJkOTA5NWRiOGNiNjM4MTE4MWE5MzVlYTlmYWUzYmI2YzlkZmFjNTU2NGVjMTBmZGY0YTBlNjk5YTI1ODQ3']
        },
        {
            name: 'Brilliant Hire By SAP',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '40160',
            initials: 'BH',
            heroImg: '/medias/40160-Hero.png?context=bWFzdGVyfGltYWdlc3w2MjM1NzR8aW1hZ2UvcG5nfGltYWdlcy9oYjEvaGExLzEzMjAwNDc4MjQwNzk4LnBuZ3w2YWQzNDY5YjIwNzJmODAzMGU1NmM1YjZlZmQ4Mjc1ODkyNzRiODQ5ZTc1YzhiYTNlNzVkMjM4ZjdhMjJmZmQ4',
            benefitsImg: ['/medias/40160-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMjIzNXxpbWFnZS9zdmcreG1sfGltYWdlcy9oYTkvaDc4LzEzMjAwNDc5ODQ2NDMwLnN2Z3w1M2ZlZDM0ZGZhMmUyYzVmYmVhM2EyNzEwZDU0YmMyYzEyOWY2NjI2NDMzOTdmZjk0NTk0Y2Y1OTQ1MWJjMzkw',
                '/medias/40160-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w1OTcyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gyNy9oNjEvMTMyMDA0ODI2NjQ0Nzguc3ZnfDljODMwNzgzNDdhNWFiODYzZjE0MzE2ZWI0MmM0ODA4NTNiYmMwMGU4MzBjY2FmZGE4YjA2YmRmYzNjYmMxM2M',
                '/medias/40160-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wzMzA2OHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNzUvaGJhLzEzMjAwNDgzOTQyNDMwLnN2Z3w3MzNlYmFmZDYxNjg5ZTEyN2M1YzVjMDZjODNmMmQ3OTZkY2ZmYTFmZmExZGIyNTVhMTczN2NjYzgzZmJhMTdk']
        },
        {
            name: 'SAP Cloud Platform Custom Domain',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40351',
            initials: 'CD',
            heroImg: '/medias/40351-Hero.png?context=bWFzdGVyfGltYWdlc3w5NjU4Mjl8aW1hZ2UvcG5nfGltYWdlcy9oOTkvaGQxLzEzMjAyNTIyMTQ0Nzk4LnBuZ3w0NDE2ODkwZjZjMTBlYzM1ZmY2NDNiMjdmYzI2NmIyY2M5OGE1NjllMjg4ZTlmMzhkYzE4NGYwMjQ3ZjJlNzU1',
            benefitsImg: ['/medias/40351-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NDY1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5ZC9oMWMvMTMyMDI1MjkwOTE2MTQuc3ZnfGQ0MGNjOWEyM2VmODdjMTJmYzk2M2YyNDg4NjMxM2IzODM2YzUzMGJhODlmNDNmNTU5ZWI4MGYzOTAwZWVlNjk',
                '/medias/40351-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNzk1MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZTMvaDE0LzEzMjAyNTI5ODc4MDQ2LnN2Z3w4NzU0ZGUxYThkYzA5ZWFhODFmZTg1MjY1N2RhNDgzN2QwMDNkOTc3ZjMzM2ZjYmUyMjYzZGYyMjhiNzMyMzk1',
                '/medias/40351-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w4NTUwfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oZGEvMTMyMDI1MzA2NjQ0Nzguc3ZnfDA4N2NhZjgxOTM1NWE3MTM4MGE1MjY1YTU0OGU4OThmMDE2NmJmNjBkNDI0YTZkZTU4ZmI4NzQyYzI0ZTFkZmU']
        },
        {
            name: 'SAP Cloud Platform, SAP HANA Service (Cloud Foundry Environment)',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '41055',
            initials: 'HS',
            heroImg: '/medias/41055-Hero.png?context=bWFzdGVyfGltYWdlc3w5NzM0ODl8aW1hZ2UvcG5nfGltYWdlcy9oZDAvaGRlLzEzMjAyNTIyNDcyNDc4LnBuZ3xiNTk2ZjY0MThhYzcxNWI4NDdjODM2YjMxNjA1MmEyNzU2MmJkMzllNDQzMWE3ODA3YmMzZjQyMGVjODllOTI2',
            benefitsImg: ['/medias/41055-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w5MjkyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hhOS9oODAvMTMyMDI1MjkyMjI2ODYuc3ZnfDNiMDI1NDJkYmI3NDlmYjcyM2IxMDZhNzE5MjdkNDQyMGU0YWZhNGY0N2I3ZmQyM2JkYTMzYzY2YjY0NGEwNjU',
                '/medias/41055-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNzYzNXxpbWFnZS9zdmcreG1sfGltYWdlcy9oOTgvaDg0LzEzMjAyNTMwMDA5MTE4LnN2Z3w3ZTQyNzMyMzE1NjliZDI2ZGVjNmRjMmZlNzViNTg1NWUyNzYxYTRjNjE4ZGY1MzI2NTYyMjU0ZWFkMjJhODg5',
                '/medias/41055-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMTM4NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oZDcvaDQ2LzEzMjAyNTMwNzk1NTUwLnN2Z3xkNTYzZTQ1NjY5YTgyYTI2YTgyMTFlMzY5YjA1OTlkMmUxY2RhNjI3YjE2MDJlNzRhZGZmZDkzYTQyMDk4ZThk']
        },
        {
            name: 'SAP Data Quality Management, microservices for location data',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '41227',
            initials: 'DQ',
            heroImg: '/medias/41227-Hero.png?context=bWFzdGVyfGltYWdlc3wxNTE2NjM5fGltYWdlL3BuZ3xpbWFnZXMvaDAwL2gzYy8xMzIwMjUyMjgwMDE1OC5wbmd8N2MxNmQ0ZjZjMDMwMzViNmM2YzE0YTJiMTg0ZWIyNDkwNThkYWM2NGEwYTczNDA0YWYyNTFkOGUwNDc1OTZiYQ',
            benefitsImg: ['/medias/41227-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w5MTcyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzNC9oMWQvMTMyMDI1MjkzODY1MjYuc3ZnfDk4NGNkMDI4NTE2OWQ1ZjZkNzFiMzk0NjFlOGVjYWFlZmZkMmIzNzFlYzJlZDYzMzU1MjIwMjA4Yjk2ODIxMmM',
                '/medias/41227-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODMxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oOGQvaGQyLzEzMjAyNTMwMTcyOTU4LnN2Z3w1YmEzNThjOTgzZjNjOGMwMjRlZmE2NGU0MDEwODJhNjQxYTViY2RkN2ZlODIyMTcxNWZjMDY4OGZiMDNlZGNm',
                '/medias/41227-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNTE3N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYmQvaDllLzEzMjAyNTMwOTU5MzkwLnN2Z3wyYTU2ODUwNWY3M2UzZDI4NDU2YWY5NjNmZTIxZmM0NWUwZjUxYTM4MWE3NjEzN2Y4ODY3ZWRiYzdkNzQxNTBk']
        },
        {
            name: 'SAP Enable Now',
            catImg: '/medias/category-education.svg?context=bWFzdGVyfGltYWdlc3wxNTU0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiNy9oNjIvMTMyMDczNDA0ODI1OTAuc3ZnfDFiNzZkMWIyOWVhMGMxOWYwOTgzZDA3NjRjMDhiMjc3ZGJjODI3NjU5ODYwNTA2ZTc3NTJhNGFkOTEzNTY1N2Q',
            productId: '41243',
            initials: 'EN',
            heroImg: '/medias/41243-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDE2MjIwfGltYWdlL3BuZ3xpbWFnZXMvaDBlL2hmNC8xMzIwMDQ3ODYwMTI0Ni5wbmd8NjUzNTUyMDE3MjNkYmUzNjJhN2RlNDAxZTdiZTMyYTQ1Y2RlMTE5ZTA1NDhhZmNjMTZkNzJlMTM3ZmZhMTNiNQ',
            benefitsImg: ['/medias/41243-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMDcyM3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNjIvaDM2LzEzMjAwNDgwMjM5NjQ2LnN2Z3wxYjUwNzhjZGU4NmUxYTczODEzNDkyOGM3YWUxY2M1ZjBmZjE5MWUyNDQzZGQ0YWRlYjc5NzVlYmJmOTU5M2Nh',
                '/medias/41243-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4NzI2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g0OC9oOWQvMTMyMDA0ODI5NTkzOTAuc3ZnfGRkZTI5YWYxNWE3ODg2NjQzNTJjNTFjZjQ2NjA2ZmM4YTZhODQ4YjFhNGFhODEwNGM0MGUzOTYyM2U2ZGYwYmM',
                '/medias/41243-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMTIwNnxpbWFnZS9zdmcreG1sfGltYWdlcy9oZDIvaDU2LzEzMjAwNDg0MjcwMTEwLnN2Z3w3MGYwMWNhYzZkOGEzNjQxNGZkZWM1Y2RjZWNmYWE3Nzk0YjQ5NjhlMzBjZjllY2NlMThmOGQ0N2RlNjAwNmIy']
        },
        {
            name: 'Ruum by SAP (Enterprise Edition)',
            catImg: '/medias/category-project-management.svg?context=bWFzdGVyfGltYWdlc3wzMTc3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzOS9oODIvMTMyMDczNDA2MTM2NjIuc3ZnfDljM2EyMWExMDM3MDA4ZTFmYTdmNGJjYmI2MjZmY2ZmMzNmZTRiNGYyZjgxZmI4OTI4NDQzYTM1MjI5NDBmOWE',
            productId: '41302',
            initials: 'RU',
            heroImg: '/medias/41302-Hero.png?context=bWFzdGVyfGltYWdlc3w4NTkxNzN8aW1hZ2UvcG5nfGltYWdlcy9oODgvaDEwLzEzMjAyNTE5ODE4MjcwLnBuZ3w3NjQzOThiODJmYTBjMjM3NGU1YTNjYzA4YTdhM2JjYzMwZWRjNTBjZTU3ZWQ2MGM5NTIyMDI3ZDE0M2RiZGFi',
            benefitsImg: ['/medias/41302-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3OTY4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzZi9oODAvMTMyMDI1Mjg3NjM5MzQuc3ZnfDJlZTQyNjI5YWMwMjE3NDk0NmFkOTExMmZjZWVkYjAxMTViODgwZDVlOGM0OWY3MzRlNGNmN2UwZGIyNGZjMWE',
                '/medias/41302-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wzMDAyN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oM2YvaGQwLzEzMjAyNTI5NTUwMzY2LnN2Z3w4MDhkOTdiNTNiYjQ1NTUzNjc3M2UzMmRiZWFlNmIxOTMyMTI1YThkMzdkMGE4ZWM4YjI1ZDRhNzg5Yzk0ZWVm',
                '/medias/41302-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNTY1MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oOGIvaGQ1LzEzMjAyNTMwMzM2Nzk4LnN2Z3xiYTNiYjg0OWNhOTg3MDJkMDYxYmNmMDU2NjFjNGU1ODc4MzVjZWY1ZTExYTA1N2UyZTY5YTZjMDQyZjYxMWJk']
        },
        {
            name: 'Hyperledger Fabric on SAP Cloud Platform',
            catImg: '/medias/category-intelligent-technologies.svg?context=bWFzdGVyfGltYWdlc3wxNjQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkOS9oMDMvMTMyMDczNDA1NDgxMjYuc3ZnfDM4OTQ5YTE4ZDBhZGU5ODJmOWI3ZmVkOGUzOGExZDNhNDNlZTNjNTE5ZWUxMDcyZjk0OWI2MGZkYjAyNmVlZDY',
            productId: '41265',
            initials: 'HF',
            heroImg: '/medias/41265-Hero.png?context=bWFzdGVyfGltYWdlc3wxMzU2MDU1fGltYWdlL3BuZ3xpbWFnZXMvaDIxL2g2OS8xMzIwMDQ3ODI3MzU2Ni5wbmd8MzI4M2VjOTdhMDFlNTE0NTM2OWZhYWMyY2E1YTU3NTAxZjFiNTY4ODE4MzVkMzM2YWRjNDI0MDE0NzE1ZmE1Yw',
            benefitsImg: ['/medias/41265-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNjMyMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZDAvaDJkLzEzMjAwNDg1NTE1Mjk0LnN2Z3wzOWZmZGUzNWM2Njc2ZDA4OWY1OTgyZDdkZDg5NjMzZGE4MGM3NzRiYmM1YzNjMDhiM2MzZDMwMGYyZWFmNTA5',
                '/medias/41265-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4MDA4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiYy9oNDgvMTMyMDA0ODU3NDQ2NzAuc3ZnfGY3NzIwOWNlNmQ0Yjg4Y2JhYzRjNmFhN2MyNWRiNDYxZDNkOTM0NGNjMDkyNWYxODA3NzFhMTI0NmJkZGNiYjY',
                '/medias/41265-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w4NDQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hjYi9oZTcvMTMyMDA0ODYzMDE3MjYuc3ZnfDlmMzMxZjc4M2E2MTg5NmJhMzQ2OTQ0MDFjNTFmYTgwODE5YTA5M2E2MzFlMTU5ZTFjMTZiNmU0YTkwMDI4NzI']
        },
        {
            name: 'SAP Cloud Platform API Management',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '41346',
            initials: 'AM',
            heroImg: '/medias/41346-Hero.png?context=bWFzdGVyfGltYWdlc3w4OTI1ODZ8aW1hZ2UvcG5nfGltYWdlcy9oNjgvaGQ2LzEzMjAyNTIxNTIyMjA2LnBuZ3xhN2JiMWViNWFlMTgyMDk1Nzc5MTFlNWNkMzY2OWY3NDZhMWFhMjE1ZDA0YmEzZjJkM2QwMzIzODQyNDJmMDQ3',
            benefitsImg: ['/medias/41346-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyMzIwOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNmYvaDhmLzEzMjAyNTI5MDI2MDc4LnN2Z3w2ZTFiMTVkZDUwY2I0YzcyZTNiNjcxNzczOTg3ZThlZjE3ZDA5ZTcyZGExMzQxOTcwMDJiMjNkMTc0NmVjYjQ5',
                '/medias/41346-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNTE4NXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMzgvaDQ5LzEzMjAyNTI5ODEyNTEwLnN2Z3xhNDA3NWY0MTY2ZmZhODVhZmIxODA2ZjJmMGUwNzM4M2FkMjRhMjM4Mjc2YTk0YTgxNmVmMDA1OTg0MjdmODcw',
                '/medias/41346-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w2NzQxfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiNS9oMDQvMTMyMDI1MzA1OTg5NDIuc3ZnfGU3Nzk1NWUwNjcyY2ZhMzM3MDA0ZTIwNjVjM2YwNjZiYjQyZDg5ZjYzNmMzZjc1M2U4NGRiZWZkYTU5OTM3ZTA']
        },
        {
            name: 'Multichain on SAP Cloud Platform',
            catImg: '/medias/category-intelligent-technologies.svg?context=bWFzdGVyfGltYWdlc3wxNjQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkOS9oMDMvMTMyMDczNDA1NDgxMjYuc3ZnfDM4OTQ5YTE4ZDBhZGU5ODJmOWI3ZmVkOGUzOGExZDNhNDNlZTNjNTE5ZWUxMDcyZjk0OWI2MGZkYjAyNmVlZDY',
            productId: '41531',
            initials: 'MC',
            heroImg: '/medias/41531-Hero.png?context=bWFzdGVyfGltYWdlc3w1NzA1ODB8aW1hZ2UvcG5nfGltYWdlcy9oYzkvaGY3LzEzMjAyNTE5Njg3MTk4LnBuZ3w0MWNjMTk2YmYzYmQ2OGU4N2Y0NGM4NDVlOTJkODEzNGM5M2Y0YWZiN2YxNmFkMDI1NjdlNGQ3OGVkYWUzOWI0',
            benefitsImg: ['/medias/41531-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4ODE4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiNC9oYjkvMTMyMDI1Mjg2OTgzOTguc3ZnfGYzNGI2Nzk1N2JlMTg3OTg3OGJiNjFjNDBmODJkZWRlODUzOTc2NTE1OTcxODc1YThkNjhmM2Y4MTgyOWRlMzA',
                '/medias/41531-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w2NzQxfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5Ny9oNTkvMTMyMDI1Mjk0ODQ4MzAuc3ZnfGFiYjJjYTg5MTA2ODc1YWIzN2I4OWM4NWZlMjI4YTMxNmEwZGE5NTE3YTQwZGU2NjliMzQzNjkxYjcwZDBiZmI',
                '/medias/41531-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w5ODAzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5NC9oOWIvMTMyMDI1MzAyNzEyNjIuc3ZnfDU3MTZmNmRlZGYxODIwMTcyMmJjNTlhZjhmMGRhZTZmNGM2NTAxZmYwYjk1NTEyOGExZjBlZmJiODI2OWI0ZmQ']
        },
        {
            name: 'PostgreSQL on SAP Cloud Platform',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '41595',
            initials: 'PS',
            heroImg: '/medias/41595-Hero.png?context=bWFzdGVyfGltYWdlc3w4NzIxMTZ8aW1hZ2UvcG5nfGltYWdlcy9oMTUvaGQ5LzEzMjAyNTE5Nzg1NTAyLnBuZ3w4OWQxOGU2NDY1ZGRlZjc1Nzg3MGM3MTE2MWZlNGIzNDhhNGZmNzk0NmJiN2ZkNjk2ZTNlMDIzODI4MGFmMTBm',
            benefitsImg: ['/medias/41595-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NDY1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g0Yy9oZGQvMTMyMDI1Mjg3MzExNjYuc3ZnfDM3ZjQ3YTQ2ODhlYWU4ZjJhMTUzNjA0MzkwNGM0YmY5M2VhNjhjYTVjZTk1YzAxODMwZTRmMDY4Yzc1ZDI2NTI',
                '/medias/41595-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w2NzQxfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3YS9oYmEvMTMyMDI1Mjk1MTc1OTguc3ZnfGU4NzcwNjY0MjFjY2EzYzdjMWY1MTIxY2JjYWFiZTk3YWI5NjM5MjNjNzVhMzZiMmEwZjkwMzc2OWU4ZDgzMTc',
                '/medias/41595-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMDE3MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNzkvaGMyLzEzMjAyNTMwMzA0MDMwLnN2Z3w0OTUxMjcxZWMwOTAwZGQ2MDA5N2YwNzdkOGVlZDYzYzJhNjQ4NjhhZGE5ZGExMWZmZDY1M2E5YTNjZDQ1YjE2']
        },
        {
            name: 'SAP Asset Intelligence Network, Premium Membership',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '41770',
            initials: 'AI',
            heroImg: '/medias/41770-Hero.png?context=bWFzdGVyfGltYWdlc3wxMjg5MTI5fGltYWdlL3BuZ3xpbWFnZXMvaGE5L2gwZC8xMzIwMDQ3ODM3MTg3MC5wbmd8OTMyNDIxMzFkNGVlNDZmYmUxODc2MmVjNjEyNmZmNGMwOWNjODAwOWQ1MmJkY2UwYTA0YTAxMDliNmJhNjcxZg',
            benefitsImg: ['/medias/41770-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMDE3MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZjMvaGJiLzEzMjAwNDgwMDEwMjcwLnN2Z3xmNmQ0ZWMxNGNmYWIzZWNkYTA0YTZiYmVkMzM4ODA0YjQyZjJkYjlhNTlmMTE3MDJkZjNmNjNiOWRlYjQ1MWM4',
                '/medias/41770-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDQ4N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYTQvaDE1LzEzMjAwNDgyNzYyNzgyLnN2Z3xkOWZjODY5NjdhYTFhNTBkZGIwZWMxMWM0ZDNiNzQxMTQ1MWZiODYyYzRhYTA2Njk3YWY3YTViNTFmZmQzOTI2',
                '/medias/41770-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMzYxN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oN2IvaGUwLzEzMjAwNDg0MDQwNzM0LnN2Z3xhYjU5ODZiNGY2ZmZiOTgxMWI1MzlkMWVjODlmMjBlZWI5ZmY0NjEzODViZGU0NWRkMjlmZjY4YzdkODU5NmNm']
        },
        {
            name: 'SAP Asset Intelligence Network Storage Add-Ons',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '41771',
            initials: 'AS',
            heroImg: '/medias/41771-Hero.png?context=bWFzdGVyfGltYWdlc3wxMTkxNzcyfGltYWdlL3BuZ3xpbWFnZXMvaDAyL2hkMi8xMzIwMDQ3ODMzOTEwMi5wbmd8MmI2YjE0MjkxZjcxZGU2N2NjNWYyMDI3NDc0MDllYzUwM2RmZjYyOTI4MmFjNWYwMDg0YWQwNmNhNTlmYjk0MQ',
            benefitsImg: ['/medias/41771-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMDE3MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMGUvaDE5LzEzMjAwNDc5OTc3NTAyLnN2Z3xmYjY4OWIwOGYwZTM3ZTNkZjhhM2ZiOWU2ZWI3M2IxNWU3OThjYjNjYzEzNzYyMWVmNDA4YTNjZGY3ZjA1MmY4',
                '/medias/41771-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDQ4N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMDYvaDJiLzEzMjAwNDgyNzMwMDE0LnN2Z3xlZmVjZTE1NWE5ZDM5YWY1MWNiN2I0ZTA4NmMzODY5Y2M1YzI1OTU1MDgyMTQzMTQ5NjAwNWI3ZTc4OThjNmM0',
                '/medias/41771-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMzYxN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYjcvaGNhLzEzMjAwNDg0MDA3OTY2LnN2Z3w2MzUyMGM3NDg2Y2MxYjg3Y2VkMjZhZmU3MGY0NzM1OTdkMzRhNGI4YzExYzBiMWNiMDhmNzAxNWUyNGJiNWM0']
        },
        {
            name: 'SAP Asset Intelligence Network Equipment add-on',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '41772',
            initials: 'AE',
            heroImg: '/medias/41772-Hero.png?context=bWFzdGVyfGltYWdlc3w4NDczNDB8aW1hZ2UvcG5nfGltYWdlcy9oZDAvaDM4LzEzMjAwNDc4MzA2MzM0LnBuZ3w0N2JmODVkNTg5NTg0ZGIwYjhlNzRlZTI1ZWY5NDBkZTRmYTQ0NmIyNzNmMWMwNjA3MmQ0Mzg0ZGQyYjM4MjRi',
            benefitsImg: ['/medias/41772-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMDE3MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oYzUvaGYxLzEzMjAwNDc5OTQ0NzM0LnN2Z3xlMDBhNDg1M2RkMWIxMDc1NWFkZTkyNzg2YmQ0YThjODkxNDYzMGNhYTdmODY2MDgzNDEwYWIzOGZhN2NlMmY4',
                '/medias/41772-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDQ4N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMDUvaDk0LzEzMjAwNDgyNjk3MjQ2LnN2Z3w0M2Y3ZWVkY2E3NzcxMmY0M2EzYjJkNzY5ZGVjZTMyYzFhZDQwNTBkMGRlZmQ1ZGQwNWFlZTNmYzdiZGFhZDU3',
                '/medias/41772-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMzYxN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNjIvaDA2LzEzMjAwNDgzOTc1MTk4LnN2Z3xkMmMyMjc4NDEyODk1ZWYyNjdlN2U3Yjk0ODIxNTFkMGE1NGQ4ZGU5Yzc4ZTAwMTIwNmU2OWY2NGM1MjZkNTMx']
        },
        {
            name: 'SAP Edge Services',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '41852',
            initials: 'ES',
            heroImg: '/medias/41852-Hero.png?context=bWFzdGVyfGltYWdlc3w0OTUzMDF8aW1hZ2UvcG5nfGltYWdlcy9oMzQvaGU0LzEzMjAyNTIyODY1Njk0LnBuZ3xiNDYyNjAwMzI1NjkzOTc3MWVjNjEwZjQ0YzAwZWI2MTA5OTFjYmFmZjExYzhiM2JjZmRiYWQ3YzM3MTMwMjU5',
            benefitsImg: ['/medias/41852-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNjcyOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNjkvaGNjLzEzMjAyNTI5NDE5Mjk0LnN2Z3w4ZTk3NTViNzYxZmE4Y2FiNWQ1N2ZkZTkxZGVmMjM2ZDJkNjg5ZjRlZjc2OGQ4YjNkMGQwOTliMDc2YzY1OTRh',
                '/medias/41852-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODMxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oN2YvaDhiLzEzMjAyNTMwMjA1NzI2LnN2Z3xmYTZiYjU0Mjk3NTJiYmY3Y2U2NzgwYjVhYzRjNTVlM2RmODMzMzAzMmRjNWU2YjQxODM2OWI3YjZiZjEwMTQz',
                '/medias/41852-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMjIzOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNDgvaDhiLzEzMjAyNTMwOTkyMTU4LnN2Z3xmNzdmYzQ0MGFkNmIwOTY4Y2M5YTQ4YjgwMWM1MGQzNzczNzhkYmFiOGIzNDA1ODI5NTk3NjY1OTE5NzhiMGFj']
        },
        {
            name: 'Object Store on SAP Cloud Platform',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '42132',
            initials: 'OS',
            heroImg: '/medias/42132-Hero.png?context=bWFzdGVyfGltYWdlc3w4NzIwOTN8aW1hZ2UvcG5nfGltYWdlcy9oYmQvaDMxLzEzMjAyNTE5NzUyNzM0LnBuZ3w5OTI0OTYyNTRkYzlhOGEwMGY0YTVmNjMxMjUzNGVkMWI5NzNhMDJlZmM2Y2YyZTVmZmJjN2IzZTMyZDY1NDhh',
            benefitsImg: ['/medias/42132-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMzUzMXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMDcvaDlhLzEzMjA3MzM2NDg0ODk0LnN2Z3xjZDdhMWY2ZmJiN2ZlNzhlNzRiNTY2MWVmMDVkOGM5YWY4YjZiNGNjYzA5NzBjNDI2OTQ1ZTY3ZTYxMmVhZGQ3',
                '/medias/42132-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNjM4OHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMDUvaGM0LzEzMjA3MzM2NTE3NjYyLnN2Z3wzNDk5NjNmMzEwYWUwY2FmOTY2NTU2NTdkNWNmMjI5ZWE1ZjExZDM1YTY0YmY0MTg3YjcxMDdlYTdhNTBiMWQ1',
                '/medias/42132-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w3Nzk4OHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjMvaDExLzEzMjA0NTAzNTYwMjIyLnN2Z3w3MTNjNTFjNDFhYzJmYzJiZTFjNmY3OTE0MzIyNjQwNDRlMmVjZDVlNzk3NjBhYzQxZDAyMzMxZjI3NzNjOTZh']
        },
        {
            name: 'SAP Cloud Platform Enterprise Messaging',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '42149',
            initials: 'EM',
            heroImg: '/medias/42149-Hero.png?context=bWFzdGVyfGltYWdlc3wxMTY1NTA5fGltYWdlL3BuZ3xpbWFnZXMvaGU2L2g1OC8xMzIwMDQ3ODQzNzQwNi5wbmd8M2Q0YTI2NTJiZjE3MjVhMjBkYzdkNjEwN2Q4MmE3MTU0YWQ1Mzg3ZDU3YTQ4MDQwYjAzY2QyY2I3OGIzMTAwZQ',
            benefitsImg: ['/medias/42149-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w0Nzg3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g4NC9oMjEvMTMyMDA0ODAwNzU4MDYuc3ZnfDI1ZmFlMjA3NTJlOTMyYTQwNzMzMjRhYWI0ZTU0ZjMyNjRlY2FiNGIxZGEyODMwNWM5ZjlkNmNjYmRmYzdjN2E',
                '/medias/42149-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4MzE0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlYy9oNTAvMTMyMDA0ODI4MjgzMTguc3ZnfGQyZGE0NWUwMjQ2NjRiYzBlODcyMmQ4MzNjNWVhYzU0OWU2ZTQ3ZjAyNmE2OWM4ZWY1NTZlN2FiNDNlZmMwYTc',
                '/medias/42149-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMTk1OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNGYvaGZlLzEzMjAwNDg0MTA2MjcwLnN2Z3xlM2EyY2Y4Yjc3OWFlMmM4ZWYzMmI4ZDA2M2U0MzJlY2VkYWRlOTQ0MzZjZjg2NjYyNDhiN2IyNTU2MWQ0MjRm']
        },
        {
            name: 'SAP Cloud Platform Forms by Adobe',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '42188',
            initials: 'FA',
            heroImg: '/medias/42188-Hero.png?context=bWFzdGVyfGltYWdlc3w1NzExNjF8aW1hZ2UvcG5nfGltYWdlcy9oYzEvaGFmLzEzMjAyNTIyMjQzMTAyLnBuZ3w3NGZlN2QxZGNjNDMyNmJiZDMwMDdmMjI4YzE1NTI1MjNmMDhjYjgyN2U4Y2ZiZmI4MmFlMGUyOGM3NDMzZDEy',
            benefitsImg: ['/medias/42188-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMjIzNXxpbWFnZS9zdmcreG1sfGltYWdlcy9oYzQvaGY5LzEzMjAyNTI5MTI0MzgyLnN2Z3xlNDQzMDc3ODQ3MDAyNDY0MTE2ZjNlZGUwNGUwMWJkMTQzOWEyZmY4OWNmZjNhMjFiMDY1OWM3MzRlYzBlOGMz',
                '/medias/42188-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMTAzMnxpbWFnZS9zdmcreG1sfGltYWdlcy9oZTMvaDJmLzEzMjAyNTI5OTEwODE0LnN2Z3xjMjYwYmM4NmFjMzAzYWQxNDlkMGM5ZWY1Zjk0ZWY1MTIzYmE5MmU0NGQxMzRiNzg4ZDUyODJkZDliZTIxZGIz',
                '/medias/42188-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w2NjU5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmNC9oMmYvMTMyMDI1MzA2OTcyNDYuc3ZnfGExNGUyYzcxYzBkZjFiODJkZDVhMDM3YTlhY2NmODAyNTNiMWVkNDAzYjQ3OGRlZDE2ZGZjZjExNDc5NjNjOGQ']
        },
        {
            name: 'SAP Cloud Platform Open Connectors',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '42340',
            initials: 'OC',
            heroImg: '/medias/42340-Hero.png?context=bWFzdGVyfGltYWdlc3w1MDk5NjB8aW1hZ2UvcG5nfGltYWdlcy9oOTIvaDRhLzEzMjAyNTIyNDA2OTQyLnBuZ3xhZDM4ZjEwYzQwMWQzMDIyOTFmM2JkM2FkYjNiZmRjOWJjNmVmNTVkNWM0OGQ0YjQ0ODkyMGJmYjk3OGExYjQy',
            benefitsImg: ['/medias/42340-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w0Nzg3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g1NS9oNWYvMTMyMDI1MjkxODk5MTguc3ZnfGYxNTAzZjEzYWE5ODc3MTk5MmE0MTE4ZGRmNzlkOTNmZDI5NDIwYzJmMzlkY2VlMWUzZjFhYTJiMTBiOGU1YzQ',
                '/medias/42340-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4NTg4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlOC9oNjEvMTMyMDI1Mjk5NzYzNTAuc3ZnfDdhYTU2Mjg0Y2RkOGM1NzE5ODU4MTg5ZDkwZTZjZTc0ZTJjNDcyZTM0MGYxNjAwNjc3YjkxOTA2ZDZiNDIyMjc',
                '/medias/42340-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNDUxM3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNTUvaGFlLzEzMjAyNTMwNzYyNzgyLnN2Z3xlMzFlZjlhYWRlYzU5NDE2MGRlYzhiOWIwNjllODEyYmVjNDVmOGY0NjQxZjY0YmMxNjVmYTU0YzJjOWJiZjJh']
        },
        {
            name: 'SAP Cloud Platform Application Logging',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '42549',
            initials: 'AL',
            heroImg: '/medias/42549-Hero.png?context=bWFzdGVyfGltYWdlc3w2NTQ5OTh8aW1hZ2UvcG5nfGltYWdlcy9oNDEvaGQxLzEzMjAyNTIxNzE4ODE0LnBuZ3w4NmYxMmY2NjgyNmQ1ZjBmMWEzZTU1Yzc4ZDc4ZDMwYWQ4M2MyYmQ5Y2E3MGZlOGU2MGNhNzQwY2RmOGYzZjhi',
            benefitsImg: ['/medias/42549-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMzUzMXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNjEvaDMyLzEzMjAyNTI5MDU4ODQ2LnN2Z3wyZWJkOGM1OTM4YWZlNzQ3MjFmMGM2YzEwMzdmMGQ2OTYzMjQ3MDAyZTgwNjVhZmVjNTVhOWY2ZGJiY2UwOWFl',
                '/medias/42549-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w3NDEyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlZi9oZjUvMTMyMDI1Mjk4NDUyNzguc3ZnfDY0ZTBhZGFmMWU3Yjc5N2M3MTgwNjJmZmMxN2RlNDMyNGY0YzIwMDhjYzgyNjAxMmM1ODYxMWViOTM3M2QzYjM',
                '/medias/42549-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMDEzOXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNDkvaDY0LzEzMjAyNTMwNjMxNzEwLnN2Z3wxMDAyNDZiMjAwY2ZjZGI5NDI4YjU4YTFlNWZkMzI4NDg4NzNmZTg4OWY5ZTJkNTIzM2U5NDcyNWUyNjVlM2Iz']
        },
        {
            name: 'SAP Data Warehouse Cloud',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '42709',
            initials: 'DW',
            heroImg: '/medias/42709-Hero.png?context=bWFzdGVyfGltYWdlc3w3NTEyNzl8aW1hZ2UvcG5nfGltYWdlcy9oMGMvaDIxLzEzMjAyNTIyODMyOTI2LnBuZ3w2MTZmMjMwODRlYjAxN2ViNDliMDYzNDhjYjY5ODQwZGUwMzU4MTQwOTJhODgxZjA5ZWI0YjBlZmU3NTZiNWJi',
            benefitsImg: ['/medias/42709-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w1OTU4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2MS9oYzUvMTMyMDMxMjU3MzEzNTguc3ZnfDEwZDlhZmIyMTY2YmFmNWU0MTAwMzcyYjgyY2M4MDBkYTgwNGYwNjExOWU0NTU2MTZjZDA2NWFmNjE1ZjA2Y2Y',
                '/medias/42709-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMTEzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gyZC9oYjMvMTMyMDQ1MDQwNTE3NDIuc3ZnfDdiOGRiOTIxOTczYWM0ZGMxM2IzOWRhOTYyMjU4ODhmZWE2MDIyOWQ5ZGJjZTk1Y2I3ZTZmNjBhODczNjBmOWQ',
                '/medias/42709-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0MjQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNC9oYTAvMTMyMDQ1MDM2MjU3NTguc3ZnfGU5NTg0NWQ4OWI2ZjBkYWMwNjhhMDA0NGI4MTg2MmJlYjNkN2JlZWU3OTQ5NjBhYTZkZGM5NmYyMjcwNTg4MzI']
        },
        {
            name: 'Note Implementation Service',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '45278',
            initials: 'NI',
            heroImg: '/medias/45278-Hero.png?context=bWFzdGVyfGltYWdlc3wyMzc4NzcwfGltYWdlL3BuZ3xpbWFnZXMvaDgyL2g0Ny8xMzIwMjUxOTcxOTk2Ni5wbmd8Mjg2NWRiNjgwZmY3NjE0ZGQyOTE4ODY2MTMxYzAwMjlhZDk4ZjMxNDVmNzRmMjRkZGIyY2MwYjY0NDk0MTQ3Yg',
            benefitsImg: ['/medias/45278-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3ODMyNXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNjgvaDFhLzEzMjAzMTI1Nzk2ODk0LnN2Z3xiZWQ1MDE1MWE5NjA1NjM2ZmZlY2Q5Y2FiYmVhNjYxMDA1ZGFjZTFiMGI0ZTEwNjBhMjgxZDk3MTkzNWVjOTMy',
                '/medias/45278-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w3ODQ3NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oM2UvaDgyLzEzMjAzMTI2NTgzMzI2LnN2Z3w2ZWE5OTUyOTYzNzBlYTE5NDNlOWQ5ODk2YTFiZjZhMTMxNGVhY2UzZjY2ZjAxOThhNWZjNjgxZjJjZDQ2N2U5',
                '/medias/45278-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w4MDU2NXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZTgvaDM4LzEzMjA0NTAzNjkxMjk0LnN2Z3xiNzNmMjlmMmY4MzdmYmNjOTdkMzdhNjUwYjI4NDgxN2I5YjUzYjU0NWI4ODk1ZGZkMWIyMmY1M2Y0Njc1M2Jm']
        },
        {
            name: 'SAP Asset Strategy and Performance Management',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '46908',
            initials: 'AS',
            heroImg: '/medias/46908-Hero.png?context=bWFzdGVyfGltYWdlc3w3NjcxNjJ8aW1hZ2UvcG5nfGltYWdlcy9oYTUvaDg5LzEzMjAyNTIwMDQ3NjQ2LnBuZ3wxODgwYzFmM2VkZTViMTljZTE5NTI4OTVlODM4NDUxZjRkM2E1N2ZhOGY0M2ViODVhODM2MTQ3N2U5ZmEwOWU5',
            benefitsImg: ['/medias/46908-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMjk2OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjUvaGQ4LzEzMjAyNTI4OTI3Nzc0LnN2Z3wxZGNlZjMxZjMyNmUxOWZkYzhmMzFmODVhMGNlNmQ5MDFlZDBjNGVlNTIyNjBjMjE0NGI4ODc2NDEzZGNmNWI2',
                '/medias/46908-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODMxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMDQvaGMwLzEzMjAyNTI5NzE0MjA2LnN2Z3wyOTAwMDFjY2YzYTMzMmZkYTQ4ZDliMDIwOTdhMzM1Njg1NTJmMmIwODg0NWIxOTZkMmQyZTgzOTE1OGVhMmZi',
                '/medias/46908-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wzOTU0OHxpbWFnZS9zdmcreG1sfGltYWdlcy9oYmQvaDJmLzEzMjAyNTMwNTAwNjM4LnN2Z3wxN2IyZmMzMDg1ODM5NjU0Y2ZhYjNhMGU1YWM4MTNmZWU5MTdiYWFiMmM3MTgzMTYyMjE2YzkwZTg1Mjg5YTkz']
        },
        {
            name: 'SAP Cloud Platform Alert Notification Service',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '47001',
            initials: 'AN',
            heroImg: '/medias/47001-Hero.png?context=bWFzdGVyfGltYWdlc3w3NTI5MTF8aW1hZ2UvcG5nfGltYWdlcy9oMTYvaDQwLzEzMjAzMTI1MDQzMjMwLnBuZ3w3MTM4ZWEwNWFhMWUyMDQzZmUxM2JlNzZhM2RjOWRlNjU0M2NlNTI1YjJkNDMyZmFjN2FhZjI3NmQxYWUwMGQ2',
            benefitsImg: ['/medias/47001-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyMjQ2MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNzIvaDQ4LzEzMjAyNTI4OTkzMzEwLnN2Z3w5YWEzMGVkZWE3NGFhMzAyNTVmNTRhYWJlZTQxMDYxOTU5MTY2NWE1MjRhMzkyN2I0MTE0MWJhMmE4NmI5OTBm',
                '/medias/47001-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w1MzMwfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hjNi9oMWYvMTMyMDI1Mjk3Nzk3NDIuc3ZnfDU3OWZhOTQyYTUwYTI4NzQzMmZmODM1NmYyMmMyOTc1NjFkMzVjMzQ5MGJjMGNiMjYyZjdhOGNiY2QxOTAzNGQ',
                '/medias/47001-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMTgyMnxpbWFnZS9zdmcreG1sfGltYWdlcy9oYzIvaDYxLzEzMjAyNTMwNTY2MTc0LnN2Z3wzMTFhOWEzOGVlZmQyMTg2MTg2ZGYxYWI0Y2ExYzMzZDMyYzg0ZDMyMDQxYTgzY2IwMDgxOGQ2YmM0OGI1NjFi']
        },
        {
            name: 'SAP Crystal Reports XI Developer, Full Product',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '60050',
            initials: 'CD',
            heroImg: '/medias/60050-Hero.png?context=bWFzdGVyfGltYWdlc3wxNDQ2Mjk4fGltYWdlL3BuZ3xpbWFnZXMvaGFmL2hhMi8xMzIwMjUyMjc2NzM5MC5wbmd8ZjhkYTM4ZjQ5NjE1N2MwZTA0OWMxZjA4YjM0ZDAwZTQ0NGE0OGMzZmU2YmI5OGRlOTQwOTc3MzIwNTM1NDU1ZA',
            benefitsImg: ['/medias/60050-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NjczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5Zi9oZWQvMTMyMDI1MjkzNTM3NTguc3ZnfDFjZjNiODJhN2UyOWFkZjE3YzZlMzQ1NTNiOGFmYjQzNGYwZmQ3MGRjMGFkOGUxOTJmZTg2MTFhZjlmMjBhMWI',
                '/medias/60050-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oYjQvaGQyLzEzMjAyNTMwMTQwMTkwLnN2Z3w0Nzc4YTc2N2UxNTczZGY2MjM5NGYxNjhjZjEwZTZiYmNhZDkyMWUxNDhmZjM1MjM0MmFlMGJlN2Q4ZDk1ZGIx',
                '/medias/60050-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMTk4N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMWEvaDllLzEzMjAyNTMwOTI2NjIyLnN2Z3xmZGY3MzAzOGFiYzBlZWZjZGZhYTEwNTczY2MzMjYzZWJjYTg2YTE4ZjIwZTY0NGY1ODBkZjQwN2FiYWRkODcy']
        },
        {
            name: 'SAP Cloud Platform, starter edition',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '99000',
            initials: 'CP',
            heroImg: '/medias/99000-Hero.png?context=bWFzdGVyfGltYWdlc3wxMTIxNjYxfGltYWdlL3BuZ3xpbWFnZXMvaGUzL2gyYi8xMzIwMjUyMjY2OTA4Ni5wbmd8MGM0Mzk1NDMzMjRiMTU2MGM0YThlMTRlYWFjNDFlN2E3MGQ2NWU3MTQyNWM5ZmY4MDdhMGYxMjU0MGMyNDM3Yg',
            benefitsImg: ['/medias/99000-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMTA1M3xpbWFnZS9zdmcreG1sfGltYWdlcy9oODMvaDc0LzEzMjAyNTI5MjU1NDU0LnN2Z3w3OGFlMWYyYWVhZGNmMmNkOTdlNzBhNzRhZmI5OTYxYjVjYjdkNDNkMTM1ZDlhZTA3MWU0ZGExZTE1ZWQ2NzRi',
                '/medias/99000-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wzMDA3M3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYmEvaDliLzEzMjAyNTMwMDQxODg2LnN2Z3w1ZTU0ODgxOTM1OTY0MjM5ZmU2M2IyODAzNTM5MzA0ODNjYTFmMThlYjA3MGFlMWNhYzBmNWFhODRlNzcyYTRj',
                '/medias/99000-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMzUzMXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMTkvaGViLzEzMjAyNTMwODI4MzE4LnN2Z3xkYzY1MTc0NTY4MTliOWNlZmE4YmE3ZThjYjk4NWNmNzcxNmQ4MzAwYzA2ZjA1M2I3MzI3MWQ1OGQ2MzZlYjlk']
        },
        {
            name: 'SAP Cloud Appliance Library',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '99007',
            initials: 'CA',
            heroImg: '/medias/99007-Hero.png?context=bWFzdGVyfGltYWdlc3wyMjQxNjM2fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2g4OS8xMzIwMjUyMDUwNjM5OC5wbmd8NzA2ZjlkMmFmZGNhMDQ5ZTJkYjlkZGQ1NjgwZDM4ZWFlMDY2YTljOWYzODU2MzU0MmUzNjE4ZGM1YTRjOGRhOQ',
            benefitsImg: ['/medias/99007-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMjI3NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oNjEvaGMyLzEzMjAyNTI4OTYwNTQyLnN2Z3w3YWMzMzc0Njc5M2YxY2U0OGRhMzlmODQwMDY0ZTQ1MWQ2N2IwODI3OTU3ZTA4ODc0NWQwNWU3N2ZhYWZlODlm',
                '/medias/99007-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyMzg2NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oNjYvaGQ1LzEzMjAyNTI5NzQ2OTc0LnN2Z3xkNTg0ZTc0Mzk5YTYxYmE5ZDg2ZDk3ZjE4Y2NhNWZiZDdiMjgyOGE4OTUwMzY3MGFhNGVlMTMyYjQ4YjViZjk1',
                '/medias/99007-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w1NTUzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxNS9oZGIvMTMyMDI1MzA1MzM0MDYuc3ZnfGRkYzQwNzhhYjczMGNlNTk3NzQ1NmZiYzllY2M5MjNlOWQ2YjBlNDNkZGZkNTEzNGIzODdmN2YwZmYwZmQ2YjE']
        },
        {
            name: 'SAP Crystal Reports',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            trust_radius_ID: '5d1277c77fde8a00258bd6f1',
            productId: '99043',
            initials: 'CR',
            heroImg: '/medias/99043-Hero.png?context=bWFzdGVyfGltYWdlc3wxMzYzOTgyfGltYWdlL3BuZ3xpbWFnZXMvaGFhL2g3MC8xMzIwMjUyMjcwMTg1NC5wbmd8YWZkMDkyNTIxNDFhZGFiZDM3M2UxMWI1YzhjZmI0YzZhNDIyNTZiOWUyZmUxMjhiMzgzZDRlZWNkMjNiY2MxYw',
            benefitsImg: ['/medias/99043-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NjczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g0Zi9oOTYvMTMyMDI1MjkyODgyMjIuc3ZnfGE3YTBlYjhiZjdjNzIwOGUxM2M0NWU5MTg2MjBiODBiZGE5NzVlZjNjMGViYmI3NzdkODgwMjI4NzdiYzI0ZmI',
                '/medias/99043-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNzIvaDU5LzEzMjAyNTMwMDc0NjU0LnN2Z3wzNzU1YmNhZGM5OTVjOTIzMmZlMmZkZjliZjljZWIwNTBmZDRjZWQ5YTBiOTk4OTdiODAyNDI0ZWNmNTAyYmMy',
                '/medias/99043-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMTk4N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oZmYvaGUyLzEzMjAyNTMwODYxMDg2LnN2Z3xkZDM0NGNiODM0NGQwYmUyOGVjOTBhOTVhMDY3YjNlNDA5NWM4OGE5YzIyNDMzYzM1M2M4MzA1ZGFiNDkxMDNi']
        },
        {
            name: 'SAP SuccessFactors Workforce Analytics Custom Analysis Dimension',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '99056',
            initials: 'CA',
            heroImg: '/medias/99056-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDgzMjU5fGltYWdlL3BuZ3xpbWFnZXMvaDU2L2g2Mi8xMzIwMDQ3ODczMjMxOC5wbmd8NjBlMjUzNThmMTYwYWJmNDFmNDk2MjdkNjUzNTJkNzNjMDBiMWNmOWEyNWRhOWMwYTc3YjZlOWQ4NTZjODY1Mg',
            benefitsImg: ['/medias/99056-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wzMDAyN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYTgvaDdjLzEzMjAwNDgwNDAzNDg2LnN2Z3w1MWY3ZTVhZDMzYmU1MGQxYjUyYTZkNjQ2YTlhNjljOThjNmM4MTJmZmIyNjNkOTBhNDA1NzM0MmIxZDMxY2Fl',
                '/medias/99056-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNDY5NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oZjQvaDUzLzEzMjAwNDgzMTIzMjMwLnN2Z3w5NWQ0ZTY1YzY0N2EzMDY5NWIxNThmMGNiZDQ3NzY2MjRkZWNmYjI2MDgxMDE2MzcwZDNlNjdiNDc1ZDEwN2Ux',
                '/medias/99056-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMDEzOXxpbWFnZS9zdmcreG1sfGltYWdlcy9oODEvaGEzLzEzMjAwNDg0NDMzOTUwLnN2Z3w2ODI0MGNhNjFiZmIyZjFmZjgxNTZhNmQ3MTg5Y2QwNzNkZGI2Mzc4M2EyMGU5ZDYxMTJhZGYyODNkOTQwMjQz']
        },
        {
            name: 'SAP SuccessFactors Workforce Analytics Custom Measure',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '99058',
            initials: 'CM',
            heroImg: '/medias/99058-Hero.png?context=bWFzdGVyfGltYWdlc3w3Mzk0MjN8aW1hZ2UvcG5nfGltYWdlcy9oZDEvaDYwLzEzMjAwNDc4NzY1MDg2LnBuZ3wwMzI2ZDBiNjUxNmZmMTg0MTI1NmYxNzVhNDBlNGMwZDkzYmM4OWYzNTUzYTk1YTU0MzlkMjM1ZDNlNjUyNTNk',
            benefitsImg: ['/medias/99058-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMTI3OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oODQvaDc4LzEzMjAwNDgwNDM2MjU0LnN2Z3w5OWNlOGM2OTBkMWVmZTU1MGZjNDJjZDQzMjIxZDE0OTdlNDFlMWU1MmE2Zjg2MTA3ZDE1ZjVhMGM4NDFlMDA5',
                '/medias/99058-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMTA1OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZTIvaDQwLzEzMjAwNDgzMTU1OTk4LnN2Z3w4Y2ZiYjk3NDkxMTFiYjk5ZDdmNmI3NTgyNzAwZDI4ZWVjOWM1MWIzYjYxZWVhYTg1YWY5YTBiMjYzMWUzY2Iy',
                '/medias/99058-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w2MjM3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmYi9oNTMvMTMyMDA0ODQ0NjY3MTguc3ZnfDFjZjI4OGNhMWQ4OGUxZjExZjE2NzdmN2U5YzE4ODQ3MjI1NDkwY2EwMWM4YTY3MjlkN2ZkMTM4YzcyZjBjYWI']
        },
        {
            name: 'SAP SuccessFactors Workforce Analytics Custom Structural Dimension',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '99059',
            initials: 'CS',
            heroImg: '/medias/99059-Hero.png?context=bWFzdGVyfGltYWdlc3w4MzgxNDJ8aW1hZ2UvcG5nfGltYWdlcy9oZGUvaGJkLzEzMjAwNDc4Nzk3ODU0LnBuZ3wwOGQwNTYzNTIwMTFlOTIzNGU0N2ExYTEzMTI1YzE4Zjk2NGQ1Y2E3MWVjOTExMTg3YzIyZDJmZTNiNTI1MTlm',
            benefitsImg: ['/medias/99059-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNzM2N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNGYvaDkyLzEzMjAwNDgwNDY5MDIyLnN2Z3wxYjIxMzJjZTkzN2ViN2FkYTg1YjQ5NTkzN2I3MDc2OGFlYWVmOWJjNTE5MDhjMDE3MjEwZmY0MjM4M2Y2MTY1',
                '/medias/99059-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODUxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZjAvaGM5LzEzMjAwNDgzMTg4NzY2LnN2Z3w1OGViMzVjYWYyMzRlNzJmNmI0MTY4MDk2YjBmMTg0Zjg2M2E1NGRhNDJjMzAxODE5YzMxOGRlOGRhZGQ2MmE0',
                '/medias/99059-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMjgxNnxpbWFnZS9zdmcreG1sfGltYWdlcy9oMmMvaDZmLzEzMjAwNDg0NDk5NDg2LnN2Z3w1YzllMDBlMGQ0MmE5MGE4MzgyOTdiZjM1YTY3YzRhOTRlNTdjYTM2ZWVmMzJjYjQwODA3YTJiMWIzNDFlODZj']
        },
        {
            name: 'SAP SuccessFactors Workforce Analytics Additional Data Refresh',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '99060',
            initials: 'AD',
            heroImg: '/medias/99060-Hero.png?context=bWFzdGVyfGltYWdlc3w4NTY1NTN8aW1hZ2UvcG5nfGltYWdlcy9oMDUvaGM5LzEzMjAwNDc4Njk5NTUwLnBuZ3xiOGFiM2NiNGU3NjRhNzY5YTVkYjRhZmNmMzdmNTZkMmEwNzVlNGNkNmNmYjliMTYxNTMxNzZkNWY4M2E3ZWUz',
            benefitsImg: ['/medias/99060-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMTI3OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oYjkvaDk5LzEzMjAwNDgwMzcwNzE4LnN2Z3wzY2I1ODFlODRjNGQ3ZTBmNjEzMjllY2MyYmE0NmI2ZjFmMjUyZGQ1YTI4OWRlYmZkMmFhMjliZjM1ZWY2N2Ji',
                '/medias/99060-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMTA1OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZmQvaDRkLzEzMjAwNDgzMDkwNDYyLnN2Z3w2N2FiMTA1MWMyNjFiODdhYWMwMzRkY2ZkOTkwZTg3MDNhMzIzYTU4MTQ1MzBiYzY4ZmI3Zjg0MzA0NjZjODg5',
                '/medias/99060-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w3NTIyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3My9oNDYvMTMyMDA0ODQ0MDExODIuc3ZnfDA0ODJiNTQxNTc5Mjg5MmUzNDNiNjkzMWRlYjYzZmYxMjVmZTFlZmU1YTE4NjkxOGUyMWQwZDIzMzc5OWRhNTE']
        },
        {
            name: 'Implement Recruiting Marketing Career Site Builder',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '99061',
            initials: 'IR',
            heroImg: '/medias/99061-Hero.png?context=bWFzdGVyfGltYWdlc3wxNjQzODY3fGltYWdlL3BuZ3xpbWFnZXMvaDNlL2gzZC8xMzIwMzEyNTIzOTgzOC5wbmd8ZTUzZjQ1MjMyNGM3NzhlOWEzOTRiZTVkOTQ0ZmMxMjcyNTcwMTY0YzFkODk3NTg1MWQxMDhmNzZiY2U4NzgwNw',
            benefitsImg: ['/medias/99061-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNjYzMnxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjMvaDA3LzEzMjAyNTI4NjY1NjMwLnN2Z3w1NmJjYWVkYWY4YzIwNWRjNjM4NjFkNTJmYWNlYzRjYTBlNTQwYjJmMTVlZjU0Yjk5MjVjNTkxNzQ2ZTllNTZm',
                '/medias/99061-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyMDYwMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oYTUvaGI2LzEzMjAyNTI5NDUyMDYyLnN2Z3wxZDc1ZTkzNmMwOTc5MDA3NjE5MjU4NjU4NjJiNDg5OWE3ZWM4MjM5MjI1YzkyYjE3MTMzYjE4YWNlYTUxNzQz',
                '/medias/99061-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNDMxNnxpbWFnZS9zdmcreG1sfGltYWdlcy9oNTgvaGIxLzEzMjAyNTMwMjM4NDk0LnN2Z3wwYzBjOTRmY2U5N2IwNDU0Yzg0N2ZlZDc1YjA5NGQ4YjljOGI2YTAxMjM2OGE0MWQzZTJlN2VhZWQxZGJjMDdl']
        },
        {
            name: 'SAP IoT Application Enablement, express edition',
            catImg: '/medias/category-intelligent-technologies.svg?context=bWFzdGVyfGltYWdlc3wxNjQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkOS9oMDMvMTMyMDczNDA1NDgxMjYuc3ZnfDM4OTQ5YTE4ZDBhZGU5ODJmOWI3ZmVkOGUzOGExZDNhNDNlZTNjNTE5ZWUxMDcyZjk0OWI2MGZkYjAyNmVlZDY',
            productId: '99063',
            initials: 'IA',
            heroImg: '/medias/99063-Hero.png?context=bWFzdGVyfGltYWdlc3w4NTQ2MzZ8aW1hZ2UvcG5nfGltYWdlcy9oNmMvaDNjLzEzMjAwNDc0MDEzNzI2LnBuZ3w0YTFmY2IyZWJlOTliN2FlNGJlMTRkMjJkYTIzNDYyNTEyZDNhYWY1YjU1MjRjYWM1NmU3ZjhiNTQxZmVhNjc0',
            benefitsImg: ['/medias/99063-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNTkyNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oOWQvaDIwLzEzMjAwNDgwMjcyNDE0LnN2Z3w4OTYxYTk2ZDQxZTVmMzJmZTk4ODNjMTQxNDU4NzRmYzM1ZDk4OTBjNTdkNmEwNTBmZjQ3MGQwYmE3N2NiMWRk',
                '/medias/99063-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNzA1NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oYmQvaGIwLzEzMjAwNDgyOTkyMTU4LnN2Z3w2M2Y3MGUwYjhmNGFmY2ZkOTI4MzkzZTRmNDA3YjAyNTUzMTc0Y2IzZTIyYjc4OTQzNzQ5ZTgzMTg3NzY3NmZj',
                '/medias/99063-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w2MTg5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3OS9oMGYvMTMyMDA0ODQzMDI4Nzguc3ZnfGQzMTlmODA2YzY1ZmRjMDRhZDAzMTc0MWQzMmRlMDgyNzJiMDEwMmEyMWIxMDQzN2M1NDliODg5MTcxOGQzNjY']
        },
        {
            name: 'SAP Cloud for Real Estate, location management',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '99066',
            initials: 'RE',
            stickedPrice: true,
            stickedTitle: '50% off',
            heroImg: '/medias/99066-HeroSticker.png?context=bWFzdGVyfGltYWdlc3wxNDQ1NTY0fGltYWdlL3BuZ3xpbWFnZXMvaGRjL2g4Zi8xMzI0MTgwMjk4MTQwNi5wbmd8NzQ4MmYxNjU2OTMwMDkwYjJiY2ZiODM2MzI2NDNkNWM0YTQyM2Y3OWE3NTQ2OTM3MTNiN2ZmNmNhMTkzNmMzMA',
            benefitsImg: ['','','']
            // heroImg: '/medias/99066-Hero.png?context=bWFzdGVyfGltYWdlc3wxNzkwMDQ5fGltYWdlL3BuZ3xpbWFnZXMvaDg5L2gwYS8xMzIwMjUyMDYzNzQ3MC5wbmd8ODZlOTk5MzQxNGM5Y2MwZmE1OTNhNmExNDYxMTc5MjQ4NDdmNzYzZWFhYTlkZjA4ODRlMmMyNTMyNjdmNTIzYg',
            // benefitsImg: ['/medias/99066-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3ODgzN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMTIvaDFlLzEzMjAzMTI2MDU5MDM4LnN2Z3xhOWE3MmY0MmJmMjZjNTY0MWIyNzNkZjY3YmZhZWNhNjZjMzYzODYyZGEyYTZjMDdjZjhmOGFmMDgwN2MwYzU4',
            //     '/medias/99066-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w3ODM0MnxpbWFnZS9zdmcreG1sfGltYWdlcy9oMGUvaGFmLzEzMjAzMTI2ODQ1NDcwLnN2Z3wyYmFlYjFkYWRlMGM3OGRlNmNiNzZkZDdjZTE3YzhkN2Y4MzRkODRmYzZlNTZkYWQ4NzUxNDBkZDIzNTYyNmQz',
            //     '/medias/99066-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w3OTAyOXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNmUvaDUwLzEzMjA0NTAzOTUzNDM4LnN2Z3wzZWU0MGJlNzllYTdjZjc1MTBhM2YzNWQzNjc5M2EyNGEzYWJlNWJjM2E3ZjNmOGRiYjVhYmRhY2Y4MzIwZWUz']
        },
        {
            name: 'Ruum by SAP (Professional Edition - for small teams)',
            catImg: '/medias/category-project-management.svg?context=bWFzdGVyfGltYWdlc3wzMTc3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzOS9oODIvMTMyMDczNDA2MTM2NjIuc3ZnfDljM2EyMWExMDM3MDA4ZTFmYTdmNGJjYmI2MjZmY2ZmMzNmZTRiNGYyZjgxZmI4OTI4NDQzYTM1MjI5NDBmOWE',
            productId: '99069',
            initials: 'RU',
            heroImg: '/medias/99069-Hero.png?context=bWFzdGVyfGltYWdlc3w1NDE4OTZ8aW1hZ2UvcG5nfGltYWdlcy9oZWMvaDAyLzEzMjAyNTE5ODUxMDM4LnBuZ3xjM2YzNzVlOGM2ZjVjN2ViZTdkNWEwNWYwZjZlZDhjMWNlODA4MWVjMjhiYjRiZDViN2M4OTI0MDNhZWQyNGE2',
            benefitsImg: ['/medias/99069-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w3OTY4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5My9oOGEvMTMyMDI1Mjg3OTY3MDIuc3ZnfGFmNjE2OWIyZTk0OTc5Njg4NTcxZTIyYjM4NmJjZmM5ZGVhNWYyZTM5NWNhNDc4YmFlODJiMzhkM2M2MDAwYjg',
                '/medias/99069-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wzMDAyN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oZWQvaDI0LzEzMjAyNTI5NTgzMTM0LnN2Z3w3ZTQ5ZWRkZjc5NWU3NGJiZDljMDMxYzAzYmI4OGNmMzI2YTljNGExYzBhYjRhNTE5MTUyODFjZjQ3OGQ2ZDU5',
                '/medias/99069-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNTY1MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oYTEvaDFmLzEzMjAyNTMwMzY5NTY2LnN2Z3xhOGMzODUyMjA1NjBkOWFjN2VkMzcxNmQyZDlkNTEyMzUyMGI0MmMzYWM5Y2NhMmUzNGIzZDVmNDMwYWUwNmRm']
        },
        {
            name: 'SAP Crystal Reports, upgrade version',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '99070',
            initials: 'CR',
            trust_radius_ID: '5d1277c77fde8a00258bd6f1',
            heroImg: '/medias/99070-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDUxNzc0fGltYWdlL3BuZ3xpbWFnZXMvaDI4L2g5YS8xMzIwMjUyMjczNDYyMi5wbmd8M2I3YTI4OWI5ZWMwMmFjYzg0OGVkOWVkMzJlYzFjYzkxZTkwOWZiMDZlODY2MjdiMjBjOTgwMzcwZjllZDIwNw',
            benefitsImg: ['/medias/99070-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NjczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZC9oMDkvMTMyMDI1MjkzMjA5OTAuc3ZnfGI3YmE4MzYwNjUwMDc5MmUyMTlhOTM3NzZlYjRjMDY5NWRiNDkxNzQ1NjYxYzAyMzA0ZmIzZTMwOGUxNDFhZWE',
                '/medias/99070-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNjQvaGZiLzEzMjAyNTMwMTA3NDIyLnN2Z3wxZWI4MmYwZmY5OTBhMmM5MDM3OTRmYWU2N2MzZTU5NDM3ZWVhN2RmNGExMmYwM2Y2MmRkMjgwY2NkYzMyY2Jl',
                '/medias/99070-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMTk4N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oZjIvaGJmLzEzMjAyNTMwODkzODU0LnN2Z3wyZTgzMmEzYzQyZTMxOTQzMDhmNTk4ZGRmMTNlMTliMGE2YzY4MWQzYjA5MzI5NGVkM2RjNWM1ZDZmYThmZDFi']
        },
        {
            name: 'SAP Analytics Cloud connectivity setup for HANA database',
            catImg: '/medias/category-packaged-services.svg?context=bWFzdGVyfGltYWdlc3wyMzM0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMy9oZGIvMTMyMDczNDA1ODA4OTQuc3ZnfGFlNDgwZDNlNWM5YWRhNjM3ZDRjNmFkYjY2ZjEwMjY1MWU5ZmFkYWNhYWQ3ZWYxYzVlNjE2Nzg4NDViNWJlNmU',
            productId: '99073',
            initials: 'CS',
            heroImg: '/medias/99073-Hero.png?context=bWFzdGVyfGltYWdlc3wxOTEyOTQ0fGltYWdlL3BuZ3xpbWFnZXMvaGZhL2g1Zi8xMzIwMjUxOTg4MzgwNi5wbmd8MjQ5MTZkZmJkNjRhZmU3OWVjMjYyZGM4NDJlMWEyNWY1YjE4MDNkN2U2YzFiMTViOWZlMmQ1ZTI3Mzk0ZTE4Zg',
            benefitsImg: ['/medias/99073-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMDczMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMGEvaDVmLzEzMjAyNTI4ODI5NDcwLnN2Z3w3YzFlMTk2ZmE2ZDg2NDU2ZDY1N2I4ZTQ2ZmI2MGVhOWM5ZTlkMjkyYjgwZDkzOTBhOGQ1YjAyMzlhNGQ1MzMw',
                '/medias/99073-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyMDUzOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNWEvaDhiLzEzMjAyNTI5NjE1OTAyLnN2Z3w2MmRhODAzN2Y5ODM0MzQwOTliOTRhMmE4MDAyYTkyM2RjYzI1YjgzODVkY2UyMTNlOGRkYjQ1MmEyYThlMTli',
                '/medias/99073-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMzYxN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNWQvaDQ5LzEzMjAyNTMwNDAyMzM0LnN2Z3xkN2M2MTMyMGEzM2VlNjYyNzlmYTRhOTBhYjY2Yjc5ODg3OWEyODYwODdhNjZiYWI2MWE1NTQxYzdhZWEzYTk4']
        },
        {
            name: 'SAP Jam Collaboration',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40009',
            initials: 'JC',
            heroImg: '/medias/40009-Hero.png?context=bWFzdGVyfGltYWdlc3wzMTQ4MzkyfGltYWdlL3BuZ3xpbWFnZXMvaDFjL2hlMC8xMzIwMzEyMjY1MTE2Ni5wbmd8YmYzNmNmYzZjNmY4ODNhOGFjOTVkMmY4ZGZkZjU0YzExZTc1Mjg2YTQ0NzZiNTE5MDc1YTI5YmUzMmVlNjdkMw',
            benefitsImg: ['/medias/40009-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNTQwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNDQvaDA2LzEzMjAzMTI1MzM4MTQyLnN2Z3xlMDQxMTMzNzc3MjAyM2E3YzgzMjQyMGNmN2YzZGZmODU1MjY4MDFlMzI1YmE0MTE0MTQ4MTllM2MzYzZhZjZk',
                '/medias/40009-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4MDc4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3My9oOWMvMTMyMDMxMjYxMjQ1NzQuc3ZnfGEyMDU1MzliM2FmNDc4OWY0NDVhNGZiYzFlOWJmYzFiZWNiODg3YTQ2YjdhNGQ0MTU0Y2ZmYmU5ZmU3OGM3OTI',
                '/medias/40009-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w5NDI3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxYS9oZGYvMTMyMDQ1MDMxNjcwMDYuc3ZnfDVlZGQwMmMyNWQ4NjE3NTIwMmVjMzc4ZTc0MWJhYWYzZGFhZjRmOGQwMTM1ZWFjMWEzNDhlMWZkNDEwOWFiOTg']
        },
        {
            name: 'SAP Sales Cloud',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '40021',
            initials: 'SC',
            heroImg: '/medias/40021-Hero.png?context=bWFzdGVyfGltYWdlc3wxMTg5MzIwfGltYWdlL3BuZ3xpbWFnZXMvaDU4L2hjYS8xMzIwMzEyMjYxODM5OC5wbmd8ODYwMTU1ZTkwZWFkOWQ0NGJhMmQxYjNlNTFjNzJlZDNlY2FhZWM4NDM2OTQ2NWQyNjQ3NmE2MmUwODIwZjAyMA',
            benefitsImg: ['/medias/40021-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxODAyNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNDYvaDllLzEzMjAzMTI1MzcwOTEwLnN2Z3wyZTFkNzcyYmMwMjVmOWE3NzY1MzQ2NTBhMTQ0YTcxNTdmMDcwN2I3NDU3OTI2OTJkMTY3ZmY0OGQ0M2ZhY2Ex',
                '/medias/40021-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNTczN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYjgvaDU4LzEzMjAzMTI2MTU3MzQyLnN2Z3w1MDlhNzliYWMzZTZkOWIzN2VkZmJlYjVkMDU3YzEyZTg3YWIzZjk3ZDkxZDJjOWQxMWI2NjVkYTdjOWFiZjkx',
                '/medias/40021-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0NjM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiOC9oYzkvMTMyMDQ1MDMxOTk3NzQuc3ZnfDU0MzY4MTFkOTFiNWRhOTdkYzdhN2RhZjU5YmE4ZDJjMGVjOTBlNTExYzliNTc1ZjcxM2E1ZDI3MmNmZTRkMzA']
        },
        {
            name: 'SAP Service Cloud, Standard Edition',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '40022',
            initials: 'SC',
            heroImg: '/medias/40022-Hero.png?context=bWFzdGVyfGltYWdlc3wxNTE4MDk4fGltYWdlL3BuZ3xpbWFnZXMvaDI4L2gxNy8xMzIwMzEyNDY1MDAxNC5wbmd8MzUxZTc1MzBjYzFjMzI4N2I4ZmI0NDZmM2Q3YzI5ZGFlMzc2MzE3ZjVhN2E4ZDAzMWIyYjRiYzU4NjY0OWMzMA',
            benefitsImg: ['/medias/40022-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NDk3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hjYy9oNzUvMTMyMDMxMjU0MDM2Nzguc3ZnfDY5YTJmMzcyNzIwODA2YmJmNDI5NTk1Nzc4MWVmZmJiNzlkYWZiMDM5MTliN2IwNTg5Zjg5OWU3NzlkMjJlMTU',
                '/medias/40022-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMDYzNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZjQvaDQyLzEzMjAzMTI2MTkwMTEwLnN2Z3wzZWIzNWJiOWYzMzQxYTAxMzE4N2EzYjI3N2RjZGJkOGQ1Mjc4MjNhMWUzMDYwYTIwYjgxNjQ5ZTQ0NGNmNzEz',
                '/medias/40022-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxOTg5NHxpbWFnZS9zdmcreG1sfGltYWdlcy9oYjkvaDYwLzEzMjA0NTAzMjMyNTQyLnN2Z3wyMzE4ZTQ1NmI5Y2QxN2IyOTlmZDk2MDdmYzZkMzA2YTkzMGY4N2UxZWQ5M2ZhZmUzNDZjZGUwODU2MmUyY2U1']
        },
        {
            name: 'SAP SuccessFactors Performance and Goals',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '40026',
            initials: 'PG',
            heroImg: '/medias/40026-Hero.png?context=bWFzdGVyfGltYWdlc3wxNTE1ODg4fGltYWdlL3BuZ3xpbWFnZXMvaGM1L2gwMS8xMzIwMzEyNDY4Mjc4Mi5wbmd8YzhjNzdjZmRjYWVjOWRhMTQzZGUxZGE2NDM0MDdlMTI2NGRiZTgyNWE5MDljMDI0YzQ2YmJkY2M4YmU5Yjk3Nw',
            benefitsImg: ['/medias/40026-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMTgxfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2MC9oN2YvMTMyMDMxMjU0MzY0NDYuc3ZnfDk2ODIzZjVmNGM5ZGU1MzVlNGRiNDFlM2ZiMzI0NDVhYjk4OTg5NGIyYWQ0ZmIxMzc4NDliZWVhYTdkNWNkZjQ',
                '/medias/40026-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMTgxM3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNTgvaDIzLzEzMjAzMTI2MjIyODc4LnN2Z3wyNTk0Zjg3MzAxNGZhMTUzZjVlNmE4MjA1YWRkZmJiOGYzZmRhZmUyMDRkMGM3YjlmMjNkOGMyYjFiNTBmYzE4',
                '/medias/40026-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0MDg2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxOS9oYWEvMTMyMDQ1MDMyNjUzMTAuc3ZnfGYwY2FiZGUzMDI5Yzc4NjkxZTNjNjhjMmI0MGEwYmYyYTkxY2YxNTE4YWRmYjJlODZiYzZiNGVhZTEyM2UxY2I']
        },
        {
            name: 'SAP SuccessFactors Recruiting',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '40030',
            initials: 'SR',
            heroImg: '/medias/40030-Hero.png?context=bWFzdGVyfGltYWdlc3w5NjEzODB8aW1hZ2UvcG5nfGltYWdlcy9oZWEvaGQwLzEzMjA3MzM1OTI3ODM4LnBuZ3xkZWFiMzRkNjA3NDc3OGZlYTk2Y2U2ODFiNjQzNGMyYmRhN2M1ZTIzNWExMTRiNTU5ODFlMjQwZGZjZTgzZjI4',
            benefitsImg: ['/medias/40030-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4ODA0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hjZS9oNTcvMTMyMDczMzU4Mjk1MzQuc3ZnfGU5YTQ2ZjUyYzY0ZGMyYWQzNzYxYThjZTM2MTM5OTAwYmUyYmQ1N2U0M2VhNGE2ZmJhODliZDYzMTExNmYzMDE',
                '/medias/40030-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w0NzE5N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMGEvaDQyLzEzMjA3MzM1ODYyMzAyLnN2Z3w0OGU1YjAwYjhkNGZiYjYwNjA2ZDg2ZTJlYzQxMTMyZmNmYzZkZTZmMzZkYWI2ZDU0YTE4ZDIyNDg2NjYwMGNj',
                '/medias/40030-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMzE5MnxpbWFnZS9zdmcreG1sfGltYWdlcy9oMWQvaDgxLzEzMjA3MzM1ODk1MDcwLnN2Z3wyMWRmYWRiOWIxOTkyZjc4YmUzYjFhNWJjMGRmZGUxMGI2MTA2YjBjZDM1NmU3MDYzYWJhYzFlZmEzOWI2NTU1']
        },
        {
            name: 'SAP Innovation Management-Cloud Edition',
            catImg: '/medias/category-project-management.svg?context=bWFzdGVyfGltYWdlc3wzMTc3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzOS9oODIvMTMyMDczNDA2MTM2NjIuc3ZnfDljM2EyMWExMDM3MDA4ZTFmYTdmNGJjYmI2MjZmY2ZmMzNmZTRiNGYyZjgxZmI4OTI4NDQzYTM1MjI5NDBmOWE',
            productId: '40079',
            initials: 'IM',
            heroImg: '/medias/40079-Hero.png?context=bWFzdGVyfGltYWdlc3wyNDk3ODc4fGltYWdlL3BuZ3xpbWFnZXMvaGI4L2hhMy8xMzIwMzEyNDcxNTU1MC5wbmd8NGVmZDhmZTY3YjQ2MWEzZjY2MWQyZTIwMzY2MTU0YTdmNzE1MTI5ODJiYjA0ZDI4NGVlNTRhNmFiODE2MWM1YQ',
            benefitsImg: ['/medias/40079-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wzMzA2OHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNzIvaDhiLzEzMjAzMTI1NDY5MjE0LnN2Z3w3NGI5ZWVjNDEzZGM0YWQ2NDVhZmY1ZmY1NzZjZjllZGZkZDVhMGYwMGE0MTU3N2RhY2ViNjQ2MmQ0OTE3ZDU3',
                '/medias/40079-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDI0OHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZDQvaGQxLzEzMjAzMTI2MjU1NjQ2LnN2Z3w5M2Y3YmJjNWY2MzdmM2ZmNDYyY2JhODBhZmIzNDMxNDYwZDljMWYzNjM1MDllYTQ1NTYzZmRjNDViZjA4MDNh',
                '/medias/40079-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNTUwNnxpbWFnZS9zdmcreG1sfGltYWdlcy9oZDUvaGQ5LzEzMjA0NTAzMzMwODQ2LnN2Z3w0ZTZkZWYwMzQ1YmZjNDY4NGJkYjk0ZGRmODkyMTdmNjNhYmQzMjNjYTQyZGYxM2U4ZmJjODdiNDgxNTRlYjBl']
        },
        {
            name: 'SAP Marketing Cloud, Standard Edition',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '40081',
            initials: 'MC',
            heroImg: '/medias/40081-Hero.png?context=bWFzdGVyfGltYWdlc3wxNTk2ODM1fGltYWdlL3BuZ3xpbWFnZXMvaGNhL2g2NC8xMzIwMzEyNDc0ODMxOC5wbmd8YjQxMzY3MmY2MmY4YmNmOGIwYzM1OGVhNzg5NTIzZTJiOWY3ZTdlNmQ0YmZiMDVhNzg1Mjc5OTAyZWIzMWQ3NQ',
            benefitsImg: ['/medias/40081-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w1MDAxfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmZi9oMDAvMTMyMDMxMjU1MDE5ODIuc3ZnfDdjMGQ4M2UwN2FlNzBlYjc3NDNjMDBjY2Q2Y2U3NjY2NjUyZjVmYWQ4OWEyNjY4MzRmYmNiZjM0ZTdmYWQ5ZDY',
                '/medias/40081-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w3NTIyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmZS9oMzgvMTMyMDMxMjYyODg0MTQuc3ZnfGVlZDE2OTk2YjA0YzkzNTYwMTkxNjA4M2RlNTRiOTRkNmQ5YjE2OGVmM2M3NTEwNjA4NTRkZWU2YWQ4OWVhOTE',
                '/medias/40081-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZmQvaDMwLzEzMjA0NTAzMzYzNjE0LnN2Z3xhZTU2ODNjZDAzMWE1NTIyMWU2NzgwOGUxMjJlZTdiYzdlYjViZTRjMzg5ZTAwODg5NGE4MzFjZmJlNDNjNTUw']
        },
        {
            name: 'SAP Cloud Platform Data Enrichment',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '40106',
            initials: 'DE',
            heroImg: '/medias/40106-Hero.png?context=bWFzdGVyfGltYWdlc3w4NjY1NDd8aW1hZ2UvcG5nfGltYWdlcy9oZTQvaDMyLzEzMjAzMTI0NzgxMDg2LnBuZ3wwNjI2MzMzNmNlNWIxOWVjZDhkOWUxYWRjYzQ4ZWNhODFjM2E0NGNhZTA3ODhiOGI5MWU5NWI1Yzk0MmEzZjFl',
            benefitsImg: ['/medias/40106-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w1MDAxfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gyYy9oZjYvMTMyMDMxMjU1MzQ3NTAuc3ZnfGFkZjIwOGJkNTk4NDJjNWI1MTkyYjEzZWVmMTczMzg2MmUwYTg5ZjU0MmI5Y2I0MWUwMjVmMWM3OGU1OWE2ZjA',
                '/medias/40106-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4MDMwfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g1MS9oNWEvMTMyMDMxMjYzMjExODIuc3ZnfDc3ZGJlYzIxMGEwMDYzZDE2NzUxYzc5MDNmMDU5NDkwZmU1OGRjYzQ3YzMwYzZkMmY4YzhhYjZhZmE4NjE2MjM',
                '/medias/40106-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyNzM3MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjUvaGY0LzEzMjA0NTAzMzk2MzgyLnN2Z3w0Y2Y5MWZmNTJhZjg5ODg4NWVkMjRmMzBlMzM0OTg0YjI5NDk0ZDViY2YxZDVhOWEyOWQ3NzY1ZTZmYjgwMmVj']
        },
        {
            name: 'SAP Internet of Things',
            catImg: '/medias/category-intelligent-technologies.svg?context=bWFzdGVyfGltYWdlc3wxNjQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkOS9oMDMvMTMyMDczNDA1NDgxMjYuc3ZnfDM4OTQ5YTE4ZDBhZGU5ODJmOWI3ZmVkOGUzOGExZDNhNDNlZTNjNTE5ZWUxMDcyZjk0OWI2MGZkYjAyNmVlZDY',
            productId: '40108',
            initials: 'LI',
            heroImg: '/medias/40108-Hero.png?context=bWFzdGVyfGltYWdlc3w4Mjc0NDV8aW1hZ2UvcG5nfGltYWdlcy9oMmIvaGUzLzEzMjAzMTI0ODEzODU0LnBuZ3w1YjY5ZGZhMDhlYTVjYWE5NjI4YzM2YTM4NDFjNWM1MDA4ZTUzOWE4Mzg5NTYzYmZhZjc3YTExMmE5NzI5MWQz',
            benefitsImg: ['/medias/40108-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wzOTExN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNTYvaDEyLzEzMjAzMTI1NTY3NTE4LnN2Z3xiOTExOWZiN2Y0NWEzYmFhMTZjMmI0NGM0ZjQ5MWMyNzk5YWNjYzY4ODUyZTVjMmVmMjk2MmM5OGI1OGQ4Mzg2',
                '/medias/40108-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w1MzAzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxZC9oNDAvMTMyMDMxMjYzODY3MTguc3ZnfDI2OGY3ZDgyNjkwNzE2N2I5NzhkYzIyNjdiOTFhNjJiZDc4NDhmYWZiMDdjNTI3ZGM5NzZmZTMwNDI4MmUwMmE',
                '/medias/40108-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w2MjMzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzMy9oNTIvMTMyMDQ1MDM0MjkxNTAuc3ZnfGUxNDI4NWJkOGUwNDgwODM5MjdmNmE3MTU0OGEyZWExMmFhYWQ0YWFlOGRkZmQ4MjM0OWQ0NzNkMTkxMWZhZmY']
        },
        {
            name: 'SuccessFactors Recruiting Posting Implementation Service',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '40161',
            initials: 'RP',
            heroImg: '/medias/40161-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDA3MDUzfGltYWdlL3BuZ3xpbWFnZXMvaDAwL2gxMi8xMzIwMzEyNDg0NjYyMi5wbmd8OTY5NjI2NGQ2YTZkODM2YmY2YzhkYjM1YTI2MGUyY2JiZTI3YzlkN2RjY2JjYjMzYWFlNmZjMGIxZDhmZjM0OA',
            benefitsImg: ['/medias/40161-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4ODA0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hhYS9oMzMvMTMyMDMxMjU2MDAyODYuc3ZnfDZjZjBmOWQzZTFjODllZWRkOTNlY2ExYzNmNGQyZGZiMDNiN2I0MWVkMWQ3Y2MzN2Q0NTc3MjU1ZThmMGMwMjA',
                '/medias/40161-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w0NzE5N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNDQvaGQ2LzEzMjAzMTI2NDE5NDg2LnN2Z3wzMzYwZTAxZWUxOTFjZTk5NmEyM2Y1MDJhYmUwZDA1NTdmNWE3YWVmNmM5YTBiN2U2YzY3NDQyYWViMDkzNGNl',
                '/medias/40161-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMzE5MnxpbWFnZS9zdmcreG1sfGltYWdlcy9oMWQvaDQ4LzEzMjA0NTAzNDYxOTE4LnN2Z3xjNzk2ZjRjZTFkZjFlMzFjODY4YTQzZDllY2JlZmVmNTUwODMyNDQ1MGY1NzVjNzU0NmMyMGE1MmVmMmEzNTAx']
        },
        {
            name: 'SAP Signature Management by DocuSign for SAP Ariba Contracts and SAP Fieldglass',
            catImg: '/medias/category-network-spend-management.svg?context=bWFzdGVyfGltYWdlc3wyMTQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMC9oZTEvMTMyNTk0NjgyNDI5NzQuc3ZnfDEzMmEyZmY5MzEzZDEyOTkzYjM5ZWYxMzlhODI1YWJjNDBkNTdjYzZjOTc4ZWNmNzg4YjU4ODY0NjM3N2UzOTA',
            productId: '40470',
            initials: 'SM',
            heroImg: '/medias/40470-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDIxNDY4fGltYWdlL3BuZ3xpbWFnZXMvaDI2L2hiMS8xMzIwMzEyNDg3OTM5MC5wbmd8OWZkNTcyZDNlOTAxMWIwNWYzZGEyM2MwYjk5YTgzNGUwNzA3M2UyMGE3ZTVkOWNkMjQ2M2NkZWQwZDMzNjdiZA',
            benefitsImg: ['/medias/40470-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w0NzQ4MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oODIvaGMxLzEzMjAzMTI1NjMzMDU0LnN2Z3w1NjkwNTA3YTkyMGM4MjgwNGJjMGNkODFjZTJmZGZmMjk3ZDc5YzAzMGE5ZjZkOTg0MDQ4MzI3NzQ4ZjdiOWFl',
                '/medias/40470-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxODM2MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMDkvaGVjLzEzMjAzMTI2NDUyMjU0LnN2Z3wyYjgzNGY4YTNiYWE1OTM0YTU3ZTliYWZhMzc2MzViM2I3N2RjODhiZjg4ZDMyNjlkMTJmZDEzNTBmYmY0NmFh',
                '/medias/40470-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMDkvaDdiLzEzMjA0NTAzNDk0Njg2LnN2Z3w2MGZmYWUwMmRmMmRlZjNiNzI0MDcwYzZhYWVhZDA2NzllMTQ1ZmEzZmQ2OGZiYTU5MzEwNmQ1ZDFkYWE0OTY4']
        },
        {
            name: 'SAP Signature Management by DocuSign, option for SAP Customer Experience solutions',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '41490',
            initials: 'SM',
            heroImg: '/medias/41490-Hero.png?context=bWFzdGVyfGltYWdlc3wxMzU4MTQ4fGltYWdlL3BuZ3xpbWFnZXMvaDJhL2hlOC8xMzIwMzEyNDkxMjE1OC5wbmd8OTI3MDUzM2FjYmFjNzVkNDU2ODAwMTFhNmU1OGZmNDdhMDlmMmE0MmMwM2JjYzUxNzQ2YzEyMDMyNzBhOTc1NA',
            benefitsImg: ['/medias/41490-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w2MTg5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3NC9oNjQvMTMyMDMxMjU2NjU4MjIuc3ZnfDk1OGZhZDRkMTQ1ZjY4NzYyOTgwM2ZlYWFkYWVhNmJlYmMyNzNhOGY2MTc2NWVmNThhYWYwNDAxZWEzNDE2N2E',
                '/medias/41490-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNTQ5NXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjMvaDA5LzEzMjAzMTI2NDg1MDIyLnN2Z3xkYzkxMjhiZjZlMDEyNzJlZWJhYTdiY2FjOGFjOWYyMzk5Y2E2ZmZmOTViNjg3NTNhYjQ3YWFhZmQ5YzYwMWJi',
                '/medias/41490-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNjk5NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oZTgvaDI2LzEzMjA0NTAzNTI3NDU0LnN2Z3xlN2E2MjMxNDk3ZTcwOGU2MTMxYzVmYzFiM2E2YWI2NTM4Mzg1ODE2MjIyYjEyNmJlZDlmZDM5YTllOTY5MTU5']
        },
        {
            name: 'SAP S/4HANA Cloud for enterprise contract assembly',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '42602',
            initials: 'EC',
            heroImg: '/medias/42602-Hero.png?context=bWFzdGVyfGltYWdlc3wxMjY1NzgyfGltYWdlL3BuZ3xpbWFnZXMvaDFjL2g4Yi8xMzIwMzEyNDk0NDkyNi5wbmd8MGE0N2M0NGEyODc3OTcxZjhhYTgyZDVlMzRmZDdlYzI5YTMwMjQ0OGE5NGIyYWY3OTJmZjdmZTEzYzk5MDE0Ng',
            benefitsImg: ['/medias/42602-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w2MjQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiMi9oNWUvMTMyMDMxMjU2OTg1OTAuc3ZnfGY2YzU4YzI4ODQzNzYyYzkzMzZjOWI4YzY3YTNiMjMyNWFkNTdiMDQ3NmJkNzJmYzg3MTY0OGE2ZDU0NjRlYzg',
                '/medias/42602-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNzkvaDVmLzEzMjAzMTI2NTE3NzkwLnN2Z3wwZDMyMTEwMTQ3M2YwNmRhMDM0NjZkN2U0OWVlODE2OTA2MmY5OGEyNWZkYTljMjE4ZmRkMzdlYmQwZjdjODI0',
                '/medias/42602-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMDY5NHxpbWFnZS9zdmcreG1sfGltYWdlcy9oM2UvaDA0LzEzMjA0NTAzNTkyOTkwLnN2Z3w4YWVlMDMwNWU2MWIyYWZhZDRjZjE0MTJmOWFiMTc0OGMwNWNlZWIzYTc1NWZjZDQ3YWM2ZTRlZGM5NzMxMmE4']
        },
        {
            name: 'SAP Intelligent Robotic Process Automation',
            catImg: '/medias/category-intelligent-technologies.svg?context=bWFzdGVyfGltYWdlc3wxNjQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkOS9oMDMvMTMyMDczNDA1NDgxMjYuc3ZnfDM4OTQ5YTE4ZDBhZGU5ODJmOWI3ZmVkOGUzOGExZDNhNDNlZTNjNTE5ZWUxMDcyZjk0OWI2MGZkYjAyNmVlZDY',
            productId: '42831',
            initials: 'IR',
            heroImg: '/medias/42831-Hero.png?context=bWFzdGVyfGltYWdlc3w5MTMyOTN8aW1hZ2UvcG5nfGltYWdlcy9oMGIvaDM4LzEzMjAzMTI0OTc3Njk0LnBuZ3xjNmU0OGIzZDQzZmJjZDFjMWJhOGM0YTllODdiNjhkODUzZWVhM2Q2MWMzYmY0YjZkZWVhM2ZmYmVlOTlmMWJj',
            benefitsImg: ['/medias/42831-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNjcyOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oY2EvaDJmLzEzMjAzMTI1NzY0MTI2LnN2Z3w0MDY0ODI5YTU1YmZjMTI3ZGNiZGQwZWMwNWNmODJmYzYxYmNkYmNiNDVkMDEwMThjMmU2OGZkODE1MDZmZTgy',
                '/medias/42831-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNjAyOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZWQvaDcyLzEzMjAzMTI2NTUwNTU4LnN2Z3xkM2U0ZTk4ZWM4MzI2NWQ2MTBiNmU1NTY2MmI4OTYzYzdjZGQ5NWZhNjlkMjQ3N2JiYmQ4ZmE5OGNiZmZkNGIz',
                '/medias/42831-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w1NDExfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hjZi9oNmEvMTMyMDQ1MDM2NTg1MjYuc3ZnfDZhNzM1YzFjMGU1NjI0ZDE4NjExYTlkOWExM2M0YTQzMjYxNzBkMzdmNTczYzJlMTc2NThjYWY0Yjg2YzI2MDc']
        },
        {
            name: 'SAP Logistics Business Network',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '46400',
            initials: 'LB',
            heroImg: '/medias/46400-Hero.png?context=bWFzdGVyfGltYWdlc3wxMzY1ODM1fGltYWdlL3BuZ3xpbWFnZXMvaDE2L2hiNS8xMzIwMzEyNTAxMDQ2Mi5wbmd8YTVjYmUxZmQ2MDRlNjM2MzZmZWY4OTNhM2NkMWZlOWY1ZmNiNDAxNTFjMmRkZWE1Y2QzN2U0OGQyMzA4OGJmYQ',
            benefitsImg: ['/medias/46400-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNTQwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNWIvaGJjLzEzMjAzMTI1ODI5NjYyLnN2Z3xmNWFkMDI1NzI4MWFhMjliNjY5NmY3YmU4NjIyOWU2ZmYxZjlkMjk0YWY4OGJlODMwN2FiMzQ3MzhhMDgyMzRl',
                '/medias/46400-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMDg0ODd8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDIzL2g5NC8xMzIwMzEyNjYxNjA5NC5zdmd8OGFiMTM4NzdlZGVjMTExMDYwZGY5OTFiOTNhZjYyYjY2MjBlYjA4ZTBmODQzZWJlNTc5MjdhY2Q2YWIyYzQ5NQ',
                '/medias/46400-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxODM2MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMGEvaDY5LzEzMjA0NTAzNzI0MDYyLnN2Z3wzNThhNGE4OGNhNzc1YTg0YjAwNDdiZjRjNmZmZWYzYjMwY2FiZjFiY2NiMzA4YWMyOTc3OWU5NWNiNTNmZDAw']
        },
        {
            name: 'SAP Crystal Reports 2013',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '99013',
            initials: 'CR',
            trust_radius_ID: '5d1277c77fde8a00258bd6f1',
            heroImg: '/medias/99013-Hero.png?context=bWFzdGVyfGltYWdlc3wxMzYzOTgyfGltYWdlL3BuZ3xpbWFnZXMvaGY2L2hjZS8xMzIwMzEyNTEwODc2Ni5wbmd8OTlmNTdhMWFhNzdmODU2YmFmZWUzOGM5MGIwNWQwM2VjYTMwNDRkMjAyNDk1YmJlMTFjMTU3MGViNDBmMzdjMw',
            benefitsImg: ['/medias/99013-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NjczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g0MS9oMWEvMTMyMDMxMjU4OTUxOTguc3ZnfGI4NDFjZWMwOGYzOTBlNDAyNjNhZDg3MjE2NDJjOTliOWVjNjI4YmQ3NWJkMmY1MDhlZDdjOTQzODZiNjg3MjE',
                '/medias/99013-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMGEvaGY5LzEzMjAzMTI2NjgxNjMwLnN2Z3w0MjQyN2VjNmE4MTFlNGU5ZjRjNjQzZjRlYzMyZTVlMzljMTAzMDYzOGEyNThiMGVhZDM0NDUyZGU2ZGIyYWMz',
                '/medias/99013-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMTk4N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oZGIvaGI0LzEzMjA0NTAzNzg5NTk4LnN2Z3wzODVlMzA3YTM4OTAzYWEwODZjMWYwMzYyNThlNThjY2M3ODQzOTFkZmM1YjBiYThiMTczMTg2NDEzZDIxOTIw']
        },
        {
            name: 'TripIt Pro',
            catImg: '/medias/category-travel.svg?context=bWFzdGVyfGltYWdlc3wxMTUwfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxZS9oMDkvMTMyMDczNDA3MTE5NjYuc3ZnfDRlMzIxN2Q0NTU0MmEwM2EyZjMwNzc2N2VkMmFhMmRhMDYyNWVjMTY3YjBhYjlmZDE4YmZjMGIzZDkwYmM3NDc',
            productId: '99029',
            initials: 'TP',
            heroImg: '/medias/99029-Hero.png?context=bWFzdGVyfGltYWdlc3wzODU4MTR8aW1hZ2UvcG5nfGltYWdlcy9oMzEvaGI5LzEzMjAzMTI1MTQxNTM0LnBuZ3w1MGZjMTI1NzNjNDQwNzNiOWJjZDVlYzIwZTFlN2Q3OWEyMWVmNWQxMjlhYWRkZDY5MDNjODllNDBkMWYxMmVk',
            benefitsImg: ['/medias/99029-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyNDUyMnxpbWFnZS9zdmcreG1sfGltYWdlcy9oODgvaGNhLzEzMjAzMTI1OTI3OTY2LnN2Z3w2MDQ1NzQ0ZjRkYThiNzU2ODY0ZDdjOTI3NmI3YWI0OTc1YjYwMGQyNzdhMzZlMjdiMTA1MzA2YWIzZmZmNWM2',
                '/medias/99029-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w5NTU2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNy9oMWIvMTMyMDMxMjY3MTQzOTguc3ZnfGFjODA2MDg3MzVjODdiMjJiMTZhYmUxYjg2OWEyZWE1NmY3MGE4NzdmNWM2MmQ3NmFjZDRkMzhmNTM1ZWMzZDI',
                '/medias/99029-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyNzcwN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMjYvaGUyLzEzMjA0NTAzODIyMzY2LnN2Z3w2MzY3NWM4OThlOGIyMDdhN2E1ZjkwNmIwOTExNzMxNjlkY2NlM2I2ZjFmNGM0OGQ0NjJmMzEyMWM1ZGQyZDBh']
        },
        {
            name: 'SAP Penalty Insights',
            catImg: '/medias/category-sports-entertainment.svg?context=bWFzdGVyfGltYWdlc3wyMjQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlNS9oNGQvMTMyMDczNDA2NzkxOTguc3ZnfDYyOGM5OGViYzliNjZiMDJhMmFiZjMwMzAwZTI4OWJiODNkMzJiOTMyMmYyMTRiMzZlYzNmYmUzZGVjY2RiYWU',
            productId: '99051',
            initials: 'PI',
            heroImg: '/medias/99051-Hero.png?context=bWFzdGVyfGltYWdlc3w4OTM2OTJ8aW1hZ2UvcG5nfGltYWdlcy9oYTEvaDUxLzEzMjAzMTI1MTc0MzAyLnBuZ3w0YWVkNTllYzY3ZWRkMGRhYjQ0MGNjNjQ3N2FmZWNmYjYyN2VmOTYyNWJiZjY5M2YwYmNmMjhiMDQ2ZmU5NmY2',
            benefitsImg: ['/medias/99051-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4MDg2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g0ZC9oZTAvMTMyMDMxMjU5NjA3MzQuc3ZnfDBhNjU4NzkwODAxMzAxOTdkYzdlNTM2NjNhMWQxYTQ0OWQ0NzBmZmNkNTk2OTUxZGRmYTJiOTQ1OTczNGYyOTk',
                '/medias/99051-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w0NzIyMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjUvaGRhLzEzMjAzMTI2NzQ3MTY2LnN2Z3w4MmJkYWUzMGMyMzY0NTYyZjlhYzkxMTc1ZThmMDMyMTU0ZjIzNjU3MDk4NmZkYTkwYjYxNTM0N2I3NWEyN2Ji',
                '/medias/99051-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMTA0MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oYWQvaDI4LzEzMjA0NTAzODU1MTM0LnN2Z3w0ODA4ODdkOGVlNzcwZWUyNzdkNDBmMDFkMmNmMzlkYjY0NjVjMTcyOGU3YjJlMmFlOGY3YWZiMThlMjA3MzNk']
        },
        {
            name: 'SAP SuccessFactors Integration Center Support',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '99057',
            initials: 'IC',
            heroImg: '/medias/99057-Hero.png?context=bWFzdGVyfGltYWdlc3w5NDE0ODZ8aW1hZ2UvcG5nfGltYWdlcy9oZmMvaDk3LzEzMjAzMTI1MjA3MDcwLnBuZ3w3ZTY1MmEwNGMxNjYyYzJiZTRlYzhlYjA1NmU2ZDZlYjBmMDA0Zjc3MjVkODE1YmVjNGY4MDZlZTg1MTBlMDE5',
            benefitsImg: ['/medias/99057-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxMTI3OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZGYvaDE0LzEzMjAzMTI1OTkzNTAyLnN2Z3xiYmM5YjUxZjgzNzIwZmNiNmE2MmQxZmRlYWYwODFhMTY1YWRkNWE0ZjBkOTE5ZTA4OTJmMmMwN2YzOTA0MGMw',
                '/medias/99057-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w4MzM4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxNy9oN2QvMTMyMDMxMjY3Nzk5MzQuc3ZnfDQzZTc0MTA3OTI2YjU2NWViZjAyNGFiMDVkNWFjM2RjOWYzODNlZjBiZmZkMDJmODgwYTY3MWFlYjAxYjg2Zjk',
                '/medias/99057-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNTQxOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oYmEvaDg1LzEzMjA0NTAzODg3OTAyLnN2Z3w5ODY3NzdlZTdlZjhhNWY1NGViY2ZkNjA1YTdhYmZkMjZjNWU3Yzg3ZTEwYjE5NTY4ZjUwODYzNjAxMzBjODVl']
        },
        {
            name: 'SAP Crystal Reports 2008',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '99062',
            initials: 'CR',
            trust_radius_ID: '5d1277c77fde8a00258bd6f1',
            heroImg: '/medias/99062-Hero.png?context=bWFzdGVyfGltYWdlc3wxMzYzOTgyfGltYWdlL3BuZ3xpbWFnZXMvaDdhL2gyNy8xMzIwMzEyNTI3MjYwNi5wbmd8MmNiY2QxNjM5Yzg2YjI4ZjYzZTVkNzZmYjU0MzZjMmNkNGNmNDlhZDViMDEwYjAzYWMxZWRiYzc5ODQ3ODk3Mg',
            benefitsImg: ['/medias/99062-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NjczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3MC9oZWEvMTMyMDMxMjYwMjYyNzAuc3ZnfGIzOTA3OGYwNWE3MTk0ZDdlNDdjYmU4NjY3ZTMwMDgxOGRjNzNlNGExNGUyOGIzZTNiMmEzY2NjMDhkY2JlMmU',
                '/medias/99062-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMTgvaDE0LzEzMjAzMTI2ODEyNzAyLnN2Z3w5ZDYyNjg3MGE1ZTNlOTMzZTBhYTIwZGFmMjEyNzNhY2EwNDM5NDI5YjhiODdkYjY5OWQ3Yzk4ZTY0MjE5NTY4',
                '/medias/99062-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMTk4N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMGUvaGE3LzEzMjA0NTAzOTIwNjcwLnN2Z3xlMWNiYzRkMjAxNmJjNmZlNzAwOWQ5ZTMxYjczODRkN2IwYzI5Mjk5MjI4ZDYwZTVlOTJjNWMzMTBmMTA4ZGRh']
        },
        {
            name: 'SAP Model Company, trial edition',
            catImg: '/medias/category-packaged-services.svg?context=bWFzdGVyfGltYWdlc3wyMzM0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMy9oZGIvMTMyMDczNDA1ODA4OTQuc3ZnfGFlNDgwZDNlNWM5YWRhNjM3ZDRjNmFkYjY2ZjEwMjY1MWU5ZmFkYWNhYWQ3ZWYxYzVlNjE2Nzg4NDViNWJlNmU',
            productId: '99075',
            initials: 'MC',
            heroImg: '/medias/99075-Hero.png?context=bWFzdGVyfGltYWdlc3w1OTA3Njh8aW1hZ2UvcG5nfGltYWdlcy9oZTcvaGVlLzEzMjAzMTI1MzA1Mzc0LnBuZ3w1YTdmNmYwNmUxYjgxYzdhMzk2NDdjNTI2Y2E1ZTJmNWY4OTFiOWExY2U4YzBiMjRiYmY3YTUyOTAxOTg2ZDc5',
            benefitsImg: ['/medias/99075-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w5MjkyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlZS9oNzkvMTMyMDMxMjYwOTE4MDYuc3ZnfGI4NmUxMzhlMGU2NzU2ODY3MDVjOWEyYzc5N2FhNjI2MzU2OWExZDI2M2E0ZTA4OWM2ZDI0YTMxOTllMTU4MzU',
                '/medias/99075-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMjMyN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oNmQvaDQ4LzEzMjAzMTI2ODc4MjM4LnN2Z3w5ODNkODdiMzllOTgzOGFlYmJiNzhiMDc2MmUxNWNmYjFmMDMzODAwOWY1YjM5M2ExYzQ4YmYwMTI1ZTAyZTRl',
                '/medias/99075-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMDY0OXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNjQvaGJhLzEzMjA0NTAzOTg2MjA2LnN2Z3wzN2M5ODY1NWNiYWVkZGFlNjU4MjU2ZThkNTEzMTE5ZTk2M2ZkNDJhMmE2NzIxOTMxMjUwNDkxMjg5YjdmODE5']
        },
        {
            name: 'SAP Crystal Reports 2011',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '99013OV',
            initials: 'CR',
            trust_radius_ID: '5d1277c77fde8a00258bd6f1',
            heroImg: '/medias/99013OV-Hero.png?context=bWFzdGVyfGltYWdlc3wxMzYzOTgyfGltYWdlL3BuZ3xpbWFnZXMvaDAzL2gyZC8xMzIwMzEyNTA3NTk5OC5wbmd8OGM3YmZmZjA2Njk1M2E1ZTIxNzM3MTA2ZDUwNWQ2MzVjYTBkMGYyMjY0YjgzM2ZmZGU4OGRhMGJjZmY4ZDMxOA',
            benefitsImg: ['/medias/99013OV-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4NjczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5Ni9oYTYvMTMyMDMxMjU4NjI0MzAuc3ZnfDVlMTdkZTJhYzE4NWRiMDRkY2M4NmY3MWY2MjRlMzkwNTAxNzg5YTFjZTFiNWM4ZjcxOWQxMDM3Y2JiMGQ1N2U',
                '/medias/99013OV-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDgwNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMzAvaGYxLzEzMjAzMTI2NjQ4ODYyLnN2Z3wzNDRlMTlmMDVkMzkxMGMwNmNlODBjOWMzMTBlMmIzMjQ3ZmMyYWJjYThkMDI2MjMxZDRiYjExZjhiYWUyOWMx',
                '/medias/99013OV-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMTk4N3xpbWFnZS9zdmcreG1sfGltYWdlcy9oZmMvaDBiLzEzMjA0NTAzNzU2ODMwLnN2Z3w2MmRmN2UyNzBlMThlMmQ5NGExMDgyNjY0MzdhMDY2MTgzZDRjMGExZGMwZGM2ZjQzM2FkOThiODQ3NjY4ZjNi']
        },
        {
            name: 'SAP Build',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40002',
            initials: 'BD',
            heroImg: '/medias/40002-Hero.png?context=bWFzdGVyfGltYWdlc3w5MTM0Mzd8aW1hZ2UvcG5nfGltYWdlcy9oOTMvaDQ3LzEzMjA3MzM1NjY1Njk0LnBuZ3w0OWI1OGE3YjI1MGE3OWIyZjU1YzgxOGJkZTYwMDc3N2U1ZWUxYTJlNzhhMjJiYjY3ODc4ODkwNjcwNDM4MDk5',
            benefitsImg: [
                '/medias/40002-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w5NTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g4Ny9oMzEvMTMyMDczMzU1NjczOTAuc3ZnfDg4YWQ1ODZjMmY3YTg4MDAyODdkMjdiZDI2NzAyMTY4OTM0YmQ5MmQwYmMxMDVlOTRlZDU3ZWEwNzg2YzIxYTY',
                '/medias/40002-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wzMzI2MXxpbWFnZS9zdmcreG1sfGltYWdlcy9oMzYvaDk4LzEzMjA3MzM1NjAwMTU4LnN2Z3w3MGM2NjYxMjI3ZTZmZDFjZWJkMGQzZDE4ZTQxOWI1ZTg0ZDg3MjM2MjA5NWRkOGY4MTg1MzNmZWE0MGJiNGY0',
                '/medias/40002-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxNTQxOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oNDQvaGY1LzEzMjA3MzM1NjMyOTI2LnN2Z3w4MWI0ZGQ0OTU4YzFkNWRhMjVkY2QzNTRmMTcxYjU2N2QwZjJiNGFmZGViZjM3NDZhMTE2ZGJjZDFmNjFiZGM2'
            ]
        },
        {
            name: 'SAP Fiori Cloud',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40008',
            initials: 'FC',
            heroImg: '/medias/40008-Hero.png?context=bWFzdGVyfGltYWdlc3wxMTU5Nzc4fGltYWdlL3BuZ3xpbWFnZXMvaDIzL2g0YS8xMzIwNzMzNTc5Njc2Ni5wbmd8N2E5MTc4YmJiNGNkOTQ4NjNmMjZmNWYxZWQwMTFmODZkOTI3NmJlYTU4MzZhOGVkNWUyMjU4ZGMxMTI2ZDdiNg',
            benefitsImg: [
                '/medias/40008-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyMDU2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzZi9oYzMvMTMyMDczMzU2OTg0NjIuc3ZnfDI4ZTU2M2M5MzBiM2E4ZmE2ZTE2ZDAzZWYxYjI3ZTllMzIwYTBiMTk2Y2NhYTBlNTU3NTQ3NmE0ZjlmNjg2MzM',
                '/medias/40008-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMTUzNnxpbWFnZS9zdmcreG1sfGltYWdlcy9oYzEvaGQzLzEzMjA3MzM1NzMxMjMwLnN2Z3wzYWQ4ZTdjZTgzYTIzYTJjZjJmOWJjNTdkMDhhYmQzYTU0MzUwN2M5MDRlZWFhOTg3MjMwZmI3NTNiMTU5NWZm',
                '/medias/40008-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyMzUwfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hhZi9oYzAvMTMyMDczMzU3NjM5OTguc3ZnfDkwNWMyMGMyZWU1ODVhNDZmMjAxNzhjMTkzMjBkZDIyYTNmZDJhMWE4NjgzOWUyMzY2ZTY3ZWJiOTE0ZDUwMjI'
            ]
        },{
            name: 'SAP SuccessFactors Succession and Development',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '40031',
            initials: 'SD',
            heroImg: '/medias/40031-Hero.png?context=bWFzdGVyfGltYWdlc3wxNDA0OTI1fGltYWdlL3BuZ3xpbWFnZXMvaGQ2L2gyOC8xMzIwNzMzNjA1ODkxMC5wbmd8Mjg4NzQ1NWIwNWUxM2YyNzY1MDQ5YTI4Y2Y4ODExMjA4ZGU1YmI0Mzk3ODI1ZDg4NjA1NjZmN2NmMTJkOWU0OA',
            benefitsImg: [
                '/medias/40031-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyNzkzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gyNS9oYmIvMTMyMDczMzU5NjA2MDYuc3ZnfDA2NzU5NGI0NTMxZmVmOTdmY2I3NTYxNThhODc0ZDQ3ZWIwYzdmMDZjMTkwYzNiNGNkNjJjZThlZmMzNDBkZDA',
                '/medias/40031-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w3ODM3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwMS9oMDgvMTMyMDczMzU5OTMzNzQuc3ZnfGJlNjcwY2I2YTgyZDBlMDMxYjg5MWZkZWQ4YTdjNGY3ZTdkY2I5YzY2ZThjYmViYWFhZTI5MjU2YTBiYmIwNjQ',
                '/medias/40031-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0MTQzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlNC9oODUvMTMyMDczMzYwMjYxNDIuc3ZnfDNlNzVmOWNmYWM2MGNhZWY3ZDkyYTI1YTRkZmVhMGUxOTNkNGY3NTQyNTI1ZWQ3YjAxZjBiNjI1YzAzODA3MGM'
            ]
        },{
            name: 'SAP Cloud Platform, ABAP environment',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40191',
            initials: 'AB',
            heroImg: '/medias/40191-Hero.png?context=bWFzdGVyfGltYWdlc3w4NTA1NDR8aW1hZ2UvcG5nfGltYWdlcy9oMzUvaDIxLzEzMjA3MzM2MTg5OTgyLnBuZ3w0Zjg5OWExZmE3MjI0Njk1ZmQ5YTFjNzZjNDZkYTQyN2MzOTY0ZWM2YWQ3Nzk5ZmEyNWFmYjU5YjdmYzYwZTkw',
            benefitsImg: [
                '/medias/40191-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w4ODA0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwZC9oNWQvMTMyMDczMzYwOTE2Nzguc3ZnfDQxMWFmODVjYmMxYTBjZTdkZDE4NjEwMTQ5NzU1MzllMzA2MGM0NjYwNTkxMTk5N2YwYTZlNGQwN2FjMzY4OWI',
                '/medias/40191-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w1MjM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmZi9oZmUvMTMyMDczMzYxMjQ0NDYuc3ZnfDcwNjUxNWM2OWQ1MWMyMzZjN2UyZDMxN2IzNTUxOWNhMzEzZTNkMDA5NTg5OTBmZjNhNzY4YmVmMTg3YjU1YmI',
                '/medias/40191-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wyOTkwMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZDMvaDBiLzEzMjA3MzM2MTU3MjE0LnN2Z3xkMDk3ZjJhNDIzYTc2NTI3YTY2MWQ1NmM5Yjc5Njc2ZTA0MzJhMzM2NGM2NGEyYjQ3ZjRjMzY3OTU2MzAxZWY2'
            ]
        },{
            name: 'SAP Cloud Platform, SAP HANA Service (SAP Data Center, Neo Environment) Standard Editions',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '41244',
            initials: 'HS',
            heroImg: '/medias/41244-Hero.png?context=bWFzdGVyfGltYWdlc3w4MzE4NTR8aW1hZ2UvcG5nfGltYWdlcy9oZGUvaGJlLzEzMjA3MzM2MzIxMDU0LnBuZ3xkMzhhOTcwYjdiOTNiZGI5MTRhZDE3ZTY4YzIxMmYwMDIxYmI2Y2ZlMzJjYjY2ZTM0MTM4MTI3ZjA3N2M4YWI2',
            benefitsImg: [
                '/medias/41244-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w5MjkyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzNC9oOGEvMTMyMDczMzYyMjI3NTAuc3ZnfGFkNmQ5ODc3MjcxNzczNmU0NTQ4Y2YyYmU3OTcwYzE1ZGNlMjdiYzMyOTU2Nzk5ODc0NDQ2NmI1NWM5NjI2YTI',
                '/medias/41244-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNzYzNXxpbWFnZS9zdmcreG1sfGltYWdlcy9oNDgvaDZkLzEzMjA3MzM2MjU1NTE4LnN2Z3xkMDc0MThjYjI1NDc5MWIyODcyMTUzY2FjZTY3OGRiY2NlNWRjNjMxYTY4MDE5OTI2OGZlOGI0YjI3MTIyZmZh',
                '/medias/41244-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMTM4NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oZGYvaDU1LzEzMjA3MzM2Mjg4Mjg2LnN2Z3wxMmU0ODY4Y2Y4NjA4ZDllYmViYTAxZDNiMDRmMDMyOTY4NzE2MDkwZmQyMmRmNzk0NWEwZjgyZjQ4ZDQyMTA1'
            ]
        },{
            name: 'SAP Cloud Platform, SAP HANA Service (SAP Data Center, Neo Environment) Enterprise Editions',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '41851',
            initials: 'HS',
            heroImg: '/medias/41851-Hero.png?context=bWFzdGVyfGltYWdlc3w4MzYyNzR8aW1hZ2UvcG5nfGltYWdlcy9oNmEvaGFmLzEzMjA3MzM2NDUyMTI2LnBuZ3xjYjFkZGIwNjliZjRmZTg5ZTJkODU2ZmIzYWUyY2NkNDcyZGQzMzkxMDlmZDhlZDMyZDg1NTQ3ZGJkZWNkNGUy',
            benefitsImg: [
                '/medias/41851-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w5MjkyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oZTQvMTMyMDczMzYzNTM4MjIuc3ZnfDkxNzgwMzMyMmQ0ZGI2ZjA3ZTM3YzhhOGM3Y2YwNWRjYjZjYjkxYTcwMjAyNGRiODViZGVhZDFlNmMzNjI0ZGE',
                '/medias/41851-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNzYzNXxpbWFnZS9zdmcreG1sfGltYWdlcy9oZWMvaDIwLzEzMjA3MzM2Mzg2NTkwLnN2Z3w2MDg0Y2QxYmU3NzhmZGExMTQ2ODQzNmEwMmM2ZTMzYTU5ZDEyODg4MWUzNmFlOThiZDZiOTk2ZWE4MTliNjY5',
                '/medias/41851-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxMTM4NnxpbWFnZS9zdmcreG1sfGltYWdlcy9oMmUvaGM1LzEzMjA3MzM2NDE5MzU4LnN2Z3wxY2E3ZTYzMzM0NjVjNzI1NjFkZWQ1ZWFkNzk3ZGQ2OTEwY2Y1Y2JkODQ2NjgzOWI3ZWFmOWI0ZDJhOTg2ZWYz'
            ]
        },{
            name: 'SAP Cloud Platform, Java Server',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '42355',
            initials: 'JS',
            heroImg: '/medias/42355-Hero.png?context=bWFzdGVyfGltYWdlc3w5MDMzMzh8aW1hZ2UvcG5nfGltYWdlcy9oNDIvaGFhLzEzMjA3MzM2NjQ4NzM0LnBuZ3w4ZTU4YjIwNjhmYjdjZWRiZjMzMGIyZjIwMjllYTA5ODc0NWJlMmE4OGFjMzRiZTY5NTRjNzQ3NjU1OTdjNzVh',
            benefitsImg: [
                '/medias/42355-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxNzM1MHxpbWFnZS9zdmcreG1sfGltYWdlcy9oY2EvaGQ5LzEzMjA3MzM2NTUwNDMwLnN2Z3w2NWQ0NmMyOWY3NWYyMWJhZGNlYWFlM2E2ZjYwZWU4ZTBjZDkyYzUzZjI3ZjU3MjEzZDk3YWNmYjk0MzFjOGEz',
                '/medias/42355-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3w2MDY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g1ZC9oNjUvMTMyMDczMzY1ODMxOTguc3ZnfGM5YTAzNmM1YTA1OTUxNGYzODYyZGMxMGQ1ZmQ0MjNlMDk0MDE5NDYwOGE1NjE4ZjgwNjM0YjVlN2RmZmZmM2Y',
                '/medias/42355-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w4NTUyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlOS9oNGEvMTMyMDczMzY2MTU5NjYuc3ZnfDMyYjUwODI4ZWU1Mzc1NzQ5NzJjMGRlMjRlOThmZGU3YTBjY2FkMGE0MGFlZTY2ZTIzNjlhZDg1MGJkYTA4N2I'
            ]
        },{
            name: 'SAP Commerce Cloud, digital experience monitoring',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '42999',
            initials: 'CC',
            heroImg: '/medias/42999-Hero.png?context=bWFzdGVyfGltYWdlc3wxOTQ4NTI2fGltYWdlL3BuZ3xpbWFnZXMvaDhiL2gxOC8xMzIwNzMzNjc3OTgwNi5wbmd8NGRjMzI4ZGUxODdiOGZmODM0ZWEyOGE5MzEyYjdhNTc3NDQyZGUyMmIyN2I4NjVkZGNlY2I5YjM4MjJiZGM4Ng',
            benefitsImg: [
                '/medias/42999-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyNzg1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3ZS9oOTQvMTMyMDczMzY2ODE1MDIuc3ZnfGYzOWUxMTRkZWRlM2ZjMjE3YmU4OTRlMDAyNTRkNWVlODRkMmE0NmIzMDA1ZTAwY2M0NWEyN2NiOWQ3ZWY1ZjU',
                '/medias/42999-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMjc5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlMy9oODEvMTMyMDczMzY3MTQyNzAuc3ZnfDU1ZGRmNWRiMTE5YTY5MDhhNmQ5MDQwOGUxNmZkMDM2ODFhYzkwNzQzYzhhNzY5ZTIzYzk1ZmMzODJhNjE3Yjg',
                '/medias/42999-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxODgyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g5OC9oNzUvMTMyMDczMzY3NDcwMzguc3ZnfDZiMTNmZjgyYjZkNDJiYWFkYTkyNGU3ZGMzN2Q3OWUxYTA1N2Y5NjQ3YjFkNTU1NmY5NmYzODEyMTY4YWRkY2U'
            ]
        },{
            name: 'SAP Upscale Commerce',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '47000',
            initials: 'UC',
            heroImg: '/medias/47000-Hero.png?context=bWFzdGVyfGltYWdlc3w3MDgyODZ8aW1hZ2UvcG5nfGltYWdlcy9oZmUvaGM0LzEzMjA3MzM5NzI4OTI2LnBuZ3xlNjExYjkxZDNiMmYzMWQ2YjE2MjlhNjU0MmI1YzhjNTNiZWM0ZjdmMjMxZDA4YWE3Nzc1NjA1NTFkYmM4Mzg3',
            benefitsImg: [
                '/medias/47000-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyMTg5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hjOC9oMDgvMTMyMDczMzY4MTI1NzQuc3ZnfDFjMTlhMzRlMjZlNzZiZWVhMWMwNmFlYWY2MmI5NzVmZDcwNDhlOTY2MTVmZmZjNDVjZjhhYWZhODZiMmI2OTI',
                '/medias/47000-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNDE0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2NC9oZWMvMTMyMDczMzY4NDUzNDIuc3ZnfDUxMTE4MzA4NjlhYjRlYjNjZTllMWY5MzU1ZTBjM2FmNTYzMDVlYzY5MGQ1MjRjODBiY2ZjMWE5Mzk5OGMwZTM',
                '/medias/47000-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0MjYyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2ZS9oMWUvMTMyMDczMzY4NzgxMTAuc3ZnfDk3Nzg1MTRjMjhiYWE0ZWYxMTAxZTMwODVjZTUyZTZiYzgyMjgzOTk1ZjExY2Y3Yzc5NWY5MmIyZWRhODYwYzg'
            ]
        },{
            name: 'SAP S/4HANA Trial',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '51010',
            initials: 'ST',
            heroImg: '/medias/51010-Hero.png?context=bWFzdGVyfGltYWdlc3w5OTM5NDV8aW1hZ2UvcG5nfGltYWdlcy9oZjEvaDdhLzEzMjA3MzM5ODU5OTk4LnBuZ3w1MWRjNWEzZmU0YzFiNGEzZTc0NjgyNWQ5ZWYwMmNhNzY1NTNkOTFkNjk5MTZkZjVlMDFjNzE3MmIzMjg4NmU3',
            benefitsImg: [
                '/medias/51010-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyMjI2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlNC9oZjYvMTMyMDczMzk3NjE2OTQuc3ZnfDJhNjY5MGFkMzhhNjc1MjExNDQ2MzgxN2UwNjUzYzdhMjU2ZGRjMmY1ZjU5Njg2MjZkNTYzNmJiZTdiMmFjZTk',
                '/medias/51010-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wzNDg0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlZS9oMTMvMTMyMDczMzk3OTQ0NjIuc3ZnfGU0ZWNmYjZmMDRiN2U5NWQyYjMxMmVkMzliZmE2MzI1MGI3YjNhMmMxMjAyNTZlNzFlMDZhNjgzNmQyODBmNzU',
                '/medias/51010-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wzMTk0M3xpbWFnZS9zdmcreG1sfGltYWdlcy9oMDQvaDhlLzEzMjA3MzM5ODI3MjMwLnN2Z3w5ZTA5MWIzNmVmOWY3NjQ4ZWU5MGE0MWFkNjQwOWFlNzU4OTAwMGEzYjU3MTEzN2JjMTI3MmI0NjMyMGQ3Njcw'
            ]
        },{
            name: 'SAP Integrated Business Planning starter edition, non-production',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '60032',
            initials: 'IB',
            heroImg: '/medias/60032-Hero.png?context=bWFzdGVyfGltYWdlc3w2MTU1MzB8aW1hZ2UvcG5nfGltYWdlcy9oMmQvaDY1LzEzMjA3MzM5ODkyNzY2LnBuZ3xlMjU2ZGNiMWJiMmI0YTMyZWVlZTU4OGRkNjVlZDViMzkyNjVmNzI0M2U0YjQwNWIxYzhlYTk1NmZhODY0M2Ix',
            benefitsImg: [
                '/medias/60032-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxODAyNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oY2MvaDRiLzEzMjA3MzQyNjQ1Mjc4LnN2Z3w5YzliMGFlNmUyMWFmZWU1MWM5OTgyODU1YzVlNGY2YjAzZTkxNjY1ZDJiZTA1YjAzOGNhNDgyYjk5ZWU3MzE2',
                '/medias/60032-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNjcyOHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjYvaGVlLzEzMjA3MzQyNzEwODE0LnN2Z3w2Yjk4NzIwNWU0NGZiOWUwMWE2NTY5MDAyMjFmZTcxM2E4M2FhNjQxNWFmMWM4NTY0ZWUxYTc3YzE2MGI2MTlh',
                '/medias/60032-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wxODAyNHxpbWFnZS9zdmcreG1sfGltYWdlcy9oZmUvaDJhLzEzMjA3MzQyNzQzNTgyLnN2Z3xlN2JkNWFlOTI2ZjY4YjlmYTBhM2Q0MDE4YjgxYWEzOTk3YjFhN2UyMTc0MmQ5OWIxNzM2MWMwZDI5MWVjMGI4'
            ]
        },{
            name: 'SAP RealSpend',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '99065',
            initials: 'RS',
            heroImg: '/medias/99065-Hero.png?context=bWFzdGVyfGltYWdlc3wxNjg5MDMxfGltYWdlL3BuZ3xpbWFnZXMvaGE5L2hmZS8xMzIwNzM0MDAyMzgzOC5wbmd8NWE4ZWEyOGM1YmJmZWE2NGUxZGZjODJiMWNjNTcyYWFmNWE4NjhlYjRlMjhlYjgxYzA0MmM0ODJmMzkzZDE4Mg',
            benefitsImg: [
                '/medias/99065-Hero.png?context=bWFzdGVyfGltYWdlc3wxNjg5MDMxfGltYWdlL3BuZ3xpbWFnZXMvaGE5L2hmZS8xMzIwNzM0MDAyMzgzOC5wbmd8NWE4ZWEyOGM1YmJmZWE2NGUxZGZjODJiMWNjNTcyYWFmNWE4NjhlYjRlMjhlYjgxYzA0MmM0ODJmMzkzZDE4Mg',
                '/medias/99065-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3w0MTU4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlMC9oZjgvMTMyMDczMzk5MjU1MzQuc3ZnfDRlNzk1ZmI2MDQyZjU2NTA3MjVhNDA5ZDBlMjA0MmQ5NzdjNGYyMjg4MWQyMDhjZDFjMWNiYzU1M2ZkOWM4NjE',
                '/medias/99065-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wyNjQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiMy9oMDMvMTMyMDczMzk5NTgzMDIuc3ZnfGU0M2Q3MjZlY2Y1YTYzY2I1NDcwMGVjZDdhM2I0ODMzMWNiNzM1ZTBlOGNlMDEzZDU2MWI3MWJmYzM2NTM5MzE'
            ]
        },{
            name: 'SAP Digital Manufacturing Cloud (Network provider option)',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '99068',
            initials: 'DM',
            heroImg: '/medias/99068-Hero.png?context=bWFzdGVyfGltYWdlc3wxMTE1ODczfGltYWdlL3BuZ3xpbWFnZXMvaGEyL2g2YS8xMzIwNzM0MDE1NDkxMC5wbmd8MGZkNDkzNzgxNTRhYWMyYjc4NzAyODJjZTg0MjRjMjNlZjQ3OWEwNTlmY2EzNDJiYTEyMWM3Y2RlMWVkZDQzNQ',
            benefitsImg: [
                '/medias/99068-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wyMjAxMHxpbWFnZS9zdmcreG1sfGltYWdlcy9oMjkvaDBjLzEzMjA3MzQwMDU2NjA2LnN2Z3w0N2ZhMGI2NDZhN2UwM2FkMGEyZjMwMzBjOTBiOTA3MjI0YThjYWRhMGQ2YWFhZTI1OTEzZmVhMTQ3MWQ4NGI5',
                '/medias/99068-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxNDgzMDl8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDUxL2hjZi8xMzIwNzM0MDA4OTM3NC5zdmd8N2U2MTM2NmY3Yzc0ZGE2MTMxYTMwYTFmZTY0YmM3OTAwZmQ4Y2FkM2EzOGMxYTI0YTJhZjkzOWUxNmViYzc4Nw',
                '/medias/99068-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3wzMDAyN3xpbWFnZS9zdmcreG1sfGltYWdlcy9oYWYvaGM3LzEzMjA3MzQwMTIyMTQyLnN2Z3xjYTQwYmVlY2FhZWNkZDNmZjAxYzliZWEyMzJlMzIwNzhhMmZkYjcwNTVmZmRlZjhjYjM2YTVmMTgzM2M0NTM0'
            ]
        },{
            name: 'SAP Financial Statement Insights',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '99071',
            initials: 'FS',
            heroImg: '/medias/99071-Hero.png?context=bWFzdGVyfGltYWdlc3w3NjU5NzN8aW1hZ2UvcG5nfGltYWdlcy9oOTYvaDIwLzEzMjA3MzQwMjg1OTgyLnBuZ3w3OWU3NWE3YzRiNWFlOTRjZmZkN2NmYjkyNzExMjE4NDAzYjA5MzdkNTI3ZTBlZTk1Y2Q3NmJlMTU3MGMzY2Zk',
            benefitsImg: [
                '/medias/99071-Benefit-1.svg?context=bWFzdGVyfGltYWdlc3wxODk0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzNS9oNTYvMTMyMDczNDAxODc2Nzguc3ZnfGMyNDM4NDgyZmFhNTRlYTA4YjE1NzVlMjJkMDlkYjEyNzE2NWE1MGI5YTU4ZWJiYmVhYmMwMWIzNzA5ZmZlOTc',
                '/medias/99071-Benefit-2.svg?context=bWFzdGVyfGltYWdlc3wxMTU1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzNC9oYmYvMTMyMDczNDAyMjA0NDYuc3ZnfDA3YTQ4YWY5ODdmNWFkMDRkZDdmNGM4ZmExZTY2NWEwYzZhMDlmMmRkNWRhMjI4OWQ5NWI3ZWVjOWI2Nzg3MmE',
                '/medias/99071-Benefit-3.svg?context=bWFzdGVyfGltYWdlc3w0MTY5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmOC9oMzUvMTMyMDczNDAyNTMyMTQuc3ZnfDRmZmQ5YmE0ZThjZjhiYzM4ODhhODBkMGQ5MjUzZGE3Y2IzM2MwMDJhMTUzNWRiMjY5ZGM5OGU5NTBlM2IyMDQ'
            ]
        },{
            name: 'Data Attribute Recommendation',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '43157',
            initials: 'DA',
            heroImg: '/medias/43157-Hero.png?context=bWFzdGVyfGltYWdlc3w3NDc3MjV8aW1hZ2UvcG5nfGltYWdlcy9oZTkvaDBhLzEzMjI1NTEwNzY0NTc0LnBuZ3wzNDU4OGUwNDkwMGUzYThjNjkzYjk1N2I4OTk4ZThkNjY2ODA0YmU4MmMxMGRkYjY1MTAyMDgwOTZiZTcxZDIw',
            benefitsImg: ['','','']
        },{
            name: 'Document Classification',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '53315',
            initials: 'DC',
            heroImg: '/medias/53315-Hero.png?context=bWFzdGVyfGltYWdlc3w1Njk5Njl8aW1hZ2UvcG5nfGltYWdlcy9oNDIvaGVhLzEzMjI1NTEwNzk3MzQyLnBuZ3wyNzM1YzhmMTYyMmE3MWIwNGJmZTcwYjdiMWJhODE0NDMyNWQ0NjI2NzU4Y2ZiZjA3ZjFjZGViMTEzOGM1NWMz',
            benefitsImg: ['','','']
        },{
            name: 'Document Information Extraction',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '44901',
            initials: 'DI',
            heroImg: '/medias/44901-Hero.png?context=bWFzdGVyfGltYWdlc3w5MDkyNzN8aW1hZ2UvcG5nfGltYWdlcy9oNDQvaDgxLzEzMjI1NTEwODMwMTEwLnBuZ3w2ZWM1ZDE2OWQ3YTc0NWY1NGFiYTI5N2QyNmY1YTg2NzNiMDM1YTk1YzljZjZiYWNhZTEyYTkzMWUwNWMzMTA3',
            benefitsImg: ['','','']
        },{
            name: 'Flexpay by SAP',
            catImg: '/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI',
            productId: '42898',
            initials: 'FL',
            heroImg: '/medias/42898-Hero.png?context=bWFzdGVyfGltYWdlc3w0MTQ3Mzh8aW1hZ2UvcG5nfGltYWdlcy9oMzEvaDZlLzEzMjI1NTEwODYyODc4LnBuZ3xhZDVmMjk4ODU0OTBkN2U1YTM5YzM0NzUzMWNjMzAxNzIzZDU0MWVjNzBlYTk4MTdmYjQ3ZjZmZTQ4MjJhOGQ3',
            benefitsImg: ['','','']
        },{
            name: 'SAP Cloud Platform Data Retention Manager',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '40190',
            initials: 'CP',
            heroImg: '/medias/40190-Hero.png?context=bWFzdGVyfGltYWdlc3w0ODkxNTB8aW1hZ2UvcG5nfGltYWdlcy9oYTEvaDljLzEzMjI1NTEwODk1NjQ2LnBuZ3w1ZjRlZDQzY2UyZjJjZDM2NDdkNGVjY2NlOTQzNTQ5MzZmMTg4YWRkMzFhYjE4NzRhMGYxZjQ4MmQxZjYwYjNj',
            benefitsImg: ['','','']
        },{
            name: 'SAP Cloud Platform Extension Factory, serverless runtime',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '42170',
            initials: 'CP',
            heroImg: '/medias/42170-Hero.png?context=bWFzdGVyfGltYWdlc3w0ODIzMTd8aW1hZ2UvcG5nfGltYWdlcy9oNTEvaDA1LzEzMjI1NTEwOTI4NDE0LnBuZ3w0Y2ZlNDlmODI3MzcyNjJkOWVjOWUzYzFlZGIwY2E3YTQ0YjNlN2Y3YjE0MjUxZDY1MDBkODg1MjhlNzMzOTdh',
            benefitsImg: ['','','']
        },{
            name: 'SAP Data Intelligence',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '42574',
            initials: 'DI',
            heroImg: '/medias/42574-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDA4NTUwfGltYWdlL3BuZ3xpbWFnZXMvaDM4L2gzNy8xMzIyNTUxMDk2MTE4Mi5wbmd8ODAwNzRlN2NlYmY3MDRiYWJjODI0MTgwMGFiYjU3YTY3MDVlOTU1Y2U1ZGI4OTY2MDVmM2MzOTY4MjhlMjNkMA',
            benefitsImg: ['','','']
        },{
            name: 'SAP Project Intelligence Network',
            catImg: '/medias/category-project-management.svg?context=bWFzdGVyfGltYWdlc3wzMTc3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzOS9oODIvMTMyMDczNDA2MTM2NjIuc3ZnfDljM2EyMWExMDM3MDA4ZTFmYTdmNGJjYmI2MjZmY2ZmMzNmZTRiNGYyZjgxZmI4OTI4NDQzYTM1MjI5NDBmOWE',
            productId: '41627',
            initials: 'PR',
            heroImg: '/medias/41627-Hero.png?context=bWFzdGVyfGltYWdlc3w5MzY1NDR8aW1hZ2UvcG5nfGltYWdlcy9oNjAvaDZhLzEzMjI1NTExMDI2NzE4LnBuZ3xhNGNiZDQ2YmYxOWNlYmIzMTU2NzE2OTUzNmFiNDM3OTJjN2EzYzU0YmVlZWFmNWQ1ZmJlNDYzMGEzODIzOTU4',
            benefitsImg: ['','',''],
            plansBulled: true
        },{
            name: 'SAP Resolve',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '55510',
            initials: 'SR',
            heroImg: '/medias/55510-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDc2NjA2fGltYWdlL3BuZ3xpbWFnZXMvaGM3L2g1OC8xMzIyNTUxMTA1OTQ4Ni5wbmd8ZTA5MjYxNTU3OTM5ZDVkNmJjM2Q1ZTU5MWU2NDU3ZDU2NDI2Mjk2ODFkMjRlMDNmYTllNTg1NzE1Njc1ZDc5ZA',
            benefitsImg: ['','','']
        },{
            name: 'Service Ticket Intelligence',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '44902',
            initials: 'ST',
            heroImg: '/medias/44902-Hero.png?context=bWFzdGVyfGltYWdlc3wxMDQyNTU0fGltYWdlL3BuZ3xpbWFnZXMvaDhjL2g2ZS8xMzIyNTUxMTA5MjI1NC5wbmd8MmE2ZTYxMGFhNTdmMWRlOTFjYmU1ZDRkMGQ4ZGI2MTg0MmUxNjkyOGIwMzY2YjU1YWFhM2FkOTgxYThmOWQ2Ng',
            benefitsImg: ['','','']
        },{
            name: 'SAP Web Analytics',
            catImg: '/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw',
            productId: '45167',
            initials: 'WA',
            heroImg: '/medias/45167-Hero.png?context=bWFzdGVyfGltYWdlc3wxMzkyNTkzfGltYWdlL3BuZ3xpbWFnZXMvaDY2L2gzMy8xMzIyNTUxMTEyNTAyMi5wbmd8NDRlNDI5ZGJlODA2NTdkYTliMjk2ZDE2Y2RmMDZhMmYxYzJlNDBmMDJhMWVjYzY5YzU5ODFmMTkzNzEwZTBkZg',
            benefitsImg: ['','','']
        },{
            name: 'SAP Cloud Platform Credential Store',
            catImg: '/medias/category-cloud-platform.svg?context=bWFzdGVyfGltYWdlc3wxNDM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oYWYvMTMyMDczNDAzNTE1MTguc3ZnfDMxMDk0ZmM4ZWViNDM0NmIyZDg0MzRmOTllODAxMTg4MWY5MGZiOTBkOTI2MTkxNTRiMjY5YzQ2NjU3NmE1YTA',
            productId: '55515',
            initials: 'CS',
            heroImg: '/medias/55515-Hero.png?context=bWFzdGVyfGltYWdlc3w2NDcxNTF8aW1hZ2UvcG5nfGltYWdlcy9oOWUvaGEwLzEzMjM0MTgyMjkxNDg2LnBuZ3w2MWY0MjBhYzNmZDgwZDlmNWM1MWE0MTVkYjBhMmFmMWRkZDY3NGE0MTYyYWI3NzZlYjFhZjUzNjE2YWZkNzMy',
            benefitsImg: ['','','']
        },{
            name: 'SAP Cloud Platform Integration Suite',
            catImg: '/medias/category-cloud-platform.svg?context=bWFzdGVyfGltYWdlc3wxNDM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oYWYvMTMyMDczNDAzNTE1MTguc3ZnfDMxMDk0ZmM4ZWViNDM0NmIyZDg0MzRmOTllODAxMTg4MWY5MGZiOTBkOTI2MTkxNTRiMjY5YzQ2NjU3NmE1YTA',
            productId: '55519',
            initials: 'IS',
            heroImg: '/medias/55519-Hero-SAP-Cloud-Platform-Integration-Suite.png?context=bWFzdGVyfGltYWdlc3w3NjU3ODN8aW1hZ2UvcG5nfGltYWdlcy9oNmUvaGE5LzEzMjM3MTY5NTUzNDM4LnBuZ3xjZjA1MTk3ZTc4NTQwMDA4YzRlMjQ1NWNkZDk1MzJlODJjMTEzYTUxYTczMmIyMTM1NDBiMWFkYzgzYWVjZmQx',
            benefitsImg: ['','','']
        },{
            name: 'SAP Digital Supplier Network Membership',
            catImg: '/medias/category-network-spend-management.svg?context=bWFzdGVyfGltYWdlc3wyMTQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMC9oZTEvMTMyNTk0NjgyNDI5NzQuc3ZnfDEzMmEyZmY5MzEzZDEyOTkzYjM5ZWYxMzlhODI1YWJjNDBkNTdjYzZjOTc4ZWNmNzg4YjU4ODY0NjM3N2UzOTA',
            productId: '53314',
            initials: 'DS',
            heroImg: '/medias/53314-Hero.png?context=bWFzdGVyfGltYWdlc3wzMTg5MDl8aW1hZ2UvcG5nfGltYWdlcy9oZGMvaGMyLzEzMjM4MzI1MTQ5NzI2LnBuZ3w3ZWJlNGM5YjJhNmJjZTU1Y2E0NWNhNDg5ZjY5ZTdmNTRiNzY5YTM5ZGZmOTMxOGFmZTdjMmI5OGI3N2QxNzRj',
            benefitsImg: ['','','']
        },{
            name: 'SAP HANA Cloud',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '44699',
            initials: 'HC',
            heroImg: '/medias/44699-Hero-SAP-HANA-Cloud.png?context=bWFzdGVyfGltYWdlc3wxMTM2OTM5fGltYWdlL3BuZ3xpbWFnZXMvaDllL2g5Zi8xMzIzOTA3NDYxOTQyMi5wbmd8NTAzZGY1MDgwNDlkNWZmNTFiZjI4NzVmYzlmZjQ3YzI2N2E5ZmQ0NWEwZDg3MWM0YWYzMTNjNjU5YzUzN2VjNQ',
            benefitsImg: ['','','']
        },{
            name: 'SAP Signature Management by DocuSign, premium edition (SuccessFactors)',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '53321',
            initials: 'SM',
            heroImg: '/medias/53321-Hero-SAP-Signature-Management-by-DocuSign-for-SuccessFactors?context=bWFzdGVyfGltYWdlc3w4OTQ4ODB8aW1hZ2UvcG5nfGltYWdlcy9oMTQvaDhmLzEzMjQzNjY5NDQ2Njg2LnBuZ3wzYzA3ZWE1YjMxZDRiMjc3ZWE5ZDI2Y2NiZTZmMDhjZWFiMTU3Y2NkYjk3ZWNmM2YzMjJmZjFkMzViNzViNDNk',
            benefitsImg: ['','','']
        },{
            name: 'SAP Business Application Studio',
            catImg: '/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE',
            productId: '45318',
            initials: 'BA',
            heroImg: '/medias/45318-Hero-SAP-Business-Application-Studio.png?context=bWFzdGVyfGltYWdlc3wyOTQwMDk3fGltYWdlL3BuZ3xpbWFnZXMvaDE0L2hlZS8xMzI0NDkzMDE2MjcxOC5wbmd8ZGMxMTgxNmMyMmY5YTRjNjViY2IwNDcwYTY2MGRhYjEwYzA1ODg0MTI4N2U4NjhkYzViZjgwMmYyNjMxZTJkNQ',
            benefitsImg: ['','','']
        },{
            name: 'Omnichannel Promotion Pricing',
            catImg: '/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE',
            productId: '45101',
            initials: 'OP',
            heroImg: '/medias/45101-Hero-Omnichannel-Promotion-Pricing.png?context=bWFzdGVyfGltYWdlc3w2MTQ5MjJ8aW1hZ2UvcG5nfGltYWdlcy9oNzIvaDg4LzEzMjM1ODc2ODg4NjA2LnBuZ3wwNGRkZmIxOGU4ZDRiNWYzOGQ1MDllMGNkMWFiNDAxNWI3MTI4NGMzZTgyYjVlYjZhMzgyNDUxMWJiMGU3NTJi',
            benefitsImg: ['','','']
        },{
            name: 'Enhancement Services for SAP Product Lifecycle Management',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '49352',
            initials: 'ES',
            heroImg: '/medias/49352-Hero-Enhancement-Services-for-SAP-Product-Lifecycle-Management.png?context=bWFzdGVyfGltYWdlc3wxNDgzODM2fGltYWdlL3BuZ3xpbWFnZXMvaDQ5L2gwZS8xMzI0NjQ1MzA4ODI4Ni5wbmd8OWMyMWIzYmE1ZDdmYWU4ZjIzMWM0ZjBlNzRkMjllYjRiYjZmZmI5NDU2NzFjY2UyNDkxZDU5ZWI3ZDhlZTA5Ng',
            benefitsImg: ['','','']
        },{
            name: 'Business Entity Recognition',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '44178',
            initials: 'BE',
            heroImg: '/medias/44178-Hero-SCP-Business-Entity-Recognition.png?context=bWFzdGVyfGltYWdlc3w3MDQzOTJ8aW1hZ2UvcG5nfGltYWdlcy9oY2EvaGIzLzEzMjMxNjMwMDkwMjcwLnBuZ3xmODRlZTM0ZmM4ZmMxMTIwN2UwYmVhYjA3NDE2NzY0YzE1NDc3NjYzZjdjNzJhZTlmODAyMjUwNDYxNDc5YmQz',
            benefitsImg: ['','','']
        },{
            name: 'SAP Cloud Platform Process Visibility',
            catImg: '/medias/category-cloud-platform.svg?context=bWFzdGVyfGltYWdlc3wxNDM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oYWYvMTMyMDczNDAzNTE1MTguc3ZnfDMxMDk0ZmM4ZWViNDM0NmIyZDg0MzRmOTllODAxMTg4MWY5MGZiOTBkOTI2MTkxNTRiMjY5YzQ2NjU3NmE1YTA',
            productId: '41511',
            initials: 'PV',
            heroImg: '',
            benefitsImg: ['','','']
        },{
            name: 'Custom field package for SAP Ariba solutions',
            catImg: '/medias/category-network-spend-management.svg?context=bWFzdGVyfGltYWdlc3wyMTQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMC9oZTEvMTMyNTk0NjgyNDI5NzQuc3ZnfDEzMmEyZmY5MzEzZDEyOTkzYjM5ZWYxMzlhODI1YWJjNDBkNTdjYzZjOTc4ZWNmNzg4YjU4ODY0NjM3N2UzOTA',
            productId: '45000',
            initials: 'AS',
            heroImg: '/medias/45000-Hero.png?context=bWFzdGVyfGltYWdlc3wzOTg2OTB8aW1hZ2UvcG5nfGltYWdlcy9oYmIvaGFiLzEzMjQ5NDUxMDY1Mzc0LnBuZ3w2YzVlMmY3ZDJhZDU1MWIyZTBiODNjMmViYjMwMzNjMWNjM2I0MDFiYzQyODEzZjRhZmVkNTYyZGJiODAzZDky',
            benefitsImg: ['','','']
        },{
            name: 'SAP Trading Platform Integration',
            catImg: '/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE',
            productId: '42072',
            initials: 'TP',
            heroImg: '/medias/Hero-42072.png?context=bWFzdGVyfGltYWdlc3w4MDc3NzV8aW1hZ2UvcG5nfGltYWdlcy9oZTcvaDkyLzEzMjU5NDYxODUzMjE0LnBuZ3w1OTM2NzA2ZTU4Zjk2ZmY0ZmJkNjFmZTY0NDdlYTk2OTM1MjdhZDc4M2E4NzhmODYyYzIzMjg3ZjA2OTg3NTE1',
            benefitsImg: ['','','']
        },{
            name: 'UI5 flexibility for key users',
            catImg: '/medias/category-cloud-platform.svg?context=bWFzdGVyfGltYWdlc3wxNDM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oYWYvMTMyMDczNDAzNTE1MTguc3ZnfDMxMDk0ZmM4ZWViNDM0NmIyZDg0MzRmOTllODAxMTg4MWY5MGZiOTBkOTI2MTkxNTRiMjY5YzQ2NjU3NmE1YTA',
            productId: '57410',
            initials: 'UI',
            heroImg: '/medias/57410-Hero-UI5-flexibility?context=bWFzdGVyfGltYWdlc3wxMTYzMDg0fGltYWdlL3BuZ3xpbWFnZXMvaDUyL2hiZC8xMzI1NjA4NjM4ODc2Ni5wbmd8MjBkNzUxNjE5YWFkYWVhNjQ2Y2RkMTY1ODg2MTkxZGM2Yzg5ZGFjNjdlMTY1MWI0YjhmZWUyNjJmY2MxM2U0Ng',
            benefitsImg: ['','','']
        },{
            name: 'SAP Asset Intelligence Network, connection add-on',
            catImg: '/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc',
            productId: '45091',
            initials: 'AI',
            heroImg: '/medias/45091-Hero.png?context=bWFzdGVyfGltYWdlc3wxMjg5MTI5fGltYWdlL3BuZ3xpbWFnZXMvaGFhL2hkMS8xMzI1NDQ4NTMxMTUxOC5wbmd8N2M0MWMyZmE0NjZiMDQ0YWE4M2NmMjBjNmEwZGE5YjA3ZTU3NjhhOGEyOGFlOWE4ZWM1NDUzM2U1MzkyMzNkMg',
            benefitsImg: ['','','']
        },{
            name: 'SAP Cloud Platform Document Management service',
            catImg: '/medias/category-cloud-platform.svg?context=bWFzdGVyfGltYWdlc3wxNDM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oYWYvMTMyMDczNDAzNTE1MTguc3ZnfDMxMDk0ZmM4ZWViNDM0NmIyZDg0MzRmOTllODAxMTg4MWY5MGZiOTBkOTI2MTkxNTRiMjY5YzQ2NjU3NmE1YTA',
            productId: '46370',
            initials: 'CP',
            heroImg: '/medias/Hero-46370.png?context=bWFzdGVyfGltYWdlc3wxMDY3OTY3fGltYWdlL3BuZ3xpbWFnZXMvaGZjL2gzMy8xMzI2MDQ3MTMwNDIyMi5wbmd8ZmU2NTlhOTY2OGYzYjY4ZDYyZjQ4YzRhOWVmYTMwMzEzNTc3OTZiYTcxZWFhM2I5ZDVlN2I2YzQxZGQ3ODc0Mg',
            benefitsImg: ['','','']
        },{
            name: 'Invoice Object Recommendation',
            catImg: '/medias/category-cloud-platform.svg?context=bWFzdGVyfGltYWdlc3wxNDM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oYWYvMTMyMDczNDAzNTE1MTguc3ZnfDMxMDk0ZmM4ZWViNDM0NmIyZDg0MzRmOTllODAxMTg4MWY5MGZiOTBkOTI2MTkxNTRiMjY5YzQ2NjU3NmE1YTA',
            productId: '53961',
            initials: 'CP',
            heroImg: '/medias/53961-Hero.png?context=bWFzdGVyfGltYWdlc3w4ODQ5NTd8aW1hZ2UvcG5nfGltYWdlcy9oMzUvaGUxLzEzMjYwNDczNDM0MTQyLnBuZ3xkZmI5NWVlOTAxYTlkYWU1MmJhN2VlOThiNTYyYWU0YTc3OTk1MGU0Y2U5NzljNzhhYzZmZmZjZWMyNmUzNmRk',
            benefitsImg: ['','','']
        },{
            name: 'SAP Cloud Platform Personal Data Manager',
            catImg: '/medias/category-cloud-platform.svg?context=bWFzdGVyfGltYWdlc3wxNDM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oYWYvMTMyMDczNDAzNTE1MTguc3ZnfDMxMDk0ZmM4ZWViNDM0NmIyZDg0MzRmOTllODAxMTg4MWY5MGZiOTBkOTI2MTkxNTRiMjY5YzQ2NjU3NmE1YTA',
            productId: '46366',
            initials: 'CP',
            heroImg: '/medias/Hero-46366.png?context=bWFzdGVyfGltYWdlc3wyMTMyMjY2fGltYWdlL3BuZ3xpbWFnZXMvaGE4L2g4Ny8xMzI2MDQ4OTAzMTcxMC5wbmd8OTg5NjI0NDVkZGY5NTFlZDIyOTMxNmM2YzFiYzNmMTA5ZWU4ODliNTE0NmZhZGE1YWI2MzJkNGFkNTQwNjRmOA',
            benefitsImg: ['','','']
        }
    ];

    const PRODUCT_NAME = $('.hero-headline').length ? $('.hero-headline')[0].innerText : '';

    const currentProductStorage = function() {
        let data = {};
        return {
            setProduct: function(item) {
                data = item;
            },
            getProduct: function() {
                return data;
            }
        }
    }();

    const changeHeader = () => {
        $("#search-input").each(function(){

            $('div[id="header-space"]').remove();
            $('div[id="header-space"]').remove();
            $('[id="search-trigger"]').remove();
            $('.top-nav-inner.new-search').remove();
            $('.search-v').remove();
            $('.product-categories-block').remove();
            $('.header-product-categories').remove();
            $('.product-categories-block-active').remove();

            $('.header:first .top-nav').css({
                "position": "fixed",
                "top": "0",
                "right": "0",
                "left": "0",
                "z-index": "2000",
                "background": "black"
            });
            $('.header section.heroHome, #hero-container, .header.product').prepend('<div id="header-space" style="height: ' + $('.top-nav').height() + 'px"></div>');

            let newSearchInNav = `<div class="secondary search-nav" id="search-trigger">
<form class="search_form" name="search_form" action="/search">
                  <input type="text" autocomplete="off" name="text" id="search" class="ds-heading--m ds-p-l-s ds-p-y-xs" placeholder="Search by Product, Keyword">
<button type="submit" class="search-form-btn ds-button ds-button--secondary-white ds-p-x-s"><i class="ds-icon--big ds-icon--search"></i></button>
              </form>
<div class="ds-p-l hidden suggestions-container">
<div class="grey-3 ds-heading--xxs ds-m-b-m">search suggestions</div>
<ul class="suggestions-block"></ul>
</div>
      </div>`;

            $('header .top-nav .top-nav-inner').after('<div class="top-nav-inner new-search ds-flexGrid hidden"></div>');

//           ******************
// Adding product categories to header

            let productCategoriesBtn = `<div class="product-categories-block ds-body ds-p-y-xxs ds-m-l-l"><i class="ds-icon--big ds-icon--menu ds-m-r-s"></i><span>Categories</span></div>
                  <div class="product-categories-block-active grey-3 ds-body ds-p-y-xxs ds-m-l-l hidden"><i class="ds-icon--big ds-icon--close ds-m-r-s"></i><span>Categories</span></div>`;

            $('.top-nav-inner').prepend('<div class="header-left-part"></div><div class="header-middle-part ds-p-x-xxs"></div><div class="header-right-part ds-flexCol-6 ds-flexCol-xs-12 ds-flexCol-md-4"></div>');
            $('.top-nav-inner > .top-nav-logo').addClass('ds-m-r-l').appendTo('.top-nav-inner .header-left-part');
            // $('.top-nav-inner > #top-nav-menu').appendTo('.top-nav-inner .header-right-part');
            $('.top-nav-inner > #top-nav-menu').addClass('ds-p-m');
            $('.top-nav-inner .header-left-part > .top-nav-logo').after(productCategoriesBtn);
            $('.top-nav-inner .header-middle-part').prepend(newSearchInNav);
            $('.top-nav-inner #discussionMenu, .top-nav-inner #burgerMenu').appendTo('.top-nav-inner .header-right-part');
            $('.top-nav-inner .top-nav-menu .help__link').html('<i class="ds-icon--big ds-icon--help"></i>');

            let productCategoriesTemplate = `<div class="ds-m-y-xl ds-flexGrid header-product-categories hidden">
              <div class="ds-flexRow">
                  <a href="/Product-Categories/Analytics/c/sb_analytics" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-analytics.svg?context=bWFzdGVyfGltYWdlc3w3NjJ8aW1hZ2Uvc3ZnK3htbHxpbWFnZXMvaDg4L2hjMi8xMzIwNzM0MDMxODc1MC5zdmd8NGQ3NmUyYmMyZjU3NDc1ZmY0Y2I3OWY3NDJjM2QxMDQ5NjA3Yzk5NzIzMzVmNmM1MzdmNDJlMjIxYjQ4YjA1Mw"></div>
                      <div class="ds-heading--s">Analytics</div>
                  </a>
                  <a href="/Product-Categories/Data-Management/c/sb_datamanagement" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-data-management.svg?context=bWFzdGVyfGltYWdlc3wyMzM2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oMTQvMTMyMDczNDAzODQyODYuc3ZnfGFmMmE5MDYyZDA2ODA0YzJhMTk1MDIwNThhNWQ0ZGM5NDBhM2I5YTA4MjdkOTkzNzJhZTU1M2JkZWQ5OWQzNjE"></div>
                      <div class="ds-heading--s">Data Management</div>
                  </a>
                  <a href="/Product-Categories/Education/c/sb_learning" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-education.svg?context=bWFzdGVyfGltYWdlc3wxNTU0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hiNy9oNjIvMTMyMDczNDA0ODI1OTAuc3ZnfDFiNzZkMWIyOWVhMGMxOWYwOTgzZDA3NjRjMDhiMjc3ZGJjODI3NjU5ODYwNTA2ZTc3NTJhNGFkOTEzNTY1N2Q"></div>
                      <div class="ds-heading--s">Education</div>
                  </a>
                  <a href="/Product-Categories/Packaged-Services/c/sb_services" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-packaged-services.svg?context=bWFzdGVyfGltYWdlc3wyMzM0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMy9oZGIvMTMyMDczNDA1ODA4OTQuc3ZnfGFlNDgwZDNlNWM5YWRhNjM3ZDRjNmFkYjY2ZjEwMjY1MWU5ZmFkYWNhYWQ3ZWYxYzVlNjE2Nzg4NDViNWJlNmU"></div>
                      <div class="ds-heading--s">Packaged Services</div>
                  </a>
                  <a href="/Product-Categories/Network-and-Spend-Management/c/sb_networkandspendmanagement" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-network-spend-management.svg?context=bWFzdGVyfGltYWdlc3wyMTQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMC9oZTEvMTMyNTk0NjgyNDI5NzQuc3ZnfDEzMmEyZmY5MzEzZDEyOTkzYjM5ZWYxMzlhODI1YWJjNDBkNTdjYzZjOTc4ZWNmNzg4YjU4ODY0NjM3N2UzOTA"></div>
                      <div class="ds-heading--s">Network and Spend Management</div>
                  </a>
                  <a href="/P42072roduct-Categories/Project-Management/c/sb_projectmanagement" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-project-management.svg?context=bWFzdGVyfGltYWdlc3wzMTc3fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzOS9oODIvMTMyMDczNDA2MTM2NjIuc3ZnfDljM2EyMWExMDM3MDA4ZTFmYTdmNGJjYmI2MjZmY2ZmMzNmZTRiNGYyZjgxZmI4OTI4NDQzYTM1MjI5NDBmOWE"></div>
                      <div class="ds-heading--s">Project Management</div>
                  </a>
                  <a href="/Product-Categories/Travel/c/sb_travel" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-travel.svg?context=bWFzdGVyfGltYWdlc3wxMTUwfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxZS9oMDkvMTMyMDczNDA3MTE5NjYuc3ZnfDRlMzIxN2Q0NTU0MmEwM2EyZjMwNzc2N2VkMmFhMmRhMDYyNWVjMTY3YjBhYjlmZDE4YmZjMGIzZDkwYmM3NDc"></div>
                      <div class="ds-heading--s">Travel</div>
                  </a>
                  <a href="/Product-Categories/Digital-Supply-Chain/c/sb_digital" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-digital-supply-chain.svg?context=bWFzdGVyfGltYWdlc3wxMzY2fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkMC9oMzAvMTMyMDczNDA0NDk4MjIuc3ZnfDkzNjc1ZTI0Y2E1ZjdhNDZmOTQ3N2ZhMTRlNmJkMThjOGJiNWVjYzA0NWRiNjczYWViZGUxYjQ0Y2IyMGM5ODc"></div>
                      <div class="ds-heading--s">Digital Supply Chain</div>
                  </a>
                  <a href="/Product-Categories/Sales-%26-Marketing/c/sb_salesmarketing" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-sales-marketing.svg?context=bWFzdGVyfGltYWdlc3wzOTA1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hmMi9oNzIvMTMyMDczNDA2NDY0MzAuc3ZnfGVhOTkyNzVlMTU5NTU2MTg5OTY1ZjVhMTA3NjhmNDc4ZTI0NTYwYWJjYWJhOGMyZWI4Nzk4YjRkN2ZiNjUwYmE"></div>
                      <div class="ds-heading--s">Sales & Marketing</div>
                  </a>
                  <a href="/Product-Categories/Sports-%26-Entertainment/c/sb_sportsentertainment" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-sports-entertainment.svg?context=bWFzdGVyfGltYWdlc3wyMjQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlNS9oNGQvMTMyMDczNDA2NzkxOTguc3ZnfDYyOGM5OGViYzliNjZiMDJhMmFiZjMwMzAwZTI4OWJiODNkMzJiOTMyMmYyMTRiMzZlYzNmYmUzZGVjY2RiYWU"></div>
                      <div class="ds-heading--s">Sports & Entertainment</div>
                  </a>
                  <a href="/Product-Categories/HR-%26-Recruiting/c/sb_hr" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-hr-recruiting.svg?context=bWFzdGVyfGltYWdlc3wxNTQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwNS9oZjkvMTMyMDczNDA1MTUzNTguc3ZnfDBlYTA5Y2I0YWI5NmMwYjU1NmNlMTVjZmFmN2MzMjVmMzFmZDE2MDQ5ZDZmNWNiZGUzODIyNjljY2MyOGQ3YWI"></div>
                      <div class="ds-heading--s">HR & Recruiting</div>
                  </a>
                  <a href="/Product-Categories/Cloud-Platform/c/sb_cloud" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-cloud-platform.svg?context=bWFzdGVyfGltYWdlc3wxNDM1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxMy9oYWYvMTMyMDczNDAzNTE1MTguc3ZnfDMxMDk0ZmM4ZWViNDM0NmIyZDg0MzRmOTllODAxMTg4MWY5MGZiOTBkOTI2MTkxNTRiMjY5YzQ2NjU3NmE1YTA"></div>
                      <div class="ds-heading--s">Cloud Platform</div>
                  </a>
                  <a href="/Product-Categories/Intelligent-Technologies/c/sb_intelligent" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-intelligent-technologies.svg?context=bWFzdGVyfGltYWdlc3wxNjQ5fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkOS9oMDMvMTMyMDczNDA1NDgxMjYuc3ZnfDM4OTQ5YTE4ZDBhZGU5ODJmOWI3ZmVkOGUzOGExZDNhNDNlZTNjNTE5ZWUxMDcyZjk0OWI2MGZkYjAyNmVlZDY"></div>
                      <div class="ds-heading--s">Intelligent Technologies</div>
                  </a>
                  <a href="/Product-Categories/Developer-Tools/c/sb_developer%20tools" class="ds-flexCol-md-2 ds-flexCol-sm-3 ds-m-b-xl">
                      <div class="img-container ds-m-b-s"><img src="/medias/category-developer-tools.svg?context=bWFzdGVyfGltYWdlc3wyOTMyfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hkZS9oOGQvMTMyMDczNDA0MTcwNTQuc3ZnfDcxNWI0NDIyYzAzNDNjZTI5OWMwNmIwMjU1ZjM4M2U3YTU0NGQ5YjA2NThkOTdjZjQyNTNiZGIyZWFjYTRhZTE"></div>
                      <div class="ds-heading--s">Developer Tools</div>
                  </a>
              </div>
          </div>`;

            $('.new-search').after(productCategoriesTemplate);

            $('.header .main-nav').css('height', '83px');
            $('.header .main-nav > ul').css('display', 'none');
            $('.heroHome > #header-space').show();
            $('.heroHome > .sap-name-section').show();

            function showProductCategories() {
                $('.product-categories-block').addClass('hidden');
                $('.product-categories-block-active').removeClass('hidden');
            }

            function hideProductCategories() {
                $('.product-categories-block-active').addClass('hidden');
                $('.product-categories-block').removeClass('hidden');
            }

            $(".search_form").click((e) => {
                $('.search-nav').addClass('active');
                $('.search_form .ds-icon--close, .search_form .ds-button--secondary-white').removeClass('hidden');
            });

            $('.product-categories-block').on('click', () => {
                showProductCategories();
                $('.header-product-categories').removeClass('hidden');
            });

            $('.product-categories-block-active').on('click', () => {
                hideProductCategories();
                $('.header-product-categories').addClass('hidden');
            });

            var closedIconTriggered = false;
            function buildAutocomplete(arr) {
                let template = "";
                for(let item of arr) {
                    template += '<li class="ds-m-b-s link ds-heading--xs">' + item + '</li>';
                }
                $('.suggestions-block li').off('click');
                $('.suggestions-block').html(template);
                if(!!template && !closedIconTriggered) {
                    $('.suggestions-container').removeClass('hidden');
                    $('.suggestions-block li').on('click', (e) => {
                        let origin = $(e.target).text();
                        var valForUrl = $(e.target).text().split(' ').join('+');
                        $('#search').val(origin);
                        window.location.href = '/search?text=' + valForUrl.toLowerCase();
                    })
                } else {
                    closedIconTriggered = false;
                    $('.suggestions-container').addClass('hidden');
                }
            }

            $('#search').on('focusout', () => {
                closedIconTriggered = true;
            })

            $('#search').on('keyup change', (e) => {
                if(!$(e.target).val()) {
                    $('.suggestions-container').addClass('hidden');
                    return;
                }

                let newValue = $('#search').val();
                $('#search-form > #search-input').val(newValue);
                $('#search-form > #search-input').trigger('keydown');

                setTimeout(() => {
                    let arr = [];
                    $('ul.ui-autocomplete li').each((index, el) => {
                        arr.push($(el).text());
                    });
                    buildAutocomplete(arr);
                }, 1000);
            });

            $('header > .top-nav > .top-nav-inner').addClass('ds-flexGrid ds-p-m');
            $('#ui-id-3').addClass('hidden');
            $('li.secondary.login a.login').html('<i class="ds-icon--big ds-icon--account"></i>');
            $('li.secondary').removeClass('hide-for-mobile');
            $('#top-nav-menu li.secondary.flag').append('<small class="country-select-sign ds-m-l-xxs">EN</small>');
        });
    };

    const changeCommonSection = () => {
        $('h1').addClass('ds-heading--l ds-m-y-l');
        // $('.about-publisher-section').remove();
        $('#recommendations-section').remove();
        $('.title-mobile').remove();
        $('.d4cNavdd.hcp-navbut').hide();
    };

    const addLine = (element, className) => {
        $('<div class="line"></div>').insertAfter(element);
        addClassToElement(element, className || 'ds-m-b-xxl');
        return element;
    };

    const addSplitter = (element) => {
        if($(element).find('>:last-child').hasClass('line')) {
            $(element).find('>:last-child').remove();
        }
        $('<div class="splitter"></div>').insertAfter(element);
        return element;
    };

    const addClassToElement = (element, classesList) => {
        $(element).addClass(classesList);
        return element;
    };


    const changeHeroSection = () => {
        if($('.hero-price .tieredPricingTooltip').length) {
            $('.hero-price .tieredPricingTooltip').remove();
        }
        if($('.hero-price .through-price').length) {
            $('.hero-price .through-price').remove();
        }

        let dataLayerArr = window.dataLayer;
        let productName = '';
        let productId = '';
        for (let layer of dataLayerArr) {
            if (layer.event === 'product-detail') {
                if (layer.ecommerce && layer.ecommerce.detail && layer.ecommerce.detail.products && layer.ecommerce.detail.products.length) {
                    let nameContainer = layer.ecommerce.detail.products[0];
                    productName = nameContainer['name'];
                    productId = nameContainer['id'];
                }
            }
        }
        if(productName || productId) {
            let translationProduct = {};
            for (let product of PRODUCTS) {
                if (product.productId === productId) {
                    translationProduct = product;
                }
            }
            translationProduct.productName = productName;
            if($('.hero-price-info .tripIt-hero-promo').length) {
                $('.hero-price-info > p').hide();
            }
            currentProductStorage.setProduct(translationProduct);
            if(!translationProduct.heroImg) {
                $('.section1 .hero-section .hero-section-block').removeClass('ds-flexCol-lg-6 ds-flexCol-md-5').addClass('ds-flexCol-md-8 ds-col-md-push-2');
                $('.section1 .hero-section').css('height', 'auto').css('min-height', '420px');
                $('.section1.tripItBgAdjust').css('min-height', '600px');

                $('#hero-mobile-img').remove();
            }
            if (translationProduct && translationProduct.heroImg) {
                $('section.section1').append('<div id="hero-mobile-img"></div>');
                if($('section.section1 #hero-mobile-img').prev().is('.row')) {
                    $('section.section1 #hero-mobile-img').prev().hide();
                }
                let fixedFound = '0';
                if($('.top-nav').find('.product-categories-block').length && $('.top-nav > .top-nav-inner').length) {
                    fixedFound = $('.top-nav > .top-nav-inner')[0].offsetHeight + 'px';
                }
                $('.solution-nav.show-for-large-up').css('margin-top', fixedFound);
                $('section.section1').prepend('<img class="bg-heroSection" src="' + translationProduct.heroImg  + '"></img>');
                $('#hero-mobile-img').attr('style', 'background-image: url(' + translationProduct.heroImg + ') !important;');
                if(translationProduct && translationProduct.featuresImg && translationProduct.featuresImg.length) {
                    $('#features-section .tripIt-features-image').each(function(index) {
                        if(translationProduct.featuresImg[index]) {
                            $(this).find('img').attr('src', translationProduct.featuresImg[index]);
                        }
                    })
                }
            }
        }

        const HERO_DESCRIPTION = $('.hero-subtitle').length ? $('.hero-subtitle')[0].innerText : '',
            HERO_PRODUCT_DESCRIPTION = $('.paragraph-text.hero-product-description').length ? $('.paragraph-text.hero-product-description')[0].innerText : '',
            HERO_PRODUCT_DESCRIPTION_FRAGMENT = $('.hero-subtitle').nextUntil('.paragraph-text').length ? $('.hero-subtitle').nextUntil('.paragraph-text') : null,
            RATINGS_QUANTITY = $('.ngs-star-rating.overall b').length ? $('.ngs-star-rating.overall b')[0].innerText : '',
            SALES_UNIT = $('.hero-price-info .sales-unit').length ? $('.hero-price-info .sales-unit')[0].innerText : '', //per user per month
            BUT_NOW_BTN_NOT_HERO = $('.hero-price-info .product-options #buySection a.button').length ? $('.hero-price-info .product-options #buySection')[0] : null,
            START_DEMO_BUTTON = $('.button.gold.expand').length ? $('.button.gold.expand')[0] : null,
            CONTACT_US_BUTTON = $('.hero-price-info .product-options a[data-reveal-id="purchaseContactUsModal"]').length ? $('.hero-price-info .product-options a[data-reveal-id="purchaseContactUsModal"]')[0] : null,
            START_TRIAL_BUTTON = $('.hero-price-info .product-options > a.button.tripIt-button').length ? $('.hero-price-info .product-options > a.button.tripIt-button')[0] : null,
            TOTAL_RATING = $('#totalRating'),
            RATING_WIDTH_DESCRIPTION = [
                { rating: 'stars5', width: 100},
                { rating: 'stars4', width: 80},
                { rating: 'stars3', width: 60},
                { rating: 'stars2', width: 40},
                { rating: 'stars1', width: 20},
                { rating: 'stars0', width: 0},
            ];
        let BUY_NOW_BUTTON = $('form.product.add_to_cart_form').length ? $('form.product.add_to_cart_form')[0] : null;
        if(BUY_NOW_BUTTON && ($(BUY_NOW_BUTTON).parents('#edition-section').length || $(BUY_NOW_BUTTON).parents('#licensing-section').length)) {
            BUY_NOW_BUTTON = $(BUY_NOW_BUTTON).clone();
        }
        if($('.hero-price script').length) { $('.hero-price *').remove(); }
        let hero_price = $('.hero-price').length ? $('.hero-price')[0].innerText : '';
        if(hero_price && hero_price.length) {
            hero_price = hero_price.trim();
        }

        if(hero_price.toLowerCase().indexOf('from') === 0) {
            hero_price = hero_price.substring(5);
        }
        const HERO_PRICE = hero_price;
        let rating = $('#totalRating .ngs-star-rating.overall').length ? $('#totalRating .ngs-star-rating.overall')[0].classList[2] : 'stars0',
            ratingWidth = RATING_WIDTH_DESCRIPTION.find(item => item.rating === rating).width,
            heroRatingTemplate,
            heroTemplate;

        heroRatingTemplate =  `<div class="ds-body ds-m-t-xs stars">
                    <div class="stars-container">
                        <div class="stars-container__out">
                            <div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star-outline ds-m-r-xxs"></i></div>
                            <div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star-outline ds-m-r-xxs"></i></div>
                            <div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star-outline ds-m-r-xxs"></i></div>
                            <div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star-outline ds-m-r-xxs"></i></div>
                            <div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star-outline ds-m-r-xxs"></i></div>` +
            '<div class="stars-container__in" style="width:' + ratingWidth + '%">' +
            `<div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star color-gold ds-m-r-xxs"></i></div>
                                <div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star color-gold ds-m-r-xxs"></i></div>
                                <div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star color-gold ds-m-r-xxs"></i></div>
                                <div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star color-gold ds-m-r-xxs"></i></div>
                                <div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon-star color-gold ds-m-r-xxs"></i></div>
                            </div>
                        </div>` +
            '<span class="ds-m-l-s">(' + RATINGS_QUANTITY + ')</span>' +
            `</div>
                    </div>`;

        if (!TOTAL_RATING || !$('#totalRating .ngs-star-rating.overall').length) { heroRatingTemplate = ''}
        let product_name = false;
        let translationProduct = currentProductStorage.getProduct();
        if(translationProduct && translationProduct.translation && translationProduct.translation[PRODUCT_NAME]) {
            product_name = translationProduct.translation[PRODUCT_NAME];
        }
        heroTemplate = '<div class="ds-flexGrid hero-section">' +
            '<div class="ds-flexRow">' +
            '<div class="ds-flexCol-lg-6 ds-flexCol-sm-12 ds-flexCol-md-5 hero-section-block">' +
            '<div class="ds-heading--xl title">' + (product_name || PRODUCT_NAME) + '</div>' +
            heroRatingTemplate;
        if(HERO_DESCRIPTION) {
            heroTemplate += '<p class="ds-body--l ds-m-y-s"><b>' + HERO_DESCRIPTION + '</b></p>';
        }
        if(!HERO_DESCRIPTION && HERO_PRODUCT_DESCRIPTION) {
            heroTemplate += '<p class="ds-body--l ds-m-y-s">' + HERO_PRODUCT_DESCRIPTION + '</p>';
        }
        if(!HERO_DESCRIPTION && !HERO_PRODUCT_DESCRIPTION && HERO_PRODUCT_DESCRIPTION_FRAGMENT && HERO_PRODUCT_DESCRIPTION_FRAGMENT.length) {
            $(HERO_PRODUCT_DESCRIPTION_FRAGMENT).each((ind, el) => {
                if($(el).text().trim()) {
                    if($(el).find('strong').length || $(el).find('b').length) {
                        heroTemplate += '<p class="ds-body--l ds-m-y-s"><b>' + $(el).text() + '</b></p>';
                    } else {
                        heroTemplate += '<p class="ds-body--l ds-m-y-s">' + $(el).text() + '</p>'
                    }
                }
            })
        }
        let fromText = "From";
        if(translationProduct && translationProduct.translation && translationProduct.translation[fromText]) {
            fromText = translationProduct.translation[fromText];
        }

        if(translationProduct && translationProduct.stickedPrice) {
            let fromFull = "";
            if(translationProduct.translation && translationProduct.translation.fromAfter) {
                fromFull = HERO_PRICE + ' ' + fromText;
            } else {
                fromFull = fromText + ' ' + HERO_PRICE;
            }
            if(HERO_PRICE) {
                heroTemplate += '<p class="ds-heading--s color-gold ds-medium-text">' + translationProduct.stickedTitle + '</p>'+
                    '<p class="ds-fine-print ds-stroked-text">' + fromFull + '</p>';
            }
        } else {
            if(translationProduct.translation && translationProduct.translation.fromAfter) {
                if(HERO_PRICE) {
                    heroTemplate += '<p class="ds-heading--s color-gold ds-medium-text">' + HERO_PRICE + ' ' + fromText + '</p>';
                }
            } else if(HERO_PRICE) {
                heroTemplate += '<p class="ds-fine-print">' + fromText + '</p>' +
                    '<p class="ds-heading--s color-gold ds-medium-text">' + HERO_PRICE + '</p>';
            }

        }

        let salesUnit = false;
        if(SALES_UNIT && translationProduct && translationProduct.translation && translationProduct.translation['month']) {
            salesUnit = SALES_UNIT.replace('month', translationProduct.translation['month']);
        }
        heroTemplate += '<p class="ds-fine-print">' + (salesUnit || SALES_UNIT) + '</p>' +
            '<div class="ds-m-t-l buttons-container"></div>' +
            '</div>' +
            '</div>' +
            '</div>';

        $(heroTemplate).insertAfter('.main-nav');


        $('.hero-section .buttons-container').append(BUT_NOW_BTN_NOT_HERO || BUY_NOW_BUTTON || START_TRIAL_BUTTON || CONTACT_US_BUTTON);
        if(START_TRIAL_BUTTON) {
            $(START_TRIAL_BUTTON).addClass('ds-button ds-button--primary');
        }
        if(CONTACT_US_BUTTON) {
            $(CONTACT_US_BUTTON).removeClass('button expand').addClass('ds-button ds-button--primary ds-m-r-s');
        }
        $('.hero-section .buttons-container').append(START_DEMO_BUTTON);

        $('.buttons-container .product.add_to_cart_form .button.expand, .buttons-container > #buySection.buySection .button.expand').toggleClass('button expand ds-button ds-button--primary ds-m-r-s');

        $(START_DEMO_BUTTON).toggleClass('button gold expand ds-button ds-button--secondary-white demo-btn');

        let demoText = START_DEMO_BUTTON && $(START_DEMO_BUTTON).text() ? $(START_DEMO_BUTTON).text().trim() : false;
        if(demoText.length && translationProduct && translationProduct.translation && translationProduct.translation[demoText]) {
            $(START_DEMO_BUTTON).text(translationProduct.translation[demoText]);
        }
        // $('.hero-content.clearfix, .taxInfo, .hero-price, .paragraph-text.sales-unit, #g2crowd-overall-rating, .customer-reviews.paragraph-text, .product-options #buySection.buySection').remove();
        $('.hero-content.clearfix, .taxInfo, .hero-price, .paragraph-text.sales-unit, #g2crowd-overall-rating, .customer-reviews.paragraph-text').remove();
        $('.section1 .product-options #buySection.buySection').hide().addClass('hidden');
        // $('.hero-content.clearfix, .taxInfo, .hero-price, .paragraph-text.sales-unit, #g2crowd-overall-rating, .customer-reviews.paragraph-text, .section1 .product-options #buySection.buySection').remove();
    };

    const changeNavigationView = () => {

        const setHeader = (productCatImg, titlesArr) => {
            $('.section1.tripItBgAdjust .solution-nav > .row').prepend('<div class="productName-coub-container ds-m-y-s ds-m-r-s ds-heading--m"><div class="productName-coub ds-m-r-s ds-heading--m"><img width="50" height="50" src="' + productCatImg + '">' +
                '</div><div class="ds-subname"><h1 class="ds-heading--s ds-subname-sub-title">' + titlesArr[0] + '</h1><div class="ds-heading--xs ds-subname-sub grey-4">'
                + (titlesArr[1] || '') + '</div></div></div>');


            $('.productName-coub-container').append('<div class="ds-icon-trigger">' +
                '<i class="ds-icon ds-icon--arrow-up ds-icon--big"></i>' +
                '<i class="ds-icon ds-icon--arrow-down ds-icon--big"></i>' +
                '</div>');

            $('.productName-coub-container .ds-icon--arrow-up').hide();
            if($('body').width() <= 1024) {
                $('.section1.tripItBgAdjust .solution-nav > .row > .small-12').hide();
                $('.productName-coub-container .ds-icon-trigger').show();
            } else {
                $('.section1.tripItBgAdjust .solution-nav > .row > .small-12').show();
                $('.productName-coub-container .ds-icon-trigger').hide();
            }

            $('.productName-coub-container .ds-icon-trigger .ds-icon--arrow-up').click(() => {
                $('.section1.tripItBgAdjust .solution-nav > .row > .small-12').hide();
                $('.productName-coub-container .ds-icon-trigger .ds-icon--arrow-up').hide();
                $('.productName-coub-container .ds-icon-trigger .ds-icon--arrow-down').show();
            });

            $('.productName-coub-container .ds-icon-trigger .ds-icon--arrow-down').click(() => {
                $('.section1.tripItBgAdjust .solution-nav > .row > .small-12').show();
                $('.productName-coub-container .ds-icon-trigger .ds-icon--arrow-down').hide();
                $('.productName-coub-container .ds-icon-trigger .ds-icon--arrow-up').show();
            });

            $( window ).resize(function() {
                if($('body').width() <= 1024) {
                    $('.ds-icon-trigger').show();
                    if($('.productName-coub-container .ds-icon--arrow-up').css('display') === 'block') {
                        $('.productName-coub-container .ds-icon-trigger .ds-icon--arrow-down').hide();
                        $('.section1.tripItBgAdjust .solution-nav > .row > .small-12').show();
                    } else {
                        $('.productName-coub-container .ds-icon-trigger .ds-icon--arrow-down').show();
                        $('.section1.tripItBgAdjust .solution-nav > .row > .small-12').hide();
                    }
                } else {
                    $('.section1.tripItBgAdjust .solution-nav > .row > .small-12').show();
                    $('.productName-coub-container .ds-icon-trigger').hide();
                    $('.productName-coub-container .ds-icon--arrow-up').hide();
                    $('.productName-coub-container .ds-icon--arrow-down').show();
                }
            });
        };

        const NAVIGATION = $('.solution-nav.d4cNav');
        $('.section1.tripItBgAdjust').prepend(NAVIGATION);

        let translationProduct = currentProductStorage.getProduct();
        let productCatImg = translationProduct.catImg || '';
        let productName = translationProduct.productName || translationProduct.name;
        if(translationProduct && translationProduct.translation && translationProduct.translation[productName]) {
            productName = translationProduct.translation[productName];
        }

        if(productName) {
            let titlesArr = productName.split(' (');
            if(titlesArr[1]) {
                titlesArr[1] = ' (' + titlesArr[1];
            } else if(productName.split(' for ')[1]) {
                let titlesArr = productName.split(' for ');
                titlesArr[1] = 'for ' + titlesArr[1];
            } else {
                titlesArr =  productName.split(', ');
                if(titlesArr[2]) {
                    titlesArr[1] += ', ' + titlesArr[2];
                }
            }
            setHeader(productCatImg, titlesArr);
            $('.section1.tripItBgAdjust .solution-nav > .row .sub-nav').parent('.small-12').removeClass('columns');
        }

        Array.prototype.forEach.call($('.sub-nav dd:not(.hcp-navbut) a span'), (item) => {item.innerText = item.innerText.toLowerCase(); item.innerText = item.innerText[0].toUpperCase() +
            item.innerText.slice(1);});

        $('.sub-nav dd:not(.hcp-navbut) a').addClass('ds-link ds-m-r-l ds-body');

    };

    const setReviews = () => {
        if($('.ngs-star-rating').prop("classList")) {
            let classList = $('.ngs-star-rating').prop("classList").value.split(' ');
            let stars = 0;
            for(let item of classList) {
                if(~item.indexOf('stars')) {
                    stars = +item.replace(/[a-z]/gi,'');
                }
            }
            if(!stars) {
                stars = 0;
            }
            let str = '<span class="reviews-span">' + $('.solution-nav.d4cNav .sub-nav dd[data-magellan-arrival="reviews"] > a > span').html()
                + '<span class="ds-color-gold"><i class="ds-icon ds-icon--large ds-icon--star color-gold ds-m-l-xs ds-m-r-xxs"></i>';
            if(stars > 0) {
                str += stars.toFixed(1) + '/5';
            }
            str += '</span></span>';
            $('.solution-nav.d4cNav .sub-nav dd[data-magellan-arrival="reviews"] > a > span').html(str);
        }
    };

    const changeOverviewSection = () => {

        $('#overview-section').removeClass('section2').addClass('ds-p-t-xxl');
        const changeOverviewItem = (elem, data) => {
            const currentProduct = currentProductStorage.getProduct();
            if(currentProduct && currentProduct.translation && currentProduct.translation[currentProduct.productName]) {
                data = data.replace(currentProduct.productName, currentProduct.translation[currentProduct.productName]);
            }
            let paragraph = document.createElement("p");
            $(paragraph).text(data).addClass('ds-body ds-m-b-xl');
            elem.replaceWith(paragraph);
        };

        const changeFeaturesImages = (elem, ind) => {
            const currentProduct = currentProductStorage.getProduct();
            if(currentProduct.benefitsImg && currentProduct.benefitsImg.length && currentProduct.benefitsImg[ind] && $('#overview-section .tripIt-3colIcons').prev().length && $('#overview-section .tripIt-3colIcons').prev().find('img').length) {
                $(elem).prev().find('img').attr('src', currentProduct.benefitsImg[ind]);
            }
        };

        const changeQuoteStyles = () => {
            let quote = $('.tripIt-quoteText-h4').text(),
                author = $('.tripIt-quoteText-author'),
                authorCompany = $(author).text().split(',')[2],
                lastComma= $(author).text().lastIndexOf(',');

            //Delete styles for old quotes
            $('.tripIt-quote-hr').remove();

            addClassToElement('.tripIt-quoteContainer', 'ds-m-y-xxl');
            addClassToElement('.tripIt-quoteText-h4', 'ds-heading--l');
            addClassToElement('.tripIt-quoteText-author', 'ds-heading--s ds-m-t-m');

            //Delete unnecessary symbols from quote
            quote = quote.replace(/\]|[['"]/g, "");
            $('.tripIt-quoteText-h4').text(quote);

            if(author && $(author).text() && $(author).text().split(',').length > 2) {
                let authorFirstPart = $(author).text().split(',')[0];
                let authorSecondPart = $(author).text().split(',').slice(1);
                $('<p class="ds-heading--s font-book">'+ authorSecondPart.join(', ') +'</p>').insertAfter(author);
                $(author).text(authorFirstPart);
            } else {
                $(author).text($(author).text().slice(0,lastComma));
            }
        };

        let overviewItems = $('#overview-section .tripIt-3colIcons');
        let translatedText = 'Benefits and Features';
        const currentProduct = currentProductStorage.getProduct();
        if(currentProduct && currentProduct.translation && currentProduct.translation[translatedText]) {
            translatedText = currentProduct.translation[translatedText];
        }
        $('#overview-section h1').html(translatedText);
        $('#overview-section .tripIt-3colIcons-h3').addClass('ds-heading--s ds-m-y-m');

        [].forEach.call(overviewItems,(element, ind) => {
            let childElem = element.childNodes[2],
                childElemText = childElem.data;
            changeFeaturesImages(element, ind);
            changeOverviewItem(childElem, childElemText);
        });

        addLine('#overview-section .row', 'ds-m-b-xl');
        changeQuoteStyles();
        // addLine('#overview-section');
        $('#overview-section > h1.tripIt-h1-center').removeClass('ds-m-y-l').addClass('ds-m-b-xl');
    };


    const changeFeaturesSection = () => {
        let translationProduct = currentProductStorage.getProduct();
        $('#features-section .right-image-large, #features-section .left-image-large').addClass('ds-m-y-none ds-m-t-xxl');
        $('#features-section .section-headline').remove();
        if($('#overview-section > .tripIt-quoteContainer').length) {
            if(translationProduct && translationProduct.translation) {
                $('#overview-section > .tripIt-quoteContainer').hide();
            } else {
                $('#features-section').addClass('ds-flexGrid ds-p-none').prepend('<div class="line ds-m-b-xxl"></div>');
            }
        } else {
            $('#features-section').addClass('ds-flexGrid ds-p-none');
        }
        let isFeaturesText = $('#features-section .feature-content').length === 1 && $('#features-section .feature-content').hasClass('large-8 medium-8');
        addClassToElement('#features-section .pdp-link', 'ds-button ds-button--secondary');
        addClassToElement('#features-section .hero-headline', 'ds-heading--l ds-m-t-l');
        addClassToElement('#features-section .paragraph-text', 'ds-heading--m font-book ds-m-y-m');
        if(isFeaturesText) {
            $('#features-section .feature-content .tripIt-features-panel-right .paragraph-text').removeClass('ds-heading--m font-book ds-m-y-m');
            $('#features-section .feature-content .tripIt-features-panel-right > .paragraph-text, #features-section .feature-content .tripIt-features-panel-right > strong').addClass('ds-m-t-l ds-m-b-xs');
        }


        $('#features-section .tripIt-subtitle').addClass('ds-heading--s ds-featured-subtitle').removeClass('tripIt-subtitle');

        if(translationProduct && translationProduct.translation && translationProduct.translation["Key Features"]) {
            $('a[href="#features-section"] span').text(translationProduct.translation["Key Features"]);
        }
        addSplitter('#features-section');
    };

    const changeResourcesSection = () => {
        const PRODUCT_SUPPORT_TEMPLATE = '<div class="product-support ds-flexGrid"><div class="ds-flexRow ds-m-y-xxl product-support-block"></div></div>';
        // const VIDEO_TITLE = $('.training-title-cont')[0].innerText,
        //       VIDEO_DESCRIPTION = $('.training-video-title .paragraph-text')[0].innerText,
        //       VIDEO_LINK = $('.mediaLink')[0].attributes[0].nodeValue;

        const PRODUCTS_SUPPORT = $('.ng-product-support-section .row .support-container-div');
        let translationProduct = currentProductStorage.getProduct();
        $(PRODUCT_SUPPORT_TEMPLATE).insertAfter('.row.tripIt-features-topSpace.homepage-case-study');
        $('.support-subtitle').addClass('ds-body');
        $('.training-title-cont').addClass('ds-heading--xs ds-m-t-m grey');
        if(translationProduct && translationProduct && translationProduct.translation && translationProduct.translation[translationProduct.productName]) {
            let trainingTitle = $('.training-title-cont').text();
            trainingTitle = trainingTitle.replace(translationProduct.productName, translationProduct.translation[translationProduct.productName]);
            $('.training-title-cont').text(trainingTitle);
        }
        $('.paragraph-text').addClass('ds-heading--s ds-m-t-xs');
        let isFeaturesText = $('#features-section .feature-content').length === 1 && $('#features-section .feature-content').hasClass('large-8 medium-8');
        if(isFeaturesText) {
            $('#features-section .feature-content .tripIt-features-panel-right .paragraph-text').removeClass('ds-heading--s ds-m-t-xs');
        }

        Array.prototype.forEach.call($('.support-subtitle'), (item, i) => {
            let template,
                productDescription = $('.ng-product-support-section .row .support-container-div p')[i] &&
                $('.ng-product-support-section .row .support-container-div p')[i].childNodes &&
                $('.ng-product-support-section .row .support-container-div p')[i].childNodes[2] &&
                $('.ng-product-support-section .row .support-container-div p')[i].childNodes[2].data ? $('.ng-product-support-section .row .support-container-div p')[i].childNodes[2].data : '',
                imgLink = $('.support-container-div img')[i].currentSrc,
                link = $('.support-container-div a')[i].href;

            template = '<div class="ds-flexCol-lg-4 ds-flexCol-xl-4 ds-flexCol-md-6 ds-flexCol-sm-6 ds-flexCol-xs-6">' +
                '<a href="' + link + '" class="link-to-resource ds-m-b-l" target="blank">' +
                '<img src="' + imgLink + '">' +
                '<div class="ds-m-l-m">' +
                '<div class="ds-link ds-heading--s ds-m-b-s">' + item.innerText + '</div>' +
                '<p class="ds-body">' + productDescription + '</p>' +
                '</div>' +
                '</a>' +
                '</div>';
            $('.product-support .ds-flexRow').append(template);
        });

        $('.training-time, .support-section').remove();
        $('#resources-section').addClass('ds-flexGrid ds-p-t-xxl text-center').parent('section').removeClass('section4');
        $('#resources-section').find('.tripIt-features-topSpace.homepage-case-study').removeClass('row');
        $('#resources-section').find('.tripIt-extra-videos').removeClass('large-4 medium-6 small-12 columns').addClass('ds-flexRow')
            .find('>a>span.modal-link-title').addClass('text-left ds-p-b-xxs ds-p-l-m');
        let resourcesLength = $('#resources-section').find('.resource-training-links').length;
        let resourcesOffsetClass = '';
        if(resourcesLength === 1) {
            resourcesOffsetClass = 'ds-col-lg-offset-4 ds-col-md-offset-3';
        } else if(resourcesLength === 2) {
            resourcesOffsetClass = 'ds-col-lg-offset-2';
        }
        $('#resources-section').find('.resource-training-links').addClass('ds-flexCol-lg-4 ds-flexCol-md-6 ds-m-b-l');
        $('#resources-section').find('.resource-training-links:first').addClass(resourcesOffsetClass);
        $('#resources-section').find('.resource-training-links a.pdf-mobile-link').remove();


        if(translationProduct && translationProduct.translation && translationProduct.translation["Resources"]) {
            $('a[href="#resources-section"] span').text(translationProduct.translation["Resources"]);
        }
        addSplitter('#resources-section');
    };

    const changeFooter = () => {
        const COOKIE_BUTTON = $('#teconsent');

        let footerTemplate = `<footer class="ds-p-t-l ds-p-x-xl">
            <div class="ds-flexGrid footer">
                <nav class="ds-flexRow ds-p-b-m">
                    <ul class="footer-list">
                        <li class="footer-list__item ds-m-r-m ds-m-t-m"><a href="https://www.sapstore.com/faqs" target="blank">Help</a></li>
                        <li class="footer-list__item ds-m-r-m ds-m-t-m"><a href="https://www.sapstore.com/search/sitemappage" target="blank">Sitemap</a></li>
                        <li class="footer-list__item ds-m-r-m ds-m-t-m"><a href="https://www.sapstore.com/privacy" target="blank">Privacy</a></li>
                        <li class="footer-list__item ds-m-r-m ds-m-t-m"><a href="https://www.sapstore.com/terms-of-use" target="blank">Terms of Use</a></li>
                        <li class="footer-list__item ds-m-r-m ds-m-t-m"><a href="https://www.sap.com/corporate/en/legal/impressum.html" target="blank">Legal Disclosure</a></li>
                        <li class="footer-list__item ds-m-r-m ds-m-t-m"><a href="https://www.sap.com/corporate/en/legal/copyright.html" target="blank">Copyright</a></li>
                        <li class="footer-list__item ds-m-r-m ds-m-t-m"></li>
                    </ul>  
                </nav>
                <div class="ds-flexRow ds-p-y-m social-networks">
                    <div class="logo-container">
                        <a href="https://www.sap.com/index.html">
                            <img src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg" alt="SAP" style="display: block;">
                        </a>
                    </div>
                    <div>
                        <div class="social-networks__headline">Find us on</div>
                        <ul class="social-networks__list">
                            <li class="share social-networks__item"><a href="https://www.facebook.com/SAPDigital/" class="social-networks__link" target="blank"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-facebook.svg" class="social-networks__icon" alt="Facebook" style="display: block;"></a></li>
                            <li class="share social-networks__item"><a href="https://twitter.com/SAPDigital" class="social-networks__link" target="blank"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-twitter.svg" class="social-networks__icon" alt="Twitter" style="display: block;"></a></li>
                            <li class="share social-networks__item"><a href="https://www.youtube.com/channel/UCsM7QyvCHjF7jQ9L_nAjZpQ" class="social-networks__link" target="blank"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-youtube.svg" class="social-networks__icon" alt="YouTube" style="display: block;"></a></li>
                            <li class="share social-networks__item"><a href="https://www.linkedin.com/groups/4153957/" class="social-networks__link" target="blank"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-linked-in.svg" class="social-networks__icon" alt="LinkedIn" style="display: block;"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>`;

        if($('#page').hasClass('ngProduct')) {
            $(footerTemplate).insertAfter('.footer.ngProduct');
            $('.footer-list .footer-list__item:last-child').append(COOKIE_BUTTON);
            $('.footer.ngProduct').remove();
        } else {
            if($('footer.footer.home').length) {
                $('footer.footer.home').replaceWith(footerTemplate);
            } else {
                $(footerTemplate).insertAfter('.footer.product');
            }

            $('.footer-list .footer-list__item:last-child').append(COOKIE_BUTTON);
            $('.footer.product').remove();
        }
    };

    const addBanner = () => {
        $(`<style>
        .green-banner {
            color: white;
        }
        .green-banner img {
            width: 3.25rem;
        }
        .green-banner-message {
            display: inline-block;
            vertical-align: top;
        }
        .green-banner-mobile {
            display: none;
        }
        .solution-nav.d4cNav[data-magellan-expedition-clone] + .solution-nav.d4cNav[data-magellan-expedition="fixed"] > .green-banner {
            display: none;
        }
        @media (max-width: 48rem) {
            .green-banner {
                display: none;
            }
            .green-banner-mobile {
                display: flex;
                margin-top: 75px;
                width: 100%;
                justify-content: center;
                align-items: center;
            }
            #solution-nav.solution-nav.d4cNav.green-banner-parent {
                height: calc(140px + 1.5rem) !important;
                margin-top: 135px;
            }
            section.section1 {
                height: 1250px;
            }
            .green-banner-message {
                vertical-align: unset;
            }
        }
</style>`).appendTo('head');
        let bannerHtml = '<div class="green-banner ds-green--dark text-center ds-p-y-m">' +
            '<img class="ds-m-r-xs" src="/medias/Hands-planting.svg?context=bWFzdGVyfGltYWdlc3w0ODEzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwZS9oZjQvMTMyMzcxNDIzMjMyMzAuc3ZnfGE2NWY2NjRhMjllYzI5ZGQxOTAxNTI5M2YxYTk2MzE1MzYwNTliZTJiMmI4Yjk1YjQ5ODJlYjI2MDc1MzdkZTI" alt="Hands planting image"/>' +
            '<div class="green-banner-message">When you buy this solution, you will make an impact in your business and beyond. For each<br> purchase made on SAP Store, we will plant a tree on your behalf.</div></div>';
        let bannerMobileHtml = '<div class="green-banner green-banner-mobile ds-green--dark text-center ds-p-y-m">' +
            '<img class="ds-m-r-xs" src="/medias/Hands-planting.svg?context=bWFzdGVyfGltYWdlc3w0ODEzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gwZS9oZjQvMTMyMzcxNDIzMjMyMzAuc3ZnfGE2NWY2NjRhMjllYzI5ZGQxOTAxNTI5M2YxYTk2MzE1MzYwNTliZTJiMmI4Yjk1YjQ5ODJlYjI2MDc1MzdkZTI" alt="Hands planting image"/>' +
            '<div class="green-banner-message">For each purchase made on SAP Store, we will plant a tree on your behalf.</div></div>';
        $('#solution-nav.d4cNav').addClass('green-banner-parent').prepend(bannerHtml).append(bannerMobileHtml).css('height', 'calc(150px + 1.5rem) !important');
    }

    const updateLicensingSection = () => {
        let translationProduct = currentProductStorage.getProduct();
        let titleText = !(translationProduct && translationProduct.plansBulled) ? $('#licensing-section .tripIt-lrgmed .tripIt-row .tripIt-resource-text-1 > p:first > strong').text() : false;
        let plansTitle = "Plans and Pricing";
        if(translationProduct && translationProduct.translation && translationProduct.translation[plansTitle]) {
            plansTitle = translationProduct.translation[plansTitle];
        }
        console.log(555, plansTitle);
        $('#licensing-edition-section').removeClass('section').addClass('ds-p-t-xxl');
        $('#licensing-section > div > h1.tripIt-features-h1').addClass('ds-m-b-xxl').text(plansTitle).removeClass('ds-heading--l ds-m-y-l');
        $('#solution-nav .sub-nav dd[data-magellan-arrival="edition"] a span').text(plansTitle);
        if(titleText) {
            $('#licensing-section > div > .row').addClass('ds-flexRow ds-m-b-xl').prepend('<div class="ds-heading--s ds-flexCol-12 text-center ds-m-b-l"><div class="ds-black ds-box-center">' + titleText + '</div></div>').removeClass('row').wrap('<div class="ds-flexGrid"></div>');
        } else {
            $('#licensing-section > div > .row').addClass('ds-flexRow ds-m-b-xl').removeClass('row').wrap('<div class="ds-flexGrid"></div>');
        }
        $('#licensing-section .hcp-leftcol > p').remove();
        $('#licensing-section .hcp-leftcol').removeClass('large-4 medium-6 columns').addClass('ds-flexCol-xl-4 ds-flexCol-lg-5 ds-flexCol-md-6 ds-flexCol-sm-6 ds-flexCol-xs-6 ds-flexOffset-lg-1 ds-flexOffset-xl-2 grey-1 price-item text-center');
        $('#licensing-section .tripIt-lrgmed').removeClass('large-8 medium-6 columns').addClass('ds-flexCol-xl-4 ds-flexCol-lg-5 ds-flexCol-md-6 ds-flexCol-sm-6 ds-flexCol-xs-6 grey-1 price-item');
        $('#licensing-section .tripIt-lrgmed .tripIt-row').removeClass('row');
        $('#licensing-section .tripIt-lrgmed .tripIt-row > .row').addClass('ds-right-container').removeClass('.row');
        if($('#licensing-section .ds-right-container .tripIt-actionContent.tripIt-resource-text-2 > table').length) {
            $('#licensing-section .ds-right-container .tripIt-actionContent.tripIt-resource-text-2')
                .removeClass('large-6 small-12 columns')
                .find('>table').css('width', 'auto');
        } else {
            $('#licensing-section .ds-right-container .tripIt-actionContent.tripIt-resource-text-2').remove();
        }

        $('#licensing-section .ds-right-container .tripIt-resource-text-1').removeClass('large-6 small-12 columns');
        $('#licensing-section .ds-right-container .tripIt-resource-text-1').replaceWith('<ul class="tripIt-resource-text-1 ds-list ds-m-l-m ds-m-r-l">' + $('#licensing-section .ds-right-container .tripIt-resource-text-1').html() + '</ul>');
        if(titleText) {
            $('#licensing-section .ds-right-container .tripIt-resource-text-1 > p:first').remove();
        }
        $('#licensing-section .ds-right-container .tripIt-resource-text-1 > p, #licensing-section .ds-right-container .tripIt-resource-text-1 > ul > li').each(function() {
            let content = $(this).text().trim();
            if(content) {
                if($(this).prev().is('ul')) {
                    $(this).addClass('ds-m-b-m ds-black ds-body');
                } else {
                    let className = 'ds-list__item ds-icon__item ds-icon ds-icon--checked';
                    if(translationProduct && translationProduct.plansBulled && $(this).text().trim() === $(this).find('>strong').text().trim()) {
                        if($(this).index()) {
                            className = 'ds-list__item ds-icon__item ds-icon non-checked-item ds-m-t-xl';
                        } else {
                            className = 'ds-list__item ds-icon__item ds-icon non-checked-item';
                        }
                        $(this).addClass('ds-item__label--normal ds-black ds-body').wrap('<li class="' + className + '"></li>');
                    } else {
                        $(this).addClass('ds-item__label--normal ds-m-b-m ds-black ds-body').wrap('<li class="' + className + '"></li>');
                    }

                }
            } else {
                $(this).remove();
            }
        });

        if(translationProduct && translationProduct.plansBulled) {
            $('#licensing-section .ds-right-container .tripIt-resource-text-1 li.non-checked-item').next().removeClass('ds-icon--checked');
        }

        $('#licensing-section .product-options .buySection > form > a.button').addClass('ds-button ds-button--secondary').removeClass('expand ds-button--secondary-white');

        if($('#licensing-section .product-options > .button.tripIt-button').length || $('#licensing-section .product-options a[data-reveal-id=purchaseContactUsModal]').length || $('#edition-section .product-options a[data-reveal-id=purchaseContactUsModal]').length) {
            $('#licensing-section .product-options > .button.tripIt-button, #licensing-section .product-options a[data-reveal-id=purchaseContactUsModal], #edition-section .product-options a[data-reveal-id=purchaseContactUsModal]').addClass('ds-button ds-button--primary');
        }

        $('#licensing-section .product-options > a.button.gold').each(function(e) {
            // $(this).addClass('ds-button ds-button--primary ds-m-b-s ds-m-t-l').text('Try It Free');
            $(this).addClass('ds-button ds-button--primary ds-m-b-s ds-m-t-l');
            $(this).parent().prepend($(this).detach());
        });

        $('#licensing-section .product-options #buySection > .add_to_cart_form > a.button.expand').each(function(e) {
            let btnText = 'Buy Now';
            if(translationProduct && translationProduct.translation && translationProduct.translation[btnText]) {
                btnText = translationProduct.translation[btnText];
            }
            $(this).addClass('ds-button ds-button--secondary-white ds-m-t-s ds-m-b-s').text(btnText);
            // if($('#edition-section').length) {
            //     $('#licensing-section .ds-right-container').append($(this).parent('#licensing-section .product-options #buySection > .add_to_cart_form').detach());
            // }
        });
        $('#licensing-section .hcp-leftcol > h1:first-of-type .through-price').remove();
        if(translationProduct && translationProduct.stickedPrice) {
            let fromText = $('#licensing-section').find('.hcp-leftcol > h4:first-of-type').text().trim();
            let priceText = $('#licensing-section').find('.hcp-leftcol > h1:first-of-type').text().trim();
            $('#licensing-section').find('.hcp-leftcol > h4:first-of-type').hide();
            $('#licensing-section').find('.hcp-leftcol > h1:first-of-type').addClass('ds-heading--xl ds-gold-text ds-medium-text')
                .removeClass('ds-heading--l ds-m-y-l').text(translationProduct.stickedTitle)
                .after('<p class="ds-body ds-stroked-text">' + fromText + ' ' + priceText + '</p>');
            $('#licensing-section .product-options .buySection > form > a.button.ds-button.ds-button--secondary').addClass('ds-m-y-s')

        } else {
            $('#licensing-section .hcp-leftcol > h4:first-of-type').addClass('ds-body--l ds-gold-text');
            $('#licensing-section .hcp-leftcol > h1:first-of-type').addClass('ds-heading--xl ds-gold-text ds-medium-text').removeClass('ds-heading--l ds-m-y-l');
        }

        $('#licensing-section .hcp-leftcol > .ng-licensing-head-btm').addClass('ds-body ds-grey-3 ds-m-t-m');
        if(translationProduct && translationProduct.translation && translationProduct.translation["month"]) {
            $('#licensing-section .hcp-leftcol > .ng-licensing-head-btm').each((ind, el) => {
                if($(el).text().indexOf('month') >= 0) {
                    let currentText = $(el).text().trim();
                    currentText = currentText.replace('month', translationProduct.translation["month"]);
                    $(el).text(currentText);
                }
            })
        }
        $('#licensing-section .hcp-leftcol > .duration-cont *').addClass('ds-body ds-black');
        $('#licensing-section .hcp-leftcol > #taxInfo > .tax-info').addClass('ds-body ds-grey-3');
        // $('#licensing-section .ng-licensing-terms-button').hide();
        $('#licensing-section .ng-licensing-terms-button').addClass('ds-m-t-l');
        $('#licensing-section').append('<div class="splitter"></div>');
        $('#solution-nav.d4cNav > .row').addClass('ds-p-x-m');
        /*if(!$('#edition-section').length) {
            $('#licensing-section .hcp-leftcol > section:first').before($('#licensing-section .tripIt-lrgmed .tripIt-row > .ds-right-container'));
        }*/
        addBanner();
    };

    const updateEditionsSection = () => {
        let translationProduct = currentProductStorage.getProduct();
        let plansTitle = "Plans and Pricing";
        if(translationProduct && translationProduct.translation && translationProduct.translation[plansTitle]) {
            plansTitle = translationProduct.translation[plansTitle];
        }
        if(!$('#edition-section').length || !$('#comparing-edition-section').length) {return;}
        $('#comparing-edition-section').addClass('ds-p-none ds-p-t-xxl').removeClass('choose-edition-section');
        $('#edition-section').addClass('ds-flexGrid ds-m-b-xl');
        $('#edition-section > h1.hcp-choose-edition-h1').text(plansTitle).addClass('ds-heading--l ds-flexRow');
        $('#edition-section > .hcp-choose-edition-h4wrap').addClass('ds-flexRow');
        $('#edition-section > .hcp-choose-edition-h4').addClass('ds-m-b-xl');
        $('div.hcp-choose-edition-row1').each((ind, el) => {
            $(el).removeClass('row').addClass('ds-flexRow ds-m-b-xxl');
            $(el).find('>.hcp-leftcol').removeClass('large-4 medium-6 columns zero-padding').addClass('ds-flexCol-xl-4 ds-flexCol-lg-5 ds-flexCol-md-6 ds-flexCol-sm-6 ds-flexCol-xs-6 ds-flexOffset-lg-1 ds-flexOffset-xl-2 grey-1 price-item text-center');
            $(el).find('>.tripIt-lrgmed').removeClass('large-8 medium-6 columns zero-padding').addClass('ds-flexCol-xl-4 ds-flexCol-lg-5 ds-flexCol-md-6 ds-flexCol-sm-6 ds-flexCol-xs-6 grey-1 price-item');
            let titleContent = $(el).find('>.tripIt-lrgmed .columns p strong').text();
            if(translationProduct && translationProduct.translation && translationProduct.translation[translationProduct.productName]) {
                titleContent = titleContent.replace(translationProduct.productName, translationProduct.translation[translationProduct.productName]);
                $(el).find('>.tripIt-lrgmed .columns p strong').text(titleContent);
            }
            $(el).find('>.tripIt-lrgmed .columns p strong').addClass('ds-heading--m').parent().addClass('ds-p-b-m ds-m-b-m plan-item');
            $(el).find('>.tripIt-lrgmed .tripIt-row .large-6.small-12.columns').removeClass('large-6 small-12 columns')
        });
        $('div.hcp-choose-edition-row1').last().removeClass('ds-m-b-xxl').addClass('ds-m-b-m');
        $('#edition-section .product-options .buySection > form > a.button').addClass('ds-button ds-button--secondary');

        $('#edition-section .product-options > a.button.gold').each(function(e) {
            $(this).addClass('ds-button ds-button--primary ds-m-b-s ds-m-t-l').text('Try It Free');
            $(this).addClass('ds-button ds-button--primary ds-m-b-s ds-m-t-l');
            // $(this).parent().prepend($(this).detach());
        });

        $('#edition-section .product-options #buySection > .add_to_cart_form > a.button.expand').each(function(e) {
            let btnClass = translationProduct && translationProduct.stickedPrice ? 'ds-button--primary' : 'ds-button--secondary';
            let btnText = 'Buy Now';
            if(translationProduct && translationProduct.translation && translationProduct.translation[btnText]) {
                btnText = translationProduct.translation[btnText];
            }
            $(this).addClass('ds-button ds-m-t-s ds-m-b-s text-center ' + btnClass).removeClass('ds-button--secondary-white expand').text(btnText);
        });

        $('#edition-section .hcp-leftcol > h1:first-of-type .through-price').remove();
        if(translationProduct && translationProduct.stickedPrice) {
            $('#edition-section div.hcp-choose-edition-row1').each((ind, el) => {
                let fromText = $(el).find('.hcp-leftcol > h4:first-of-type').text().trim();
                let priceText = $(el).find('.hcp-leftcol > h1:first-of-type').text().trim();
                $(el).find('.hcp-leftcol > h4:first-of-type').hide();
                $(el).find('.hcp-leftcol > h1:first-of-type').addClass('ds-heading--xl ds-gold-text ds-medium-text')
                    .removeClass('ds-heading--l ds-m-y-l').text(translationProduct.stickedTitle)
                    .after('<p class="ds-body ds-stroked-text">' + fromText + ' ' + priceText + '</p>');

                /*if($(el).find('.tripIt-lrgmed .tripIt-resource-text-1 > p > a[href=""]').length) {
                    $(el).find('.tripIt-lrgmed .tripIt-resource-text-1 > p > a').addClass('ds-button ds-button--secondary')
                        .appendTo($(el).find('.hcp-leftcol'))
                }*/
            });

            $('#edition-section div.hcp-choose-edition-row1:first').find('.hcp-leftcol')
                .append('<a class="ds-button ds-button--secondary ds-m-b-s" target="_blank" href="https://www.litmos.com/cx-trial?utm_source=email&utm_medium=email&utm_campaign=DSTORE*">Try It Free</a>');
        } else {
            $('#edition-section .hcp-leftcol > h4:first-of-type').addClass('ds-body--l ds-gold-text');
            $('#edition-section .hcp-leftcol > h1:first-of-type').addClass('ds-heading--xl ds-gold-text ds-medium-text').removeClass('ds-heading--l ds-m-y-l');
        }

        if(translationProduct && translationProduct.manualTrial) {
            $('#edition-section div.hcp-choose-edition-row1:first').find('.hcp-leftcol')
                .append('<a class="ds-button ds-button--secondary ds-m-b-s" target="_blank" href="https://www.litmos.com/cx-trial?utm_source=email&utm_medium=email&utm_campaign=DSTORE*">Try It Free</a>');
        }

        $('#edition-section .hcp-leftcol > .ng-licensing-head-btm').addClass('ds-body ds-grey-3 ds-m-t-m');
        if(translationProduct && translationProduct.translation && translationProduct.translation["month"]) {
            $('#edition-section .hcp-leftcol > .ng-licensing-head-btm').each((ind, el) => {
                if($(el).text().indexOf('month') >= 0) {
                    let currentText = $(el).text().trim();
                    currentText = currentText.replace('month', translationProduct.translation["month"]);
                    $(el).text(currentText);
                }
            })
        }
        $('#edition-section .hcp-leftcol > .duration-cont *').addClass('ds-body ds-black');
        $('#edition-section .hcp-leftcol > .hcp-related-products').hide();
        $('#edition-section .hcp-leftcol > #taxInfo > .tax-info').addClass('ds-body ds-grey-3');
        $('#edition-section').append('<div class="splitter"></div>');
    };

    const updatePublisherSection = () => {
        $('.about-publisher-section').addClass('ds-flexGrid').append('<div class="splitter"></div>');
        $('.about-publisher-section > div').addClass('ds-flexRow');
        let translationProduct = currentProductStorage.getProduct();
        let publisherTitle = "Publisher";
        if(translationProduct && translationProduct.translation && translationProduct.translation["Publisher"]) {
            publisherTitle = translationProduct.translation["Publisher"];
        }
        $('.about-publisher-section > div > h1').text(publisherTitle).removeClass('ds-m-y-l').addClass('ds-m-t-xxl ds-m-b-xl ds-flexCol-12');
        $('.about-publisher-section > div > .row').removeClass('row').addClass('ds-flexCol-12 publisher-content');
        $('.about-publisher-section .about-publisher-row').removeClass('small-12 small-centered columns');
        if(translationProduct && translationProduct.translation && translationProduct.translation["PublisherContent"]) {
            $('.about-publisher-section .publisher-content .hcp-right-about').addClass('ds-flexCol-5 ds-body--l ds-grey-2 ds-m-b-xl').
            html('').prepend('<div class="ds-heading--m ds-black ds-m-b-s">SAP</div><div>' + translationProduct.translation["PublisherContent"] + '</div>');
        } else {
            $('.about-publisher-section .publisher-content .hcp-right-about').addClass('ds-flexCol-5 ds-body--l ds-grey-2 ds-m-b-xl').prepend('<div class="ds-heading--m ds-black ds-m-b-s">SAP</div>');
        }

        $('.title-mobile').hide();
    };

    const updateAnotherSections = () => {
        $('#preRequisites-section.prerequisites-section').addClass('ds-flexGrid');
        $('.d4cNavdd.hcp-navbut').hide();
    };



    let loadReviews = () => {

        let dataLayerArr = window.dataLayer;
        let productName = '';
        let productId = '';
        for (let layer of dataLayerArr) {
            if (layer.event === 'product-detail') {
                if (layer.ecommerce && layer.ecommerce.detail && layer.ecommerce.detail.products && layer.ecommerce.detail.products.length) {
                    let nameContainer = layer.ecommerce.detail.products[0];
                    productName = nameContainer['name'];
                    productId = nameContainer['id']
                }
            }
        }
        if (!productName) {
            $('.reviewsBlock, .ds-pagination').hide();
            return false;
        }
        let translationProduct = '';
        for (let product of PRODUCTS) {
            if (productName === product.name || product.productId === productId) {
                translationProduct = product;
            }
        }
        if (!translationProduct) {
            $('.reviewsBlock, .ds-pagination').hide();
            return false;
        }
        console.log('pagination starts', translationProduct);
        if (translationProduct.trust_radius_ID || translationProduct.g2_ID) {
            const TRUST_RADIUS_ID = translationProduct.trust_radius_ID || false,
                TRUST_RADIUS_URL = "https://www.trustradius.com/",
                G2_ID = translationProduct.g2_ID || false,
                G2_URL = 'https://data.g2crowd.com',
                API_TOKEN = 'b9ad9305f7fd63b90ec60c28a6d0e43c8508372a7c015202086606e8c73661b7';


            const trustUrl = TRUST_RADIUS_ID ? TRUST_RADIUS_URL + "api/v2/tqw/" + TRUST_RADIUS_ID : false;
            const g2Url = G2_ID ? G2_URL + '/api/2018-01-01/syndication/snippets?api_token=' + API_TOKEN + '&filter[product_id]=' + G2_ID : false;

            let ratings_container = $(".ds-filter__content");
            $('#first-accordion').trigger('click');

            let countHttp = function count() {
                var countItem = 0;
                return function () {
                    countItem++;
                    return countItem === 2;
                };
            }();

            if (trustUrl) {
                callTrustAPI(trustUrl);
            } else {
                countHttp();
            }
            if (g2Url) {
                callG2Url(g2Url);
            } else {
                countHttp();
            }



            function callG2Url(url) {
                $.get(url).then(function(result = {}) {
                    let data = result.data || [];

                    data.forEach(item => {
                        let text = item.attributes.content,
                            rating = item.attributes.review.star_rating,
                            link = item.attributes.review.url,
                            date = item.attributes.review.published_at,
                            title = item.attributes.review.title,
                            formattedDate;

                        if (date) {
                            formattedDate =
                                new Date(date).toLocaleDateString("en-GB", { month: "long" }) +
                                " " +
                                new Date(date).toLocaleDateString("en-GB", { day: "numeric" }) +
                                ", " +
                                new Date(date).toLocaleDateString("en-GB", { year: "numeric" });
                        }

                        addReview(title, text, rating, link, formattedDate, 'g2Crowd');
                    });

                    if(countHttp()) {
                        buildReviewsSection();
                    }
                });
            }

            function callTrustAPI(url) {
                $.get(url).then(function(result = {}) {
                    let data = result.data || [];
                    data.forEach(item => {
                        let text = item.quotes[0].text,
                            rating = item.quotes[0].rating / 2,
                            link =
                                "https://www.trustradius.com/reviews/" + item.quotes[0].review.slug,
                            date = item.quotes[0].review.editedDate,
                            title = item.quotes[0].review.heading,
                            formattedDate;

                        if (date) {
                            formattedDate =
                                new Date(date).toLocaleDateString("en-GB", { month: "long" }) +
                                " " +
                                new Date(date).toLocaleDateString("en-GB", { day: "numeric" }) +
                                ", " +
                                new Date(date).toLocaleDateString("en-GB", { year: "numeric" });
                        }

                        addReview(title, text, rating, link, formattedDate, 'TrustRadius');
                    });


                    if(countHttp()) {
                        buildReviewsSection();
                    }
                });
            }

            function addReview(title, text, rating, link, date, sourceName) {
                let formattedDate = date,
                    heading = title,
                    template;

                if (!date) {
                    formattedDate = "";
                }
                if (rating <= 3) {
                    heading = "";
                }

                template =
                    '<div class="ds-flexRow ds-filter__content-item"><div class="ds-flexCol-xl-4 ds-flexCol-lg-4 ds-flexCol-md-4 ds-flexCol-xs-12 ds-flexCol-sm-4"><div class="ds-heading--s stars"><div class="stars-container"><div class="stars-container__out"><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star-outline ds-m-r-xxs"></i></div><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star-outline ds-m-r-xxs"></i></div><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star-outline ds-m-r-xxs"></i></div><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star-outline ds-m-r-xxs"></i></div><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star-outline ds-m-r-xxs"></i></div><div class="stars-container__in" style="width:' +
                    rating * 20 +
                    '%"><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star color-gold ds-m-r-xxs"></i></div><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star color-gold ds-m-r-xxs"></i></div><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star color-gold ds-m-r-xxs"></i></div><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star color-gold ds-m-r-xxs"></i></div><div class="library-sap-com-icons"><i class="ds-icon ds-icon--large ds-icon--star color-gold ds-m-r-xxs"></i></div></div></div></div><p class="ds-body ds-m-y-s">' +
                    formattedDate +
                    '</p></div></div><div class="ds-flexCol-xl-8 ds-flexCol-lg-8 ds-flexCol-md-8 ds-flexCol-xs-12 ds-flexCol-sm-8"><p class="ds-heading--s ds-m-b-s">' +
                    heading +
                    '</p><p class="ds-body ds-m-b-s">' +
                    text +
                    '</p><a href="' +
                    link +
                    '" class="ds-link ds-m-b-l" target="blank">Read the full review on ' + sourceName + '</a></div></div>';
                ratings_container.append(template);
            }
        } else {
            $('.reviewsBlock, .ds-pagination').hide();
        }
    };


    const buildReviewsSection = () => {
        // $('#g2CrowdReviews').hide();

        let Pagination = (() => {
            let options = {
                currentPage: 1,
                itemsPerPage: 5,
                firstPageNumber: 1,
                lastPageNumber: Math.ceil(
                    $(".ds-filter__content-item").length / 2
                ),
                lastPageNumberWrapper: document.querySelector(
                    ".ds-pagination__page-counter__max"
                ),
                wrapper: document.querySelector(".ds-pagination"),
                contentWrapper: document.querySelector(".ds-filter__content"),
                contentList: [],
                navigationButtons: document.querySelectorAll(".ds-pagination button"),
                previousButtons: document.querySelectorAll(
                    ".ds-pagination__button-group--left button"
                ),
                nextButtons: document.querySelectorAll(
                    ".ds-pagination__button-group--right button"
                ),
                pageCounter: document.querySelector(".ds-pagination__page-counter input"),
                hiddenClass: "ds-pagination-hidden"
            };

            const init = () => {
                options.contentList = $(".ds-filter__content-item");
                console.log('pagiation is loading', options.contentList.length);
                if(options.contentList.length) {
                    rebuildPages(options.contentList);
                    addListeners();
                } else {
                    $('.ds-pagination').hide();
                }
            };

            const addListeners = () => {
                addButtonsListeners();
                addPageInputListener();
            };

            const addButtonsListeners = () => {
                options.navigationButtons.forEach(button => {
                    button.addEventListener("click", event => {
                        switch (event.target.closest("button").dataset["navigation"]) {
                            case "previous":
                                setPage(--options.currentPage);
                                break;
                            case "next":
                                setPage(++options.currentPage);
                                break;
                        }
                    });
                });
            };

            const addPageInputListener = () => {
                options.pageCounter.addEventListener("keyup", event => {
                    if (event.which === 13 || event.keyCode === 13) {
                        setPage(+event.target.value);
                    }
                });
            };

            const rebuildPages = content => {
                updateTotalPagesCount(content);
                mapContentToPage(content);
                setPage(options.currentPage);
            };

            const mapContentToPage = content => {
                let pagesIterator = options.itemsPerPage;
                for(let index = 0; index < content.length; index++) {
                    let contentItem = content[index];
                    if (pagesIterator <= index) {
                        ++pagesIterator;
                    }

                    contentItem.setAttribute(
                        "data-page",
                        Math.ceil(pagesIterator / options.itemsPerPage)
                    );
                }
            };

            const updateTotalPagesCount = content => {
                const pagesCount = Math.ceil(content.length / options.itemsPerPage) || 1;

                options.lastPageNumberWrapper.textContent = options.lastPageNumber = pagesCount;
                options.currentPage = options.firstPageNumber;
            };

            const updatePageBadge = pageNumber => {
                options.pageCounter.value = options.currentPage = pageNumber;
            };

            const setPage = pageNumber => {
                if (!isValidPageNumber(pageNumber)) {
                    updatePageBadge(options.currentPage);
                    return;
                }

                handleButtons(pageNumber);
                updatePageBadge(pageNumber);
                updateContent(pageNumber);
            };

            const isValidPageNumber = pageNumber => {
                let isValid = true;

                if (
                    pageNumber < options.firstPageNumber ||
                    pageNumber > options.lastPageNumber
                ) {
                    isValid = false;
                }

                return isValid;
            };

            const updateContent = pageNumber => {
                for(let index = 0; index < options.contentList.length; index++) {
                    let contentItem = options.contentList[index];
                    if (+contentItem.dataset["page"] !== pageNumber) {
                        contentItem.classList.add(options.hiddenClass);
                    } else {
                        contentItem.classList.remove(options.hiddenClass);
                    }
                }
            };

            const disableButtons = buttons => {
                enableButtons();

                buttons.forEach(button => {
                    button.disabled = true;
                });
            };

            const enableButtons = () => {
                options.navigationButtons.forEach(button => {
                    button.disabled = false;
                });
            };

            const handleButtons = pageNumber => {
                switch (pageNumber) {
                    case options.firstPageNumber:
                        disableButtons(options.previousButtons);
                        break;
                    case options.lastPageNumber:
                        disableButtons(options.nextButtons);
                        break;
                    default:
                        enableButtons();
                }

                if (
                    options.lastPageNumber === pageNumber &&
                    pageNumber === options.firstPageNumber
                ) {
                    disableButtons(options.navigationButtons);
                }
            };

            return {
                init: init,
                rebuild: rebuildPages
            };
        })();

        $(".ds-pagination__previous-button").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#all-reviews").offset().top - 100 + "px"
                },
                {
                    duration: 500,
                    easing: "swing"
                }
            );
            return false;
        });

        $(".ds-pagination__next-button").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#all-reviews").offset().top - 100 + "px"
                },
                {
                    duration: 500,
                    easing: "swing"
                }
            );
            return false;
        });

        Pagination.init();
        setReviews();
    };

    const updateReviewsSection = () => {
        if(!$('#reviewsSection').length) {return;}
        $('#reviewsSection').removeClass('review-section').addClass('ds-p-y-xxl ds-m-x-l ds-flexGrid');
        $('#reviewsSection > .section-headline').removeClass('ds-m-y-l').addClass('ds-m-none ds-p-none');
        $('#reviewsSection > .section-headline').after('<h3 class="reviews-subtitle ds-m-t-l ds-body--l ds-black ds-m-b-xl text-center">Read what our customers have to say about this project</h3>');
        $('#reviewsSection > .row').addClass('ds-flexRow').removeClass('row');
        $('#reviewsSection #g2crowd-d4c-star-barchart').addClass('ds-flexCol-xl-5 ds-flexCol-l-4 line ds-flexCol-md-7 ds-flexOffset-xl-2 ds-flexCol-xs-12 ds-p-b-xl progress-bar');
        $('#reviewsSection #g2CrowdReviewsModal').parent('.ds-flexRow').addClass('ds-flexCol-xl-4 line ds-flexCol-md-5 ds-p-b-xl write-review').removeClass('ds-flexRow').detach().appendTo("#reviewsSection > .ds-flexRow");
        $('#reviewsSection .write-review #reviewButton').removeClass('button').addClass('ds-button ds-button--primary ds-m-b-xl');
        $('#reviewsSection .d4c-leftreview-inner > a.button.pdp-link').removeClass('button').addClass('ds-button ds-button--primary ds-m-t-m');
        $('#reviewsSection .write-review').prepend('<p class="ds-body ds-m-b-l ds-black">Share your thoughts with other customers</p>');
        $('#reviewsSection #ratingElem .ng-inner .ng-histo-rate .ng-histo-star').addClass('ds-body ds-black').removeClass('ds-heading--s ds-m-t-xs');
        $('#reviewsSection #ratingElem .ng-inner .ng-bar span').addClass('ds-body');
        let totalReviews = $('.ngs-star-rating').text().trim().replace(/[(,)]/gi, '');
        if($('.ngs-star-rating').prop("classList")) {
            let classList = $('.ngs-star-rating').prop("classList").value.split(' ');
            let stars = 0;
            for (let item of classList) {
                if (~item.indexOf('stars')) {
                    stars = +item.replace(/[a-z]/gi, '');
                }
            }
            if (!stars) {
                stars = 0;
            }
            $('#reviewsSection .progress-bar').prepend('<p class="ds-body ds-m-b-m ds-black centered">' + stars.toFixed(1) + ' out of 5 stars (' + totalReviews + ' review)</p>');
        }
        $('#reviewsSection .ngs-star-rating').hide();
        let reviewsBlockHtml = `<div class="ds-flexRow reviewsBlock">
                    <div class="ds-flexCol-lg-12 ds-flexCol-xl-12 ds-flexCol-md-12 ds-flexCol-sm-12 ds-flexCol-xs-12 ds-filter__content">
                        <p id="all-reviews" class="ds-heading--m ds-m-t-xl ds-m-b-l">All User Reviews</p> 
                    </div>
                </div>`;
        $('#g2CrowdReviews').before(reviewsBlockHtml);

        /*$('#reviewsSection').append(`<div class="ds-pagination ds-m-t-xl">
            <div class="ds-pagination__grid">
                <div class="ds-pagination__button-group--left">
                    <button class="ds-pagination__previous-button" data-navigation="previous" disabled>
                        <i class="ds-icon--arrow-left ds-icon--big"></i>
                        <div class="ds-pagination__button-text">
                            Previous
                        </div>
                    </button>
                </div>
                <div class="ds-pagination__page-counter">
                    <div class="ds-pagination__page-counter__counter">1</div>
                    <input type="number" class="ds-input" value="1" min="1" max="5">
                    of&nbsp;<span class="ds-pagination__page-counter__max">5 </span>&nbsp;pages
                    <div class="ds-pagination__page-counter__suffix">
                        pages
                    </div>
                </div>
                <div class="ds-pagination__button-group--right">
                    <button class="ds-pagination__next-button" data-navigation="next">
                        <div class="ds-pagination__button-text">
                            Next
                        </div>
                        <i class="ds-icon--arrow-right ds-icon--big"></i>
                    </button>
                </div>
            </div>
        </div>`);*/
        // loadReviews();

    };

    const setListeners = () => {

        $('.section1.tripItBgAdjust .solution-nav > .row > .small-12 .sub-nav dd > a.ds-link').on('click touch', e => {
            if($('body').width() <= 1024) {
                $('.productName-coub-container .ds-icon-trigger .ds-icon--arrow-up').click();
            }
        });

        $(window).on('scroll resize', () => {
            let winTop = $(window).scrollTop();
            let sections = [];

            $('#solution-nav.solution-nav.d4cNav .sub-nav dd > a').each(function() {
                let id = $(this).attr('href').replace('#', '');
                let from = $('#' + id).offset() ? $('#' + id).offset().top - 120 : 0;
                if(!$('#' + id).length) {
                    $(this).parent('dd').attr('style', 'display: none !important');
                } else {
                    let ht = $('#' + id).height();
                    let menuHeight = $('header.header > .top-nav').height() || 0 + $('header.header > .section1 > .solution-nav').height() || 0;
                    if(ht) {
                        let allow = true;
                        for(let item of sections) {
                            if(item.id === id) {
                                allow = false;
                            }
                        }
                        if(allow) {
                            sections.push({
                                id,
                                from: from - menuHeight,
                                to: ht + from - menuHeight
                            });
                        }
                    }
                }
            });
            if(sections.length && winTop < sections[0].from && $('#solution-nav.solution-nav.d4cNav .sub-nav dd > a').hasClass('active')) {
                $('#solution-nav.solution-nav.d4cNav .sub-nav dd > a').removeClass('active');
            }
            if(sections.length) {
                for(let section of sections) {
                    if(winTop >= section.from && winTop <= section.to) {
                        if(!$('#solution-nav.solution-nav.d4cNav .sub-nav dd > a[href=#' + section.id + ']').hasClass('active')) {
                            $('#solution-nav.solution-nav.d4cNav .sub-nav dd > a').removeClass('active');
                            $('#solution-nav.solution-nav.d4cNav .sub-nav dd > a[href=#' + section.id + ']').addClass('active');
                        }
                    }
                }
            }
        });

        $('.hero-section .buttons-container a[href^="#"]').on('click', e => {
            e.preventDefault();
            let href = $(e.currentTarget).attr('href');
            if($(href).length) {
                let top = $(href).offset().top;
                e.preventDefault();
                $("html, body").animate(
                    {
                        scrollTop: top - 120 + "px"
                    },
                    {
                        duration: 500,
                        easing: "swing"
                    }
                );
            }
        });

        if($(window).width() < 640) {
            if($('#page > .inner-wrap > section').length) {
                $('#page > .inner-wrap > section').each((ind, section) => {
                    if(!$(section).is(':visible')) {
                        $(section).show();
                    }
                })
            }
        }
        let translationProduct = currentProductStorage.getProduct();
        if(translationProduct && translationProduct.translation) {
            const handleEditionMode = e => {
                if($(e.currentTarget).prev().is('.editions-actionContent')) {
                    if($(e.currentTarget).prev().is('.editions-actionContent:hidden')) {
                        $(e.currentTarget).prev().show();
                        $(e.currentTarget).find('span').text(translationProduct.translation['Show Less']);
                    } else {
                        $(e.currentTarget).prev().hide();
                        $(e.currentTarget).find('span').text(translationProduct.translation['More about the edition']);
                    }
                }
            };
            $('#edition-section .editions-actionButton').off('click touch');
            $('#edition-section .editions-actionButton').on('click touch', e => { handleEditionMode(e) });
            $('#edition-section .editions-actionButton span').each((ind, el) => {
                if(translationProduct && translationProduct.translation[$(el).text()]) {
                    $(el).text(translationProduct && translationProduct.translation[$(el).text()]);
                }
            })
            if(translationProduct.translation['Contact Us']) {
                $('.contact-module > .mobile-btn > em, #chatContainer.popup .contact > #contactUsPopup > span.h-text').text(translationProduct.translation['Contact Us']);
                $('#chatContainer.popup .contact > #contactUsPopup > p').text(translationProduct.translation['ContactDescription']);
            }
        }

    };

    changeHeader();
    if($('#page').hasClass('ngProduct')) {
        console.log('way 2');
        console.log('go!');
        changeCommonSection();
        changeHeroSection();
        $('.page-loader').remove();
        changeNavigationView();
        changeOverviewSection();
        changeFeaturesSection();
        changeResourcesSection();
        updateLicensingSection();
        updateEditionsSection();
        updatePublisherSection();
        updateAnotherSections();

        if($('#reviewsSection .spinner').length && $('#reviewsSection .spinner').is(':visible')) {
            let interval = setInterval(() => {
                if($('#reviewsSection .spinner').is(':not(:visible)')) {
                    updateReviewsSection();
                    clearInterval(interval);
                }
            }, 500);
            setTimeout(() => {
                $('.d4cNavdd.hcp-navbut').hide();
                clearInterval(interval);
            }, 5000);
        } else {
            updateReviewsSection();
        }

        setListeners();
        $(window).trigger('resize');
    } else {
        console.log('way 1');
    }

    changeFooter();

    if(!$('#page').hasClass('ngProduct')) {
        $(window).on('scroll resize', () => {
            if ($('aside.solution-sidebar > #solutionSidebar').css('position') === 'absolute' && $(window).scrollTop() + $(window).height() > $(document).height() - $('footer').height()) {
                $('aside.solution-sidebar > #solutionSidebar').addClass('absoluted');
                $('aside.solution-sidebar > #solutionSidebar').removeClass('sidebar-fixed');
            } else if ($('aside.solution-sidebar > #solutionSidebar').css('position') === 'fixed') {
                $('aside.solution-sidebar > #solutionSidebar').removeClass('absoluted');
                $('aside.solution-sidebar > #solutionSidebar').addClass('sidebar-fixed');
            } else {
                $('aside.solution-sidebar > #solutionSidebar').removeClass('absoluted sidebar-fixed');
            }
        });
    }

    $('.page-loader').remove();
    const timeToRemoveLoader = 7000;
    setTimeout(() => {
        $('.page-loader').remove();
    }, timeToRemoveLoader);

};

$(document).ready(onloadFunction);
window.onload = function() {
    if(!window.isRedesignProcessed) {
        onloadFunction();
    }
};