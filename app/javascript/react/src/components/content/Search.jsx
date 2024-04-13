// eslint-disable-next-line no-unused-vars
import * as React from "react";

const Search = () => {
  const inputRef = React.useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <section className="flex justify-between items-center border-b-2 h-16">
      <div className="p-5 hover:cursor-text w-full" onClick={focusInput}>
        <div className="gap-3 w-full inline-flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search"
            ref={inputRef}
            className="!outline-none border-none w-full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
      <div className="bg-blue-200 w-16 h-16 flex items-center justify-center hover:cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#2563eb", transform: "", msFilter: "" }}
        >
          <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Search;
