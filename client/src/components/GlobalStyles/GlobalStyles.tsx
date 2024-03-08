import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /*
        =========
        CSS RESET
        =========
    */

    /*
        1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
        box-sizing: border-box;
    }
    /*
        2. Remove default margin
    */
    * {
        margin: 0;
    }
    /*
        Typographic tweaks!
        3. Add accessible line-height
        4. Improve text rendering
    */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
    /*
        5. Improve media defaults
    */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    /*
        6. Remove built-in form typography styles
    */
    input, button, textarea, select {
        font: inherit;
    }
    /*
        7. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    /*
        8. Create a root stacking context
    */
    #root {
        isolation: isolate;
    }

    /*
        =============
        GLOBAL STYLES
        =============
    */

    html {
        --color-background: hsl(0deg 100% 100%);
        --color-headline: hsl(215deg 100% 15%);
        --color-text: hsl(215deg 45% 20%);
        --color-primary: hsl(170deg 100% 45%);
        --color-secondary: hsl(350deg 100% 65%);
        --color-tertiary: hsl(50deg 100% 65%);
    }

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    body {
        background-color: var(--color-background);
        color: var(--color-text);
        font-family: 'Noto Sans', sans-serif;
        font-optical-sizing: auto;
    }
`;

export default GlobalStyles;
