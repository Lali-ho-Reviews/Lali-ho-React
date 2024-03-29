const Search = () => (

    <form className="container mx-auto" action="/fc" method="get">   
        <label for="company-search" class="mb-2 text-s font-s sr-only text-gray-300">Search</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" id="search_query" name="s" class="block p-4 pl-10 w-full text-sm   rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500" placeholder="Search" required/>
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Search</button>
        </div>
    </form>

);

export default Search