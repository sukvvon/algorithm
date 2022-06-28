## 4. 개

```
개

문제
아래 예제와 같이 개를 출력하시오.

입력
없음.

출력
개를 출력한다.

예제 입력 1

예제 출력 1
|\_/|
|q p|   /}
( 0 )"""\
|"^"`    |
||_/=\\__|
```

### 해답

```js
console.log(`|\\_/|
|q p|   /}
( 0 )\"\"\"\\
|\"^"\`    |
||_/=\\\\__|`);
```

[Template literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals) 즉 백틱키를 활용하여 출력을 해주는데 특정 문자를 나타내야하므로 [이스케이프 시퀀스](https://docs.microsoft.com/ko-kr/cpp/c-language/escape-sequences?view=msvc-170)를 활용하여 코드를 작성합니다.

| 종류 |   내용   |
| :--: | :------: |
|  \n  |  return  |
| \\'  | `'` 표시 |
| \\"  | `"` 표시 |
| \\\\ | `\` 표시 |
