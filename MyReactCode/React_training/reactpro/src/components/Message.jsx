//In React, the children prop is a special prop that represents the content between the opening and 
// closing tags of a component. Even if you don't explicitly pass the children prop when using a 
// component, React automatically provides it if there's content between the tags.
// So, even though you're not explicitly passing the children prop in the Toolbar component, 
// React automatically handles it for you, allowing you to access any content placed between the opening and 
// closing tags of AlertButton. This behavior is part of React's JSX syntax and is a convenient way to compose 
// components with nested content.



function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Message() {
  return (
    <div>
      <AlertButton message="The movie is being played!">Play Movie</AlertButton>
      <AlertButton message="Uploaded the image!">Upload Image</AlertButton>
    </div>
  );
}
