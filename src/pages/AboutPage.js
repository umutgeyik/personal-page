import React from 'react';
import StackAnimation from '../components/StackAnimation';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import myIcon from '../assets/images/school.png'

function AboutPage(props) {
    return(
        <div>
            <StackAnimation/>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2019 - 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<myIcon />}
  >
    <h3 className="vertical-timeline-element-title">Master of Science in Software Engineering</h3>
    <p>
      De Montford University
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="July - August 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<myIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
    <p>
      Kron Tech
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June - July 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<myIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
    <p>
      Intertech
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2014 - 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<myIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
    <p>
      Sabanci University
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<myIcon />}
  />
</VerticalTimeline>
</div>
        
    );
}

export default AboutPage;