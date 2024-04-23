"use client";
import { useState } from "react";

const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const handleMouseEnter = () => {
    setIsDropDown(true);
  };

  const handleMouseLeave = () => {
    setIsDropDown(false);
  };

  return (
    <header
      className={`${
        isDropDown ? "py-12 pb-64" : "py-12"
      } transition-all m-0 flex justify-around hover:bg-white`}
    >
      <div>
        <img
          src="https://img.79plus.co.kr/megahp/common/img/logo_b.png"
          width="200px"
          height="41px"
        />
      </div>
      <ul className="justify-center flex w-200 font-semibold text-2xl gap-16 text-center align-middle pt-2">
        <li
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>메가 스토리</div>
          <ul className="w-28 absolute hidden group-hover:block py-2 mt-1 font-light text-xl justify-center">
            <div
              className={`${
                isDropDown ? "w-20 transform -translate-x-1/2" : "w-0"
              } bg-black h-0.5 transition-all relative left-14 mt-10 mb-5`}
            />
            <li className="py-1.5">브랜드</li>
            <li className="py-1.5">BI</li>
            <li className="py-1.5">오시는길</li>
          </ul>
        </li>
        <li
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>메뉴 소개</div>
          <ul className="w-28 absolute hidden group-hover:block py-2 mt-1 font-light text-xl justify-center">
            <div
              className={`${
                isDropDown ? "w-20 transform -translate-x-1/2" : "w-0"
              } bg-black h-0.5 transition-all relative left-12 mt-10 mb-5`}
            />
            <li className="relative right-2 py-1.5">음료</li>
            <li className="relative right-2 py-1.5">푸드</li>
            <li className="relative right-2 py-1.5">상품</li>
          </ul>
        </li>
        <li
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>매장</div>
          <ul className="w-28 absolute hidden group-hover:block py-2 mt-1 font-light text-xl justify-center">
            <div
              className={`${
                isDropDown ? "w-20 transform -translate-x-1/2" : "w-0"
              } bg-black h-0.5 transition-all relative left-6 mt-10 mb-5`}
            />
            <li className="relative right-8">매장 찾기</li>
          </ul>
        </li>
        <li
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>창업안내</div>
          <ul className="w-28 absolute hidden group-hover:block py-2 mt-1 font-light text-xl justify-center">
            <div
              className={`${
                isDropDown ? "w-20 transform -translate-x-1/2" : "w-0"
              } bg-black h-0.5 transition-all relative left-11 mt-10 mb-5`}
            />
            <li className="relative right-3 py-1.5">개설비용</li>
            <li className="relative right-3 py-1.5">인테리어</li>
            <li className="relative right-3 py-1.5">창업문의</li>
            <li className="relative right-3 py-1.5">가맹점 인수</li>
            <li className="relative right-3 py-1.5">창업뉴스</li>
          </ul>
        </li>
        <li
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>메가 소식</div>
          <ul className="w-28 absolute hidden group-hover:block py-2 mt-1 font-light text-xl justify-center ">
            <div
              className={`${
                isDropDown ? "w-20 transform -translate-x-1/2" : "w-0"
              } bg-black h-0.5 transition-all relative left-11 mt-10 mb-5`}
            />
            <li className="relative right-3 py-1.5">공지사항</li>
            <li className="relative right-3 py-1.5">이벤트</li>
            <li className="relative right-3 py-1.5">FAQ</li>
            <li className="relative right-3 py-1.5">고객의 소리</li>
          </ul>
        </li>
        <li
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>채용</div>
          <ul className="w-28 absolute hidden group-hover:block py-2 mt-1 font-light text-xl justify-center">
            <div
              className={`${
                isDropDown ? "w-20 transform -translate-x-1/2" : "w-0"
              } bg-black h-0.5 transition-all relative left-6 mt-10 mb-5`}
            />
            <li className="relative right-8 py-1.5">채용 안내</li>
          </ul>
        </li>
      </ul>
      <ul className="flex gap-2">
        <li className="rounded-full hover:bg-yellow-300 hover:border-transparent border-2 border-black p-3 ">
          <a href="https://blog.naver.com/ekddusekddus" target="_blank">
            <img src="https://img.79plus.co.kr/megahp/common/img/sns/sns_blog.png" />
          </a>
        </li>
        <li className="rounded-full hover:bg-yellow-300 hover:border-transparent border-2 border-black p-3 ">
          <a
            href="https://www.facebook.com/mega.mgc.coffee.official"
            target="_blank"
          >
            <img src="https://img.79plus.co.kr/megahp/common/img/sns/sns_facebook.png" />
          </a>
        </li>
        <li className="rounded-full hover:bg-yellow-300 hover:border-transparent border-2 border-black p-3 ">
          <a
            href="https://www.instagram.com/mega.mgc.coffee_official/"
            target="_blank"
          >
            <img src="https://img.79plus.co.kr/megahp/common/img/sns/sns_instagram.png" />
          </a>
        </li>
        <li className="rounded-full hover:bg-yellow-300 hover:border-transparent border-2 border-black p-3 ">
          <a href="https://smartstore.naver.com/megamgccoffee" target="_blank">
            <img src="https://img.79plus.co.kr/megahp/common/img/sns/sns_smartstore.png" />
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
