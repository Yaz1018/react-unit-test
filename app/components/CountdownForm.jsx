let React = require('react');

let CountdownForm = React.createClass({
	componentDidUpdate: function () {

    },
	onSubmit: function (e) {
		e.preventDefault();
		let strSeconds = this.refs.seconds.value;

		if (strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		} else {
			this.refs.seconds.value = '';
			alert("Only numbers allowed")
		}
	},
	render: function () {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" ref="seconds" placeholder="Enter time in seconds"/>
					<button className="button expanded">Start</button>
				</form>
			</div>
			)
	}
});

module.exports = CountdownForm;