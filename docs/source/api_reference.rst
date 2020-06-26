Gimel.js API Reference
======================



Main Methods
############

.. _addhtml:

AddHTML
-------

.. js:method:: $g.addHTML(selector, html, [addmethod, numberselector]);
   
   Adds or sets the HTML content of an element.

   :param string selector: CSS selector to select the element you want to add HTML to. Must be either an ``id``, ``class name`` or ``tag name``.

   :param string html: The HTML you want to add.
   :param string addmethod: How you want to add the HTML. If left out, it will over write any pre-existing HTML content. If set to ``add``, it will add to pre-existing  HTML content if any. `Example-1`_.
   :param integer numberselector: See :ref:`Number-Selector`. This method supports the ``all`` property. `Here-1`_ is an example of ``AddHTML`` using the ``all`` property.


   .. _Example-1: examples/addhtml-03.html
   .. _Here-1: examples/addhtml-02.html

Example
^^^^^^^

.. code-block:: js

    $g.addHTML("#demo", "<p>simply add any HTML <ins>anywhere</ins> in the page.</p>");


`try-in-editor-1`_

   .. _try-in-editor-1: examples/addhtml-01.html


.. _addCss:

AddCSS
------

.. js:method:: $g.addCSS(selector, css, [addmethod, numberselector]);
   
   Adds or sets the inline CSS of an element.

   :param string selector: CSS selector to select the element you want to add CSS to. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string css: The CSS you want to add. 
   :param string addmethod: How you want to add the CSS. If left out, it will over write any pre-existing inline CSS styles. If set to ``keep``, it will add to pre-existing  CSS styles if any. `Example`_.
   :param integer numberselector: See :ref:`Number-Selector`. This method supports the ``all`` property. `Here`_ is an example of AddCSS using the ``all`` property.



   .. _Example: examples/addCSS-02.html
   .. _Here: examples/addCSS-03.html


.. note::

    AddCSS will take first priority* over all other CSS styles; unless used with ``keep`` then it will take second priority and inline CSS first priority.

   \ * By priority we mean how CSS styles will overwrite each other.

Example
^^^^^^^


.. code-block:: js

    $g.addCSS("#demo", "\
    background-color: red;\
    border: 2px solid #555;\
    height: 6rem;\
    width: 6rem;\
    ");


OR
^^
.. code-block:: js

    $g.addCSS("#demo", "background-color: red; border: 2px solid #555;");


`try-in-editor-2`_

   .. _try-in-editor-2: examples/addcss-01.html

.. _addClass:

AddClass
--------

.. js:method:: $g.addClass(selector, class, [numberselector]);
   
   Adds one or more CSS class to an HTML element.

   :param string selector: CSS selector to select the element you want to add the (CSS) class(es) to. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string class: The CSS class(es) you want to add.
   :param integer numberselector: See :ref:`Number-Selector`.


Example
^^^^^^^

.. code-block:: js

    $g.addClass("#demo", "new");


`try-in-editor-3`_

   .. _try-in-editor-3: examples/addclass-01.html



.. _setCss:

SetCSS
---------

.. js:method:: $g.setCSS(selector, property, value, [numberselector]);
   
   Sets or changes a single CSS style property of a element.

   :param string selector: CSS selector to select the element whos style you want to change. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string property: The name of the property  you want to change (only the name e.g. for ``color:red;`` place only ``color`` here: see example below).
   :param string value: The value you want to set the CSS property to (e.g. for ``color:red;`` you would place ``red`` here: see example below).
   :param integer numberselector: See :ref:`Number-Selector`. This method supports the ``all`` property. `Here-3`_ is an example of setCSS using the ``all`` property.



   .. _Here-3: examples/setCSS-02.html
   

Example
^^^^^^^

.. code-block:: js

    $g.setCSS("#demo", "background-color", "green");




`try-in-editor-4`_

   .. _try-in-editor-4: examples/setCSS-01.html


.. _removeelement:

RemoveElement
-------------

.. js:method:: $g.RemoveElement(selector, [numberselector]);
   
   Removes one or more HTML elements.

   :param string selector: CSS selector to select the element you want to remove/delete. Must be either an ``id``, ``class name`` or ``tag name``.

   :param integer numberselector: See :ref:`Number-Selector`. This method supports the ``all`` property. `Here-4`_ is an example of removeElement using the ``all`` property.

   .. _Here-4: examples/RemoveElement-02.html
  

