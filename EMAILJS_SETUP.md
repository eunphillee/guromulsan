# EmailJS 설정 가이드

문의하기 폼에서 이메일을 자동으로 전송하려면 EmailJS 설정이 필요합니다.

## 1. EmailJS 계정 생성

1. https://www.emailjs.com/ 에서 무료 계정 생성
2. 대시보드로 이동

## 2. 이메일 서비스 추가

1. 대시보드에서 "Add New Service" 클릭
2. Gmail, Outlook 등 원하는 이메일 서비스 선택
3. 서비스 연결 완료 후 **Service ID** 복사

## 3. 이메일 템플릿 생성

1. "Email Templates" 메뉴에서 "Create New Template" 클릭
2. 템플릿 설정:
   - **To Email**: `gurodnt@guromulsan.co.kr`
   - **Subject**: `[구로물산] 문의하기 - {{from_name}}`
   - **Content**:
     ```
     이름: {{from_name}}
     이메일: {{from_email}}
     전화번호: {{phone}}
     
     문의내용:
     {{message}}
     ```
3. 템플릿 저장 후 **Template ID** 복사

## 4. Public Key 확인

1. 대시보드의 "Account" > "General" 메뉴에서
2. **Public Key** 복사

## 5. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 참고

- EmailJS 무료 플랜: 월 200통 이메일 전송 가능
- 설정 전에는 mailto: 링크 방식으로 작동합니다 (이메일 클라이언트가 자동으로 열림)
