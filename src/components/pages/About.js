import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class About extends Component {
  render() {
    return (
      <React.Fragment>
        <header id='about-section'>
          <div className='light-dark-overlay'>
            <Container className='about-inner'>
              <div className='white-overlay'>
                <h3 className='d-none d-sm-block px-4 pt-4'>
                  Lorem ipsum dolor sit amet consectetur!
                </h3>
                <h4 className='d-block d-sm-none px-4 pt-4'>
                  Lorem, ipsum dolor.
                </h4>
                <p className='p-4'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae dolor placeat quibusdam quidem corrupti qui
                  veritatis, aperiam excepturi reprehenderit dicta omnis vel
                  fuga at explicabo ipsum rem quo iste nam quos illum sapiente.
                  Cum, impedit recusandae ab temporibus et sunt.
                </p>
              </div>
            </Container>
          </div>
        </header>
        <section id='about-photos'>
          <div className='row'>
            <div className='col-xs-12 col-md-6 col-xl-3 d-block p-0'>
              <img src={require('../../img/one.jpg')} alt='' />
            </div>
            <div className='col-xs-12 col-md-6 col-xl-3 d-block p-0'>
              <img src={require('../../img/two.jpg')} alt='' />
            </div>
            <div className='col-xs-12 col-md-6 col-xl-3 d-block p-0'>
              <img src={require('../../img/three.jpg')} alt='' />
            </div>
            <div className='col-xs-12 col-md-6 col-xl-3 d-block p-0'>
              <img src={require('../../img/four.jpg')} alt='' />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
