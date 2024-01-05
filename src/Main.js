
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/omg.mp3' 


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2023, 5, 17) 
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) 
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                if (index < str.length - 1) { 
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>We have been through: <span className="date-text">{d}</span> Days<span className="date-text">{hour}</span> Hour <span className="date-text">{minute}</span> Min <span className="date-text">{second}</span> Second </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>hello bacchudi！</h1>
                    <p >Before the excitement begins, let's play a song as background music!Music!</p>
                    <p>As I sit here, surrounded by the echoes of our recent disagreement, I find myself grappling with a torrent of emotions. </p>
                    <p>The air is heavy with the remnants of our words, and my heart aches at the thought of causing you any pain. 
                        In these moments of silence, I am compelled to pour my feelings onto this page, hoping that the ink may carry the sincerity of my remorse.
                </p>
                    <p>Our love is a masterpiece painted with the colors of joy, shared laughter, and the gentle strokes of understanding. 
                        Yet, in the canvas of life, we sometimes find ourselves standing before the shadowy hues of misunderstanding and discord. 
                        I never intended for our connection to be marred by such a tempest, and it weighs heavily on my soul.
                </p>
                In the quiet introspection that follows an argument, I've come to realize the depth of my love for you and the profound impact you have on the landscape of my life. 
                Every word spoken in haste was a betrayal of the bond we've crafted so meticulously. 
                I ache for the pain I may have caused you, and I am haunted by the thought of my own shortcomings.
                    <p>
                </p>
                    <p>Forgive me, not because I deserve it, but because our love does. 
                        Let's mend the frayed edges of our hearts and weave a tapestry of understanding that is stronger than before. 
                        I yearn for the harmony that defines us, and I am willing to put in the effort to ensure our love story continues to unfold with grace and compassion.
                </p>
                    <p>Finally, I wish my baccha a happy 7th anniversary!</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>I love you janu♥</p>
                        <p>December 19,2023</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main