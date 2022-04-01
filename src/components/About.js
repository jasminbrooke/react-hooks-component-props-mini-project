
function About({about, image = "https://via.placeholder.com/215"}) {
    return (
      <aside>
        <img alt="blog logo" src={image}></img>
        <p>{about}</p>
      </aside>
    )
  }

  export default About;