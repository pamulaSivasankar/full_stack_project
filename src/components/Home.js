import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';


export default function Home() {
  return (
    <div>
      <div className='img1'><h1><img src='https://qiscet.edu.in/qiscet/images/qiscetlogo.jpg' alt='...' /></h1></div>
      <h2><marquee>25th silver jublee celebration on 5th-april-2023</marquee></h2>
      <h3>counciling code:Quise ; contact : 9390469218</h3>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://qiscet.edu.in/qiscet/images/SA112.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://qiscet.edu.in/qiscet/images/s5.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://qiscet.edu.in/qiscet/images/s3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <h4><u>ABOUT QUISCET</u></h4>
      <p>The QIS College of Engineering and Technology was established in the year 1998, and sponsored by Sri Nidamanuri Educational Society to promote technological education to meet the requirements <br />of a developing nation in the context of global concern at the threshold of the twenty first century.

        A team of educated, enlightened, experienced technocrats with vision,<br /> firmly determined to promote high quality education is striving to provide every facility for achieving excellence. The college is one of the best colleges in and around the Prakasam Dist. <br />The Standards of teaching are very high when compared with the other colleges.<br /> The college is affiliated to the Jawaharlal Nehru Technological University, Kakinada.<br />

        The Engineering Programs offered at QIS College of Engineering are designed for career initiation and growth in the competitive market place. There is equal emphasis on theoretical concepts as well as practical insights,<br /> making our programs the right weapons to conquer the career goals.</p>
        <div className='row'>
        <div class="col-sm-8"><img src={'https://qiscet.edu.in/qiscet/images/office.png'}/></div>
    <div class="col-sm-4"><p>The Campus is located at about 2 km from Ongole town,<br/> on Ongole-Pondur road adjoining the National Highway-5,<br/> in a calm and salubrious atmosphere with beautiful landscape.<br/>

    <br/>Ponduru Road,<br/>
vengamukkapalem,<br/>
Ongole,<br/>
Prakasam Dist,<br/>
Andhra Pradesh - 523272<br/>
Rout Maps </p></div>
        </div>
        <div class="container text-center">
  <div class="row">
    <div class="col">
    <img src={'https://qiscet.edu.in/qiscet/images/Kalyan-Chakravarthy.png'} alt='...'/>
    <p>Dr. N.S.Kalyan Chakravarthy<br/>

M.Tech., Ph.D.<br/>

Secretary & Correspondent</p>
    </div>
    <div class="col">
    <img src={'https://qiscet.edu.in/qiscet/images/Nageswara-Rao.png'} alt='...'/>
    <p>Sri N.Nageswara Rao<br/>

B.E., MIE., President<br/>

Retd Chief Engineer, Irrigation Dept</p>
    </div>
    <div class="col">
      <img src={'https://qiscet.edu.in/qiscet/images/cet_principal.png'} alt='...'></img>
      <p>Dr. Y.V.Hanumantha Rao<br/>

M.Tech, Ph.D<br/>

Principal</p>
    </div>
  </div>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="class">
  <img src={"https://qiscet.edu.in/qiscet/images/events/evnts_sml/sm1.jpg"} class="card-img-top" alt="..."/>
  <div class="card-body">
    
   
  </div>
</div>
    </div>
    <div class="col">
    <div class="class" >
  <img src="https://qiscet.edu.in/qiscet/images/events/evnts_sml/sm2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
   
    
  </div>
</div>
    </div>
    <div class="col">
    <div class="class" >
  <img src="https://qiscet.edu.in/qiscet/images/sm3.JPG" class="card-img-top" alt="..."/>
  <div class="card-body">
    
   
  </div>
</div>
    </div>
    <div class="col">
    <div class="class">
  <img src="https://qiscet.edu.in/qiscet/images/events/evnts_sml/sm4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">

  </div>
</div>
    </div>
  </div>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="class">
  <img src={"https://qiscet.edu.in/qiscet/images/events/evnts_sml/sm8.jpg"} class="card-img-top" alt="..."/>
  <div class="card-body">
   
   
  </div>
</div>
    </div>
    <div class="col">
    <div class="class" >
  <img src="https://qiscet.edu.in/qiscet/images/events/evnts_sml/sm7.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
   
    
  </div>
</div>
    </div>
    <div class="col">
    <div class="class" >
  <img src="https://qiscet.edu.in/qiscet/images/events/evnts_sml/sm6.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    
   
  </div>
</div>
    </div>
    <div class="col">
    <div class="class">
  <img src="https://qiscet.edu.in/qiscet/images/events/evnts_sml/sm5.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
 
    
  </div>
</div>
    </div>
  </div>
</div>
<h5><u>OUR CLIENTS</u></h5>
<div class="container text-center">
  <div class="row">
    <div class="col">
      <img src='https://qiscet.edu.in/qiscet/images/cog.png'alt='...'/>
    </div>
    <div class="col">
    <img src='https://qiscet.edu.in/qiscet/images/infosys.png'alt='...'/>
    </div>
    <div class="col">
    <img src='https://qiscet.edu.in/qiscet/images/mphasis.png' alt='...'/>
    </div>
    <div class="col">
    <img src='https://qiscet.edu.in/qiscet/images/hcl.png' alt='...'/>
    </div>
  </div>
</div>

<div class="container text-center">
  <div class="row">
    <div class="col">
      <img src='https://qiscet.edu.in/qiscet/images/tech_mahindra_logo.png'alt='...'/>
    </div>
    <div class="col">
    <img src='https://qiscet.edu.in/qiscet/images/ing.png' alt='...'/>
    </div>
    <div class="col">
    <img src='https://qiscet.edu.in/qiscet/images/genpact.png'alt='...'/>
    </div>
    <div class="col">
    <img src='https://qiscet.edu.in/qiscet/images/intergraph.png' alt='...'/>
    </div>
  </div>
</div>
<div class="row">
    <div class="col">
    <Link className="btn btn-success" to={'/Gallery'}>Gallery</Link> 
    </div>
    <div class="col">
    <Link className='btn btn-primary' to={'/student-deytails'}>student-details</Link>
    </div>
    <div class="col">
    <Link className='btn btn-danger' to={'/Courses'}>Courses offered</Link>
    </div>
   
  </div>
  <footer className='footer1'>
    <div class="container text-center">
      <div class="row">
        <div class="col">
       <u>Address</u><br/>&nbsp
    
    Vengamukkapalem, Ongole<br/>
    
    Prakasam District - 523272<br/>
    
    Phone: +91 92464 19542<br/>
    
    Mobile: +91 92464 19542<br/>
    
    Fax: +91 92464 19542<br/>
    
    Email: principal@qiscet.edu.in
        </div>
        <div class="col">
       <u> Facilities</u><br/>
    Cafeteria<br/>
    
    Mineral Water (RO Plant)<br/>
    
    Medical Facility<br/>
    
    Bank ATM<br/>
    
    Central Library<br/>
    
    Transportation Facility ...<br/>
        </div>
        <div class="col">
        <u>Quick Links</u><br/>
    Principal<br/>
    
    Careers<br/>
    
    Corporate Relations<br/>
    
    Skill Center's<br/>
    
    E - Learning<br/>
    
    Exam Notifications<br/>
        </div>
        <div class="col">
        <u>Newsletter</u><br/>
    By subscribing to our mailing list you will always get latest news and updates from us.<br/>
    
    Email: newsletter@qiscet.edu.in<br/>
        </div>
      </div>
    </div>
    
    </footer>
    <footer className='footer2'><p>All Rights Reserved to QIS COLLEGE OF ENGINEERING & TECHNOLOGY Last Updated On 26-04-2023<br/>
    
    Thank you for visiting our Websit- View Count: 993</p></footer>



    </div>
    

  )
}
