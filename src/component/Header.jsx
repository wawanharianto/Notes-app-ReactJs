import { React, useState } from 'react';

function Header({ find, search }) {
  const onSearch = (e) => {
    find(e.target.value);
  };

  return (
    <>
      <header>
        <div className="konten">
          <h1>Notes</h1>
          <input type="text" placeholder="Search Notes ..." value={search} onChange={onSearch} />
        </div>
      </header>
    </>
  );
}

export default Header;
