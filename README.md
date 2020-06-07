# React Hook

## useState

```javascript
const [color, setColor] = useState("");
```

useState은 길이가 2인 배열을 반환한다.

첫번째 요소는 state, 두번째 요소는 state을 변경시키는 함수(modifier)이다.

useState의 인자는 state의 초기값이다.

modifier의 이름은 관습적으로 {set+state의 이름} 이다. (camerCase)

## state의 값을 styled-component로 전달하기

```javascript
<Pallete color={color} />
```

1. JSX 태그에 props 추가

```javascript
const Pallete = styled.div`
  width: 700px;
  height: 700px;
  border: 1px solid black;
  background: ${(props) => props.color};
`;
```

2. styled-component에 props를 전달받고 원하는 값을 return하는 함수를 전달 (styled-component의 정해진 규칙)

## 이벤트 발생 시 state 수정

```javascript
<CyanButton onClick={() => setColor("cyan")} />
<BrownButton onClick={() => setColor("brown")} />
<PinkButton onClick={() => setColor("pink")} />
```

인자를 필요로 하는 함수를 달아줄 때에는 위와 같이 modifier을 실행하는 함수 자체를 인자로 넘겨준다.

```javascript
<CyanButton onClick={setColor("cyan")} />
```

위와 같이 작성하면 렌더링 될 떄마다 함수가 실행되어 [state변경 -> 리렌더링 -> state변경] 의 무한루프에 빠지게 된다.

(state가 변화하면 자동으로 리렌더링이 되기 때문)

## useEffect

컴포넌트의 side effect(렌더링 작업에 포함되지 않는 별개의 작업)를 수행하기 위해 사용된다.

대표적으로 HTTP통신이나 DOM조작 등이 이에 해당된다.

```javascript
useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(({ data }) => setPosts(data));
}, []);
```

1. 기본적으로 렌더링 될 때마다 실행된다.
2. 두 번째 인자로 배열을 전달하여 특정 state가 변경 될 때 실행되도록 조건을 정할 수 있다. 빈 배열을 전달하면 최초 한번만 실행되며 배열 안에 state들을 넣어 어떤 state가 변경 될 때 실행할 지 정할 수 있다.
3. state를 변경하는 로직의 경우 실행 조건을 정해주지 않으면 [state변경->리렌더링->state변경->리렌더링]의 무한루프에 빠지게 된다.

## JS 내장함수 Array.map()

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
