# Answers

1.  What is React JS and what problems does it try and solve?

In my mind, React JS does two big things. First, it allows developers to easily create reuseable components. When building a social-media website, for instance, there are potentially thousands of posts or tweets that need to be rendered. Doing that manually is impossible, so reuseability is key. And, thank goodness, React makes life easy by using JSX, which allows developers to write components with a mix of HTML and JavaScript. That means developers don't have to write countless `document.createElement()`s along the way, *plus* things can be dynamic by using JS with its `ternary operator` and other useful things to make the HTML exactly what's desired.

The second big thing React JS brings to the table is, well, reactivity. As data changes or users interact with the web page, React allows the page to dynamically change as well. No need to refresh the page. It's *alive*.

1.  What does it mean to _think_ in react?

I don't know... My best answer to what I think this question is asking is that:

React is built both with a distinct top-down heirarchy and with components. This impacts the way a React developer should think about approaching a project. 

With components, the developer should endeavor to make each component do a single thing. Then, that component (and, likely, other components, too) is used by another component to do a bigger thing in concert. That means the developer should break down complex UIs into small parts.

With top-down heirarchy, I am referring to the behind-the-scenes stuff that makes the reactivity of React work. In most cases, data and information is both retrieved and stored at a higher level than the bottom-level components. That data and information is then distributed to those lower-level components, and cannot be directly sent back up the chain (there are ways, of course, but it typically involves sending a function *from* the higher level along with the data), so React developers must be mindful of the heirarchy.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class component has access to state, while a Functional component does not.

A Class component is, perhaps, like a military officer, and a Functional component is like an enlisted soldier. Typically, a Class component creates many Functional components, just like a a military officer is typically commanding multiple enlisted soldiers. The officer's responsibility is to be mindful of what each of her soldiers is doing, and to coordinate their efforts toward mission success. She gives each of them orders, and they go actually carry them out. That's not to say the enlisted soldiers are mindless – in fact, Functional components can have complex logic of their own and can carry out very important tasks, but all they have are the orders they're given and they work with that. 

Now, sometimes the officer gives soldiers a radio so they can report back in with new information. The soldiers cannot do anything about that information themselves, but they can report back. The officer has the new information, and can decide if anything needs to change. If it does, the officer can amend the orders to any or all of the soldiers as necessary, and the process continues.

1.  Describe state.

I like my analogy above. State is the commanding officer. Her job is to keep in mind all of the operation's moving parts. As the soldiers report back in, things change, and she knows about all of it. Then, as those things change, she amends the orders to the soldiers as needed.

State is like a variable, held at a higher level in the React application. State is something that changes, typically when a user interacts with the web page. If the thing in question can be derived another way, it typically isn't state.

1.  Describe props.

`Props` are passed to components. They are the directions – the orders – for the component. The component uses its `props` to customize its behavior or appearance. `Props` aren't dynamic. If something changes, it's typically the `state` that changes, and then amended `props` are send down through the application to the components again.
