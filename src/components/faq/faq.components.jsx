import React from 'react';
import './faq.styles.css'

import { Collapse, Button } from 'antd';


const { Panel } = Collapse;

function Faq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel className="panel" header="Is the service safe and hygienic?" key="1">
            <p>Yes, our professionals display their Aarogya Setu status at the start of the service, maintain social distancing &amp; sanitise all high touch points after the service. Additionally, all professionals carry PPE kits and have undergone training in WHO hygiene guidelines.</p>
          </Panel>
          <Panel className="panel" header="Will the professional arrange items after service?" key="2">
            <p>As per regulations, we recommend you to place the items back where they were. Professionals can help if needed, after your permission.</p>
          </Panel>
          <Panel className="panel" header="Will I have to provide any chemicals/soap?" key="3">
            <p>No,we carry all chemicals.</p>
          </Panel>
          <Panel className="panel" header="My sofa covers aren’t removable. Can you clean it?" key="4">
            <p>Yes! There are several methods that can be used if your fabric sofa does not have removable covers. Rest assured, the sofa cleaning professionals hold expertise in the same.</p>
          </Panel>
          <Panel className="panel" header="How much time does it take to clean a leather sofa?" key="5">
            <p>Leather sofas need extra care while cleaning since it can be damaged by too much water. Starting with a gentle vacuuming process, it usually takes around 5-6 hours including the drying process. It also depends on the number of seats your sofa has.</p>
          </Panel>
          
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Our Mission is to empower millions of service professionals by delivering services at-home in a way that has never been experienced before.</p>
          <Button className="buton" type="primary" size="large" href="mailto:wecarehomecare@gmail.com"><i className="fas fa-envelope"></i> Email Us</Button>
          {/* <button className="button" href="mailto:abc@gmail.com">Email Us</button> */}
        </div>
      </div>
    </div>  
  );
}

export default Faq;
