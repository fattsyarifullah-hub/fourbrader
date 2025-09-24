// all jawascripts methods

// string methods example 

// charAt() method
let jawa = "aku suka kamuuu";
console.log(jawa.charAt(5));  //untuk mengambil karakter pada index yang diinginkan

// includes() method
let sunda = "nigga";
console.log(sunda.includes("putih")); //untuk mengecek karakter yang diinginkan sama dengan di variabel atau tidak

// replace() method
let bali = "aku jawa";
console.log(bali.replace("jawa", "depok")); //untuk mengganti karakter pada variabel

// slice() method
let batak = "hai guys";
console.log(batak.slice(0, 3)); //untuk mengambil karakter pada index yang akan dimuat berdasarkan keinginan

// toUppercase() method
let minang = "fathan";
console.log(minang.toUpperCase()); //untuk mengubah karakter menjadi huruf besar semua

// toLowerCase() method
let lagi = "KANG DEDI";
console.log(lagi.toLowerCase()); //untuk mengubah karakter menjadi huruf kecil semua

// trim() method
let aceh = "   aku cinta indonesia   ";
console.log(aceh.trim()); //untuk menghilangkan spasi pada awal dan akhir karakter

// split() method
let prau = "a,b,c,d";
console.log(prau.split(",")); //untuk memisahkan karakter berdasarkan karakter yang diinginkan

// array methods example

// concat() method
let array1 = ["fathan, sigma"];
let array2 = ["galih, dedi"];
let array3 = array1.concat(array2);
console.log(array3); //untuk menggabungkan dua array atau lebih

// filter(callback) method
let ganteng1 = [1, 2, 3, 4, 5];
console.log(ganteng1.filter(num => num <= 3)); //untuk memfilter array berdasarkan kondisi yang diinginkan

// find(callback) method
let ganteng2 = [5, 6, 7, 8, 9];
console.log(ganteng2.find(num => num > 8)); //untuk mencari elemen pada array berdasarkan kondisi yang diinginkan

// map(callback) method
let ganteng3 = [10, 11, 12, 13, 14];
console.log(ganteng3.map(num => num / 2)); //untuk memanipulasi elemen pada array berdasarkan kondisi yang diinginkan

// push(element) method
let ganteng4 = ["fathan", "sigma"];
ganteng4.push("galih");
console.log(ganteng4); //untuk menambahkan elemen pada akhir array

// pop() method
let ganteng5 = ["fathan", "sigma", "galih"];
ganteng5.pop();
console.log(ganteng5); //untuk menghapus elemen pada akhir array

// shift() method
let ganteng6 = ["fathan", "sigma", "galih"];
ganteng6.shift();
console.log(ganteng6); //untuk menghapus elemen pada awal array

// object methods example

// assign(target, ...sources) method
let target = { a:2, b:10}; 
let source = {b:4};
Object.assign(target, source);
console.log(target); //untuk menyalin nilai dari satu atau lebih 

// keys(obj) method
let obj = { a : 1, b : 2};
console.log(Object.keys(obj)); //untuk membuat array baru string dari nama properti

// value(obj) method
let obd = {a : 1, b : 2};
console.log(Object.values(obd)); //untuk membuat array baru dari nilai value

// entries(obj) method
let obs = {a : 1, b : 2};
console.log(Object.entries(obs)); //untuk mengembalikan sebuah array yang hanya berisi kunci-kunci dari objek

// math methods example

// abs(x) method
console.log(Math.abs(-5)); //untuk mengembalikan nilai absolut dari suatu angka(fungsi ini menghilangkan angka negatif dan memastikan hasilnya adalah angka positif)

// ceil(x) method
console.log(Math.ceil(4.2)); //untuk membulatkan angka ke atas ke bilangan bulat terdekat 

// floor(x) method
console.log(Math.floor(4.7)); //untuk membulatkan angka ke bawah ke bilangan bulat terdekat

// maxx(x1,x2,...) method
console.log(Math.max(1, 3, 2, 5, 4)); //untuk mengembalikan nilai terbesar dari sekumpulan angka

// min(x1,x2,...) method
console.log(Math.min(1, 3, 2, 5, 4)); //untuk mengembalikan nilai terkecil dari sekumpulan angka

// random() method
console.log(Math.random()); //untuk mengembalikan angka acak antara 0 (inklusif) dan 1 (eksklusif)

// date methods example

// getDate() method
let date = new Date();
console.log(date.getDate()); //untuk mendapatkan tanggal dari objek Date

// getDay() method
let day = new Date();
console.log(day.getDay()); //untuk mendapatkan hari dari objek Date (0-6) 0 = minggu, 1 = senin, dst

// getMonth() method
let month = new Date();
console.log(month.getMonth()); //untuk mendapatkan bulan dari objek Date (0-11) 0 = januari, 1 = februari, dst

// getFullYear() method
let year = new Date();
console.log(year.getFullYear()); //untuk mendapatkan tahun dari objek Date (4 digit)

// now() method
console.log(Date.now()); //untuk mendapatkan timestamp saat ini dalam milidetik sejak 1 januari 1970

// setDate(day) method
let setdate = new Date();
setdate.setDate(13);
console.log(setdate); //untuk mengatur tanggal pada objek Date

// setMonth(month) method
let setmonth = new Date();
setmonth.setMonth(8);
console.log(setmonth); //untuk mengatur bulan pada objek Date (0-11) 0 = januari, 1 = februari, dst

// setFullYear(year) method
let setyear = new Date();
setyear.setFullYear(2025);
console.log(setyear); //untuk mengatur tahun pada objek Date (4 digit)

// setHours(hours) method
let sethours = new Date();
sethours.setHours(17);
console.log(sethours); //untuk mengatur jam pada objek Date (0-23)

// setMinutes(minutes) method
let setminutes = new Date();
setminutes.setMinutes(30);
console.log(setminutes); //untuk mengatur menit pada objek Date (0-59)

// setSeconds(seconds) method
let setseconds = new Date();
setseconds.setSeconds(45);
console.log(setseconds); //untuk mengatur detik pada objek Date (0-59)

// JSON methods example

// parse(text) method
let jsonString = '{"name": "fathan", "age": 20}';
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj); //untuk mengubah string JSON menjadi objek JavaScript

// stringify(value) method
let jsObj = { name: "fathan", age: 20 };
let jsonStr = JSON.stringify(jsObj);
console.log(jsonStr); //untuk mengubah objek JavaScript menjadi string JSON

// console methods example

// log(message) method
console.log("Hello, world!"); //untuk menampilkan pesan di konsol 

// error(message) method
console.error("This is an error message"); //untuk menampilkan pesan kesalahan di konsol

// warn(message) method
console.warn("This is a warning message"); //untuk menampilkan pesan peringatan di konsol

// info(message) method
console.info("This is an info message"); //untuk menampilkan pesan informasi di konsol

// table(data) method
let data = [
    { name: "fathan", age: 20 }];
console.table(data); //untuk menampilkan data dalam format tabel di konsol

// profile(label) method
console.profile("My Profile"); //untuk memulai perekaman profil kinerja dengan label tertentu
console.profileEnd("My Profile"); //untuk mengakhiri perekaman profil kinerja dengan label tertentu

// time(label) method
console.time("My Timer"); //untuk memulai penghitung waktu dengan label tertentu
console.timeEnd("My Timer"); //untuk mengakhiri penghitung waktu dengan label tertentu

// promise methods example

// all(promises) method
let promise1 = Promise.resolve(3);
let promise2 = 42; //