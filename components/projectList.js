export const projectList = [
    { 
      title: "대동유어지도",
      subtitle: "사진 기반 여행 콘텐츠 SNS 플랫폼",
      main: "#MapAPI  #Webpack  #Cypress  #CI/CD",
      duration: "23.01-09",
      part: "팀 프로젝트, 프론트엔드 개발 90% 담당",
      func: ["사진 기반 포스트 CRUD", "회원정보 CRUD", "좋아요, 댓글, 알림 등 상호작용", "카카오맵 API 활용한 지도 구현", "히트맵으로 지역별 게시물 수 표현"],
      stack: ["HTML", "CSS", "Javascript", "React", "Redux", "Webpack", "Cypress", "Github Actions"],
      dev: ["React SPA", "figma 디자인 반영", "카카오맵 API 및 행정구역 폴리곤 적용", "로딩 중 스켈레톤 UI", "axios 모듈 이용한 서버와의 API 통신", "props를 이용한 버튼 컴포넌트 재사용", "MUI를 활용한 컴포넌트 구현", "Webpack 번들링 및 alias 지정", "Cypress 테스트 자동화", "Github Actions CI/CD 활용한 자동배포"],
      troubles:['코드 및 디렉토리 리팩토링', '가로/세로/정방형 이미지 구분', '카카오맵 API 마우스오버 이벤트 부하 발생'],
      solutions: [
        '초반에 구현 자체에만 초점을 두고 코드를 작성한 결과, 코드, 변수명, 디렉토리 구성 등이 협업하기 어렵다는 문제 발생. 이에 협업을 위하여 대대적인 리팩토링을 실행하였음. 인라인 CSS 코드를 별도의 CSS 파일로 분리하였고, 직관적인 변수명을 사용하였으며, next.js 및 quasar 디렉토리 구조 참고하여 view/style/component 등으로 디렉토리 리팩토링 실행하였음. 추가적으로 공통적으로 사용되는 MUI 컴포넌트들은 props를 이용하여 재사용성 높임.',
        '업로드되는 이미지의 비율이 각기 다르기 때문에 포스트의 이미지가 제대로 표시되지 않는 문제 발생. 이에 이미지의 naturalWidth / naturalHeight 속성 사용하여 비교 연산자를 통해 가로 / 세로 / 정방형 이미지로 구분하였고, 비율에 따라 이미지 크기와 여백을 조정함으로써 완성도 높은 postView 페이지 구현.',
        '지도상에서 마우스오버 이벤트 발생시, 해당 지역 폴리곤의 색상이 바뀌도록 구현하였는데, 마우스오버 이벤트 발생 시 버벅임 발생. 마우스오버 이벤트 시 발생하는 axios 요청, 히트맵을 위한 if문 등 여러 가지 원인을 제거하고 테스트해보았으나, 문제가 해결되지 않음. 결국 카카오맵 API 자체의 문제로 결론짓고, 마우스오버 이벤트시 폴리곤 색상 변경 효과를 제거하는 대신 오버된 지역명을 표시함으로서 해결.'
      ],
      image: 2,
      notion: 'https://climbing-streetcar-f9a.notion.site/685128dc31e94839873d13e93520079e?v=93540477e8e743e8b87cd9da816e3ef0&pvs=4',
      github: 'https://github.com/daedongyourjido',
      url: "",
      etc: "졸업 프로젝트 심사 이후 배포를 중단하였습니다. 구체적인 기능 시현은 github readme를 통해 확인하실 수 있습니다. "
    },
    {
        title: "넌P해 난J할게",
        subtitle: "여행 계획 세우기 플랫폼",
        main: "#React  #MapAPI  #socket.io  #반응형웹",
        duration: "2023.06-07",
        part: "팀 프로젝트, 프론트엔드 개발 전체 담당",
        func : ["카카오 소셜로그인", "공공데이터를 기반으로 블록 생성", "드래그앤드롭 블록 쌓기", "카카오맵 상에서 일정별 여행 동선 확인", "일정 및 수정 실시간 반영", "그룹 채팅"],
        stack: ["HTML", "CSS", "Javascript", "React", "Redux", "Webpack", "Socket.io", "Firebase"],
        dev: ["Redux를 사용한 상태관리", "MUI를 활용한 컴포넌트", "드래그앤드롭 (react-beautiful-dnd)", "공공데이터 / 서버와의 API 통신 (axios)", "room 기반 socket.io 통신", "CSS Keyframe 이용한 에니메이션", "데스크탑 및 모바일 대응 반응형 웹 구현 (MediaQuery)"],
        troubles: ['드래그앤드롭 구현 ', '드래그앤드롭 발생 시 여러 사용자에게서 동시에 동일한 동작이 발생하도록 구현해야 하는 문제', '카드가 없는 column은 드래그앤드롭이 동작하지 않는 문제.', '에니메이션을 통한 화면 전환 효과'],
        solutions: [
            '각 column 별로 array를 생성하였고, 드래그앤드롭 발생 시에는 splice() 메소드를 사용하여 각 원소를 자르고 끼워넣음으로써 카드 이동을 구현하였음. 또한 같은 column에서의 이동 / 다른 column간의 이동을 구분하여 구현하였고, 공공데이터를 받아오는 부분인 column1으로부터 카드를 가져오거나 column1에 카드를 놓는 경우에는 카드의 생성과 제거와 같이 별도의 이벤트로서 처리함.',
            '드래그앤드롭 발생 시, 모든 구성원들에게 동일한 카드이동이 발생해야 하고, 그룹 DB에는 한번만 반영이 되어야 했음. 이에 socket.io의 room 기반 통신을 활용하여, 드래그앤드롭이 발생할 경우 해당 이동정보를 socket 서버로 전송하고, socket 서버는 이를 나머지 구성원들에게 전송함으로써 모든 구성원이 동일한 이동정보를 수신할 수 있도록 함. 또한 직접 드래그앤드롭을 발생시켰을 경우와 다른 구성원이 드래그앤드롭을 발생시켰을 경우에 setDataByColumnId 함수를 통해 동일한 동작이 발생하도록 하여 로직을 간소화하였음. socket 서버에 이동 정보가 도착했을 때 그룹 DB에 반영하도록 하여, DB에는 한번만 반영되도록 하였음',
            '카드가 없는 column은 드래그앤드롭 불가 영역이 되어, 카드 추가가 안되는 문제가 발생. 이에 초기에 ‘day 1’과 같이 상단의 설명 문구가 적힌 카드를 미리 추가함으로써 모든 column을 드래그앤드롭 가능 영역으로 구현.',
            '화면을 viewport에 맞추고 overflow를 막아 화면 밖 요소에 접근하지 못하게 한 후, 화면 밖의 요소를 움직여 화면 전환이 일어나는 듯한 효과 구현'
        ],
        image: 2,
        github: 'https://github.com/sjhong98/uPmJ',
        url: 'https://partyone-a5fab.web.app/',
        notion: 'https://noble-walker-465.notion.site/UMPJ-53854993d4a84510b6fbd00dba60dbc3?pvs=4',
        etc: "구체적인 기능 시현은 github readme를 통해 확인하실 수 있습니다."
      },
      {
        title: "DMRS",
        subtitle: "진료기록 관리 시스템",
        main: "#React  #ReactNative  #API명세서",
        duration: "2023.07-11",
        part: "팀 프로젝트, 프론트엔드 개발 전체 담당",
        func : ["카카오 소셜로그인", "진료기록 관리", "앱)QR코드로 진료기록 제공", "앱)QR코드 스캐너로 진료기록 접근"],
        stack: ["HTML", "CSS", "Javascript", "React", "Redux", "React Native", "Firebase", "Github Actions"],
        dev: ["React SPA", "서버와의 API 통신 (axios)", "로딩 중 UI 구현", "QR코드 스캐너 (react-native-qrcode-scanner 사용)"],
        cap: "DMRS(DID Medical Record System)은 블록체인 기반 신원정보 체계인 DID를 활용하여 환자가 원하는 범위 내에서 자신의 진료정보를 의사에게 제공할 수 있으며, 의사는 이 정보를 바탕으로 진료기록을 조회하고 작성할 수 있습니다. ",
        troubles: ['복잡한 로직으로 인한 API 명세서의 필요성'],
        solutions: [
            `여러 기기를 통해 데이터가 전달되도록 하기 위해 복잡한 구조로 구현되어야 했던 프로젝트인만큼, 전체적인 데이터의 흐름과 로직을 파악하는 것에 어려움을 느꼈음. 이에 각 API 별 목적과 데이터 타입 등 구체적인 내용을 담은 API 명세서를 작성하여 이를 기반으로 백엔드 팀원과 원활히 소통함으로써, 정확한 구현 및 개발속도 향상 등을 경험하였고 API 명세서의 필요성을 느낌.`, 
        ],
        image: 2,
        notion: 'https://noble-walker-465.notion.site/DMRS-5933966e79ef4b88a899260b1de5a8bf?pvs=4',
        url: 'https://dmrs-b910d.web.app/',
        github: 'https://github.com/sjhong98/DMRS',
        etc: "구체적인 기능 시현은 github readme를 통해 확인하실 수 있습니다."
      },
      {
        title: "SCRAPPER",
        subtitle: "텍스트 기반 SNS 플랫폼 ",
        main: "#Next.js  #TS  #Tailwind  #반응형웹  #NoSql",
        duration: "2023.10",
        part: "1인 프로젝트",
        func : ["텍스트 기반 포스트 CRUD","텍스트 드래그 방식 좋아요","색으로 좋아요 수 표시","포스트 스크랩"],
        stack: ["Next.js", "Typescript", "Tailwind", "Vercel"],
        dev: ["Next.js SPA", "selection web API를 이용한 드래그 인덱스 추출", "CSS keyframes 활용한 에니메이션", "서버와의 API 통신 (firestore API)", "tailwind 동적 class 이용한 반응형 웹 구현"],
        cap: "Scrapper는 텍스트 기반 SNS 플랫폼으로, Twitter나 Thread와 같이 텍스트를 기반으로 하면서도 인스타그램 스토리처럼 업로드의 부담을 낮추어, 쉽게 공유하고 쉽게 상호작용할 수 있는 SNS로 구상하였습니다. 또한 텍스트의 특성을 살려, 원하는 구체적인 부분에 좋아요를 표시할 수 있도록 하였습니다.",
        troubles: ['텍스트 하이라이트 방식 좋아요 기능 구현', 'span 태그로 인한 selection API 추출 불가'],
        solutions: [
            '텍스트를 드래그하여 좋아요를 표시할 수 있도록 구현하고자 함. 이에 selection web API를 활용하여 드래그된 문자열의 인덱스 정보를 추출하고, 해당 구간의 인덱스들을 DB에 누적하여 저장하도록 함. 그리고 각 문자열을 span 태그로 분리하여, 배경 색상을 다르게 적용함으로써 선택된 문자에 하이라이트를 표시함. 또한 좋아요 수가 많을 수록 짙은 색상을 적용함으로써, 좋아요 수를 파악할 수 있도로 함.', 
            '문자열의 모든 문자를 span 태그로 분리했더니, 드래그된 문자열 내용만 반환되고 인덱스 정보가 추출되지 않는 문제가 발생했음. 이에 indexOf() 메소드를 통해 해당 문자열의 위치를 파악하고, 문자열의 length를 통해 인덱스 구간을 파악하였음.'
        ],
        image: 2,
        url: 'https://scrapper-zeta.vercel.app/',
        github: 'https://github.com/sjhong98/scrapper',
        notion: "",
        etc: "구체적인 기능 시현은 github readme를 통해 확인하실 수 있습니다."
      },
      {
        title: "Portfolio",
        subtitle: "포트폴리오 페이지",
        main: "#Next.js  #GSAP",
        duration: "2023.11",
        part: "1인 프로젝트",
        func : ['자기소개, 포트폴리오, 연락처 등 정보 전달'],
        stack: ["Javascript", "Next.js", "Tailwind", "Vercel", "Route 53"],
        dev: ["Next.js SPA", "GSAP/CSS Keyframes를 사용한 에니메이션", "이벤트 핸들러를 사용한 UI/UX", "데스크탑 및 모바일 대응 반응형 웹 구현"],
        cap: "포트폴리오를 정리하기 위해 제작한 페이지입니다. GSAP과 CSS keyframes 에니메이션을 사용하여 보기 즐거운 페이지를 만들고자 노력했고, 다양한 포트폴리오 레퍼런스들을 참고하여 제작하였습니다. AWS Route 53을 이용하여 도메인을 등록하였습니다.",
        troubles: ['눈에 잘 들어오는 디자인 구성'],
        solutions: [
          '포트폴리오 페이지인만큼, 디자인이 심플하고 전달하고자 하는 내용이 정확히 전달되어야 했음. 이에 여러 레퍼런스들을 참고하여 최소한의 동작으로 페이지 간 이동이 가능하며, 에니메이션을 통해 자연스럽게 이동할 수 있고, 최대한 많은 요소에 마우스오버 및 클릭 이벤트를 적용함으로써 사용자 경험을 고려한 페이지를 구현함.'
        ],
        image: 1,
        url: 'https://hongseungjae.info/', 
        github: 'https://github.com/sjhong98/Portfolio_final',
        notion: "",
        etc: ""
      },
      {
        title: "Muse",
        subtitle: "메트로폴리탄 박물관 웹",
        main: "#Next12  #SSG  #TS  #Styled-Components  #Tailwind",
        duration: "2023.12",
        part: "1인 프로젝트",
        func : ["전시물 확인", "전시물 세부정보 확인", "카테고리 별 전시물 확인"],
        stack: ["Next.js", "React", "Typescript", "Styled-Components", "Tailwind", "Vercel"],
        dev: ["Next.js SPA", "getServerSideProps를 이용한 SSR", "useRef를 이용한 모달 구현", "scrollY와 eventListener를 이용한 헤더접힘 구현", "IntersectionObserver를 이용한 무한스크롤 구현", "styled-components를 통한 컴포넌트 구현", "tailwind CSS"],
        cap: "Muse는 메트로폴리탄 박물관 Open API를 사용하여 박물관 전시물들을 확인할 수 있는 웹입니다. ",
        troubles: ['함수 클로저로 인한 변경된 데이터의 미적용', '이미지 로딩 시간 느림', 'getServerSideProps로 인한 페이지 로딩 시간 증가', 'Next 13.5.4 이후 버전의 SSG 빌드 오류'],
        solutions: [
            '전시물 카테고리의 변경을 구현하기 위해 index 값이 바뀔 경우, 새로운 데이터를 받아오도록 구현하였으나, index 값이 변하였음에도 초기 index값의 데이터만 받아오는 문제 발생. 이벤트 핸들러에 콜백 함수를 등록하여, 이벤트 핸들러 동작시에 콜백 함수가 실행되도록 하였는데, 이벤트 핸들러가 동작할 시점에 콜백 함수는 이미 소멸한 상태로, 외부 변수인 index의 클로저만 남아있는 상태가 되었던 것임. 이에 index 값이 변할 경우에 콜백 함수를 새로 생성하고 이벤트 핸들러에 재등록하여, 제대로 index가 반영될 수 있도록 함.', 
            'next/image와 sharp를 사용하여 이미지 최적화',
            '기존 방식에서는 SSR로 초기 페이지를 구성한 뒤, index에 따라 게시물 배열을 갱신하는 방식으로 카테고리를 변경함. 그러나 이 방식은 초기 로딩 시간만 감소할뿐, 카테고리 이동 간에 소요되는 시간은 감소하지 못했음. 이에 SSG 방식을 적용하여 getStaticProps와 getStaticPaths를 이용하여 동적 페이지로 구성하여, 모든 페이지를 서버에서 렌더링하도록 수정함. 이에 모든 페이지 로딩 시간을 줄일 수 있었고, 페이지 변경 시에도 데이터가 캐싱되어 로딩 시간을 단축함.',
            'vercel에서 SSG 웹 배포 시, Maximum call stack exceed 에러가 발생함. 이에 서칭을 통해 Next 13.5.4 이후 버전에서 SSG 웹을 빌드 시 발생하는 공통 에러임을 확인하고, Next 13.5.3으로 버전 다운하여 빌드.'
        ],
        image: 1,
        url: 'https://muse-xi.vercel.app/',
        github: 'https://github.com/sjhong98/muse',
        notion: "",
        etc: ""
      },
      {
        title: "Portfolio-Notion.ver",
        subtitle: "Notion 버전 포트폴리오 웹페이지",
        main: "#Next.js  #JS  #Styled-Components  #Tailwind",
        duration: "2024.1",
        part: "1인 프로젝트",
        func : ["포트폴리오 내용 표시"],
        stack: ["Next.js", "React", "Javascript", "Styled-Components", "Tailwind", "Vercel"],
        dev: ["Next.js SPA", "Styled-Components를 활용한 Notion 블록 컴포넌트 생성", "Toggle을 통한 내용 숨김" , "Side Popup을 통한 내용 표시", "Dark Mode 구현"],
        cap: "Notion의 심플한 블록 단위 프레임에 버튼/팝업/자유로운 텍스트 필드 등을 추가하여, 보다 자유롭고 명확하게 정보 전달을 할 수 있도록 구현한 웹페이지입니다.",
        troubles: ["side popup의 fixed와 overflow", "Day & Night Theme 변경 기능"],
        solutions: [
          "메인 화면과 별개로 side popup을 고정시키되, popup 내에서는 스크롤이 가능하도록 구현해야 했음. 이에 popup에 fixed 속성을 주고, overflow-y를 활성화하였음. 이를 통해 메인 화면과 side popup이 별개의 스크롤 영역을 가지도록 함.",
          "Day & Night Theme을 변경할 수 있는 기능을 구현하고자 함. 이에 Styled-Component를 통해 isDay라는 props를 전달하여, isDay에 따라 배경색상과 폰트색상을 동적 적용하도록 구현함."
        ],
        image: 2,
        url: 'https://muse-xi.vercel.app/',
        github: 'https://github.com/sjhong98/Portfolio_notion',
        notion: "",
        etc: ""
      },

  ];

export const interesting = [
  'SSR', 'UI/UX', '에니메이션', 'MapAPI'
];

export const green = [
  'HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'Redux', 'Next.js', 'Tailwind', 'Styled-Component', 'Vercel', 'Firebase', 'Github', 'Notion'
];

export const yellow = [
  'Webpack', 'socket.io', 'Cypress', 'Github Actions', 'Route 53', 'React Native'
];
