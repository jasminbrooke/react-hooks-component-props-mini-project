import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
      {
        posts.map((article, i) => {
          return <Article article={article} key={i}/>
        })
      }
    </main>
  )
}

  export default ArticleList;