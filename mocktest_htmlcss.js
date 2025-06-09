var questions = [
        // HTML Fundamentals (30 questions)
        {
            "question": "What does HTML stand for?",
            "options": [
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyper Text Makeup Language"
            ],
            "correct": 0,
            "explanation": "HTML stands for Hyper Text Markup Language."
        },
        {
            "question": "Which is the correct HTML element for the largest heading?",
            "options": [
                "&lt;h6&gt;",
                "&lt;heading&gt;",
                "&lt;h1&gt;",
                "&lt;head&gt;"
            ],
            "correct": 2,
            "explanation": "&lt;h1&gt; is the largest heading element in HTML."
        },
        {
            "question": "What is the correct HTML element for inserting a line break?",
            "options": [
                "&lt;br&gt;",
                "&lt;lb&gt;",
                "&lt;break&gt;",
                "&lt;line&gt;"
            ],
            "correct": 0,
            "explanation": "&lt;br&gt; is the correct element for a line break."
        },
        {
            "question": "Which attribute is used to specify a unique ID for an HTML element?",
            "options": [
                "class",
                "id",
                "name",
                "type"
            ],
            "correct": 1,
            "explanation": "The 'id' attribute specifies a unique identifier."
        },
        {
            "question": "What is the correct HTML for creating a hyperlink?",
            "options": [
                "&lt;a url=&quot;http://example.com&quot;&gt;Example&lt;/a&gt;",
                "&lt;a href=&quot;http://example.com&quot;&gt;Example&lt;/a&gt;",
                "&lt;a&gt;http://example.com&lt;/a&gt;",
                "&lt;link&gt;http://example.com&lt;/link&gt;"
            ],
            "correct": 1,
            "explanation": "The &lt;a&gt; tag with href attribute creates a hyperlink."
        },
        {
            "question": "Which HTML element is used to define the structure of an HTML document?",
            "options": [
                "&lt;body&gt;",
                "&lt;html&gt;",
                "&lt;head&gt;",
                "&lt;!DOCTYPE&gt;"
            ],
            "correct": 1,
            "explanation": "The &lt;html&gt; element is the root element that defines the document structure."
        },  
        {
            "question": "Which HTML element is used to specify a footer for a document or section?",
            "options": [
                "&lt;footer&gt;",
                "&lt;bottom&gt;",
                "&lt;section&gt;",
                "&lt;div&gt;"
            ],
            "correct": 0,
            "explanation": "The &lt;footer&gt; element specifies a footer."
        },
        {
            "question": "What is the correct HTML for adding a background color?",
            "options": [
                "&lt;body bg=&quot;yellow&quot;&gt;",
                "&lt;body style=&quot;background-color:yellow;&quot;&gt;",
                "&lt;background&gt;yellow&lt;/background&gt;",
                "&lt;body color=&quot;yellow&quot;&gt;"
            ],
            "correct": 1,
            "explanation": "The style attribute with background-color property is the correct way."
            },
            {
            "question": "Which HTML element is used to display a scalar measurement within a range?",
            "options": [
                "&lt;range&gt;",
                "&lt;meter&gt;",
                "&lt;measure&gt;",
                "&lt;gauge&gt;"
            ],
            "correct": 1,
            "explanation": "The &lt;meter&gt; element represents a scalar measurement."
            },
            {
            "question": "Which HTML element is used to embed JavaScript code?",
            "options": [
                "&lt;script&gt;",
                "&lt;javascript&gt;",
                "&lt;js&gt;",
                "&lt;code&gt;"
            ],
            "correct": 0,
            "explanation": "The &lt;script&gt; element is used to embed or reference JavaScript."
            },
            {
            "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            "options": [
                "title",
                "src",
                "alt",
                "longdesc"
            ],
            "correct": 2,
            "explanation": "The 'alt' attribute provides alternative text for images."
            },

        {
            "question": "Which HTML5 element is used to specify independent, self-contained content?",
            "options": [
                "&lt;section&gt;",
                "&lt;article&gt;",
                "&lt;div&gt;",
                "&lt;content&gt;"
            ],
            "correct": 1,
            "explanation": "The &lt;article&gt; element specifies independent, self-contained content."
        },
        {
    "question": "Which HTML element is used to specify a header for a document or section?",
    "options": [
        "&lt;header&gt;",
        "&lt;head&gt;",
        "&lt;top&gt;",
        "&lt;section&gt;"
    ],
    "correct": 0,
    "explanation": "The &lt;header&gt; element specifies a header."
        },
        {
            "question": "What is the correct HTML for creating a checkbox?",
            "options": [
                "&lt;input type=&quot;check&quot;&gt;",
                "&lt;checkbox&gt;",
                "&lt;input type=&quot;checkbox&quot;&gt;",
                "&lt;check&gt;"
            ],
            "correct": 2,
            "explanation": "&lt;input type=&quot;checkbox&quot;&gt; creates a checkbox."
        },
        {
            "question": "Which HTML element defines navigation links?",
            "options": [
                "&lt;nav&gt;",
                "&lt;navigate&gt;",
                "&lt;navigation&gt;",
                "&lt;links&gt;"
            ],
            "correct": 0,
            "explanation": "The &lt;nav&gt; element defines navigation links."
        },
        {
            "question": "Which HTML element is used to define a table row?",
            "options": [
                "&lt;td&gt;",
                "&lt;tr&gt;",
                "&lt;th&gt;",
                "&lt;table-row&gt;"
            ],
            "correct": 1,
            "explanation": "&lt;tr&gt; defines a table row."
        },
        {
            "question": "Which HTML element is used to define a drop-down list?",
            "options": [
                "&lt;list&gt;",
                "&lt;dropdown&gt;",
                "&lt;select&gt;",
                "&lt;input type=&quot;dropdown&quot;&gt;"
            ],
            "correct": 2,
            "explanation": "&lt;select&gt; defines a drop-down list."
        },
        {
            "question": "Which HTML element is used to define a description list?",
            "options": [
                "&lt;dl&gt;",
                "&lt;list&gt;",
                "&lt;ul&gt;",
                "&lt;ol&gt;"
            ],
            "correct": 0,
            "explanation": "&lt;dl&gt; defines a description list."
        },
        {
            "question": "Which HTML attribute is used to make a checkbox checked by default?",
            "options": [
                "selected",
                "checked",
                "default",
                "on"
            ],
            "correct": 1,
            "explanation": "The 'checked' attribute makes a checkbox checked by default."
        },
        {
            "question": "Which HTML element is used to define a paragraph?",
            "options": [
                "&lt;para&gt;",
                "&lt;p&gt;",
                "&lt;paragraph&gt;",
                "&lt;pg&gt;"
            ],
            "correct": 1,
            "explanation": "&lt;p&gt; defines a paragraph."
        },
        {
            "question": "Which HTML element is used to define emphasized text?",
            "options": [
                "&lt;strong&gt;",
                "&lt;b&gt;",
                "&lt;em&gt;",
                "&lt;i&gt;"
            ],
            "correct": 2,
            "explanation": "&lt;em&gt; defines emphasized text (typically displayed as italic)."
        },
        {
            "question": "Which HTML element is used to define important text?",
            "options": [
                "&lt;important&gt;",
                "&lt;strong&gt;",
                "&lt;bold&gt;",
                "&lt;imp&gt;"
            ],
            "correct": 1,
            "explanation": "&lt;strong&gt; defines important text (typically displayed as bold)."
        },
        {
            "question": "Which HTML element is used to define a section in a document?",
            "options": [
                "&lt;div&gt;",
                "&lt;section&gt;",
                "&lt;block&gt;",
                "&lt;area&gt;"
            ],
            "correct": 1,
            "explanation": "&lt;section&gt; defines a section in a document."
        },
        {
            "question": "Which HTML element is used to define the title of a document?",
            "options": [
                "&lt;meta&gt;",
                "&lt;title&gt;",
                "&lt;head&gt;",
                "&lt;header&gt;"
            ],
            "correct": 1,
            "explanation": "&lt;title&gt; defines the document title shown in browser tabs."
        },
        {
            "question": "Which HTML element is used to define a list item?",
            "options": [
                "&lt;item&gt;",
                "&lt;li&gt;",
                "&lt;list&gt;",
                "&lt;dl&gt;"
            ],
            "correct": 1,
            "explanation": "&lt;li&gt; defines a list item."
        },
        {
            "question": "Which HTML element is used to define a container for multiple image resources?",
            "options": [
                "&lt;picture&gt;",
                "&lt;images&gt;",
                "&lt;srcset&gt;",
                "&lt;figure&gt;"
            ],
            "correct": 0,
            "explanation": "&lt;picture&gt; is a container for multiple image resources."
        },
        {
            "question": "Which HTML element is used to define a thematic break?",
            "options": [
                "&lt;break&gt;",
                "&lt;hr&gt;",
                "&lt;line&gt;",
                "&lt;separator&gt;"
            ],
            "correct": 1,
            "explanation": "&lt;hr&gt; defines a thematic break (horizontal rule)."
        },
        {
            "question": "Which HTML element is used to define a caption for a figure?",
            "options": [
                "&lt;caption&gt;",
                "&lt;figcaption&gt;",
                "&lt;figure&gt;",
                "&lt;legend&gt;"
            ],
            "correct": 1,
            "explanation": "&lt;figcaption&gt; defines a caption for a &lt;figure&gt; element."
        },
        {
            "question": "Which HTML element is used to define a clickable button?",
            "options": [
                "&lt;button&gt;",
                "&lt;click&gt;",
                "&lt;input type=&quot;button&quot;&gt;",
                "Both A and C"
            ],
            "correct": 3,
            "explanation": "Both &lt;button&gt; and &lt;input type=&quot;button&quot;&gt; create clickable buttons."
        },
        {
            "question": "Which HTML attribute is used to open a link in a new tab?",
            "options": [
                "target=\"_blank\"",
                "open=\"new\"",
                "href=\"_newtab\"",
                "window=\"new\""
            ],
            "correct": 0,
            "explanation": "`target=\"_blank\"` tells the browser to open the link in a new tab or window."
        },
        // CSS Fundamentals (30 questions)
        {
            "question": "Which CSS property is used to change the background color?",
            "options": [
                "color",
                "background-color",
                "bgcolor",
                "background"
            ],
            "correct": 1,
            "explanation": "`background-color` specifically sets the background color of an element."
        },
        {
            "question": "What does CSS stand for?",
            "options": [
                "Colorful Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Creative Style Sheets"
            ],
            "correct": 1,
            "explanation": "CSS stands for Cascading Style Sheets."
        },
        {
            "question": "Which HTML attribute is used to define inline styles?",
            "options": [
                "class",
                "style",
                "font",
                "styles"
            ],
            "correct": 1,
            "explanation": "The 'style' attribute is used for inline styles."
        },
        {
            "question": "Which CSS property is used to change the text color of an element?",
            "options": [
                "text-color",
                "fgcolor",
                "color",
                "font-color"
            ],
            "correct": 2,
            "explanation": "The 'color' property changes text color."
        },
        {
            "question": "Which CSS property controls the text size?",
            "options": [
                "font-style",
                "text-size",
                "font-size",
                "text-style"
            ],
            "correct": 2,
            "explanation": "The 'font-size' property controls text size."
        },
        {
            "question": "How do you add a background color for all <h1> elements?",
            "options": [
                "h1 {background-color:#FFFFFF;}",
                "all.h1 {background-color:#FFFFFF;}",
                "h1.all {background-color:#FFFFFF;}",
                "h1 {bgcolor:#FFFFFF;}"
            ],
            "correct": 0,
            "explanation": "This is the correct CSS syntax for styling all h1 elements."
        },
        {
            "question": "Which CSS property is used to change the font of an element?",
            "options": [
                "font-family",
                "font-style",
                "font-weight",
                "text-font"
            ],
            "correct": 0,
            "explanation": "The 'font-family' property changes the font."
        },
        {
            "question": "How do you make each word in a text start with a capital letter?",
            "options": [
                "text-transform:capitalize",
                "text-transform:uppercase",
                "text-style:capitalize",
                "font-variant:small-caps"
            ],
            "correct": 0,
            "explanation": "text-transform:capitalize capitalizes each word."
        },
        {
            "question": "Which property is used to change the left margin of an element?",
            "options": [
                "margin-left",
                "padding-left",
                "indent",
                "left-margin"
            ],
            "correct": 0,
            "explanation": "margin-left changes the left margin."
        },
        {
            "question": "How do you select an element with id \"demo\"?",
            "options": [
                ".demo",
                "#demo",
                "*demo",
                "demo"
            ],
            "correct": 1,
            "explanation": "# selects elements by id."
        },
        {
            "question": "How do you select elements with class name \"test\"?",
            "options": [
                "*test",
                ".test",
                "#test",
                "test"
            ],
            "correct": 1,
            "explanation": ". selects elements by class."
        },
        {
            "question": "Which property is used to change the background color?",
            "options": [
                "color",
                "bgcolor",
                "background-color",
                "bg-color"
            ],
            "correct": 2,
            "explanation": "background-color changes the background color."
        },
        {
            "question": "How do you make a list that lists its items with squares?",
            "options": [
                "list-type: square;",
                "list-style-type: square;",
                "list: square;",
                "list-style: square;"
            ],
            "correct": 1,
            "explanation": "list-style-type: square; creates square bullets."
        },
        {
            "question": "Which property is used to change the inside spacing of an element?",
            "options": [
                "margin",
                "spacing",
                "padding",
                "indent"
            ],
            "correct": 2,
            "explanation": "padding controls inside spacing."
        },
        {
            "question": "Which property is used to change the outside spacing of an element?",
            "options": [
                "margin",
                "spacing",
                "padding",
                "border"
            ],
            "correct": 0,
            "explanation": "margin controls outside spacing."
        },
        {
            "question": "How do you display hyperlinks without an underline?",
            "options": [
                "a {text-decoration:none;}",
                "a {underline:none;}",
                "a {decoration:no-underline;}",
                "a {text-style:none;}"
            ],
            "correct": 0,
            "explanation": "text-decoration:none removes underlines."
        },
        {
            "question": "How do you make the text bold?",
            "options": [
                "font-weight:bold;",
                "style:bold;",
                "font:bold;",
                "text-weight:bold;"
            ],
            "correct": 0,
            "explanation": "font-weight:bold; makes text bold."
        },
        {
            "question": "Which property is used to align the text of an element?",
            "options": [
                "text-align",
                "font-align",
                "text-style",
                "align"
            ],
            "correct": 0,
            "explanation": "text-align aligns text."
        },
        {
            "question": "How do you group selectors?",
            "options": [
                "Separate each selector with a plus sign",
                "Separate each selector with a comma",
                "Separate each selector with a space",
                "Separate each selector with a semicolon"
            ],
            "correct": 1,
            "explanation": "Selectors are grouped with commas."
        },
        {
            "question": "What is the default value of the position property?",
            "options": [
                "relative",
                "fixed",
                "absolute",
                "static"
            ],
            "correct": 3,
            "explanation": "The default position is static."
        },
        {
            "question": "How do you make a flexbox container?",
            "options": [
                "display: flex;",
                "display: flexbox;",
                "display: box;",
                "display: grid;"
            ],
            "correct": 0,
            "explanation": "display: flex; creates a flex container."
        },
        {
            "question": "Which property is used with :hover to change an element's style when moused over?",
            "options": [
                "mouseover",
                "hover",
                "active",
                "No additional property is needed"
            ],
            "correct": 3,
            "explanation": ":hover is a pseudo-class that doesn't need an additional property."
        },
        {
            "question": "How do you apply a style to all <p> elements inside a <div> element?",
            "options": [
                "div.p",
                "div + p",
                "div p",
                "p.div"
            ],
            "correct": 2,
            "explanation": "div p selects all <p> elements inside <div>."
        },
        {
            "question": "Which property is used to create space between an element's border and its content?",
            "options": [
                "margin",
                "spacing",
                "padding",
                "border-spacing"
            ],
            "correct": 2,
            "explanation": "padding creates space inside the border."
        },
        {
        "question": "How do you include an external CSS file?",
        "options": [
            "&lt;style src=&quot;style.css&quot;&gt;",
            "&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;",
            "&lt;css&gt;style.css&lt;/css&gt;",
            "&lt;import css=&quot;style.css&quot;&gt;"
        ],
        "correct": 1,
        "explanation": "&lt;link&gt; with rel=&quot;stylesheet&quot; is the correct way."
        },
        {
            "question": "Which CSS property controls text case?",
            "options": [
                "text-case",
                "font-case",
                "text-transform",
                "text-style"
            ],
            "correct": 2,
            "explanation": "text-transform controls text case."
        },
        {
            "question": "Which CSS value creates a transparent color?",
            "options": [
                "transparent",
                "none",
                "clear",
                "opacity:0"
            ],
            "correct": 0,
            "explanation": "transparent is a valid CSS color value."
        },
        {
            "question": "How do you make an element's corners rounded?",
            "options": [
                "border-radius",
                "corner-radius",
                "round-corner",
                "border-round"
            ],
            "correct": 0,
            "explanation": "border-radius rounds element corners."
        },
        {
            "question": "Which property is used to create a drop shadow effect?",
            "options": [
                "shadow",
                "box-shadow",
                "drop-shadow",
                "element-shadow"
            ],
            "correct": 1,
            "explanation": "box-shadow creates drop shadows."
        },
        {
            "question": "How do you make a grid container?",
            "options": [
                "display: grid;",
                "display: flex;",
                "display: block;",
                "display: table;"
            ],
            "correct": 0,
            "explanation": "display: grid; creates a grid container."
        }
];
