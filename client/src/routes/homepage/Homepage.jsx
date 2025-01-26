import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

const Homepage = () => {

    const [typingStatus, setTypingStatus] = useState("human1");

    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="" className='orbital' />
            <div className="left">

                <div className="chat">
                    <img src={typingStatus === "human1" ? "/human1.png" : typingStatus === "human2" ? "/human2.png" : typingStatus === "human3" ? "/human3.png" : "/bot.png"} alt="" />
                    <TypeAnimation
                        sequence={[
                            'Human: I feel overwhelmed recently.',
                            2000, () => {
                                setTypingStatus("bot");
                            },
                            'Bot: That’s okay. It’s normal to feel that way sometimes. Have you been taking breaks?',
                            2000, () => {
                                setTypingStatus("human2");
                            },
                            'Human2: Not really. I just keep pushing through.',
                            2000, () => {
                                setTypingStatus("bot");
                            },
                            'Bot: Remember, it’s important to rest. Even small pauses can make a big difference.',
                            2000, () => {
                                setTypingStatus("human3");
                            },
                            'Human3: Thank you so much. I feel much better now!',
                            2000, () => {
                                setTypingStatus("bot");
                            },
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                        cursor={true}
                        omitDeletionAnimation={true}
                    />

                </div>
                <h1>CheerCloud</h1>
                <h2>A warm companion in life</h2>
                <h3>
                    "Hi there! 😊 I’m here to listen and support you. Whatever you’re feeling or going through, it’s valid, and you don’t have to face it alone. Take a deep breath, and let’s talk about what’s on your mind. I’m here to help at your pace."
                </h3>
                <Link to="/dashboard">Get Started</Link>
            </div>

            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot1.png" alt="" className='bot' />

                </div>
            </div>

            <div className="terms">
                <img src="/logo.png" alt="" />
                <div className="links">
                    <Link to="/">Terms of Service</Link>
                    <span>|</span>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage