const Main = ({ children, className, onClick }) => {
  return (
    <main
      onClick={onClick}
      className={`p-4 text-center relative px-4 pb-8 mx-auto tablet:w-3/4 tablet:px-0 ${className}`}
    >
      {children}
    </main>
  );
};

export default Main;
