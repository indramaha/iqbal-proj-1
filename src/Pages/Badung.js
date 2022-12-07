import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import WisataDescBadung from "../Components/WisataDescBadung";

const Badung = () => {
    const dataBadung = ([
        {
            no: 1,
            name: 'Pura Uluwatu',
            image: 'https://happytour.id/wp-content/uploads/sites/30/2018/07/Paket-Wisata-Bali-Pura-Uluwatu-1.jpg',
            desc: 'Salah sau destinasi wisata di Kabupaten Badung yang sangat terkenal sampai ke mancanegara adalah objek wisata Pura Luhur Uluwatu Bali. Pura Uluwatu Bali, memiliki status sebagai Pura Sad Kahyangan Jagat atau penyangga poros mata angin pulau Bali. Lokasi pura terletak di atas sebuah bukit karang dengan ketinggian sekitar 97 meter di atas permukaan laut. Karena lokasi pura yang berada di atas tebing batu karang, maka pura ini di beri nama Uluwatu, yang dalam bahasa Sanskerta berarti puncak batu karang. Lokasi berdirinya Pura Luhur Uluwatu, membuat wisatawan yang datang berkunjung, tidak hanya dapat menikmati suasana yang sakral dan religius, tetapi juga pemandangan yang indah serta unik. Para wisatawan yang berkunjung ke Pura Luhur Uluwatu akan menyaksikan luasnya hamparan Samudra Hindia, dengan ombak yang menghantam kaki tebing. Selain itu, wisatawan juga dapat menikmati indahnya sunset dari atas tebing. Di sekitar kawasan Pura Uluwatu terdapat banyak warung yang menjual makanan dan minuman serta restoran yang menyajikan berbagai menu makanan atau minuman dengan harga yang bervariasi. Sementara itu, bagi wisatawan yang ingin menginap di sekitar lokasi Pura Uluwatu, juga terdapat banyak penginapan dengan berbagai tipe. Mulai dari kelas melati, villa, hingga hotel berbintang.',
            tiket: [
                {
                    domestikDewasa: 30000 ,
                    domestikAnak: 20000 ,
                    turisDewasa: 50000 ,
                    turisAnak: 30000 ,
                    maps: 'https://goo.gl/maps/xCirf4ZQ6P23tctG9',
                },
            ],
        },
        {
            no: 2,
            name: 'Garuda Wisnu Kencana',
            image: 'https://www.rentalmobilbali.net/wp-content/uploads/2022/05/Daya-Tarik-Utama-Tempat-Wisata-GWK-Bali.jpg',
            desc: 'Garuda Wisnu Kencana (GWK) merupakan sebuah patung raksasa karya salah satu pematung kenamaan asal Bali, Nyoman Nuarta. Patung ini berbentuk Batara Wisnu yang menunggangi hewan legendaris garuda sebagai simbol Amerta, kebajikan yang abadi. Patung ini terbuat dari 4.000 ton lebih tembaga dan kuningan dengan tinggi 121 meter. Hingga saat ini, GWK menjadi landmark dan ikon kebanggaan Pulau Bali yang wajib dikunjungi wisatawan domestik maupun mancanegara. Tidak hanya akan melihat patung besar saja wisatawan yang berkunjung ke Taman Budaya Garuda Wisnu Kencana dapat menikmati hal lain yang bisa ditemukan di tempat itu yang kaya akan muatan budaya setempat. Seperti event dan pertunjukan seni yang sering digelar di Taman Budaya GWK yang akan memberikan hiburan menarik bagi setiap turis yang datang. Secara formal kawasan wisata ini baru diresmikan pada September 2018 yang lalu.',
            tiket: [
                {
                    domestikDewasa: 40000 ,
                    domestikAnak: 20000 ,
                    turisDewasa: null ,
                    turisAnak: null ,
                    maps: 'https://goo.gl/maps/JGJWS5ry7R5znvZ96',
                },
            ],
        },
        {
            no: 3,
            name: 'Pantai Pandawa',
            image: 'https://advontura.com/wp-content/uploads/2020/12/pantai-pandawa-1.jpg',
            desc: 'Pantai Pandawa memiliki panorama yang sangat indah dan menawan. Di tepi pantai, tebing batu kapur dilubangi dan diukir dengan karakter patung yang indah sebagai tempat Pandawa Lima dalam kisah Mahabharata. Pasir putih bersih dengan air laut berwarna hijau kebiruan, pantai ini sangat cocok untuk mandi atau berenang ketika ombak pecah di tengah laut. Terletak di Timur, membuat kita bisa menikmati matahari terbit yang indah di pantai. Pesona lain Pantai Pandawa adalah aktivitas petani rumput laut di sepanjang pantai. Selain itu, kita bisa melihat aktivitas paralayang dan motor trail di atas Bukit. Karena pantai ini terletak di Pantai Gunung Payung, Desa Kutuh, sehingga kita bisa menikmati pemandangan indah dari air terjun Pantai Gunung Payung yang tumpah ke pantai.',
            tiket: [
                {
                    domestikDewasa: 8000 ,
                    domestikAnak: null ,
                    turisDewasa: null ,
                    turisAnak: null ,
                    maps: 'https://goo.gl/maps/6TFP8g7Xn1iHEi776',
                },
            ],
        },
        {
            no: 4,
            name: 'Pantai Kuta',
            image: 'https://www.tempatwisata.pro/users_media/3136/67415835_671151733402808_6855187026809933121_n.jpg',
            desc: 'Pantai Kuta Bali, terletak di sebelah selatan pulau dewata, dengan pemandangan laut samudra Hindia. Selain itu, tempat wisata Kuta adalah salah satu tempat wisata menarik di Bali yang menjadi tujuan utama wisatawan liburan ke pulau Bali. Pantai pasir putih ini sangat tekenal dan menjadi andalan pulau Bali, sebagai tempat wisata pantai, sejak tahun 70-an dan menjadi salah satu tempat terbaik untuk menikmati sunset. Tempat wisata Kuta Bali khususnya area pantai, sampai saat ini masih menjadi daya tarik utama wisatawan liburan ke pulau Bali. Terutama wisatawan mancanegara. Hingga saat ini, Kawasan Kuta masih menjadi jantungnya pariwisata Pulau Bali. Wisatawan yang ingin berkunjung ke Pantai Kuta tidak dipungut biaya apapun, hanya biaya parkir jika membawa kendaraan pribadi, yaitu sebesar Rp 2.000 untuk motor dan Rp 5.000 untuk mobil.',
            tiket: [
                {
                    domestikDewasa: 60000 ,
                    domestikAnak: 20000 ,
                    turisDewasa: 50000 ,
                    turisAnak: 30000 ,
                    maps: 'https://goo.gl/maps/HRcWpCpzd3Ybj943A',
                },
            ],
        },
        {
            no: 5,
            name: 'Pantai Canggu',
            image: 'https://www.raftingbali.net/wp-content/uploads/2020/04/The-Best-Things-To-Do-In-Canggu-Facebook.jpg',
            desc: 'Pantai Canggu terletak di Desa Canggu, Kecamatan Kuta Utara, Kabupaten Badung. Jarak ke pantai ini sekitar 20 km atau 40 menit dari Bandara Internasional I Gusti Ngurah Rai. Keunikan Pantai Canggu adalah hamparan sawah di seberang pantai. Pantai Canggu memiliki ombak yang cukup tinggi sehingga, ini adalah salah satu tujuan bagi para peselancar lokal maupun asing yang ingin mencoba ombak ini. Pantai ini adalah satu garis dengan Batu Mejan Beach atau Echo Beach. Karena pantai ini memiliki ombak yang meluap dan ombak yang bagus, pantai ini menjadi terkenal sebagai "kota" peselancar dari seluruh dunia. Saat ini, Canggu menjadi salah satu tempat yang ramai dikunjungi wisatawan mancanegara untuk menghabiskan waktu mereka. Wisatawan yang ingin berkunjung ke Pantai Canggu, hanya akan dikenakan biaya parkir kendaraan pribadi jika membawa kendaraan, yaitu sebesar Rp 2.000 untuk motor dan Rp 5.000 untuk mobil.',
            tiket: [
                {
                    domestikDewasa: 70000 ,
                    domestikAnak: 20000 ,
                    turisDewasa: 50000 ,
                    turisAnak: 30000 ,
                    maps: 'https://goo.gl/maps/P7U6SskF52FpGekh8',
                },
            ],
        },
    ])
    return ( 
        <div>
            <NavigationBar isTextShow={false}/>
            <WisataDescBadung wisataBadung={dataBadung}/>
            <Footer />
        </div>
     );
}
 
export default Badung;