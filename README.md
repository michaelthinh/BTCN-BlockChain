# [Bài tập cá nhân về Blockchain]

## Yêu cầu:

- Ghi nhận quá trình làm việc lên Github (Source Code, Tài liệu tham khảo, Readme.txt)
- Quay lại video cách sử dụng
- Xây dựng hệ thống tiền điện tử MyCoin :

1. Phần giao diện và quá trình thao tác tương tự **[MyEtherWallet](https://www.myetherwallet.com/wallet/create)**
   a. Tạo Ví(Wallet) : Private key/ Passphrase/....
   b. Xem thống kê tài khoản
   c. Gởi coin cho một địa chỉ khác
   d. Xem lịch sử giao dịch (build giống GUI **[Etherscan.io](https://etherscan.io/)** )
2. Sử dụng thuật toán Proof Of Stake

## Cách cài đặt

**1. Chạy server**

* Sử dụng database PostgreSQL (using postgresql for database)
* Tạo file **.env** trong folder ./server với các thông tin tương ứng với database trên máy tính.

```shell notranslate position-relative overflow-auto
CLIENT_URL=http://localhost:5173
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
```

* Chạy terminal cho server

```
./server/npm install
./server/npm run start
```

**2. Run client**

* Tạo file **.env** trong folder ./client tương tự như bên dưới

```shell notranslate position-relative overflow-auto
VITE_API_URL=http://localhost:5000
```

* Chạy terminal cho client

```
./client/npm install
./client/npm run dev
```

## Video demo dự án

**[[BTCN phần ứng dụng BlockChain] - Các công nghệ mới trong phát triển phần mềm - CQ2020/3](https://www.youtube.com/watch?v=HCSu9MpwTv0)**