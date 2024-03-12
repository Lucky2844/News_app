let inpt = document.getElementById("Inpt");
let main = document.getElementsByTagName("main")[0]
let aside = document.getElementById('aside')
      let toggle = () => {
         if(aside.style.marginLeft == "-25rem"){ 
            aside.style.transition ='0.5s ease'
            aside.style.marginLeft ="0rem"
            console.log('hello');
         }
         else{
            aside.style.marginLeft = "-25rem"
            // console.log('hii');
         }
      }

function GetSearch()
{
    main.innerHTML = ""
    GetNews(inpt.value);
}

function NewsCard(t,c,a)
{
  let NewsCard = document.createElement("div");
  NewsCard.classList.add("NewsCard");
  NewsCard.innerHTML = `
  <img id = 'Img' src = ${t}>
  <hr>
  <h2>Tittle: ${c}</h2>
  <p>${a}</p>
  `
  main.appendChild(NewsCard);
}

async function GetNews(value)
{
    let NewsData = await fetch(`https://newsapi.org/v2/everything?q=${value}&sortBy=publishedAt&apiKey=8873d00209fd40aba86d82a5501489d9`);
    NewsData = await NewsData.json();
    Articls = NewsData.articles;
    console.log(Articls);

    Articls.forEach((e) => {
        console.log(e.author);
        console.log(e.title);
        console.log(e.urlToImage);
        NewsCard(e.urlToImage,e.title,e.author)
    });
}



GetNews("India")