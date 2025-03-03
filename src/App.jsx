import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <img src="logo.jpg" alt="" height="110px" />
        <div className="nav">

          <a href="logo.jpg">HOME</a>
          <a href="logo.jpg">PAGES</a>
          <a href="DROPDOWN">DROPDOWN</a>
          <a href="link">LINK TEXT</a>
          <a href="link">LINK TEXT</a>

        </div>

      </div>
      <div className="content-box">
        <div className="card1">
          <div className="cardhead">
            <p>QUISQUE VEHICULA</p>
            <p>URNA AMET</p>
          </div>
          <div className="cardbody">
            <p>ullamcorper mauris sit amet</p>
            <p>sed eget ultricies sem</p>
            <p>proin quis lacus egestas</p>
            <p>adipis cing ornare</p>
            <p>donec luctus convallis rhoncus</p>
          </div>
          <div className="cardfooter">
            <strong>READ MORE</strong>
          </div>

        </div>
        <div className="card1">
          <div className="cardhead">
            <p>ALIQUAM PURUS URNA</p>
            <p>PORTA FAUCIBUS</p>
          </div>
          <div className="cardbody">
            <p>ullamcorper mauris sit amet</p>
            <p>sed eget ultricies sem</p>
            <p>proin quis lacus egestas</p>
            <p>adipis cing ornare</p>
            <p>donec luctus convallis rhoncus</p>
          </div>
          <div className="cardfooter">
            <strong>READ MORE</strong>
          </div>

        </div>
        <div className="card1">
          <div className="cardhead">
            <p>PROIN ULTRICIES DUI</p>
            <p>LEO EGESTAS AUGUE</p>
          </div>
          <div className="cardbody">
            <p>ullamcorper mauris sit amet</p>
            <p>sed eget ultricies sem</p>
            <p>proin quis lacus egestas</p>
            <p>adipis cing ornare</p>
            <p>donec luctus convallis rhoncus</p>
          </div>
          <div className="cardfooter">
            <strong>READ MORE</strong>
          </div>

        </div>

      </div>
      <div className="secondbox">
        <div className="right">
          <p>MEECENAS LIBERO NUNC ERAT</p>
          <br />
          <div className="secondcard">
            <div className="secondcardbody">

            </div>
            <div className="secondcardfooter">
              <p className="firstp">URNA SIT AMET PULVINAR</p>
              <p className="second">Aenean semper elementrum tellus, ut placerat leo. Quisque</p>
              <p className="second">Vehicula, urna sit amet</p>
              <button>READ MORE</button>

            </div>

          </div>

        </div>
        <div className="left">
          <p className="heading">ETTAM EROS NULLA POSUERE</p>
          <br />
          <div className="rect1">
            <div className="square">

            </div>
            <div className="content">
              <p className="contentp">PHASELLUS MASSA FELIS IN</p>
              <p className="small">By <span>A Name</span>  Friday, 6April 2045</p>
              <p className="medium">Aenean semper elementrum tellus, ut placerat</p>
              <p className="medium">leo. Quisque Vehicula, urna sit amet...</p>
              <button>READ MORE</button>
            </div>
          </div>
          <div className="rect2">
            <div className="square">

            </div>
            <div className="content">
              <p className="contentp">PHASELLUS MASSA FELIS IN</p>
              <p className="small">By <span>A Name</span>  Friday, 6April 2045</p>
              <p className="medium">Aenean semper elementrum tellus, ut placerat</p>
              <p className="medium">leo. Quisque Vehicula, urna sit amet...</p>
              <button>READ MORE</button>
            </div>
          </div>
          <div className="rect2">
            <div className="square">

            </div>
            <div className="content">
              <p className="contentp">PHASELLUS MASSA FELIS IN</p>
              <p className="small">By <span>A Name</span>  Friday, 6April 2045</p>
              <p className="medium">Aenean semper elementrum tellus, ut placerat</p>
              <p className="medium">leo. Quisque Vehicula, urna sit amet...</p>
              <button>READ MORE</button>
            </div>
          </div>


        </div>

      </div>
      <div className="thirdbox">
        <p className="thirdfirst">DONEC FACULTIES VOLUPAT LIGULA NEC EGESTAS</p>
        <p className="thirdsecond">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, veritatis magni sunt libero neque corporis</p>
        <div className="div1">
          <div className="div2">
            <div className="div3">


            </div>
            <div className="div4">
              <p>QUISQUE VEHICLA</p>
              <p>URNA SIT AMET</p>
              <p>PULVINAR DAPIBUS</p>
              <button>READ MORE</button>

            </div>

          </div>
          <div className="div5">
            <div className="div6">

            </div>
            <div className="div7">
              <p>QUISQUE VEHICLA</p>
              <p>URNA SIT AMET</p>
              <p>PULVINAR DAPIBUS</p>
              <button>READ MORE</button>

            </div>
          </div>

        </div>
      </div>
      <div className="fourth">
        <div className="sec1">
          <div className="fdiv1">
            <p className="foothead">LOREM IPSUM DOLLAR</p>
            <hr />
            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dicta officiis velit quam odio nostrum magnam perferendis accusantium.</p>

            <p className="text">street name & Number,Town, Postcode/Zip</p>
            <p className="text">+9042211910</p>
            <p className="text">sravanipopuri@gmail.com</p>
          </div>
          <div className="fdiv2">
            <p className="foothead">QUICK LINKS</p>
            <hr />
            <p className="text1">Home</p>
            <p className="text1">Blog</p>
            <p className="text1">Contact Us</p>
            <p className="text1">Gallery</p>
            <p className="text1">Portfolio</p>
          </div>
          <div className="fdiv3">
            <p className="foothead">KEEP IN TOUCH</p>
            <hr />
            <input type="text" placeholder="Email" />
            <br />
            <br />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="text">copyrights@2025</p>
      </div>
    </>
  )
}

export default App
