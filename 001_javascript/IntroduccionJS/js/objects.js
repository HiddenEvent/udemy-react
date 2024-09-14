const product = {
  name: 'TV',
  price: 300,
  available: true,
};

console.log(product);
console.table(product);

// 객체 Destructuring(구조 분해 할당)
const { name, price, available } = product;

console.log(name);
console.log(price);
console.log(available);

// 속성 축약 - 객체 리터럴에서 속성 이름과 변수 이름이 같은 경우 변수 이름을 생략할 수 있습니다.
const isActive = true;
const userName = 'Ricky';

const user = {
  userName,
  isActive,
  age: 30,
};

console.log(user);

// Object.freeze(user); /* 객체 불변 - 객체를 수정할 수 없도록 만들기 */
// Object.seal(user); /* 객체 속성값 변경 가능, 새로운 속성 추가 및 기존 속성 삭제 불가 */

user.userName = '변경해보자';
user.age = 31;
user.newName = '객체에 없는 속성 추가';

delete user.age; // 삭제 불가
console.log(user);

// 객체 속성을 모두 병합
// Object.assign(target, source1, source2, ...);
const mergeUser = {
  ...user,
  ...product,
};

console.log(mergeUser);

// 객체를 구조 병합
const mergeUser2 = {
  user: { ...user },
  product: { ...product },
};

console.log(mergeUser2);
