import React from 'react';

class Rating extends React.Component {

componentWillReceiveProps(nextProps) {
  this.setState({
    increasing: nextProps.rating > this.props.rating,
    decreasing: nextProps.rating < this.props.rating,
  })
}

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;