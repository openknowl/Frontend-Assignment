# For-Frontend-Assignment

프론트엔드 과제를 위한 Fastify API 서버

<br />

## 실행 방법

Node 16 혹은 그 이상의 버전이 필요합니다.

```javascript
 $ yarn // install dependencies
 $ yarn dev // run server
```

### 목업 데이터 생성

(이미 `src/mock` 경로에 필요한 목업 데이터들이 생성되어 있기 때문에 따로 생성할 필요는 없습니다)

```javascript
 $ yarn create:mock // make mock data
```

<br />

## API (Base url: `http://localhost:8080/api`)

### 1. `/contents` : 콘텐츠 리스트 불러오기(총 콘텐츠 개수 64개)

**Method** : GET

**Query** :

```javascript
{
  limit: number, // 조회할 콘텐츠 개수 (required)
  cursor: number, // 조회할 콘텐츠 커서 (required): 처음 0을 요청하면 limit개수 만큼 콘텐츠 응답, 이후에는 응답한 콘텐츠의 id를 요청 주어야 함
  orderBy: enum['createdAt', 'company'], // 조회할 콘텐츠 리스트의 순서 기준 (required)
  keyword: string // 회사 키워드 (optional)
}
```

**Return** : `orderBy === 'createdAt'` 일 때는 최신순, `orderBy === 'company'` 일 때는 회사 이름 기준 오름차순(ㄱ~ㅎ)

Request가 `http://localhost:8080/api/contents?limit=2&cursor=0&orderBy=createdAt&keyword=오픈` 일 경우,

```javascript
status : 200 OK

[
    {
        "id": 10,
        "createdAt": "2021-09-14T10:20:23.622Z",
        "updatedAt": "2021-09-14T10:20:23.622Z",
        "thumbnail": "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/24475/c4c8bbfb-6eef-4e58-a8ca-55b94708d0fa/오픈놀배배너-1.png",
        "title": "미니인턴 서비스 활성화를 위한 아이디어 제안",
        "company": "오픈놀"
    },
    {
        "id": 9,
        "createdAt": "2021-06-02T12:52:17.982Z",
        "updatedAt": "2021-06-02T12:52:17.982Z",
        "thumbnail": "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/24618/20c33d3b-c9f8-4929-9893-6a125165416d/오픈놀배배너.png",
        "title": "미니인턴 SNS 활성화를 위한 콘텐츠 기획 및 마케팅 방안 제안",
        "company": "오픈놀"
    }
]
```

<br />

### 2. `/banners` : 배너 리스트 불러오기(총 배너 개수 15개)

**Method** : GET

**Query** :

```javascript
{
  limit: number, // 조회할 배너 개수 (required)
}
```

**Return** :

Request가 `http://localhost:8080/api/banners?limit=2` 일 경우,

```javascript
status : 200 OK

[
    {
        "id": 1,
        "image": "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/23810/e13bb4e0-a59a-445d-b1c5-b30a0297c246/miniintern1PC.png",
        "link": "https://miniintern.com/",
        "createdAt": "2021-07-01T12:09:12.629Z",
        "updatedAt": "2021-07-01T12:09:12.629Z"
    },
    {
        "id": 2,
        "image": "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/23810/e13bb4e0-a59a-445d-b1c5-b30a0297c246/miniintern1PC.png",
        "link": "https://miniintern.com/",
        "createdAt": "2021-11-29T23:08:55.701Z",
        "updatedAt": "2021-11-29T23:08:55.701Z"
    }
]
```
