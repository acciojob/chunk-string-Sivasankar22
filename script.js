function stringChop(str, size) {
    // Check if the input string is null or empty
    if (!str || str.length === 0) {
        return [];
    }
    
    // Initialize an array to store the chunks
    const chunks = [];
    
    // Iterate over the string and create chunks
    for (let i = 0; i < str.length; i += size) {
        // Get the substring of the current chunk
        const chunk = str.substring(i, i + size);
        // Push the chunk into the array
        chunks.push(chunk);
    }
    
    return chunks;
}

// Example usage:
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
