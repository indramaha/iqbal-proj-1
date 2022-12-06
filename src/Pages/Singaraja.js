import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import WisataDescSingaraja from "../Components/WisataDescSingaraja";

const Singaraja = () => {
    const dataSingaraja = ([
        {
            no: 1,
            name: 'Pantai Lovina',
            image: 'https://cdn.idntimes.com/content-images/post/20220613/77411997-464803804456207-6118679788695187190-n-copy-2248x1217-19dcf5198086e897f230ecaca6ac612d_600x400.jpg ',
            desc: 'Pantai Lovina merupakan pantai di kawasan utara Puau Bali yang paling banyak dikunjungi wisatawan. Pantai Lovina di kabupaten Buleleng adalah pantai yang pasirnya berwarna hitam, bukan pantai pasir putih. Selain itu, Pantai Lovina memeliki bentangan garis pantai hingga 2 kilometer dengan pemandangan perahu nelayan tradisional yang berjejer pada area garis pantai. Lokasi pantai yang masih sangat alami dan suasananya sangat berbeda dengan suasana pantai yang biasanya ditemukan di Bali Selatan. Pantai Lovina merupakan pantai yang sangat tenang, dan tidak terlihat ramai seperti di area pantai bali selatan pada umumnya. Untuk kenyamanan pengunjung pantai, di dekat pantai terdapat area parkir kendaraan yang lumayan luas. Pengalaman melihat sunrise dari tengah perairan laut, menjadi keindahan utama dari tempat wisata pantai Lovina. Daya tarik utama dari pantai Lovina bukan pada keindahan pantainya, melainkan pada aktivitas melihat lumba-lumba di tengah laut. Kawasan objek wisata Lovina sangat terkenal dengan pemandangan lumba – lumba liar di tengah laut. Di pantai ini terdapat puluhan bahkan sampai ratusan lumba-lumba, tergantung musim. Untuk dapat melihat lumba-lumba di tengah laut, para wisatawan harus berangkat ke tengah laut sebelum matahari terbit sekitar pukul 05:30 menggunakan perahu tradisional dengan kapasitas 5 orang yang akan mengejar lokasi lumba–lumba di tengah laut dengan durasi sekitar 2 jam.',
            tiket: [
                {
                    domestikDewasa: null ,
                    domestikAnak: null ,
                    turisDewasa: null ,
                    turisAnak: null ,
                },
            ],
        },
        {
            no: 2,
            name: 'Danau Buyan',
            image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2022/05/17/62836b3977808-danau-tamblingan_1265_711.jpg ',
            desc: 'Danau ini merupakan danau terbesar diantara tiga danau kembar di daerah bedugul. Danai Buyan berada di kaldera besar yang menempati 490 hektar area. Lokasinya terletak di Kecamatan Sukasada. Dibandingkan dua danau lainnya, yaitu Danau Tamblingan dan Danau Beratan, Danau Buyan inilah yang paling luas. Tidak hanya sekadar berkunjung, wisatawan juga diperbolehkan untuk berkemah dan memancing di danau ini. Anda yang gemar selfie atau menggeluti fotografi pun bisa puas berburu foto di kawasan danau yang benar-benar terjaga ini. Tidak hanya itu saja kelebihan dari danau ini, para wisatawan bisa menikmati keindahan alam pegunungan yang begitu eksotis dengan pemandangan hijau menyegarkan mata ditambah dengan kesejukan udara di Danau Buyan ini  yang membuat Anda semakin nyaman berada di tempat ini. Ada banyak aktivitas yang bisa Anda lakukan di danau Bali ini, seperti menikmati suasana danau atau mencoba aktivitas trekking dengan menjelajah sekitar danau.',
            tiket: [
                {
                    domestikDewasa: 10000 ,
                    domestikAnak: 10000 ,
                    turisDewasa: 10000 ,
                    turisAnak: 10000 ,
                },
            ],
        },
        {
            no: 3,
            name: 'Danau Tamblingan',
            image: 'https://ksmtour.com/media/images/articles6/danau-tamblingan-bali.jpg',
            desc: 'Danau Tamblingan merupakan danau dengan keindahan yang memikat dan lokasinya bersebelahan dengan Danau Buyan. Danau Tamblingan dikelilingi oleh hutan dan udara yang sejuk. Dengan nuansa spiritual dan alam yang menyatu membuat Danau Tamblingan pantas untuk dikunjungi. Para wisatawan yang berkunjung ke tempat ini akan mendapatkan suasana yang tenang, sejuk yang datang dari pepohonan dan akan jauh dari kebisingan. Selain itu, ternyata Danau Tamblingan ini dulunya merupakan sebuah perkampungan penduduk yang berada di Gunung Lesung. Namun, penduduk tersebut memutuskan untuk terbagi ke empat wilayah. Walaupun begitu, mereka tetap bergantian untuk merawat dan membersihkan Danau Tamblingan. Danau ini juga menjadi tempat penting bagi umat Hindu di Bali karena terdapat beberapa pura sebagai tempat persembahyangan umat Hindu di Bali, seperti Pura Dalem Tamblingan, Pura Endek, Pura Ulun Danu Sang Hyang Kangin, dan masih banyak lagi. Sama seperti Danau Buyan, wisatawan juga bisa melakukan aktivitas seperti memancing dan camping ditemani suasana sejuk Danau Tamblingan.',
            tiket: [
                {
                    domestikDewasa: 10000 ,
                    domestikAnak: 10000 ,
                    turisDewasa: 10000 ,
                    turisAnak: 10000 ,
                },
            ],
        },
        {
            no: 4,
            name: 'Gitgit Waterfall',
            image: 'https://www.rentalmobilbali.net/wp-content/uploads/2015/01/Air-Terjun-Gitgit-Buleleng-Bali-Feature-Image.jpg ',
            desc: 'Sebagian besar lokasi tempat wisata air terjun di Bali berada di daerah Bali utara, tepatnya di Kabupaten Buleleng. Salah satunya adalah air terjun Gitgit Buleleng Bali yang menjadi salah satu objek wisata air terjun terfavorit di Bali. Lokasi dari air terjun Gitgit Buleleng Bali lebih mudah dicapai, dibandingkan dengan lokasi air terjun di Buleleng yang lain karena tempat ini letaknya tidak terlalu jauh dari jalan raya yang menghubungkan Denpasar dengan Singaraja (Ibu Kota Kabupaten Buleleng). Mengunjungi air terjun Gitgit di Buleleng, anda bisa menikmati rekreasi trekking ringan, seperti menyusuri perjalanan setapak, melintasi areal persawahan,  kebun kopi dan cengkeh, toko-toko souvenier, serta warung makanan dan minuman. Alam sekitarnya masih asri dan alami, membuat udaranya segar dan jauh dari polusi. Ditambah alamnya yang berhawa sejuk, sungguh menjadi pengalaman menyenangkan sehingga tidak merasa melelahkan. Aktifitas rekreasi alam petualangan alam menuju air terjun Gitgit Buleleng, memang cukup diminati tidak hanya oleh wisatawan domestik, tetapi juga mancanegara.',
            tiket: [
                {
                    domestikDewasa: 20000 ,
                    domestikAnak: 10000 ,
                    turisDewasa: 20000 ,
                    turisAnak: 10000 ,
                },
            ],
        },
    ])
    return ( 
        <div>
            <NavigationBar isTextShow={false}/>
            <WisataDescSingaraja wisataSingaraja={dataSingaraja} />
            <Footer />
        </div>
     );
}
 
export default Singaraja; 