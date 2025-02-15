import {
  require_react
} from "./chunk-UOIPVTYB.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/react-modern-drawer/dist/index.modern.js
var import_react = __toESM(require_react());
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var getDirectionStyle = function getDirectionStyle2(dir, size) {
  switch (dir) {
    case "left":
      return {
        top: 0,
        left: 0,
        transform: "translate3d(-100%, 0, 0)",
        width: size,
        height: "100vh"
      };
    case "right":
      return {
        top: 0,
        right: 0,
        transform: "translate3d(100%, 0, 0)",
        width: size,
        height: "100vh"
      };
    case "bottom":
      return {
        left: 0,
        right: 0,
        bottom: 0,
        transform: "translate3d(0, 100%, 0)",
        width: "100%",
        height: size
      };
    case "top":
      return {
        left: 0,
        right: 0,
        top: 0,
        transform: "translate3d(0, -100%, 0)",
        width: "100%",
        height: size
      };
    default:
      return {};
  }
};
var EZDrawer = function EZDrawer2(props) {
  var open = props.open, _props$onClose = props.onClose, onClose = _props$onClose === void 0 ? function() {
  } : _props$onClose, children = props.children, style = props.style, _props$enableOverlay = props.enableOverlay, enableOverlay = _props$enableOverlay === void 0 ? true : _props$enableOverlay, _props$overlayColor = props.overlayColor, overlayColor = _props$overlayColor === void 0 ? "#000" : _props$overlayColor, _props$overlayOpacity = props.overlayOpacity, overlayOpacity = _props$overlayOpacity === void 0 ? 0.4 : _props$overlayOpacity, _props$zIndex = props.zIndex, zIndex = _props$zIndex === void 0 ? 100 : _props$zIndex, _props$duration = props.duration, duration = _props$duration === void 0 ? 500 : _props$duration, direction = props.direction, _props$size = props.size, size = _props$size === void 0 ? 250 : _props$size, className = props.className, customIdSuffix = props.customIdSuffix, _props$lockBackground = props.lockBackgroundScroll, lockBackgroundScroll = _props$lockBackground === void 0 ? false : _props$lockBackground, _props$overlayClassNa = props.overlayClassName, overlayClassName = _props$overlayClassNa === void 0 ? "" : _props$overlayClassNa;
  var bodyRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(function() {
    var updatePageScroll = function updatePageScroll2() {
      bodyRef.current = window.document.querySelector("body");
      if (bodyRef.current && lockBackgroundScroll) {
        if (open) {
          bodyRef.current.style.overflow = "hidden";
        } else {
          bodyRef.current.style.overflow = "";
        }
      }
    };
    updatePageScroll();
  }, [open]);
  var idSuffix = (0, import_react.useMemo)(function() {
    return customIdSuffix || (Math.random() + 1).toString(36).substring(7);
  }, [customIdSuffix]);
  var overlayStyles = {
    backgroundColor: "" + overlayColor,
    opacity: "" + overlayOpacity,
    zIndex
  };
  var drawerStyles = _extends({
    zIndex: zIndex + 1,
    transitionDuration: duration + "ms"
  }, getDirectionStyle(direction, size), style);
  return import_react.default.createElement("div", {
    id: "EZDrawer" + idSuffix,
    className: "EZDrawer"
  }, import_react.default.createElement("input", {
    type: "checkbox",
    id: "EZDrawer__checkbox" + idSuffix,
    className: "EZDrawer__checkbox",
    onChange: onClose,
    checked: open
  }), import_react.default.createElement("nav", {
    role: "navigation",
    id: "EZDrawer__container" + idSuffix,
    style: drawerStyles,
    className: "EZDrawer__container " + className
  }, children), enableOverlay && import_react.default.createElement("label", {
    htmlFor: "EZDrawer__checkbox" + idSuffix,
    id: "EZDrawer__overlay" + idSuffix,
    className: "EZDrawer__overlay " + overlayClassName,
    style: overlayStyles
  }));
};
var index_modern_default = EZDrawer;
export {
  index_modern_default as default
};
//# sourceMappingURL=react-modern-drawer.js.map
