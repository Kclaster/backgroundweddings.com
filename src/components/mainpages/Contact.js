// External Dependencies
import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import {withRouter} from 'react-router-dom'

// Internal Dependencies
import SelectBox from '../../features/select-box';
import professional from '../../pics/general/Erin Pics/professional.jpg';
import Header from '../Header';
import Footer from '../Footer';
import './Contact.css';



class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      message: '',
      email: '',
      phone: '',
      desired_service: '',
      date: '',
      location: '',
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Axios.post('https://m1l20ip675.execute-api.us-east-1.amazonaws.com/prod/contact-us', {
        name: this.state.fullname,
        email: this.state.email,
        phone: this.state.phone,
        desired_service: this.state.desired_service,
        date: this.state.date,
        venue: this.state.venue,
        message: this.state.message,
      }, {headers : {
        "ContentType": "application/json",
      }})
      this.props.history.push("/Success")
    } catch(error) {
      console.log(error);
      this.setState({error: true})
    };
  }
  render() {
    return (
      <div className="contact">
        <Header />
        <div className="overal-container">
          <div className="contact-description">
            <img src={professional} alt="Erin Wiltse" />
            <h3>Erin</h3>
            <h3>Phone: (616)520-5170</h3>
            <h3>Email: background.weddings@gmail.com</h3>
          </div>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <div className="long-input">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      name="fullname"
                      type="text"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="primary-contact-questions">
                <div className="field">
                  <label className="label">Desired Service</label>
                  <SelectBox
                    width={'27vw'}
                    name="desired_service"
                    items={[
                      { value: 'Day Of Service', id: 1 },
                      { value: 'Partial Service', id: 2 },
                      { value: 'Full Service', id: 3 },
                      { value: 'Community', id: 4 },
                      { value: 'Corporate', id: 5 },
                      { value: 'Undecided', id: 6 }
                    ]}
                  />
                </div>

                <div className="field">
                  <label className="label">Date of Event</label>
                  <div className="control">
                    <input
                      name="date"
                      type="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Phone</label>
                  <div className="control">
                    <input
                      name="phone"
                      type="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Location</label>
                  <div className="control">
                    <input
                      name="location"
                      type="location"
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="secondary-questions">
                <div id="text-area" className="field">
                  <label className="label">Anything else for me to know?</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field radio-container">
                  <label className="radio-label label">
                    How did you hear about Background Weddings?
                  </label>
                  <div id="radio" className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="marketing"
                        onChange={this.handleChange}
                        value="Google"
                        checked={this.state.marketing === 'Google'}
                      />
                      <h4>Google</h4>
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="marketing"
                        onChange={this.handleChange}
                        value="The Knot"
                        checked={this.state.marketing === 'The Knot'}
                      />
                      <h4>The Knot</h4>
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="marketing"
                        onChange={this.handleChange}
                        value="Attended a prior Background Wedding"
                        checked={
                          this.state.marketing ===
                          'Attended a prior Background Wedding'
                        }
                      />
                      <h4 id="bug">Attended a prior Background Wedding</h4>
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="marketing"
                        onChange={this.handleChange}
                        value="Friend"
                        checked={this.state.marketing === 'Friend'}
                      />
                      <h4>Friend</h4>
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="marketing"
                        onChange={this.handleChange}
                        value="Facebook/Instagram"
                        checked={this.state.marketing === 'Facebook/Instagram'}
                      />
                      <h4>Facebook/Instagram</h4>
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="marketing"
                        onChange={this.handleChange}
                        value="Other"
                        checked={this.state.marketing === 'Other'}
                      />
                      <h4>Other</h4>
                    </label>
                  </div>
                </div>
              </div>
              <button
                id="contact-button"
                className="submit-btn"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
              {this.state.error && (
                <p>We're sorry, we are currently unable to record your request. Please feel free to call or email me!</p>
              )}
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Contact);
