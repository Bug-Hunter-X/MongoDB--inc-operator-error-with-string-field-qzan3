```javascript
// Correct usage of $inc operator with a numeric field
db.collection('myCollection').updateOne({name: "John"}, {$inc: {age: 1}});
```