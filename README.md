# Unexpected useEffect Behavior

This repository demonstrates an uncommon bug related to the `useEffect` hook in React.  The bug involves unexpected behavior due to incorrect conditional rendering logic inside the `useEffect` hook. The solution corrects this logic to achieve expected functionality.

## Bug Description

The `MyComponent` initially displays 'Count: 0'. Incrementing the counter will log 'Count is greater than 0' to the console as expected. However, resetting the count to 0 doesn't stop the message from logging when the component is rendered.  The `useEffect` hook, with its dependency array `[count]`, re-renders whenever `count` changes. Therefore, even after resetting to 0, the effect runs again and logs the message. This is unexpected as the conditional statement should prevent this when the count is 0.

## Solution

The solution modifies the useEffect logic to address the issue accurately.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs and the behavior of the increment and reset buttons.