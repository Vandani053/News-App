export async function getArticles_headlines(){
  try{
    let articles = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=40ebe4440fa0454895bf42dc9ce15d3a");

    let result = await articles.json();
    // console.log(result)
    // articles = null;

    return result.articles;
  }
  catch(e){
    throw e;
  }
}

export async function getArticles_tech(){
  try{
    let articles = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=40ebe4440fa0454895bf42dc9ce15d3a");

    let result = await articles.json();
    // console.log(result)
    // articles = null;

    return result.articles;
  }
  catch(e){
    throw e;
  }
}


export async function getArticles_health(){
  try{
    let articles = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=40ebe4440fa0454895bf42dc9ce15d3a");

    let result = await articles.json();
    // console.log(result)
    // articles = null;

    return result.articles;
  }
  catch(e){
    throw e;
  }
}

export async function getArticles_sports(){
  try{
    let articles = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=40ebe4440fa0454895bf42dc9ce15d3a");

    let result = await articles.json();
    // console.log(result)
    // articles = null;

    return result.articles;
  }
  catch(e){
    throw e;
  }
}