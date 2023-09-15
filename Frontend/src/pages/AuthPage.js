import React, { useState } from 'react'
import Signin from './component/Signin';
import Signup from './component/Signup';
import shinhanlogo from '../assets/images/shinhanlogo.png';
import './AuthPage.css'

import { CSSTransition } from 'react-transition-group';


function AuthPage() {

  const [tab, setTabs] = useState(0);
  const handleToggle = () => {
    setTabs(prevTab => (prevTab === 0 ? 1 : 0));
  };


  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
      <div className='auth-container center'>
        <div class='brand'>
          <img src={shinhanlogo} alt="내 이미지" class="logoimage"/>
          <div class="brand-letter">
            청<span class="sm-letter">년</span>정<span class="sm-letter">책</span>지역
          </div>
        </div>
        <div class='mg-top-sm'>이곳은 청년 정책 지역, 청정지역입니다.</div>

        <div class="auth-toggle-container mg-top-bg">
            <label class="switch btn-color-mode-switch">
                <input
                  value={tab}
                  id="color_mode"
                  name="color_mode"
                  type="checkbox"
                  onChange={handleToggle}
                />
                <label class="btn-color-mode-switch-inner" data-off="로그인" data-on="회원가입" for="color_mode"></label>
            </label>
        </div>

        {tab === 0 && <Signin />}
        {tab === 1 && <Signup />}
      </div>
    </CSSTransition>
  )
}

export default AuthPage