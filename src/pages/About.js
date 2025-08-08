import React from 'react';
import './about.css';
import tridentCert from '../assets/certs/trident.pdf';
import pdccCert from '../assets/certs/pdcc.pdf';
import pdfIcon from '../assets/images/pdf-icon.png';

export default function About() {
  return (
    <div className="about-page">
      <h1>About WashWorks Exterior Services</h1>

      <p>
        WashWorks Exterior Services, a locally owned, full-service residential and commercial
        exterior cleaning company, is now booking for the 2025 season. Space is filling up
        <strong>RAPIDLY</strong>—get your exterior in shape for summer fun, avoid disappointment
        and future regret!
      </p>

      <div className="about-contact">
        <p>
          <strong>☎️ Call us today @ (774) 215-5153</strong> or send us a message.
        </p>
        <p>
          👨‍🔧 Friendly, uniformed technicians, industry-trained professionals,
          insured for your protection.
        </p>
        <p>
          🌟 5-star Google rated; Trusted by hundreds of satisfied homeowners, business owners
          and facility managers.
        </p>
      </div>

      <section className="about-warning">
        <p>
          ⚠️ <strong>Beware</strong> of new companies or those from different industries that
          claim to provide high-quality work but employ inferior equipment and cleaning methods.
          Many of these businesses overcharge, underdeliver, and lack proper licensing and
          insurance, resulting in unfortunate incidents like ruined siding and inadequate cleaning.
          Opt for a local, reputable company with a proven track record of excellence.
        </p>
      </section>

      <section className="about-credentials">
        <h2>Our Credentials</h2>
        <ul>
          <li>Fully Licensed &amp; Insured in Massachusetts</li>
          <li>OSHA Safety Trained Technicians</li>
          <li>Member of Power Washers of North America (PWNA)</li>
          <li>BBB A+ Accreditation</li>
        </ul>
      </section>

      <section className="about-services-list">
        <h2>Our Services Include:</h2>
        <ul>
          <li>
            ✅ <strong>Soft washing</strong> – safe and effective for all your exterior surfaces,
            including vinyl, wood and aluminum siding, composite decking and fence.
          </li>
          <li>
            ✅ <strong>Hot and cold pressure washing</strong> – for durable surfaces such as
            driveways, walkways, gas stations, loading docks, dumpster pads, drive-thru lanes,
            chimneys and retaining walls.
          </li>
          <li>
            ✅ <strong>SAFE and EFFECTIVE roof cleaning</strong> – low pressure, keeps your
            insurance off your back. Removes ALL moss, lichen and black streaking, guaranteed!
            Extend the life of your roof.
          </li>
          <li>
            ✅ <strong>Gutter cleaning and repair</strong> – well-maintained gutters eliminate
            water damage to foundation, windows, doors, trim and siding, and keep your basement dry.
          </li>
          <li>
            ✅ <strong>Paver restoration and sealing</strong> – beautify, protect and extend the
            life of your paver patio, walkway or pool deck with our cleaning, joint restoration
            and sealing service.
          </li>
          <li>
            ✅ <strong>Full service interior and exterior window cleaning</strong> – streak-free
            is the way to be!
          </li>
          <li>
            ✅ <strong>Storm water management & yard drainage systems</strong> – professionally
            designed and installed runoff solutions tailored to your property.
          </li>
        </ul>
      </section>

      <section className="about-certifications">
        <h2>Certifications</h2>
        <div className="cert-grid">
          <a href={tridentCert} target="_blank" rel="noopener noreferrer" className="cert-link">
            <span className="cert-download">
              <img src={pdfIcon} alt="PDF icon" className="cert-icon" />
              Download Trident Certification
            </span>
          </a>
          <a href={pdccCert} target="_blank" rel="noopener noreferrer" className="cert-link">
            <span className="cert-download">
              <img src={pdfIcon} alt="PDF icon" className="cert-icon" />
              Download PDCC Certification
            </span>
          </a>
        </div>
      </section>

      <p className="about-cta">
        Don’t delay—<strong>Call today! ☎️ (774) 215-5153</strong> We always answer the phone!
      </p>

      <div className="about-tags">
        #powerwashing #foxborough #roofcleaning #softwashing #guttercleaning #boston
      </div>
    </div>
  );
}