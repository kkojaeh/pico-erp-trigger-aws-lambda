# 설명

이 프로젝트는 AWS Lambda 를 이용하여 API 서버에 호출을 하도록 하는 프로젝트 입니다

# 구현함수

| name                                             | description                                             |
|--------------------------------------------------|---------------------------------------------------------|
| attachment-clear                                 | 삭제 후 일정시간(3개월) 이 지난 파일을 물리적으로 삭제     |
| item-lot-expire                                  | 만료시간이 지난 품목 LOT를 만료함                         |
| quotation-expire                                 | 만료시간이 지난 견적 을 만료함                            |
| work-schedule-generate                           | 근무시간 자동 생성                                       |
| warehouse-transaction-request-cancel-uncommitted | 근무시간 자동 생성                                       |

# 환경변수

## AWS 환경변수

| name                   | description                       | example                    |
|------------------------|-----------------------------------|----------------------------|
| API_BASE_URL           | API 서버 주소                      | https://api-dev.acepk.biz |
| FIREBASE_API_KEY       | 인증으로 사용되는 firebase app key |                            |
| FIREBASE_USER_EMAIL    | firebase 로그인 이메일             |                            |
| FIREBASE_USER_PASSWORD | firebase 로그인 패스워드           |                            |

## 빌드 시점(travis-ci) 환경변수


| name                          | description                                | example                    |
|-------------------------------|--------------------------------------------|----------------------------|
| AWS_LAMBDA_ACCESS_KEY_ID      | AWS Lambda 에 접근 가능한 인증 ID           |         |
| AWS_LAMBDA_BUCKET_DEV         | AWS Lambda 소스가 업로드될 bucket(개발)     |         |
| AWS_LAMBDA_BUCKET_PRD         | AWS Lambda 소스가 업로드될 bucket(운영)     |         |
| AWS_LAMBDA_REGION             | AWS Lambda 소스가 업로드될 S3/Lambda region |         |
| AWS_LAMBDA_SECRET_ACCESS_KEY  | AWS Lambda 에 접근 가능한 인증 비밀키       |         |
| S3_ACCESS_KEY_ID              | AWS S3 에 접근 가능한 인증 ID               |         |
| S3_SECRET_ACCESS_KEY          | AWS S3 에 접근 가능한 인증 비밀키           |         |

# 배포

## 개발서버 반영

master commit 시에 반영됨

## 운영서버 반영
tag 생성시(release)에 반영됨

# Release

```
./gradlew release -Prelease.useAutomaticVersion=true
```