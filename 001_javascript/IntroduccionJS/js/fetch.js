// javascript fetch 함수를 사용하여 데이터 가져오기
const url = 'https://jsonplaceholder.typicode.com/comments'; // 500개의 더미 데이터
const url2 = 'https://jsonplaceholder.typicode.com/todos'; // 200개의 더미 데이터
const url3 = 'https://jsonplaceholder.typicode.com/photos'; // 5000개의 더미 데이터

const callApi = async () => {
  try {
    const startPerform = performance.now();

    const res = await fetch(url);
    if (!res.ok) throw new Error('서버 문제 발생');
    const data = await res.json();
    console.log(data);

    const res2 = await fetch(url2);
    if (!res2.ok) throw new Error('서버 문제 발생');
    const data2 = await res2.json();
    console.log(data2);

    const res3 = await fetch(url3);
    if (!res3.ok) throw new Error('서버 문제 발생');
    const data3 = await res3.json();
    console.log(data3);

    const endPerform = performance.now();
    console.log(`block 된 실행 시간: ${endPerform - startPerform}ms`);
  } catch (error) {
    console.log('error', error);
  }
};

// callApi();

const callApi2 = async () => {
  try {
    const startPerform = performance.now();

    const [res, res2, res3] = await Promise.all([
      fetch(url),
      fetch(url2),
      fetch(url3),
    ]);
    const [data, data2, data3] = await Promise.all([
      res.json(),
      res2.json(),
      res3.json(),
    ]);

    console.log(data, data2, data3);

    const endPerform = performance.now();
    console.log(
      `none block 블럭킹된 실행 시간: ${endPerform - startPerform}ms`
    );
  } catch (error) {
    console.log('error', error);
  }
};

callApi2();
