Nested Comments

comments = {
  id: 1,
  items: []
};
if comments object is has id: 1, and items array empty ***then no comments are added yet.***

***Objective***: 
Recursively, loop through and render each comment in comment prop


1) Observe beautiful recursion in Comment.js

```jsx
<div style={{paddingLeft: 25}}>
    {comment?.items?.map((cmnt) => {
        return <Comment key={cmnt.id} comment={cmnt}/>;
    })}
</div>
```
Here this code renders the comment component in parent-child with proper indentation.

![](./readme_resources/Screenshot%202023-10-24%20at%209.36.23%20AM.png)


2) Now, once UI is rendered to add functionality.

We can use conditional rendering, to show reply, edit, delete or save, cancel based on state of isEditing useState constant.

3) Lets add the reply functionality, when clicked on reply we should be able to add a comment, and as soon as reply is clicked we need to add input box with typing functionality along with buttons save and cancel.