import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import "./responsive.css";

function App() {
  return (
    <>
      <div id="main">
        <div id="navbr">
          {/* <div className="hamburger"><i class="ri-menu-5-line"></i></div> */}
          <div id="navp1">
            <h1>Selo</h1>
          </div>
          <div id="navp2">
            <h2>pages</h2>
            <h2>services</h2>
            <h2>about us</h2>
            <h2>our team</h2>
            <h2>contact us</h2>
            <h2>online shop</h2>
            <h2>blog</h2>
            <h2 id="whatsapp">              
                <span>whatsApp: (+91) 1234-567-890</span>
            </h2>
          </div>
        </div>
        <div className="page" id="page1">
          <div id="pg1center">
            <h1>
              Digital marketing <br /> agency
              <span>
                <br />
                Improve your business in digital.
              </span>
            </h1>
            <div id="p1pics">
              <div className="p1pics" id="imgp11">
                <img
                  src="https://selo.b-cdn.net/wp-content/uploads/2022/09/lrktnh.png"
                  alt=""
                />
              </div>
              <div className="p1pics" id="imgp12">
                <button id="p1button">Get Started</button>
                <img
                  src="https://selo.b-cdn.net/wp-content/uploads/2022/09/rlktnh.png"
                  alt=""
                />{" "}
                <div className="circlediv">9</div>
              </div>
              <div className="p1pics" id="imgp13">
                <img
                  src="https://selo.b-cdn.net/wp-content/uploads/2022/09/lrtkhn.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="page" id="page2">
          <div className="p2div1" id="page2div1">
            <div className="p2div2" id="p2first">
              <div className="count">
                <h1>4.8K</h1>
                <h4>Jobs Completed</h4>
              </div>
              <div className="count">
                <h1>15+ </h1>
                <h4>INDUSTRY EXPERIENCE</h4>
              </div>
              <div className="count">
                <h1>3.6K</h1>
                <h4>GLOBAL CLIENTS</h4>
              </div>
              <div className="count">
                <h1>130+</h1>
                <h4>AWARDS WINNED</h4>
              </div>
            </div>
            <div className="p2div2" id="p2second">
              <div className="txtp1">
                <h1>Our services solve any business problem</h1>
              </div>
              <img
                id="star"
                src="https://selo.b-cdn.net/wp-content/uploads/2022/09/Shap.png"
                alt=""
              />
              <div className="txtp1">
                <h4>
                  Our team has a successful track record of helping brands scale
                  profitably based on high-performing strategies.
                </h4>
              </div>
            </div>
          </div>
          <div className="p2div1" id="p2div2">
            <div className="p2divpara" id="para1">
              <img
                src="https://selo.b-cdn.net/wp-content/uploads/2022/09/megaphone-1.png"
                alt=""
              />
              <h1>Paid Media</h1>
              <p>
                Increasing conversions, repeat traffic, and online authority
                across your website is our top priority.
              </p>
            </div>
            <div className="p2divpara" id="para2">
              <img
                src="https://selo.b-cdn.net/wp-content/uploads/2022/09/h5yh.png"
                alt=""
              />
              <h1>Website Optimization</h1>
              <p>
                In order for your funnel to be successful, you need to make it
                as smooth as possible.
              </p>
            </div>
            <div className="p2divpara" id="para3">
              <img
                src="https://selo.b-cdn.net/wp-content/uploads/2022/09/h5y.png"
                alt=""
              />
              <h1>Email & SMS Marketing</h1>
              <p>
                Leads are nurtured through our email, SMS, and automation
                services, resulting in customer acquisition and retention.
              </p>
            </div>
          </div>
        </div>
        <div className="page" id="page3">
          <div className="p3div">
            <div className="p3p1div" id="p3imgholder">
              <img
                src="https://selo.b-cdn.net/wp-content/uploads/2022/09/hjbfj-1024x905.png"
                alt=""
              />
            </div>
            <div className="p3p1div">
              <h1>Why you need digital marketing</h1>
              <h5>
                In order to scale new customer acquisition and retention for
                e-commerce brands, we work across the entire customer journey.
                Our team has a successful track record of helping brands scale
                profitably based on high-performing strategies.
              </h5>
              <h3>
                <a href="#">
                  Learn more <i class="ri-arrow-right-line"></i>
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="page" id="page4">
          <div className="p4div">
            <h1>
              Make your marketing <br />more
              effective
            </h1>
            <h4>
              E-commerce brands can acquire and retain new customers using{" "}
              <br />
              solutions that span the entire customer journey.
            </h4>
            <div id="p4div1">
              <div className="p4p1div">
                <h1>Marketing Automation</h1>
                <h3>
                  Our team has a successful track record of helping brands.
                </h3>
                <h3 id="learnmore">
                  <a href="#">
                    Learn more <i class="ri-arrow-right-line"></i>
                  </a>
                </h3>
                <img
                  src="https://selo.b-cdn.net/wp-content/uploads/2022/09/rhbv-1024x724.png"
                  alt=""
                />
              </div>
              <div className="p4p2div">
                <h1>Content Marketing</h1>
                <h4>
                  Our team has a successful track record of helping brands scale
                  profitably based on high-performing strategies. E-commerce
                  brands can acquire and retain new customers using solutions
                  that span the entire customer journey.
                </h4>
                <h3 id="learnmore">
                  <a href="#">
                    Learn more <i class="ri-arrow-right-line"></i>
                  </a>
                </h3>
                <img
                  src="https://selo.b-cdn.net/wp-content/uploads/2022/09/fvjrgv-1024x270.png"
                  alt=""
                />
              </div>
            </div>
            <div id="p4div2">
              <div id="p4div2p1">
                <div id="p4div2p1txt">
                  <h1>Social Media Marketing</h1>
                  <p>
                    Leads are nurtured through our email, SMS, and automation
                    services, resulting in customer acquisition and retention.
                  </p>
                  <h3 id="learnmore">
                    <a href="#">
                      Learn more <i class="ri-arrow-right-line"></i>
                    </a>
                  </h3>
                </div>
              </div>
              <img
                src="https://selo.b-cdn.net/wp-content/uploads/2022/09/whjrbfv.png"
                alt=""
              />
            </div>
            <div id="p4div3">
              <img
                src="https://selo.b-cdn.net/wp-content/uploads/2022/09/krnv-1024x947.png"
                alt=""
              />
              <div id="p4div3txt">
                <h1>Growth drives everything we do</h1>
                <h4>
                  In order to scale new customer acquisition and retention for
                  e-commerce brands, we work across the entire customer journey.
                </h4>
                <div id="p4div3comp">
                  <div className="p4comp">
                    <h1>5K+</h1>
                    <h4>Advertising Partners</h4>
                  </div>
                  <div className="p4comp">
                    <h1>90%</h1>
                    <h4>Increase in ROAS</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page" id="page5">
          <h1>What our awesome customers say</h1>
          <h4>
            Our team has a successful track record of helping brands scale
            profitably based on high-performing strategies.
          </h4>
          <div className="p5div">
            <div className="p5container">
              <div className="p5img">
                <i class="ri-double-quotes-r"></i>
              </div>
              <h1>
                “High standard and excellent quality of work. They helped my
                business grow in digital.”
              </h1>
              <div className="p5star">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <h3>- Adam Watson, 34</h3>
            </div>
            <div className="p5container">
              <div className="p5img">
                <i class="ri-double-quotes-r"></i>
              </div>
              <h1>
                “Awesome work! High standard and excellent quality. They helped
                my business grow in digital.”
              </h1>
              <div className="p5star">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <h3>- Eloise Smith, 26</h3>
            </div>
            <div className="p5container">
              <div className="p5img">
                <i class="ri-double-quotes-r"></i>
              </div>
              <h1>
                “High standard and excellent quality of work. They helped my
                business grow in digital.”
              </h1>
              <div className="p5star">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <h3>- Mark Ford, 46</h3>
            </div>
          </div>
        </div>
        <div id="page6">
          <div className="p6center">
            <div className="p6left">
              <h1>24/7 customer support service</h1>
              <p>
                In order to scale new customer acquisition and retention for
                e-commerce brands, we work across the entire customer journey.
                Our team has a successful track record of helping brands scale
                profitably based on high-performing strategies.
              </p>
              <h3 id="learnmore">
                <a href="#">
                  Learn more <i class="ri-arrow-right-line"></i>
                </a></h3>
            </div>
            <div className="p6right">
              <img
                src="https://selo.b-cdn.net/wp-content/uploads/2022/09/kljgv-1024x1018.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="page7">
          <div className="p7center">
            <h1>Ready for your digital success?</h1>
            <h4>Our services solve any business problem.</h4>
            <button id="p1button">Get Started</button>
          </div>
        </div>
        <div id="footer">
          <div className="footercenter">
            <div className="footerdiv">
              <h1>Selo</h1>
              <h3>Get your business to the new heights.</h3>
            </div>
            <div className="footerdiv">
              <h1>sales@example.com</h1>
              <h3>MON–FRI 9AM–6PM</h3>
            </div>
            <div className="footerdiv">
              <h1>(234) 567.890.11</h1>
              <h3>WhatsApp or Call</h3>
            </div>
          </div>
          <div className="footerlast">
            <h4>Copyright ©2023 Selo. All rights reserved.</h4>
            <div className="footerlinks">
              <a href="">Home</a>
              <a href="">About Us</a>
              <a href="">Our</a>
              <a href="">Team</a>
              <a href="">Shop</a>
              <a href="">Bolg</a>
              <a href="">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
