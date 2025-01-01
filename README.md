Frontend Setup (FE)

1\. Clone the repository:

git clone https://github.com/your-username/csv-to-json-converter.git cd
csv-to-json-converter/FE

2\. Install the required dependencies:

Untuk menginstal semua dependensi yang diperlukan untuk frontend,
jalankan perintah berikut:

npm install

3\. Start the frontend development server:

Setelah semua dependensi terinstal, jalankan server pengembangan untuk
frontend:

npm start

Secara default, aplikasi React frontend akan tersedia di
\[http://localhost:3000\](http://localhost:3000).

---

Backend Setup (BE)

1\. Navigate to the \`BE\` folder:

Pindah ke direktori backend proyek:

cd csv-to-json-converter/BE

2\. Install Go dependencies:

Jalankan perintah berikut untuk menginstal semua dependensi Go yang
diperlukan:

go mod tidy

3\. Start the backend server:

Jalankan server backend menggunakan Go:

go run main.go

Server backend akan berjalan di
\[http://localhost:8081\](http://localhost:8081).

---

Running the Project with Docker

Untuk menjalankan proyek menggunakan Docker dan Docker Compose, ikuti
langkah-langkah berikut:

1\. Create a \`docker-compose.yml\` file at the root of the project:

Buat file \`docker-compose.yml\` di folder utama proyek (di samping
folder \`FE\` dan \`BE\`) dengan isi sebagai berikut:

version: "3.8" services: frontend: build: context: ./FE ports:  -
"3000:80" depends_on:  - backend

backend: build: context: ./BE ports:  - "8081:8081"

2\. Build and run both containers:

Jalankan Docker Compose untuk membangun dan menjalankan kedua container:

docker-compose up --build

Ini akan memulai kedua container frontend dan backend, dan memetakan
port 3000 untuk frontend dan port 8081 untuk backend ke mesin lokal
Anda.

3\. Open your browser and navigate to
\[http://localhost:3000\](http://localhost:3000) to access the frontend:

Buka browser Anda dan akses aplikasi frontend di
\[http://localhost:3000\](http://localhost:3000).

4\. Backend will be accessible at
\[http://localhost:8081\](http://localhost:8081):

Backend akan dapat diakses di
\[http://localhost:8081\](http://localhost:8081).

---

API Endpoints

\`POST /convert\` - Description: Converts a CSV file to JSON. - Request:
 - FormData dengan file CSV. - Response:  - Objek JSON dengan data dari
CSV.  - Contoh response:

{ "json": \[ {"column1": "value1", "column2": "value2"}, {"column1":
"value3", "column2": "value4"} \] }

\`GET /convert\` - Description: Sample endpoint untuk mengecek jika
backend bekerja dengan baik. (opsional untuk pengujian) - Response:  -
Pesan sederhana yang mengonfirmasi bahwa API sedang berjalan.  - Contoh
response:

{ "message": "API is running" }

---

Development and Production Builds

\- Development: Gunakan \`npm start\` untuk React dan \`go run main.go\`
untuk backend untuk menjalankan keduanya dalam mode pengembangan. -
Production: Gunakan Docker untuk membangun container siap produksi untuk
FE dan BE.

To build production-ready Docker images:

1\. Build the frontend Docker image:

docker build -t frontend ./FE

2\. Build the backend Docker image:

docker build -t backend ./BE

3\. Run both images using Docker:

Jalankan container frontend dan backend menggunakan Docker:

docker run -d -p 3000:80 --name frontend frontend docker run -d -p
8081:8081 --name backend backend

---

Contributing

1\. Fork repository ini dan buat cabang baru untuk fitur atau perbaikan
yang Anda kerjakan. 2. Kirim pull request dengan deskripsi perubahan
Anda. 3. Pastikan kode Anda lulus semua tes sebelum mengirimkan.
