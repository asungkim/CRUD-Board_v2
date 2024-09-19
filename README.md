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

## 3.
