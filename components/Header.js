const Header = () => {
  return (
    <div className="">
      <h1 className="mont text-4xl text-gray-900 font-bold leading-10 mt-20">
        Hello there!🤗
      </h1>
      <h1 className="mont leading-10 text-4xl text-gray-900 font-bold xl:leading-loose xl:text-4xl">
        I&apos;m <p className="inline text-sky-500">Fatima zahra</p>, Software
        engineer and competitive programmer🔥.
        <p className="text-2xl py-4 font-semibold">
          Currently PHP/Magento developer at{" "}
          <a
            className="text-sky-500 underline"
            href="https://www.sqli.com/int-en"
          >
            SQLI
          </a>{" "}
          Maroc.
        </p>
      </h1>
    </div>
  );
};
export default Header;
