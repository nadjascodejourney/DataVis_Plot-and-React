# First Datavisualization with Plot by Observable in React

Simple data visualization created with Plot by Observable in React code.

Important to know:

Since Plot creates its own DOM nodes to display the datavis, we need to "escape" the React world to delegate this completely to Plot.
This can be done by using Reacts useRef hook to designate a DOM node for Plot, where it can draw its graphs into.
All this happens within a useEffect and by doing this, Plot acutally draws its graphs as a side effect within the app.
