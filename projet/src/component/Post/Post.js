import "./Post.css"

export default function Post() {
  return (
   <div  className="posts">
        <div className="post">
          <img
            className="postImg"
            src="https://img.freepik.com/premium-vector/personal-development-flat-concept-vector-spot-illustration-set_151150-13984.jpg?w=2000"
            alt="school"
          />
          <div className="postInfo">
          
            <span className="postTitle">
             
             Personnal Ddevelopment 
            
            </span>
            <hr />
           
          </div>
          <p className="postDesc">
      My School teach kids self-discipline through self-motivation and encourage kids to set goals for themselves and take ownership over their own success or failure. Teach Self-Acceptance: When we accept ourselves as we are, it makes it easier to grow as individuals and build genuine relationships with other people.
          </p>
        </div>
        <div className="post">
        <img
          className="postImg"
          src="img1.jpg"
          alt="school"
        />
        <div className="postInfo">
         
          <span className="postTitle">
           
          Pedagogical approaches
          
          </span>
          <hr />
        
        </div>
        <p className="postDesc">
        In My School you find  5 different Pedagogical approaches, being the constructivist approach, the collaborative approach, the reflective approach, the integrative approach, and, finally, the inquiry-based approach.
        </p>
      </div>

      <div className="post">
      <img
        className="postImg"
        src="https://img.freepik.com/premium-vector/flat-cartoon-characters-city-parkhealthy-outdoor-activities-social-vector-illustration-concept_189557-2621.jpg"
        alt="school"
      />
      <div className="postInfo">
      
        <span className="postTitle">
         
        Social Activities
        
        </span>
        <hr />
      
      </div>
      <p className="postDesc">
     
      Activities and games for socialization are a great way for your child to learn how to behave around their peers, no matter if he is a toddler, preschooler or if he just started kindergarten. Games can teach skills like taking turns, managing emotions, and reading body language.
    In MY SCHOOL we Use these evidence-based social skills activities to help your child build their social behaviors and learn how their actions affect others. With these games, they can become more independent and maintain healthy relationships throughout their lives.
      </p>
    </div>
    <div className="post">
    <img
      className="postImg"
      src="https://img.freepik.com/free-vector/flat-international-mother-language-day-illustration_23-2149219243.jpg?w=2000"
      alt="school"
    />
    <div className="postInfo">
      <span className="postTitle">
       
      language learning   
      
      </span>
      <hr />
      
    </div>
    <p className="postDesc">
    Today there are many reasons why language learning has become an essential element within the education system. The demand for the acquisition of language skills in the 21st century continues to rise year after year and has become a global necessity, especially for new generations. As a result, language learning is of particular importance from an early age.
    </p>
  </div>
        </div>
        
      );
    }
   
