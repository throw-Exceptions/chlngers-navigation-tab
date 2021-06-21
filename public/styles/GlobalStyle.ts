export const globalStyle = `
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }


    input[type="color"],
    input[type="date"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="email"],
    input[type="month"],
    input[type="number"],
    input[type="password"],
    input[type="search"],
    input[type="tel"],
    input[type="text"],
    input[type="time"],
    input[type="url"],
    input[type="week"],
    select:focus,
    textarea {
        font-size: 16px;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a, a:link, a:visited, a:focus, a:hover, a:active {
        text-decoration: none; 
    }

    @font-face {
        font-family: Spoqa Han Sans;
        font-weight: 700;
        src: url('/fonts/Spoqa Han Sans Neo Bold.woff2') format('woff2');
    }

    @font-face {
        font-family: Spoqa Han Sans;
        font-weight: 600;
        src: url('/fonts/Spoqa Han Sans Neo Medium.woff2') format('woff2');
    }

    @font-face {
        font-family: Spoqa Han Sans;
        font-weight: 500;
        src: url('/fonts/Spoqa Han Sans Neo Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: Spoqa Han Sans;
        font-weight: 400;
        src: url('/fonts/Spoqa Han Sans Neo Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: Spoqa Han Sans;
        font-weight: 300;
        src: url('/fonts/Spoqa Han Sans Neo Light.woff2') format('woff2');
    }

    @font-face {
        font-family: Noto Sans KR;
        font-weight: 700;
        src: url('/fonts/NotoSansKR-Black.otf') format('otf');
    }

    @font-face {
        font-family: Noto Sans KR;
        font-weight: 600;
        src: url('/fonts/NotoSansKR-Bold.otf') format('otf');
    }

    @font-face {
        font-family: Noto Sans KR;
        font-weight: 500;
        src: url('/fonts/NotoSansKR-Medium.otf') format('otf');
    }

    @font-face {
        font-family: Noto Sans KR;
        font-weight: 400;
        src: url('/fonts/NotoSansKR-Regular.otf') format('otf');
    }

    * {
        box-sizing: border-box;
        font-family:  Noto Sans KR, Spoqa Han Sans !important;
    }

    a {
        -webkit-tap-highlight-color: transparent;
    }
`;
