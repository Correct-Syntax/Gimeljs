
.. _Number-Selector:

Number Selector
###############

What is Number Selector?
^^^^^^^^^^^^^^^^^^^^^^^^

The number selector is how gimel.js determines which element to select when the selector used (e.g. a class that is on more then one element) will return more then one element. 

.. note::
    You do not need use Number Selector when selecting elements by Id, as there will never be two elements with the same Id.

Example one
-----------

.. code-block:: html

    <div>1</div>
    <div>2</div>
    <div>3</div>

    <script src="gimel.js"></script>
    <script>

     $g.addClass("div", "newClass");

    </script>

Let's say that you want to add the class "newClass" to the second div tag. If you were to run the above example it would add the class to only the first div tag (that's because gimel.js automatically selects the first element if there is no number selector), now in order to add the class to the second div tag we need to use the number selector property (below).

Example two
-----------

.. code-block:: html

    <div>1</div>
    <div>2</div>
    <div>3</div>

    <script src="gimel.js"></script>
    <script>

     $g.addClass("div", "newClass", 1);

    </script>

Now it will select the second div tag.

.. note::
    Number Selector is an integer, meaning it starts counting at 0, not 1.

Using the all keyword
^^^^^^^^^^^^^^^^^^^^^^^

Now using the example above, what if we wanted to add the "newClass" class to all the div tags? Well that's what the ``all`` property is for.


.. code-block:: html

    <div>1</div>
    <div>2</div>
    <div>3</div>

    <script src="gimel.js"></script>
    <script>

     $g.addClass("div", "newClass", "all");

    </script>


.. note::
    Not all gimel.js methods support the all keyword. To find out if a method supports the all keyword check under the method's  "Numberselector" property  in the Gimel.js API Reference.


.. _CSS-transforms:

CSS transform 
#############

2D transforms
^^^^^^^^^^^^^

`matrix(n,n,n,n,n,n)`
 | Defines a 2D transformation, using a matrix of six values.

`translate(x,y)`
 | Defines a 2D translation, moving the element along the X- and the Y-axis.

`translateX(n)`
 | Defines a 2D translation, moving the element along the X-axis.

`translateY(n)`
 | Defines a 2D translation, moving the element along the Y-axis.

`scale(x,y)`
 | Defines a 2D scale transformation, changing the elements width and height.

`scaleX(n)`
 | Defines a 2D scale transformation, changing the element's width.

`scaleY(n)`
 | Defines a 2D scale transformation, changing the element's height.

`rotate(angle)`
 | Defines a 2D rotation, the angle is specified in the parameter.

`skew(x-angle,y-angle)`
 | Defines a 2D skew transformation along the X- and the Y-axis.

`skewX(angle)`
 | Defines a 2D skew transformation along the X-axis.

`skewY(angle)`
 | Defines a 2D skew transformation along the Y-axis.

3D transforms
^^^^^^^^^^^^^

`matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)`
 | Defines a 3D transformation, using a 4x4 matrix of 16 values.

`translate3d(x,y,z)`
 | Defines a 3D translation.

`translateX(x)`
 | Defines a 3D translation, using only the value for the X-axis.

`translateY(y)`
 | Defines a 3D translation, using only the value for the Y-axis.

`translateZ(z)`
 | Defines a 3D translation, using only the value for the Z-axis.

`scale3d(x,y,z)`
 | Defines a 3D scale transformation.

`scaleX(x)`
 | Defines a 3D scale transformation by giving a value for the X-axis.

`scaleY(y)`
 | Defines a 3D scale transformation by giving a value for the Y-axis.

`scaleZ(z)`
 | Defines a 3D scale transformation by giving a value for the Z-axis.

`rotate3d(x,y,z,angle)`
 | Defines a 3D rotation.

`rotateX(angle)`
 | Defines a 3D rotation along the X-axis.

`rotateY(angle)`
 | Defines a 3D rotation along the Y-axis.

`rotateZ(angle)`
 | Defines a 3D rotation along the Z-axis.




.. _JavaScript-Events:

JavaScript Events
##################

Main
^^^^

.. note::

    This is not a full list, but is some of the most used ones.


`click`
 | The event occurs when the user clicks on an element

`dblclick`
 | The event occurs when the user double-clicks on an element

`resize`
 | The event occurs when the document view is resized

`focus`
 | The event occurs when an element gets focus

`submit`
 | The event occurs when a form is submitted

`keydown`
 | The event occurs when the user is pressing a key

`keypress`
 | The event occurs when the user presses a key

`keyup`
 | The event occurs when the user releases a key

`change`
 | The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)

`scroll`
 | The event occurs when an element's scrollbar is being scrolled

`mouseover`
 | The event occurs when the pointer is moved onto an element, or onto one of its children

`mouseout`
 | The event occurs when a user moves the mouse pointer out of an element, or out of one of its children

`animationend`
 | The event occurs when a CSS animation has completed

`animationiteration` 
 | The event occurs when a CSS animation is repeated

`animationstart` 
 | The event occurs when a CSS animation has started

`transitionend` 
 | The event occurs when a CSS transition has completed

Other
^^^^^

`touchstart`
 | The event occurs when a finger is placed on a touch screen

`touchend`
 | The event occurs when a finger is removed from a touch screen

`mouseenter`
 | The event occurs when the pointer is moved onto an element

`mouseleave`
 | The event occurs when the pointer is moved out of an element
