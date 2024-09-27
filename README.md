# React 와 Express를 통해 CRUD 게시판 만들기

## 1. 기본 설정

1. node.js 및 npm 설치
2. 프로젝트 상위 디렉토리로 이동하여 sever 폴더 생성
3. sever 기본 설정
   - npm init -y && npm install express cors mongoose body-parser nodemon
   ```bash
   npm init -y
   npm install express cors mongoose body-parser nodemon
   ```
   - dev 스크립트 추가
     - package.json script 부분에 start, dev 부분 작성
     ```javascript
        "scripts": {
     "start": "node index.js",   // 일반 서버 실행
     "dev": "nodemon index.js"   // 개발 모드에서 nodemon으로 서버 실행
     ```
   - index.js 를 통해 express 서버 생성
   - .env 를 통해 환경변수 받기
   - MongoDB 모델 생성
   - 라우터 설정 (서버에 라우터 연결)
4. client 기본 설정
   - npx create-react-app client
   - npm install axios (http)
   - src 에 컴포넌트 생성하기

## 2. 설계

- server  
  ├── models // DB 스키마  
  ├── middleware // 인증 및 인가  
  ├── routes // 라우터

- client  
   ├── src/  
  │ ├── components // 페이지 요소 관리 폴더  
  │ ├── App.js // 최상위 컴포넌트  
  │ └── App.css // App.js 의 스타일 시트 역할

## 3. DB 설계

- 게시물

  - 제목
  - 내용
  - 작성자
  - 작성시간

- 유저
  - 아이디
  - 비밀번호
  - 역할

## 4. 라우터 구성

- 게시물

  - 조회
    - 모든 글 조회
    - 특정 글 조회
  - 작성
  - 수정
  - 삭제

- 인증 및 인가
  - 로그인
  - 회원가입

## 5. 데이터 흐름

- 로그인 창 및 회원가입 기능
- 인증을 통해 로그인함
- 계정의 role에 따라 다른 기능을 부여
  - 공통 기능
    - 전체 게시물 조회
    - 본인의 게시물 수정 및 삭제
  - 차별 기능
    - 어드민은 모든 게시물을 삭제 할 수 있다
    - 이드민은 유저들의 총 게시물 수를 체크할 수 있

## 6. 구현 순서

1. 로그인/회원가입 , 로그아웃 기능 구현
2. 로그인 되었을 때 게시물 CRUD 기능 구현
