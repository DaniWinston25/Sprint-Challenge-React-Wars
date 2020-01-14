# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library that enables developers to create web applications that can change your data without reloading your page. This is useable because its faster and simpler to accomplish than having to rebuild the entire UI. It also makes it a bit more of a breeze to maintain because of its reusability.

1. What does it mean to think in react?

To me I like to believe that react is the type of program that helps web developers think a bit more on the go in a sense. The reason being is because react has the capability for you lay it out as you go, like in a small way like an outline when writing a paper but instaed of characters in the paper you have components and each one of those have their own job that you break down as well. So just like typical coding it is a process but the "thinking" in react is more quickly because the process is so easily created. 

1. Describe state.

State is part of the component that has its own "identity" but it can also change within the app.

1. Describe props.

Props are the properties that are passed to one component to the other. It differs from state in this manner and because its passed from the "parent" to the "child" and cant or rather shouldnt be alters by the child. 


1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects is anything that is going on outside the functions execution. We synce effects in a react component by the useEffect Hook. This hook creates a "side effect" that is also know as a dependency which is an array that helps the effect stop firing once the optional argument is done, without the dependency we can run into an infitie loop because it will continue to run after every change. 