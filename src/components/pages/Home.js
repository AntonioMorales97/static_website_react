import React, { Component } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export class Home extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <React.Fragment>
        <header id='home-section'>
          <div className='dark-overlay' />
          <Container className='home-inner'>
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
                  <Button onClick={this.toggle}>Learn More</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Hi there!</ModalHeader>
          <ModalBody className='p-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Home;
