import quiz from "./images/quiz-app.png"
import workout from "./images/workout-app.png"
import portfolio from "./images/portfolio-app.png"

const projects = {project1: {img:quiz, title:"Quiz Application", frameworks:["Angular", "MySQL", "CPanel", "Node.js", "Express", "JWT"], description:"The Quiz Application uses a MySQL database with Node.js Express Backend to store web developer questions. To retain login status it implements JSON Web Tokens storing the user's id. Users can create problems which are added to the general database and their own problem set. Users can search their problems and the general database.", code:"https://github.com/Ampatte2/Angular-Quiz-App", demo:"https://workout3.herokuapp.com/"}, 
project2: {img:workout, title:"Workout Mixer", frameworks:["React", "Redux", "Mongoose", "MongoDB", "BCrypt", "Node.js", "Express"], description:"The Workout Mixer Application uses a Atlas MongoDB databse with Node.js Express backend to deliver a fully randomized 4 week workout from a sample workout. Each week has 4 unique excersizes for 6 different muscle groups split into four days. Uses BCrypt to store user id and for validation. Users can create a new randomized workout at the end of the workout month", code:"https://github.com/Ampatte2/workout-server", demo:"https://workout3.herokuapp.com/"}, project3: {img:portfolio, title:"Portfolio", frameworks:["React"], description:"Portfolio Application to display presentation skills through styled components. Custom scroll logic optimized for mobile and desktop along with onClick logic to exit modals when a click is registered outside the target area. CSS includes the use of blur and modals.", code:"https://github.com/Ampatte2/Portfolio", demo:""}};

export default projects;