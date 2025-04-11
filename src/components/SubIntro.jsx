import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import "./styles/SubIntro.css";

const SubIntro = () => {
    return (
        <section className="subintro" aria-labelledby="subintro-heading">
            <div className="subintro-container">
                <div className="subintro-text">
                    <h2 id="subintro-heading">이사장 인사말.</h2>
                    <article>
                        <p>안녕하세요, 사색의향기 이사장 오덕균 입니다.</p>
                        <p>
                        사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자 <br />
                        노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.
                        </p>
                        <p>많은 관심과 응원 부탁드립니다. 감사합니다.</p>
                    </article>
                    <div className="sig-div">
                        <p>사단법인 사색의향기 이사장 오덕균</p>
                        <img 
                        loading="lazy" 
                        decoding="async" 
                        src="signature.png" 
                        alt="/signature.png" 
                        />
                    </div>
                    <div className="interview-link">
                        <a href="#interview" aria-label="더 보기 인터뷰">
                            <p>인터뷰 더 보기</p>
                            <HiChevronRight aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <figure className="subintro-image">
                    <img 
                        loading="lazy" 
                        decoding="async"
                        src="/Chairman Image.png" 
                        alt="Portrait of the Chairman" 
                        width={420}
                    />
                </figure>
            </div>
        </section>
    );
};

export default SubIntro;
