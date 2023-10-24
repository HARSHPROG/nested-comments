Nested Comments

comments = {
  id: 1,
  items: []
};
if comments object is has id: 1, and items array empty ***then no comments are added yet.***

***Objective***: 
Recursively, loop through and render each comment in comment prop


Observe beautiful recursion in Comment.js

```jsx
<div style={{paddingLeft: 25}}>
    {comment?.items?.map((cmnt) => {
        return <Comment key={cmnt.id} comment={cmnt}/>;
    })}
</div>
```
Here this code renders the comment component in parent-child with proper indentation.

![](./readme_resources/Screenshot%202023-10-24%20at%209.36.23%20AM.png)
