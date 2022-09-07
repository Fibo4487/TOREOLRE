# TOREOLRE (또래올래)
- "또래와 함께하는 쇼핑"
- <b>과거 판매데이터 기반 연령/성별에 따른 상품 맞춤 추천 E-Commerce 서비스</b>

![또래올래캡처](https://user-images.githubusercontent.com/97212459/188896584-e4a8abda-2469-4b70-a18c-f8e90d30bd46.PNG)

## 1. 프로젝트 소개

**📈사용한 데이터 셋**
  - [Kaggle - H&M 패션 데이터](https://www.kaggle.com/c/h-and-m-personalized-fashion-recommendations)
  - 2018.10 ~ 2020.10 기간의 H&M 판매 데이터
  - 이미지 포함 총 34.56GB
  - 상품 정보, 거래정보, 구매고객 데이터 (이미지 포함) <br />
  👉 양이 많고 종류가 다양한 데이터로 H&M Group에서 제공한 신뢰성 높은 데이터로 E-Commerce 서비스에 잘 맞는 데이터이기에 선정 

**✍🏼기획 의도 및 기대 효과**
 - 단순히 최다 판매 순의 상품을 모두에게 보여주기 보다 < 과거 판매 이력을 통해 연령/성별을 나누어 개개인에게 더 필요한 정보를 제공하고 판매 효율을 높이자! 
 - 다소 H&M 쇼핑몰의 주 고객인 여성에 의해 소외될 수 있는 남성 고객까지 사로잡자! 
 - E-Commerce 서비스 개발 프로젝트를 통해 웹 개발자로서의 역량을 키우자! 
 
 **🧩기술 스택**
 - **프론트엔드**
    1. [React](https://ko.reactjs.org/)
    2. JavaScript
    3. [styled-component](https://styled-components.com/)
    4. [mui](https://mui.com/)
- **백엔드**
    1. [Express.js](https://expressjs.com/)
    2. [MongoDB](https://www.mongodb.com/kr)
    3. [multer](https://www.npmjs.com/package/multer)
    4. postMan
- **데이터분석**
    1. Colab

## 2. 프로젝트 기능 설명
- **Main**
   - (로그인 전) 광고 화면만 볼 수 있으며, 장바구니 또한 로그인 유저만 가능 
   - (로그인 후) 성별/연령에 따른 추천 상품 5개를 랜덤으로 추출하여 추천
- **Introduce**
   - 데이터 분석 기반 서비스로, 서비스를 시작한 계기 근거를 데이터 분석 시각화를 통해 소개한다 ⇒ 그래프 구현 
   - 스크롤 페이지 구현
- **Product**   
   - 쿼리 스트링 2개
   - 좋아요 기능 / 장바구니 연동
- **Search** 
   - 검색 기능 구현 <Br /> ⇒ 성능 최적화 - debounce 적용
- **Mypage** 
   - 회원정보 수정(일반회원 / 소셜회원)
   - 구매 이력 / 좋아요 이력
- **Order / Cart** 
   - 다음 주소 api
   - 결제 기능 - 신용카드 / 무통장 / 페이팔 / 카카오페이
   - 장바구니 ( 일부 선택&삭제, 주문하기 연동 )
- **login / Register** 
   - 로그인 / 회원가입 모달
   - 구글 소셜로그인

## 4. 프로젝트 팀원
| 이름 | 담당 업무 |
| ------ | ------ |
| 양해찬 | 팀장/백엔드 개발 |
| 천준석 | 백엔드 개발/데이터 분석 |
| 이정민 | 프론트엔드 개발 |
| 김하영 | 프론트엔드 개발 |
| 박진아 | 프론트엔드 개발 |
| 한우성 | 백엔드 개발 |

## 5. 추가 설명은 노션에서 확인 해 주세요! 
  - 📍 [TOREOLRE](https://www.notion.so/frontend-jinah/TOREOLRE-47b8934463494ab8a737d8afa144086c)
  - 상세 기능 설명 / 와이어프레임 / 페르소나 / 페이지구조도 / ER Diagram / API 명세서 / 트러블 슈팅 
