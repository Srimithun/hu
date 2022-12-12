import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './about.css'
import { Button } from '@mui/material';



export default function App() {

  return (
    <div>

  
      <div class="about-section">
        <h1>About Us</h1>
        <p><b>At <span>WE BUILD</span>, we have always strived for benchmark quality, customer centric approach, robust engineering, in-house research, uncompromising business ethics, timeless values and transparency in all spheres of business conduct.</b></p>
      </div>
      <div className='head1'>
        <h1>Why should you choose <span>WE BUILD</span>?</h1>
      </div>
      <div className='section1'>
        <img src="aboutusimg1.jpg" className='image1'/>
        
        <p><h2>WITH OVER <span>25</span> YEARS OF EXPERIENCE,</h2>WE BUILD epitomizes “passion at work” in totality. For us it is not only a catch phrase which sounds just right, rather we all strive to live it daily. It serves as our compass which guides us towards creating world class quality products and workmanship. It guides us to be transparent in all our dealings and adhere to delivery on time, each time.</p>
      </div>


       {/*=--------------------------- our awards-------------------------------------------- */}

       <div className="our-services">
<h1><span>WE BUILD</span> Awards</h1>
        
        <div class="row">
            <div class="facilities-col">
            <img src="./award1.jpg" className='img1'/>
            <h2>Eco-Friendly Award</h2>
            <p>Countries are targeting the construction industry in their pursuit to prevent pollution. They also regulate materials and heavy machines, requiring that builders utilize eco-friendly construction equipment. Professionals that adopt sustainable building practices reap major benefits.</p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    
            </div>
            <div class="facilities-col">
            <img src="./award2.jpg" className='img1'/>
            <h2>Safest Constructions Award</h2>
            <p>Construction safety involves implementing rules, regulations, and safeguards at construction sites to keep workers safe from injury and harm. There are countless hazards that could cause serious injury or death.Workplace training sets the precedent for the proper protocols for safety measures that must be implemented at every job site.</p>
            <br/><br/><br/><br/><br/>
           
            </div>
            <div class="facilities-col">
            <img src="./award3.jpg"  className='img1'/>
            <h2>On Time Award</h2>
            <p>Effective use of project scheduling can ensure the smooth running of construction project. The main scheduling techniques, which are used widely especially in big and medium size projects are the Bar Chart and Network techniques that incorporate the use of computer software such as Microsoft Project and Primavera Project Planner.</p>
            <br/><br/><br/>
           
            </div>
        </div>
        </div>







        {/*=--------------------------- our awards-------------------------------------------- */}

       
</div>
  );
}


