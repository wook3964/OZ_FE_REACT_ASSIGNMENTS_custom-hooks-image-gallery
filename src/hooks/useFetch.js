import { useEffect, useState } from "react";

// 데이터 fetching Custom Hook 작성하기
const useFetch = (url) => {
  // 1. data, loading, error 값에 대한 초기 값을 지정하세요.
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    // 2. 로딩 상태를 true로 변경합니다. ( 데이터 패칭 전 로딩 적용 )
    setLoading(true);
    // 3. fetch 를 사용하여 인자로 받은 url에서 데이터를 받아온 후 data 상태를 업데이트 해주세요.
    try {
      const response = await fetch(url);
      const result = await response.json();
        setData(result);
      // (+ 데이터를 받아온 후 상태를 업데이트 했다면, 상태를 다시 false로 변경해야 합니다.)
        setLoading(false);        
      // (+ catch문을 사용하여 error 상태값을 사용하여 에러 핸들링 코드도 함께 작성해주세요.)
    } catch (error) {
        setError(error);
        setLoading(false);
    }
  };
  // 4. useEffect를 사용하여 url이 변경되는 경우에만 fetchData 함수가 실행되도록 작성하세요.
  useEffect(() => {
    fetchData();
  }, [url]);
  // 5. return문을 사용하여 다른 컴포넌트에서 접근할 수 있도록 총 3가지의 상태(data, error, loading) 값과 fetchData 함수를 리턴하세요.
  return { data, loading, error, fetchData};
};
export default useFetch;
