import "./App.css";
import useFetch from "./hooks/useFetch";

// ⭐️ 이번 과제는 useFetch.jsx 파일에서 진행합니다.

// 강아지 사진 오픈 API 주소
const dogUrl = "https://dog.ceo/api/breeds/image/random";
// 고양이 사진 오픈 API 주소
const catUrl = "https://api.thecatapi.com/v1/images/search";

function App() {
  // 강아지 데이터 fetch custom Hooks
  // 각 데이터에 알맞는 url(dogUrl)을 useFetch 훅의 전달인자로 전달합니다.
  const {
    data: dogData,
    loading: dogLoading,
    fetchData: dogFetchData,
  } = useFetch(dogUrl);
  // 고양이 데이터 fetch custom Hooks]
  // 각 데이터에 알맞는 url(catUrl)을 useFetch 훅의 전달인자로 전달합니다.
  const {
    data: catData,
    loading: catLoading,
    fetchData: catFetchData,
  } = useFetch(catUrl);
  return (
    <>
      <h1> Animal gallery</h1>
      <p>
        애니멀 갤러리에 오신 여러분 환영합니다. <br /> 각 버튼을 클릭하여 사진을
        업데이트 해보세요.
      </p>
      <div className="container">
        <h2> 🐶 Dog Zone</h2>
        {/* 버튼을 클릭하면 dogUrl에서 데이터를 받아올 수 있어야합니다. */}
        <button onClick={() => dogFetchData(dogUrl)}>new Dog</button>
        {dogLoading ? (
          <p className="loading">Loading . . .</p>
        ) : (
          dogData && <img src={dogData.message} alt="dog" />
        )}
      </div>
      <div className="container">
        <h2>🐱Cat Zone</h2>
        {/* 버튼을 클릭하면 catUrl에서 데이터를 받아올 수 있어야합니다. */}
        <button onClick={() => catFetchData(catUrl)}>new Cat</button>
        {catLoading ? (
          <p className="loading">Loading . . .</p>
        ) : (
          catData && <img src={catData[0].url} alt="cat" />
        )}
      </div>
    </>
  );
}

export default App;
