
# WEEK1-HTML [Exercise1.1:]

When a user enters an URL in the browser, how does the browser fetch the desiredresult ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.
a.What is the main functionality of the browser?
b.High Level Components of a browser.
c.Rendering engine and its use.
d.Parsers (HTML, CSS, etc)
e.Script Processors
f.Tree construction
g.Order of script processing
h.Layout and Painting 

## Answer
- A browser is a software application that allows users to access and interact with various types of web content, such as text, images, videos, and interactive applications. The main functionality of a browser is to retrieve and display web pages on the user's device.

When a user enters an URL into the browser, the browser begins by sending a request to the server where the web page is hosted. The server then responds by sending back the web page's HTML, CSS, and JavaScript files, among other resources. These resources are then used by the browser to construct and display the web page.

The high-level components of a browser include the user interface, the rendering engine, the networking stack, and the JavaScript engine. The user interface is the part of the browser that the user interacts with, such as the address bar, the back and forward buttons, and the bookmarks. The rendering engine is responsible for rendering the web page on the user's device. The networking stack is responsible for handling the communication between the browser and the server, and the JavaScript engine is responsible for executing JavaScript code.

The rendering engine is a key component of the browser. It's responsible for rendering the web page, which means taking the HTML, CSS, and JavaScript files and turning them into a visual representation of the web page on the user's device. The rendering engine uses a series of parsers to process the HTML, CSS, and JavaScript files. The HTML parser is responsible for parsing the HTML and building a tree-like structure called the Document Object Model (DOM) that represents the web page. The CSS parser is responsible for parsing the CSS and applying styles to the elements in the DOM. The JavaScript parser is responsible for parsing and executing any JavaScript code.

The script processors are responsible for executing any JavaScript code on the web page. They are responsible for making changes to the DOM, which in turn affects the layout and appearance of the web page. The order of script processing is important as it determines the order in which scripts are executed. The browser first parses and executes any scripts that are present in the head of the HTML file, followed by scripts that are present in the body of the HTML file.

The order of script processing is an important aspect in the browser's rendering process. The browser first parses and executes any scripts that are present in the head of the HTML file, followed by scripts that are present in the body of the HTML file. This is done so that the scripts that are present in the head of the HTML file can be used to set up the initial state of the page, such as loading external resources or setting global variables, before the page is rendered. Scripts present in the body of the HTML file are executed after the page has been rendered and can be used to manipulate the rendered content.

Tree construction is the process of creating a tree-like structure called the render tree, which represents the visual layout of the web page. The render tree is constructed based on the DOM, the styles applied by the CSS parser, and the layout information calculated by the browser. The render tree is then used by the browser's layout engine to determine the final position and size of each element on the web page.

Finally, the browser's painting engine is responsible for painting the web page. It takes the information from the render tree and paints the web page on the user's device, using the appropriate colors, gradients, and other visual effects. The layout and painting process is an iterative process and the browser continues to layout and paint the web page as the user interacts with it or as the content changes.

- In summary, when a user enters a URL in the browser, the browser sends a request to the server for the web page's resources. The browser then parses the HTML, CSS, and JavaScript files and constructs the DOM. The script processors execute any JavaScript code and make changes to the DOM. The browser constructs the render tree and calculates layout information, and then the painting engine paints the web page on the user's device. Throughout this process, the browser continues to update the layout and painting as the user interacts with the web page.
## Screenshots

![Screenshot](https://b2600043.smushcdn.com/2600043/wp-content/uploads/2019/07/Block-Diagram-Showing-Web-Browser-Architecture.gif?lossy=0&strip=1&webp=1)

# Hi, I'm Toukir Solanki! 👋

## 🚀 About Me
A true triple threat in the tech industry. Not only am I a skilled Frontend Developer, but I also bring a wealth of experience as a Project Manager and Graphics Designer. With my ability to seamlessly navigate and excel in multiple roles, I am a valuable asset to any team. My expertise in Frontend Development, coupled with my experience in project management and graphic design, allows me to deliver truly outstanding results. 

## Other Common Github Profile Sections
👩‍💻 I'm currently working on Geeks Invention as a Project Manager and Frontend Dev Intern

🧠 I'm currently learning React with the help of Pesto Tech

⚡️ Fun fact about me  = I love video GAMES 🎮 (PC)

