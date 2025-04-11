import React from 'react';
import "./styles/Intro.css";

const Intro = () => {
    return (
        <section className="intro" aria-labelledby="intro-heading" id='intro'>
            <h2 id="intro-heading">새로운 문화 나눔을 만들어갑니다.</h2>
            <div className="intro-subsection">
                <h3>우리는</h3>
                <img 
                loading="lazy" 
                src="./Culture Image.png" 
                width={200}
                alt="Cultural Image"
                />
            </div>
            <h2>사색의향기입니다.</h2>
            <div className="intro-sub-subsection">
                <p>
                사색의향기는 문학인들의 커뮤니티로서 “행복한 문화 나눔"을 통한 사회 공헌과 선진적이고 <br />
                건전한 사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다.
                </p>
            </div>
        </section>
    );
};

export default Intro;
