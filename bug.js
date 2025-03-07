```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect conditional rendering logic
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count]); // Only runs when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button> 
    </div>
  );
}
```