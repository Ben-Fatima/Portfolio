const Title = ({ children }) => {
  return (
    <div className="pb-10 py-10">
      <h1 className="sky-600 text-4xl font-bold mont w-full uppercase">
        {children}
      </h1>
      <div className="w-10 h-1 bg-gold" />
    </div>
  );
};
export default Title;
