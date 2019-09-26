### 서버에 노드 세팅하기

- 우분투 라이브러리 서버 변경

- ```
  sudo vi /etc/apt/sources.list
  ```
  :%s/kr.archive.ubuntu.com/ftp.daumkakao.com

> ```
> sudo apt-get update
> // 다시 업데이트 해준다.
> ```

- 컬로 노드 버전 지정

  ```markup
  sudo apt-get install curl
  curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
  ```

- node install

  ```markup
  sudo apt-get install -y nodejs
  ```

- 깃설치

```
sudo add-apt-repository ppa:git-core/ppa
sudo apt-get update && sudo apt-get dist-upgrade
sudo apt-get install git-core
```