Example
^^^^^^^

.. code-block:: js

    $g.removeElement(".demo", 0);


`try-in-editor-5`_

   .. _try-in-editor-5: examples/RemoveElement-01.html







.. _setProperty:

SetProperty
-----------

.. js:method:: $g.setProperty(selector, property, value, [numberselector]);
   
   Sets or changes a single property of an element (e.g. for an ``a`` tag, a property you might set/change could be ``href``).

   :param string selector: CSS selector to select the element who's property you want to change. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string property: The name of the property  you want to change (only the name e.g. for ``href="somewhere.html";`` place only ``href`` here: `see-example`_).
   :param string value: The value you want to set the property to (e.g. for ``href="somewhere.html";`` you would place ``somewhere.html`` here: `see-example`_  below).
   :param integer numberselector: See :ref:`Number-Selector`.

.. _see-example: examples/setProperty-02.html
   
.. note::
    SetProperty method is not suggested for setting style or class properties. For this use :ref:`addCSS` (or :ref:`setCSS`) and :ref:`addClass`.

Example
^^^^^^^

.. code-block:: js

    $g.setProperty("#demo", "type", "range");


`try-in-editor-12`_

   .. _try-in-editor-12: examples/setProperty-01.html



.. _addElement:

AddElement
------------

.. js:method:: $g.addElement(element, selector, Id, [numberselector]);
   
   Creates and appends an HTML element into your HTML document.

   :param string element: The element you want to create.
   :param string selector: CSS selector to select the element you want to append the created element to. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string Id: The ``Id`` of the created element.
   :param integer numberselector: See :ref:`Number-Selector`.


Example
^^^^^^^

.. code-block:: js

    $g.addElement("input", ".demo", "new");


`try-in-editor-14`_

   .. _try-in-editor-14: examples/addElement-01.html

.. _hide:

Hide
------------

.. js:method:: $g.hide(selector, [numberselector]);
   
   Hides an HTML element.

   :param string selector: CSS selector to select the element you want to hide. Must be either an ``id``, ``class name`` or ``tag name``.
   :param integer numberselector: See :ref:`Number-Selector`.

Example
^^^^^^^

.. code-block:: js

    $g.hide("#demo");


`try-in-editor-16`_

   .. _try-in-editor-16: examples/hide-01.html


.. _show:

Show
------------

.. js:method:: $g.show(selector, [numberselector]);
   
   Shows an HTML element that has been hidden with the ``hide`` method.

   :param string selector: CSS selector to select the element you want to show. Must be either an ``id``, ``class name`` or ``tag name``.
   :param integer numberselector: See :ref:`Number-Selector`.

Example
^^^^^^^

.. code-block:: js

    $g.show("#demo");


`try-in-editor-17`_

   .. _try-in-editor-17: examples/show-01.html


.. _Event-Method:

Event Methods
#############

.. _when:

When
----

.. js:method:: $g.when(selector, event, code, [numberselector]);
   
   Runs/executes your code "when" an event (e.g. an element is clicked) is triggered.

   :param string selector: CSS selector to select the element which will trigger the event. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string event: The event that will trigger your code. You can use any single JavaScript event here. This is a list of accepted :ref:`JavaScript-Events`. 
    | `Here-is-a-example`_ of the some of the most used events.
   :param string code: The JavaScript code (gimel.js or other) you wish to run when triggered.
   :param integer numberselector: See :ref:`Number-Selector`.

   .. _Here-is-a-example: examples/when-02.html
  

syntax
^^^^^^

.. code-block:: js

    $g.when("_Selector_", "_Event_", function(){
    // Code to run when triggered
    });


Example
^^^^^^^

.. code-block:: js

    $g.when("button", "click", function(){
    $g.addHTML("button", "<h3>See how it works!</h3>");
    });

`try-in-editor-8`_

   .. _try-in-editor-8: examples/when-01.html


.. _whenscrollto:

WhenScrollTo
------------

.. js:method:: $g.whenScrollTo(selector, code, [numberselector]);
   
   Runs/executes your code "when" the HTML page is scrolled to the selected element.

   :param string selector: CSS selector to select the element which will, on reaching trigger your code. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string code: The JavaScript code (gimel.js or other) you wish to run when triggered.
   :param integer numberselector: See :ref:`Number-Selector`.


  


