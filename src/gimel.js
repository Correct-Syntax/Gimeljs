/**
 * --------------------------------------------------------------------------
 * Gimel.js v2.0.1 (C) 2020 Noah Rahm, Correct Syntax & other contributors
 * Licensed under BSD 3-Clause
 * --------------------------------------------------------------------------
 */

// Change the "$g" to change the access point for gimel.js
var $g = {

    /**
     * ------------------------------------------------------------------------
     * Core
     * ------------------------------------------------------------------------
     */

    addHTML : function(a, b, c, d) {
        var elem = document.querySelectorAll(a);
        for (Gjs=0; Gjs< elem.length; Gjs++) {
            /**
             * var num
            1. If c equals "add" then it has an "add" property in the c position.
            2. If c does not equal "add" then we know that c is the number selector 
            for the class/tag, if there is one. (There is no "add" property in this case.) 
            */
            var num = (c === "add") ? d : c;
            if (num === "all") {
               var val = (c === "add") ? elem[Gjs||0].innerHTML : " ";
                elem[Gjs||0].innerHTML = val + " " + b;
            } else {
               var val = (c === "add") ? elem[num||0].innerHTML : " ";
                    elem[num||0].innerHTML = val +" " + b;
                    break;
            }
        }
        return;
    },

    addCSS : function(a, b, c, d) {
        var elem = document.querySelectorAll(a);
        for (Gjs=0; Gjs< elem.length; Gjs++) {
             var num = (c === "keep") ? d : c;
        if(num === "all") {
               var val = (c === "keep") ? elem[Gjs].getAttribute("style") : " ";
                elem[Gjs].setAttribute("style", b + val);
      } else {
               var val = (c === "keep") ? elem[num||0].getAttribute("style") : " ";
                elem[num||0].setAttribute("style", b + val);
                break;
          }
        }
        return;
    },

    setCSS : function(a, b, c, d) {
        var elem = document.querySelectorAll(a);
        for (Gjs=0; Gjs< elem.length; Gjs++) {
            if (d === "all") {
                elem[Gjs].style.setProperty(b, c);
            } else {
                elem[d||0].style.setProperty(b, c);
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
        elem.setAttribute("id", c);
        return;
    },

    removeElement : function(a, b, d) {
        var elem = document.querySelectorAll(a);
        var len = elem.length;
        for (Gjs=0; Gjs< len; Gjs++) {
            if (b === "all") {
                var child = elem[Gjs||0];
                child.parentNode.removeChild(child);
            } else {
                var child = elem[d||0];
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

    hide : function(a, b) {
        document.querySelectorAll(a)[b||0].style.display = "none";
        return;
    },

    show : function(a, b) {
        document.querySelectorAll(a)[b||0].style.display = "block";
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

    whenToggle : function(a, b, c, d) {
    var elem = document.querySelectorAll(a)[d||0];
    elem.addEventListener("click", function() {
        var val = elem.getAttribute( "gimelJsT");
        if(val === "true"){
            elem.setAttribute("gimelJsT", "false" );
            var tm = setTimeout(c, 1);
        }else{
            elem.setAttribute("gimelJsT", "true" );
            var tm = setTimeout(b, 1);
        }
    });
    return;
    },

    /**
     * ------------------------------------------------------------------------
     * Effects
     * ------------------------------------------------------------------------
     */

    typingEffect : function(a, b, c, d, e, f) {
        var num = (e === typeof number)? e : f;
        var color = (e !== typeof number && e)? e : "black";
        var place = document.querySelectorAll(a)[num||0];
        var count = 1;
        var elemA = document.createElement("span");
        var elemB = document.createElement("span");
        var elemC = document.createElement("style");
        place.appendChild(elemA);
        place.appendChild(elemB);
        document.body.appendChild(elemC);
        elemA.setAttribute("id", "_gjsTET");
        elemB.setAttribute("class", "_gjsTEC");
        elemB.style.color = color;
        elemB.innerHTML = d;
        var text = document.querySelectorAll(a + " #_gjsTET")[num||0];
        text.innerHTML = b.charAt(0);
        elemC.innerHTML = "._gjsTEC{-webkit-animation:gjsTEC 1.3s ease infinite;animation: gjsTEC 1.3s ease infinite;}\
        @-webkit-keyframes gjsTEC{40%{opacity:1;}41%{opacity:0;}80%{opacity:0;}81%{opacity:1;}}\
        @keyframes gjsTEC {0%{opacity:1;}40%{opacity:1;}41%{opacity:0;}80%{opacity:0;}81%{opacity:1;}100%{opacity:1;}}";
        let gimelTyping = function(time) {
            setTimeout(function() {
                if (count < b.length) {
                    text.innerHTML += b.charAt(count);
                    count++;
                    gimelTyping(c);
                }
            }, time);
        };
        setTimeout(function(){
            gimelTyping(0);
        }, c);
    return;
    },

    whenScrollTo : function(a, b, c) {
        var elem = document.querySelectorAll(a)[c||0].offsetTop - (window.innerHeight / 2);
        var once = false;
        window.addEventListener("scroll", function(){ 
        if (pageYOffset > elem && once === false) {
                b();
                once = true;
            }
        });
        return;
    },


    fadeIn : function(a, b, c, d, e) {
       var num = (d === "off") ? e : d;
        var elem = document.querySelectorAll(a)[num||0];
        elem.style.transform = b + c;
        if (d === "off") {
            elem.style.opacity = "1";
        } else {
            elem.style.opacity = "0";
       }
        return;
    },

    fadeInStart : function(a, b, c, d) {
        var elem = document.querySelectorAll(a)[d||0];
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
            elem.style.transform = b + "(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        } else if (b === "translate3d") {
            elem.style.transform = b + "(0,0,0)";
        } else {
            elem.style.transform = b + "(0,0)";
        }
        elem.style.opacity = "1";
        return;
    },
        
    fadeOutStart : function(a, b, c, d, e, f) {
        var num = (e === "off") ? f : e;
        var elem = document.querySelectorAll(a)[num||0];
        elem.style.transform = b + c;
        elem.style.transition =  d + "s";
        if (e === "off") {
            elem.style.opacity = "1";
        } else {
            elem.style.opacity = "0";
        }
       return;
    }

};