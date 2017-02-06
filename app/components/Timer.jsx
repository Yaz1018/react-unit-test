var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls')

var Timer =  React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startCountdown();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startCountdown: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });

        }, 1000)
    },
    handleSetTimer: function () {
        if (this.state.countdownStatus !== 'paused'){
            this.setState({
                count: 0,
                countdownStatus: 'started'
            });
        } else {
            this.setState({
                countdownStatus: 'started'
            });
        }

    },
    handleStatusChange: function (newStatus) {
        this.setState({countdownStatus: newStatus});
    },
    render: function () {
        var that = this;
        var {count, countdownStatus} = this.state;

        var renderTimerButtons = function () {
            if(countdownStatus !== 'started'){
                return <button onClick={that.handleSetTimer} className="button expanded">START</button>
            } else {
                return <Controls countdownStatus={countdownStatus} onStatusChange={that.handleStatusChange}/>
            }
        }
        return (
            <div>
                <h1 className="title">Timer App</h1>
                <Clock totalSeconds={count}/>
                {renderTimerButtons()}
            </div>
        );
    }
});

module.exports = Timer;