syntax
^^^^^^

.. code-block:: js

    $g.whenScrollTo("_Selector_", function(){
    // Code to run when page is scrolled to selected element
    });


Example
^^^^^^^

.. code-block:: js

    $g.whenScrollTo("#demo", function(){
    $g.changeCSS("#demo" , "background-color" , "red");
    });


`try-in-editor-9`_

   .. _try-in-editor-9: examples/whenScrollTo-01.html

.. note::
    This method (whenScrollTo) may not preform as expected on all devices. We are working to fix this.



.. _whentimeup:

WhenTimeUp
-----------

.. js:method::  $g.whenTimeUp(time, code, [numberselector]);
   
   Runs/executes your code "when" time is up.

   :param integer time: The amount of time before the code is to be executed (time is in milliseconds: one second is equally to one hundred milliseconds). `This-example`_ of the ``whenTimeUp`` method shows the the use of timing.
   :param string code: The JavaScript code (gimel.js or other) you wish to run when time is up.
   :param integer numberselector: See :ref:`Number-Selector`.

   .. _This-example: examples/whenTimeUp-02.html


syntax
^^^^^^

.. code-block:: js

    $g.whenTimeUp( time, function(){
    // Code to run when time is up
    });


Example
^^^^^^^

.. code-block:: js

    // time is in milliseconds
   $g.whenTimeUp( 3000, function(){
   $g.setCSS("p", "font-size", "24px", 1);
    });

`try-in-editor-10`_

   .. _try-in-editor-10: examples/whenTimeUp-01.html


.. _whentoggle:

WhenToggle
----------

.. js:method:: $g.whenToggle(selector, first-code, second-code, [numberselector]);
   
   Runs/executes your code "when" the selected element is toggled.

   :param string selector: CSS selector to select the element which will toggle between the to sets of code. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string first-code: The JavaScript code (gimel.js or other) you wish to run when first toggled.
   :param string second-code: The JavaScript code (gimel.js or other) you wish to run when  toggled for the second time.
   :param integer numberselector: See :ref:`Number-Selector`.
  

syntax
^^^^^^

.. code-block:: js

    $g.whenToggle( "_Selector_", function(){
    // Code to run when first triggered
    },
    function(){
    // Code to run when triggered a second time
    // Then it starts over
    });

Example
^^^^^^^

.. code-block:: js

    $g.whenToggle( "#demo", function(){
    $g.setCSS(" #demo", "color", "red");
    },
    function(){
    $g.setCSS(" #demo", "color", "green");
    });

`try-in-editor-11`_ 

   .. _try-in-editor-11: examples/whenToggle-01.html


.. note::
    The element being toggled dose not have to be the element on which the code applies. `An-Example`_


   .. _An-Example: examples/whenToggle-02.html
















Effect Methods
##############

.. _typingEffect:

TypingEffect
------------

.. js:method:: $g.typingEffect(selector, html, time, cursor, [cursor-color], [numberselector]);
   
   Sets a typing effect to the text of an element.

   :param string selector: CSS selector to select the element you want to add the typing effect to. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string html: The text you want to type.
   :param string time: How fast you want the text to be type. `Here-is-an-example-showing-this`_.
   :param string cursor: What you want the cursor to be . `Here-is-an-example-of-how-this-works`_.
   :param string cursor-color: Here you can set the color of the cursor. `See-this-example`_.
   :param integer numberselector: See :ref:`Number-Selector`. 

   .. _Here-is-an-example-showing-this: examples/typingEffect-02.html
   .. _Here-is-an-example-of-how-this-works: examples/typingEffect-05.html
   .. _See-this-example: examples/typingEffect-06.html

Example
^^^^^^^

.. code-block:: js

    // Time in milliseconds
    $g.typingEffect("#demo", "Simple, Easy, Neat and most importantly FUN!", 150, "|");



`try-in-editor-13`_

   .. _try-in-editor-13: examples/typingEffect-01.html

.. note::
    Do not use  HTML as typing content, it will not render; as seen in `this-example.`_ You can still style text, just style the element you are typing the text in; `like-this`_.


   .. _this-example.: examples/typingEffect-03.html
   .. _like-this: examples/typingEffect-04.html



