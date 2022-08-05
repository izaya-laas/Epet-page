const Main = ({ children, className }) => {
  return (
    <main
      className={`p-4 text-center relative px-4 pb-8 mx-auto tablet:w-3/4 tablet:px-0 ${className}`}
    >
      {children}
    </main>
  );
};

export default Main;
