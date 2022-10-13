import React from "react";

const Join = () => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();        
        }}
        className="flex flex-col w-60 items-start p-4"
      >
        <div>회원가입</div>

        <div className="mt-4">email을 입력해주세요</div>
        <input type="email" className="w-full border-2 border-black" />

        <div className="mt-4">nickname을 입력해주세요</div>
        <input type="text" className="w-full border-2 border-black" />

        <div className="mt-4">password를 입력해주세요</div>
        <input type="password" className="w-full border-2 border-black" />
        <button type="submit" className="btn btn-sm ml-auto mt-4">
          전송
        </button>
      </form>
    </div>
  );
};

export default Join;