.. _fadeIn:

FadeIn
------

.. js:method:: $g.fadeIn(selector, effect-name, effect-value, [clarity, numberselector]);
   
   Fades in a HTML element using a CSS transform effect.

   :param string selector: CSS selector to select the element you want to fade in. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string effect-name: The name (only the name) of the CSS transform effect you want to use for your fade in. Here is a list of the :ref:`CSS-transforms`.
   :param string effect-value: The value of the CSS transform effect (e.g. if you wanted ``translate(60px, 0px)`` as your fade in, the effect value would be ``(60px, 0px)`` ). Here is a list of the :ref:`CSS-transforms`.
   :param string clarity: Whether you want your fade in to literally fade in (`like-this-clear`_), or whether you want a solid face in (`like-this-solid`_). The solid face in is for things like off canvas drawers. Clear is the default if left out; for the solid effect set to ``off`` as seen in the solid example.
   :param integer numberselector: See :ref:`Number-Selector`.


   .. _like-this-clear: examples/fadein-04.html
   .. _like-this-solid: examples/fadein-05.html
 

.. Important::

   | The fadeIn method must.
   | 1. Be called outside one of any :ref:`Event-Method`. 
   | 2. Must be used with the :ref:`fadeInStart` method.
   | You can think of the fadeIn method as setting up the fade in and the fadeInStart method as calling the fadeIn to begin.  It is for this reason that the ``fadeIn`` method is always at the top in our examples.
    

Example
^^^^^^^

.. code-block:: js

    $g.fadeIn("#divOne", "translate3d", "(1rem, -4rem, 3rem)");


`try-in-editor-6`_

   .. _try-in-editor-6: examples/fadein-01.html


.. _fadeInStart:

FadeInStart
------------

.. js:method:: $g.fadeInStart(selector, effect-name, length, [numberselector]);
   
   Calls the ``fadeIn`` method to begin the fade in. This method (fadeInStart) is always placed inside an event method (See :ref:`Event-Method` and example below).

   :param string selector: CSS selector to select the element you want to fade in. Must be either an ``id``, ``class name`` or ``tag name``.

   :param string effect-name: The name (only the name) of the CSS transform effect you used in the ``fadeIn`` method for the selected element. 
   :param string length: The length of time (in seconds) that you want the fade in to last.
   :param integer numberselector: See :ref:`Number-Selector`. 


.. Important::

    | The fadeInStart method must.
    | 1. Be called inside one of the :ref:`Event-Method`. 
    | 2. Must be used with the :ref:`fadeIn` method.
    | You can think of the fadeIn method as setting up the fade in and the fadeInStart method as calling the fadeIn to begin. It is for this reason that the fadeIn method is always at the top in our examples.


Example
^^^^^^^

.. code-block:: js

    $g.fadeInStart("#divOne", "translate", 2);


`try-in-editor-7`_

   .. _try-in-editor-7: examples/fadeInStart-01.html

.. _fadeOutStart:

fadeOutStart
-------------

.. js:method:: $g.fadeOutStart(selector, effect-name, effect-value, length, [numberselector]);
   
   Fades out an HTML element using a CSS transform effect.

   :param string selector: CSS selector to select the element you want to fade out. Must be either an ``id``, ``class name`` or ``tag name``.
   :param string effect-name: The name (only the name) of the CSS transform effect you used in the ``fadeOutStart`` method for the selected element. 
   :param string effect-value: The value of the CSS transform effect (e.g. if you wanted ``translate(60px, 0px)`` as your fade out, the effect value would be ``(60px, 0px)`` ). Here is a list of the :ref:`CSS-transforms`.
   :param string length: The length of time (in seconds) that you want the fade out to last.
   :param integer numberselector: See :ref:`Number-Selector`. 


.. Important::

    | The fadeOutStart method must be called inside one of the :ref:`Event-Method`. 
    | Unlike fadeIn and fadeInStart, fadeOutStart dose not need to be setup only called.


Example
^^^^^^^

.. code-block:: js

    $g.fadeOutStart("#divOne", "translate", "(0px, 50px)", 2);


`try-in-editor-15`_

   .. _try-in-editor-15: examples/fadeOutStart-01.html
