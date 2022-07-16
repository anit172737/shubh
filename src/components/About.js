import React from "react";
import "../sass/About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__description">
        <p className="about__description--title">Hello Nice to meet you!</p>
        <p className="about__description--sec">
          I’m a Designer from Mumbai focused on building aesthetic and minimal
          experiences for the digital space.
        </p>
      </div>

      <div className="about__sec">
        <p className="about__sec--p">1</p>
        <div className="about__sec--detail">
          In 2020 I graduated from MUmbai University With a Bachelor of Science
          In INformation Technology degree.I was pursuing a career in coding to
          ultimately become a Developer but decided to put that career on pause.
        </div>
      </div>
      <div className="about__sec">
        <p className="about__sec--p about__sec--p-1">2</p>
        <div className="about__sec--detail">
          Throughout my life, since high school, I was always into sports and
          drawing. I wanted the opportunity to explore my creative side before I
          committed to anything else, so I did just that. I went to a local
          drawing academy in my city and learned drawing until I realized it
          wasn't a career path I wanted to pursue. Ultimately during my degree
          college days, I wasn't able to hone in developing skills I had from my
          first year of BscIT. So I thought let's just complete a degree so that
          I can get certified. ​ <br />
          <br />
          But during the second year of my degree, I was in rut and didn't know
          what to do after my degree.
        </div>
      </div>
      <div className="about__sec">
        <p className="about__sec--p">3</p>
        <div className="about__sec--detail">
          TOne of my friends, who is also a developer ended up introducing me to
          UX/UI Design. In the summer of 2020, that is when my life changed for
          the better. ​ <br />
          <br />I committed all of my time to learn UX/UI Design by taking the
          help of online resources, courses in Udemy. Later I realized I should
          learn design from design school or institute. Then I found ImagineXp
          design institute and started learning from them. It felt like I found
          something I genuinely enjoyed doing and soon realized it was because I
          was able to combine both my problem-solving and creative skills into
          one job.
        </div>
      </div>
      <div className="about__end">
        <h1 className="about__end--head">Let's Talk</h1>
        <div className="about__end--links">
          <a
            className="about__end--links-a"
            href="https://www.linkedin.com/in/shubham-ghanekar-4a4371194/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="about__end--links-a"
            href="https://www.behance.net/shubhamghanekar"
            target="_blank"
          >
            Behance
          </a>
          {/* <a>Mail</a> */}
          <a
            className="about__end--links-a"
            href="https://www.instagram.com/design.with.shubh/"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
