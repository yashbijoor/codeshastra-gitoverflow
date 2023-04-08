import React, {useState} from 'react';
import '../css/Tips.css'

function TipsPage() {



  
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;





    return(
        <div className="Tips">
          
        <div class="slide slide-top">
  <div class="slide-content">Keep track of your expenses</div>
  <img src="https://media.istockphoto.com/id/1000640816/vector/online-family-budget-flat-isometric-vector-concept.jpg?s=612x612&w=0&k=20&c=tc3bWKH6_Gt0Tj0FD_F3bKTuXWUQB6OdwJl9ijSkoJ4=" height="200px" width="200px"></img>
        </div>
        <br/>
<div class="slide slide-right">
  <div class="slide-content">Use credit cards responsibly</div>
  <img src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/26291552/26291552-1654590653273-23389eeee893b.jpg" height="200px" width="200px"></img>
</div>


<div class="slide slide-bottom">
  <div class="slide-content">Build an emergency fund</div>
  <img src="https://images.unsplash.com/photo-1526362141318-ed937b98ed31?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=44a9040116984162241c5e3f60c3c882&auto=format&fit=crop&w=400&q=60" height="200px" width="200px"></img>
</div>
<br/>
<div class="slide slide-left">
  <div class="slide-content">Gymnastics as a sport has been around for 2,000 years.</div>
  <img src="https://images.unsplash.com/photo-1516861977425-092ed4141b92?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a20d3b5d690ebb6ed9d089b678b5cdc&auto=format&fit=crop&w=400&q=60" height="200px" width="200px"></img>
</div>  
</div> 
    ) 
}
export default TipsPage;
