export const fetchData = async (url) => {
    const response = await fetch(url);
    // const data = await response.json();
    return response;
}

// fetchData('https://jsonplaceholder.typicode.com/users')