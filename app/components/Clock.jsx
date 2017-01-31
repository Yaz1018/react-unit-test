var React = require('react');

var Clock = React.createClass({
	formatSeconds : function (totalSeconds) {
		var seconds = totalSeconds % 60;
		var minutes = Math.floor(totalSeconds / 60);

		seconds < 10 ? seconds = '0' + seconds : seconds

		minutes < 10 ? minutes = '0' + minutes : minutes

		return minutes + ':' + seconds;
	},
	render: function() {
		return (
			<div> 

			</div>
		);
	}
});

module.exports = Clock;