import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
//import s from './styles.module.css'

export class ProfileEntryView extends React.Component {
  // static propTypes = {
  //   profile: T.object
  // }

  render(){
    const { profile } = this.props
    const { address } = profile.user_metadata || {}
    return (
      <Row >
        <Col md={2} mdOffset={4}>
        </Col>
      </Row>
    )
  }
}

export default ProfileEntryView;
