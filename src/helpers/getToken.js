
const getToken = (url) => {
    let urlArray = url.split("");
    let startingIndex = findCharIndex(urlArray,"#");
    
    let params = urlArray.splice(startingIndex + 1, urlArray.length).join("")
    
    // Split the string by '&'
    const pairs = params.split('&');
    
    const parameters = {};
    
    // For each pair, split by '=' and store in an object
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        parameters[key] = decodeURIComponent(value);
    });
    
    return parameters;
}

const findCharIndex = (array, char) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] === char){
           return i;
        }
    }
}

export default getToken;