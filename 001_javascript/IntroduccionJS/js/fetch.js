// javascript fetch 함수를 사용하여 데이터 가져오기
const url = 'https://jsonplaceholder.typicode.com/123';

fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    return console.log(error.message);
  });
