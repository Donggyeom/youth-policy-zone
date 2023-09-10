import axios from 'axios';
import React, { useState } from 'react'
import { useMember } from '../../MemberContext';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const { succeededSignin, setMemberId } = useMember();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwVisibility, setPwVisibility] = useState({
    type: 'password',
    visible: false,
  });
  const [rememberId, setRememberId] = useState(false);
  const navigate = useNavigate();


  const onEmailChanged = (e) => {
    setEmail(e.target.value);
  }

  const onPwChanged = (e) => {
    setPw(e.target.value);
  }

  const handlePwVisibility = (e) => {
    setPwVisibility(() => {
      if (!pwVisibility.visible) {
        return {type: "text", visible: true};
      }
      else {
        return {type: "password", visible: false};
      }
    })
  }

  // 아이디 기억하기
  const handleRememberId = () => {
    setRememberId(!rememberId);
  }

  // 비밀번호 초기화
  const onClickForgotPw = () => {
    alert('비밀번호 초기화')
  }

  // 로그인 버튼 클릭
  const onClickSignin = () => {
    setMemberId(email);
    axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, {
      "memberId": email,
      "password": pw,
    }).then((response) => {
      succeededSignin(response.data.token);
      navigate('/home');
    }).catch((err)=> {
      console.log(err);
      alert(err.response.data);
    });
  }

  return (
    <div>
        <div>
          <div><label htmlFor="email">이메일 주소</label></div>
          <div><input type="email" onChange={onEmailChanged} value={email} id="email"/></div>
        </div>
        <div>
          <div><label htmlFor="pw">비밀번호</label></div>
          <div>
            <input type={pwVisibility.type} onChange={onPwChanged} value={pw} id="pw"/>
            <span onClick={handlePwVisibility}>
              {pwVisibility.visible ? "비밀번호 숨기기" : "비밀번호 보기"}
            </span>
          </div>
        </div>
        <div>
          <label htmlFor='rememberId'>
            <input type="checkbox" onChange={handleRememberId} value={rememberId} id="rememberId"/>
            아이디 기억하기
          </label>
          <br />
          <span onClick={onClickForgotPw}>비밀번호를 잊어버렸나요?</span>
        </div>
        <button onClick={onClickSignin}>로그인</button>
    </div>
  )
}

export default Signin