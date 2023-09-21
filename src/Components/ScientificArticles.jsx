import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Config/Firebase'


function ScientificArticles() {

    const[articlesList,setArticlesList]=useState([])
    const articlesCollectionRef=collection(db,"Articles")
    useEffect(()=>{
        getArticlesList()
    },[])



    async function getArticlesList(){
        const data = await getDocs(articlesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));
        setArticlesList(filteredData);
        console.log(filteredData);
    }

  return (


    <div className='Articles container '>
      <h2 className='text-center'>Scientific Articles</h2>
      <div className='btmBorder'></div>

<div class="accordion accordion-flush mt-5" id="accordionFlushExample">
  {articlesList.map((article) => (
    <div class="accordion-item myBg2" key={article.id}>
      <h2 class="accordion-header" id={`heading-${article.id}`}>
        <button
          class="accordion-button collapsed myBg1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${article.id}`}
          aria-expanded="false"
          aria-controls={`collapse-${article.id}`}
        >
          {article.Heading}
        </button>
      </h2>
      <div
        id={`collapse-${article.id}`}
        class="accordion-collapse collapse"
        aria-labelledby={`heading-${article.id}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{article.Paragraph1}</div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{article.Paragraph2}</div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{article.Paragraph3}</div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{article.Paragraph4}</div>
        </div>
      </div>
    </div>
  ))}
</div>














    </div>

  )
}

export default ScientificArticles