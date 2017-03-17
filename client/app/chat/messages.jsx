import React from 'react';

export default class messages extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='messages'>
      <h2> messages: </h2>
        {
          this.props.messages.map((message, i) => {
            return (
              <div className="message" key={i}>
                <strong>{messsage[1]} :</strong>
                <span>{message[0]}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}