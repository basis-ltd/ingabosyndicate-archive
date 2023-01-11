import NavBar from "./NavBar";
import './Landing-Page.css'

import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    
    <>
    
    <div class="hero">

        <div class="hero-text">

            <section class="text">
                <h1>INGABO SYNDICATE DATABASE</h1>
                <p>An online management tool to register, access information, and communicate with members of the Ingabo Syndicate.</p>
            </section>
            
            <section class="cta">
                <a href="#" class="button-cta">
                    <Link to="/home">Continue</Link>
                </a>
            </section>

        </div>

        <div class="hero-img">

        </div>

    </div>

    </>

  );
}