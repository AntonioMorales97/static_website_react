import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header id='home-section'>
          <div className='dark-overlay' />
          <div className='home-inner'>
            <Container>
              <div className='row'>
                <div className='col-lg-12 d-block'>
                  <h1 className='d-none d-sm-block display-4 '>
                    Lorem ipsum dolor sit amet consectetur.
                  </h1>
                  <div className='d-flex flex-row'>
                    <div className='p-4 align-self-start'>
                      <i className='fa fa-check' />
                    </div>
                    <div className='p-4 align-self-end'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, quis maxime. Similique quibusdam ipsam dolore!
                    </div>
                  </div>
                  <div className='d-flex flex-row'>
                    <div className='p-4 align-self-start'>
                      <i className='fa fa-check' />
                    </div>
                    <div className='p-4 align-self-end'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, quis maxime. Similique quibusdam ipsam dolore!
                    </div>
                  </div>
                  <div className='d-flex flex-row'>
                    <div className='p-4 align-self-start'>
                      <i className='fa fa-check' />
                    </div>
                    <div className='p-4 align-self-end'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, quis maxime. Similique quibusdam ipsam dolore!
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </header>
        <section id='explore-head-section'>
          <Container>
            <div className='row'>
              <div className='col text-center'>
                <div className='p-5'>
                  <h1 className='display-4'>Explore</h1>
                  <p className='lead'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat dolor laudantium fugit tempora eveniet voluptatum qui
                    a! Maxime, reiciendis voluptates?
                  </p>
                  <a href='#' className='btn btn-outline-secondary'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
