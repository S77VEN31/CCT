const Photo = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={80}
      fill="none"
      {...props}
    >
      <path
        fill="#D3D3D3"
        d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" 
        />
    </svg>
  );
  export default Photo;