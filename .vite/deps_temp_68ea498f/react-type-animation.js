import {
  require_react
} from "./chunk-UOIPVTYB.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/react-type-animation/dist/index.es.js
var import_react = __toESM(require_react());
async function type(node, ...args) {
  for (const arg of args) {
    switch (typeof arg) {
      case "string":
        await edit(node, arg);
        break;
      case "number":
        await wait(arg);
        break;
      case "function":
        await arg(node, ...args);
        break;
      default:
        await arg;
    }
  }
}
async function edit(node, text) {
  const overlap = getOverlap(node.textContent, text);
  await perform(node, [...deleter(node.textContent, overlap), ...writer(text, overlap)]);
}
async function wait(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
async function perform(node, edits, speed = 60) {
  for (const op of editor(edits)) {
    op(node);
    await wait(speed + speed * (Math.random() - 0.5));
  }
}
function* editor(edits) {
  for (const edit2 of edits) {
    yield (node) => requestAnimationFrame(() => node.textContent = edit2);
  }
}
function* writer([...text], startIndex = 0, endIndex = text.length) {
  while (startIndex < endIndex) {
    yield text.slice(0, ++startIndex).join("");
  }
}
function* deleter([...text], startIndex = 0, endIndex = text.length) {
  while (endIndex > startIndex) {
    yield text.slice(0, --endIndex).join("");
  }
}
function getOverlap(start, [...end]) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}
function styleInject(css2, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css = ".styles_type__2Teeh::after {\n  content: '|';\n  animation: styles_cursor__14ty0 1.1s infinite step-start;\n}\n\n@keyframes styles_cursor__14ty0 {\n  50% {\n    opacity: 0;\n  }\n}\n";
var styles = { "type": "styles_type__2Teeh", "cursor": "styles_cursor__14ty0" };
styleInject(css);
var toConsumableArray = function(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];
    return arr2;
  } else {
    return Array.from(arr);
  }
};
var TypeAnimation = function TypeAnimation2(_ref) {
  var sequence = _ref.sequence, repeat = _ref.repeat, className = _ref.className, _ref$wrapper = _ref.wrapper, wrapper = _ref$wrapper === void 0 ? "p" : _ref$wrapper, _ref$cursor = _ref.cursor, cursor = _ref$cursor === void 0 ? true : _ref$cursor;
  var typeRef = (0, import_react.useRef)(null);
  var baseStyle = styles.type;
  var finalClassName = void 0;
  if (className && className.length > 0) {
    if (!cursor) {
      finalClassName = className;
    } else {
      finalClassName = baseStyle + " " + className;
    }
  } else {
    if (!cursor) {
      finalClassName = "";
    } else {
      finalClassName = baseStyle;
    }
  }
  (0, import_react.useEffect)(function() {
    if (repeat === Infinity) {
      type.apply(void 0, [typeRef.current].concat(toConsumableArray(sequence), [type]));
    } else if (typeof repeat === "number") {
      type.apply(void 0, [typeRef.current].concat(toConsumableArray(Array(repeat).fill(sequence).flat())));
    } else {
      type.apply(void 0, [typeRef.current].concat(toConsumableArray(sequence)));
    }
  });
  var Wrapper = wrapper;
  return import_react.default.createElement(Wrapper, { className: finalClassName, ref: typeRef });
};
var index = (0, import_react.memo)(TypeAnimation);
var index_es_default = index;
export {
  index_es_default as default
};
//# sourceMappingURL=react-type-animation.js.map
