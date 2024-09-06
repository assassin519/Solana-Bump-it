/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkMode: `var(--darkMode)`,
        bgColor: `var(--bgColor)`,
        textColor: `var(--textColor)`,
        textWhiteColor: `var(--textWhiteColor)`,
        textRvWhiteColor: `var(--textRvWhiteColor)`,
        cardBg: `var(--cardBg)`,
        cardHoverBg: `var(--cardHoverBg)`,
        selectBtnBg: `var(--selectBtnBg)`,
        selectBlackBtnBg: `var(--selectBlackBtnBg)`,
        yesBg: `var(--yesBg)`,
        yesHoverBg: `var(--yesHoverBg)`,
        yesBtnText: `var(--yesBtnText)`,
        noBg: `var(--noBg)`,
        noHoverBg: `var(--noHoverBg)`,
        noBtnText: `var(--noBtnText)`,

        btnColor: `var(--btnColor)`,
        btnHoverColor: `var(--btnHoverColor)`,
        selBtnHoverColor: `var(--selBtnHoverColor)`,
        selBtnHoverTextColor: `var(--selBtnHoverTextColor)`,

        searchHover: `var(--searchHover)`,

        footerBg: `var(--footerBg)`
        
      },
    },
  },
  plugins: [],
};
