Nested Comments

comments = {
  id: 1,
  items: []
};
if comments object is has id: 1, and items array empty ***then no comments are added yet.***

***Functionality***
For Each comment made show Reply, Edit, Delete,
![](./readme_resources/Screenshot%202023-10-24%20at%206.15.41%20PM.png)

When clicked on Edit show save and cancel
![](./readme_resources/Screenshot%202023-10-24%20at%206.17.35%20PM.png)

***Approach***

***1st approach*** is a naive approach implemented in Components/Comment.js
Here i am just manipulating the state of current comment state and using useState method to reflect it on screen. Here, currently delete functionality could not be implemented in this approach.



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

***2nd approach*** is making a custom hook useNode which has returns 3 functions insertNode editNode deleteNode.

They directly manipulate the main comment object. Here implemented insert, update, delete node functionality like a tree recursive solution, so when it gets the required node, it performs the operation there.