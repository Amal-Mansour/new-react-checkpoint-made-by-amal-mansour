// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       {/* create the navebar navigation  */}
      <navbar className="container">
    
      <ul className="nav-container">
        <span className="logo">TraVeL<br/>PaRaDiSe</span>
        
      <li><a href="#"className="listItem"></a>Home</li>
      <li><a href="#"className="listItem"></a>About</li>
      <li><a href="#" className="listItem"></a>Product</li>
      
      <button className="btn">Contact</button>
      </ul>
      </navbar>

      <h1 className="title"><b>D</b>rop<b> M</b>e <b>A</b> <b>L</b>ine</h1>
{/* create a form for contact input */}
   <div className="formContainer">
   <form action ="/action_book.php" type="post">
  <label for="fname">First name :</label>
  <input className="textAr" type="text" id="fname" name="fname" value="John"/><br></br>

  <label for="lname">Last name :</label>
  <input   className="textAr" type="text" id="lname" name="lname" value="Doe"/><br></br>


  <label for="mail"> Your email :</label>
  <input   className="textAr" type="email" id="mail" name="mail" value ="xxxxxx@gmail.com"/> <br></br>
  
  <label for="phone">Phone Number :</label>
  <input   className="textAr" type="tel" id="phone" name="phone" value="+"/> <br></br>
  
  <label for="ddate">Departure Date :</label>
  <input  className="textAr"  type="date" id="ddate" name="ddate"/> <br></br>
  
  <label for="dtime">Departure Time :</label>
  <input  className="textAr" type="time" id="dtime" name="dtime"/><br></br>

  <label for="ddate">Arrival Date :</label>
  <input  className="textAr"  type="date" id="ddate" name="ddate"/> <br></br>

  <label for="dtime">Arrival Time :</label>
  <input  className="textAr" type="time" id="dtime" name="dtime"/><br></br>

  
  <label for="npassengers">Number of Passengers :</label>
  <input  className="textAr" type="number" id="npassengers" value="0"/> <br></br>

  {/* create a checkbox for ticket quality */}
 
  <h4 className="labTitle"> type of ticket :</h4>
  <div className="labDiv">
  <label  className="lab"for="economy">Economy</label>
  <input  className="check" type="checkbox" id="economy"/> <br></br>

 <label  className="lab" for="business">Business</label>
  <input  className="check" type="checkbox" id="business"/> <br></br>

   <label className="lab" for="first">First Class</label>
  <input  className="check"  type="checkbox" id="first"/><br></br>
  </div>
  </form>
  
  </div> 

<div className="textareaBtn">
  <textarea  id="box"type="text" placeholder=" Type your message here"></textarea><br></br>
     <button className="btn2">Comment</button>
     </div>
    
        
    </div>

  );
}




export default App;
