# Web3Forms 설정 가이드

문의하기 폼에서 자동으로 이메일을 전송하려면 Web3Forms Access Key가 필요합니다.

## 1. Web3Forms 계정 생성 및 Access Key 발급

1. https://web3forms.com/ 에 접속
2. "Get Started" 또는 "Get Your Access Key" 클릭
3. 이메일 주소 입력 (받을 이메일: `gurodnt@guromulsan.co.kr`)
4. Access Key 복사

## 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

## 3. 개발 서버 재시작

환경 변수를 추가한 후 개발 서버를 재시작하세요:

```bash
npm run dev
```

## 참고

- Web3Forms는 무료로 월 250통까지 이메일 전송 가능
- Access Key는 공개되어도 안전합니다 (rate limiting으로 보호됨)
- 설정하지 않으면 이메일 전송이 작동하지 않습니다
