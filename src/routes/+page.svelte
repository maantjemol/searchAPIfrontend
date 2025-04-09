<main class="flex flex-col min-h-screen p-4 bg-gray-100">
  <section class="flex flex-col items-center justify-center flex-1">
    <h1 class="text-3xl font-bold text-gray-800 flex gap-2 items-center">
      <span>Search Router</span>
      <img src="/favicon-light.svg" alt="Logo" class="w-8 h-8" />
    </h1>
    <p class="mt-4 text-lg text-gray-600 text-center">
      Automatically switch between <span class="font-bold">Perplexity</span> and
      <span class="font-bold">Google</span> <br />
      based on the search query.
    </p>
    <form
      action="https://search.out.maantje.me/search"
      method="get"
      class="flex gap-2 mt-4 w-full max-w-prose"
    >
      <input
        type="search"
        name="q"
        placeholder="Enter your search query"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <button
        type="submit"
        class="px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
      >
        Search
      </button>
    </form>
    <p class="mt-4 text-sm text-gray-500">
      Powered by <a href="https://perplexity.ai">Perplexity</a> and
      <a href="https://www.google.com">Google</a>
    </p>
  </section>
  <footer class="flex items-center justify-center">
    <p>
      Source available on <a
        href="https://github.com/maantjemol/search-router"
        target="_blank"
        class="underline">Github</a
      >. By
      <a href="https://github.com/maantjemol" target="_blank" class="underline"
        >Manuel Mol</a
      >
    </p>
  </footer>
</main>
