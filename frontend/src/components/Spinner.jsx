function Spinner() {
  return (
    // full screesn spinner
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default Spinner;


/**
 *     <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
      <div className="h-48 rounded-t dark:bg-gray-700"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
        <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
      </div>
    </div>
 */