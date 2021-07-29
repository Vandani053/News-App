import {article_url,country,category,api_key,lang} from "./rest_api_config";

export async function getArticles(){
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