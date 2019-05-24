import React, { Component } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export class Footer extends Component {
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
        <footer id='main-footer' className='bg-dark'>
          <Container>
            <div className='row'>
              <div className='col text-center'>
                <div className='py-4'>
                  <h1 className='h3'>FJ Service Företag</h1>
                  <p>Copyright &copy; 2019</p>
                  <Button onClick={this.toggle}>Contact Us</Button>
                </div>
              </div>
            </div>
          </Container>
        </footer>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Contact Information</ModalHeader>
            <ModalBody className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
