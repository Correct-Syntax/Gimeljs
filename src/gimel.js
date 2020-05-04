/**
 * --------------------------------------------------------------------------
 * Gimel.js v0.9.0 (C) 2020 [Correct Syntax] Noah Rahm and other contributers
 * Licensed under BSD 3 Clause
 * --------------------------------------------------------------------------
 */

var $g = {

    /**
     * ------------------------------------------------------------------------
     * Core
     * ------------------------------------------------------------------------
     */

    addHTML : function(a, b, c, d) {
        for (i=0; i < document.querySelectorAll(a).length; i++) {
            /**
             * var num
            1. If c equals "add" then it has an "add" property in the c position.
            2. If c does not equal "add" then we know that c is the number selector 
            for the class/tag, if there is one. (There is no "add" property in this case.) 
            */
            var num = (c === "add") ? d : c;
            if (num === "all") {
               var val = (c === "add") ? document.querySelectorAll(a)[i||0].innerHTML : " ";
                document.querySelectorAll(a)[i||0].innerHTML = val + " " + b;
            } else {
               var val = (c === "add") ? document.querySelectorAll(a)[num||0].innerHTML : " ";
                    document.querySelectorAll(a)[num||0].innerHTML = val +" " + b;
                    break;
            }
        }
        return;
    },

    addCSS : function(a, b, c, d) {
        for (i=0; i < document.querySelectorAll(a).length; i++) {
             var num = (c === "keep") ? d : c;
        if(num === "all"){
               var val = (c === "keep") ? document.querySelectorAll(a)[i].getAttribute("style") : " ";
                document.querySelectorAll(a)[i].setAttribute("style", b + val);
      } else {
               var val = (c === "keep") ? document.querySelectorAll(a)[num||0].getAttribute("style") : " ";
                document.querySelectorAll(a)[num||0].setAttribute("style", b + val);
                break;
          }
        }
        return;
    },

    changeCSS : function(a, b, c, d) {
        for (i=0; i < document.querySelectorAll(a).length; i++) {
            if (d === "all") {
                document.querySelectorAll(a)[i].style.setProperty(b, c);
            } else {
                document.querySelectorAll(a)[d||0].style.setProperty(b, c);
                break;
            }
        }
        return;
    },

    addClass : function(a, b, c) {
        var elem = document.querySelectorAll(a)[c||0].className;
        document.querySelectorAll(a)[c||0].className = elem + " " + b;
        return;
    },

    addElement : function(a, b, c, d) {
        var elem = document.createElement(a);
        document.querySelectorAll(b)[d||0].appendChild(elem);
        $aEl = new Object(); 

        $aEl[c] = function(d, e) {
            if (d !== 0) {
                elem.setAttribute("id", d);
            }
            if (e !== 0) {
                elem.setAttribute("class", e);
            }
            $aEl[c].custom = function(f, g) {
                elem.setAttribute(f, g);
            }
            return;
        }
        return;
    },

    removeElement : function(a, b, d) {
        var len = document.querySelectorAll(a).length;
        for (i=0; i < len; i++) {
            if (b === "all") {
                var child = document.querySelectorAll(a)[d||0];
                child.parentNode.removeChild(child);
            } else {
                var child = document.querySelectorAll(a)[d||0];
                child.parentNode.removeChild(child);
                break;
            }
        }
        return;
    },

    setProperty : function(a, b, c, d) {
        document.querySelectorAll(a)[d||0].setAttribute(b, c);
        return;
    },

    removeProperty : function(a, b, c, d) {
        document.querySelectorAll(a)[d||0].removeAttribute(b, c);
        return;
    },

    toggleClass : function(a, b) {
        document.querySelectorAll(a)[0].classList.toggle(b);
        return;
    },

    when : function(a, b, c, d) {
        if (a === "window") {
            window.addEventListener(b, c);
        } else {
            document.querySelectorAll(a)[d||0].addEventListener(b, c);
        }
        return;
    },

    whenTimeUp : function(a, b) {
        var tm = setTimeout(b, a);
        return;
    },

    /**
     * ------------------------------------------------------------------------
     * Effects
     * ------------------------------------------------------------------------
     */

    typingEffect : function(a, b, c, d) {
        document.querySelectorAll(a)[d||0].innerHTML = b.charAt(0);
        var count = 1;
        setTimeout(_ajsType, c); 
        function _ajsType() {
            if (count < b.length) {
                document.querySelectorAll(a)[d||0].innerHTML += b.charAt(count);
                count++;
                setTimeout(_ajsType, c); 
            }
        }
        return;
    },
    
    whenScrollTo : function(a, b, c) {
        window.addEventListener("scroll", _ajsPoint);
        var elem = document.querySelectorAll(a)[c||0].offsetTop + (window.innerHeight / 2);
        var once = false;
        function _ajsPoint() {
            if (pageYOffset > elem && once === false) {
                b();
                once = true;
            }
        }
        return;
    },

    fadeIn : function(a, b, c, d) {
        var elem = document.querySelectorAll(a)[0];
        elem.style.transform = b + c;
        elem.style.opacity = "0";

        return;
    },

    fadeInStart : function(a, b, c) {
        var elem = document.querySelectorAll(a)[0];
        elem.style.transition =  c + "s";
        if (b === "scale") {
            elem.style.transform = b + "(1,1)";
        } else if (b === "scale3d") {
            elem.style.transform = b + "(1,1,1)";
        } else if (b === "scaleX" || b === "scaleY" || b === "scaleZ") {
            elem.style.transform = b + "(1)";
        } else if (b === "rotate" || b === "skewX" || b === "skewY" || b === "rotateX" || b === "rotateY" || b === "rotateZ") {
            elem.style.transform = b + "(0deg)";
        } else if (b === "rotate3d" ) {
            elem.style.transform = b + "(0,0,0,0deg)";
        } else if (b === "translateX" || b === "translateY" || b === "translateZ") {
            elem.style.transform = b + "(0)";
        } else if (b === "matrix") {
            elem.style.transform = b + "(1,0,0,1,0,0)";
        } else if (b === "matrix3d") {
            console.log("matrix3d effect does not currently work");
            elem.style.transform = b + "(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)";
        } else if (b === "translate3d") {
            elem.style.transform = b + "(0,0,0)";
        } else {
            elem.style.transform = b + "(0,0)";
        }
        elem.style.opacity = "1";
        return;
    },
        
    fadeOutStart : function(a, b, c, d) {
        var elem = document.querySelectorAll(a)[0];
        elem.style.transform = b + c;
        elem.style.transition =  d + "s";
        elem.style.opacity = "0";
        return;
    }

};