import React from 'react';

function Search({ value, changeValue }) {
  return (
    <div class="flex items-center justify-center ">
      <div class="flex border-2 border-gray-200 rounded">
        <input
          value={value}
          onChange={(e) => changeValue(e.target.value)}
          type="text"
          class="px-4 py-2 w-80"
          placeholder="Search..."
        />
        {/* <button class="px-4 text-white bg-gray-600 border-l ">
					Search
				</button> */}
      </div>
    </div>
  );
}

export default Search;
