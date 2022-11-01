const icons:any = {
    search:
    "M7.333 1.333a6 6 0 0 1 6 6c0 1.417-.491 2.719-1.312 3.745h0l1.783 1.783c.26.26.26.682 0 .943s-.682.26-.943 0h0l-1.783-1.783c-1.026.821-2.328 1.312-3.745 1.312a6 6 0 1 1 0-12zm0 1.333a4.67 4.67 0 0 0-4.667 4.667A4.67 4.67 0 0 0 7.333 12 4.67 4.67 0 0 0 12 7.333a4.67 4.67 0 0 0-4.667-4.667z",
    basket:
    "M9.414 2.472l2.862 2.862h1.622c.406 0 .717.359.66.761l-.979 6.855a2 2 0 0 1-1.98 1.717H4.401a2 2 0 0 1-1.98-1.717l-.979-6.855c-.057-.402.254-.761.66-.761h1.622l2.862-2.862a2 2 0 0 1 2.828 0zm3.715 4.195H2.87l.871 6.094c.047.328.328.572.66.572h7.197c.332 0 .613-.244.66-.572l.871-6.094zM8.471 3.415a.67.67 0 0 0-.943 0h0L5.609 5.334h4.781zM5.333 8c.368 0 .667.298.667.667v2.667c0 .368-.298.667-.667.667s-.667-.298-.667-.667V8.667c0-.368.298-.667.667-.667zM8 8c.368 0 .667.298.667.667v2.667c0 .368-.298.667-.667.667s-.667-.298-.667-.667V8.667A.67.67 0 0 1 8 8zm2.667 0c.368 0 .667.298.667.667v2.667c0 .368-.298.667-.667.667S10 11.702 10 11.334V8.667c0-.368.298-.667.667-.667z",
};

const Icon = (props:any) => {
    const size = props.size ? props.size : 16;
    const width = props.width ?? size;
    return (
      <svg
        className={(props.className)}
        width={width}
        height={size}
        viewBox="0 0 16 16"
        fill={props.fill}
        style={props.style}
      >
        <path d={icons[props.name]}></path>
      </svg>
    );
  };
  
  export default Icon;