const Title = ({ children }) => {
  return (
    <div className="lg:pb-10 lg:py-10">
      <h1 className="sky-600 text-center text-2xl lg:text-left lg:text-3xl font-black mont w-full uppercase">
        {children}
      </h1>
      <div className="lg:w-10 lg:h-1 bg-yellow-400 h-1" />
    </div>
  );
};
export default Title;
