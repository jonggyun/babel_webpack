# Babel과 Webpack을 이용한 es6 환경 구축

현재 브라우저는 ES6를 완전하게 지원하지 않음.

그래서 트랜스파일을 해주는 Babel을 통해 소스를 변환하고, 모듈 번들러인 Webpack를 이용해서 ES6 개발환경을 구축.


> Babel 설치
```
npm install --save-dev @babel/cli @babel/core @babel/preset-env
```

> .babelrc 설정

```
npm install @babel/preset-env --save-dev
```

babel7부터는 preset을 설치할 때 preset-es2015 이런 방식이 아닌 preset-env로 통일된 듯? (다시 확인해보기)

설치 후 .babelrc 파일에 아래와 같이 설정

```
{
  "presets": ["@babel/preset-env"]
  // bable 7 기준
}
```

> webpack 설치

Babel로 변환된 소스라고 해도 모듈은 Webpack으로 번들링 해야하는 듯.

```
npm install babel-loader --save-dev
```

package.json에서 build를 wepback이 하도록 변경

ex) "build": "webpack -w"

> webpack.config.js

여기에는 어떤 파일을 사용할 것인지, 사용한 파일을 어떤 경로에 내보낼 것인지 등 을 설정할 수 있음.

더 공부해봐야할 듯..

이렇게 Babel 설정과 webpack 설정을 마치면

브라우져에서 module 등을 정상적으로 불러올 수 있게 됨.