# Day 1

### Theory

1. css styling

- css can be applied in different ways in a react component: External, Module, Inline
- Module css styling helps to eliminate naming conflict
- Inline styling if done within the component by using javascript, in this method all the variables are camalcase and values are seperated by , and not ;
- also we do not use className for inline we will use style keyword to apply css either directly or passing a const/var that includes the styles (we have passing method in this repo)
- inline is good to use when minimal styling is required for isolated components
- inline reduces the readability of the component

2. Props

- props -> props are read-only properties that are shared between components. A parent component can send data to a child component.
- how does props work in component -> add props as parameter to the component function
- we can then use this props object(parameter) by passing key value pair upon calling it in out App.jsx
- propTypes -> a mechanism that ensures that the passed value is of the correct datatype.
  (age: PropTypes.number) [for debugging]
- Default props -> default values from props in case they are not passed from the parent component eg: Name: "Guest

3. Conditional rendering

- allows you to Control what gets rendered
  in your application based on certain conditions
  (show, hide, or change components)
- we will use props and if else statements to perform conditional rendering

### Tasks performed

- added styling in a button component using different ways.
