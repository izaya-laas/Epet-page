const ItemLink = ({ children, className }) => {
  return (
    <li
      className={`text-sky-300 relative flex justify-center font-bold mb-2 ${className}`}
    >
      {children}
    </li>
  );
};

export default ItemLink;
