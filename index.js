const foregroundColor = "#ffe9ff";
const backgroundColor = "rgb(0, 0, 30, .7)";

const selectionColor = "rgba(80, 240, 252, .5)";

const black = "#444";
const red = "#ff008e";
const green = "#1AFE77";
const yellow = "#FFEB3B";
const blue = "#0467E8";
const magenta = "#EB07EE";
const cyan = "#50f0fb";
const white = "#FFFFFF";

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: backgroundColor,
    foregroundColor: foregroundColor,
    borderColor: "transparent",
    cursorColor: "#FF008E",
    selectionColor,
    colors: {
      ...config.colors,
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: "#797979",
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor,
    },
    css: `
        ${config.css || ""}
        .header_header .tabs_nav ul, 
        .header_header .tabs_nav .tabs_borderShim{
          border-bottom: 1px solid rgba(80, 240, 251, .5) !important;
        }
        .tab_tab:not(:first-child){
          border-left: 1px solid rgba(80, 240, 251, .5) !important;
        }
        .tab_tab.tab_active,
        .splitpane_pane .term_active{
          background-color: rgb(0, 0, 30, .5);
        }
        .tabs_nav .tabs_list .tab_text {
          color: #50f0fb;
        }
        .tabs_nav .tabs_title {
          color: #50f0fb;
        }
        .splitpane_divider_vertical,
        .splitpane_divider_horizontal{
          background-color: rgba(80, 240, 251, .5) !important;
        }
      `,
  });
};
