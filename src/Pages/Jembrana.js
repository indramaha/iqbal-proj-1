import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import WisataDescJembrana from "../Components/WisataDescJembrana";

const Jembrana = () => {
    const dataJembrana = ([
        {
            no: 1,
            name: 'Taman Nasional Bali Barat',
            image: 'https://tempatwisatadibali.info/wp-content/uploads/2018/01/Taman-Nasional-Bali-Barat-TNBB-1.jpg ',
            desc: 'Salah satu wisata yang wajib dikunjungi di Jembrana adalah Taman Nasional Bali Barat (TNBB). Taman nasional ini memiliki panorama alam indah dan menjadi rumah bagi beberapa satwa seperti banteng, rusa, kalong, dan aneka burung. TNBB juga bisa jadi alternatif liburan di Pulau Bali yang tidak seramai tempat lainnya. Kawasan TNBB terdiri dari 15.587 hektare kawasan terestrial dan 3.415 hektare kawasan perairan. Di kawasan ini ada banyak spot yang menarik dikunjungi oleh wisatawan, seperti Pantai Karang Sewu, Pulau Menjangan, sumber mata air panas TNBB, penangkaran jalak bali, hingga Teluk Brumbun dan Teluk Terima. Wisatawan yang berkunjung juga dapat berkemah di pinggir pantai, berendam di sumber air panas, higga melakukan aktivitas air seperti snorkeling.',
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
            no: 2,
            name: 'Pantai Medewi',
            image: 'https://tempatwisatadibali.info/wp-content/uploads/2018/08/Pantai-Medewi-Pekutatan-Jembrana-Bali.jpg ',
            desc: '	Pantai Medewi merupakan pantai yang terletak di desa medewi, Kecamatan Pekutatan, Kabupaten Jembrana. Meskipun pantai ini tidak seramai pantai-pantai di Bali Selatan, pantai ini memiliki daya tariknya tersendiri meskipun jaraknya jauh dari pusat kota. Pantai Medewi merupakan pantai yang masih asri dan alami, perpaduan alam pantai dan sawah menyatu menyuguhkan pemandangan alam spektakuler yang jarang anda temukan di pulau Dewata Bali. Yang menjadi daya tarik utama di objek wisata pantai Medewi adalah suguhan pemandangan alam laut biru jernih, serta pantai pasir hitam, berkilauan bak mutiara saat diterpa sinar matahari. Nuansa alamnya damai, tenang dan masih sepi pengunjung memberikan kesan tersendiri tatkala anda bosan dan jenuh dengan keramaian. Tak hanya itu, gelombang ombak yang tinggi dan memanjang sehingga menjadi incaran para pemain surfing, tidak mengherankan objek wisata di Bali Barat ini populer sebagai tempat rekreasi surfing, kunjungan lebih didominasi wisatawan mancanegara. Suasana pantai Medewi tenang dan sepi pengunjung bisa anda gunakan sebagai tempat bersantai, bisa lebih leluasa dan maksimal bercengkrama sambil menikmati tarian peselancar yang menaklukkan ombak, menyuguhi perpaduan romansa alam spesial yang bisa menghanyutkan ketegangan pikiran. Suasana alam pedesaan yang kental dengan budaya Bali serta hamparan sawah indah membalut suasana penuh kedamaian. Berada di kawasan pantai Medewi ini, menjadi suguhan sisi lain pulau Dewata Bali. Untuk masuk ke kawasan Pantai Medewi, wisatawan tidak perlu membayar tiket masuk (gratis).',
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
            no: 3,
            name: 'Pura Rambut Siwi',
            image: 'https://img-asset-01.visitbali.id/yIUDoC_20MGeDLfEFz-hm7j1hjsb9XPFIwS9xtZqQOk/fill/650/450/no/0/aHR0cHM6Ly92aXNpdGJhbGkuaWQvaW1hZ2VzL2RhdGEvSnVuLTIwMTgvNWIzMzYyZGQ1ZGVkZDY3ZDkuanBn.jpg ',
            desc: 'Objek Wisata Pura Rambut Siwi di Mendoyo Jembrana Bali adalah salah satu tempat wisata yang berada di Kabupaten Jembrana, Bali, Indonesia. Objek Wisata Pura Rambut Siwi di Mendoyo Jembrana Bali adalah tempat wisata yang ramai dengan wisatawan pada hari biasa maupun hari liburan. Selain karena menjadi tempat persembahyangan Umat Hindu di Bali, tempat ini juga sangat indah dan bisa memberikan sensasi yang berbeda dengan aktivitas kita sehari hari. Objek Wisata Pura Rambut Siwi di Mendoyo Jembrana Bali memiliki pesona keindahan yang sangat menarik untuk dikunjungi. Sangat di sayangkan jika anda berada di kota Jembrana tidak mengunjungi Objek Wisata Pura Rambut Siwi di Mendoyo Jembrana Bali yang mempunyai keindahan yang tiada duanya tersebut. Keindahan Objek Wisata Pura Rambut Siwi di Mendoyo Jembrana Bali ini sangatlah menarik bagi para wisatawan domestik maupun mancanegara untuk merapat mengunjungi Objek Wisata Pura Rambut Siwi di kota Jembrana.',
            tiket: [
                {
                    domestikDewasa: null ,
                    domestikAnak: null ,
                    turisDewasa: null ,
                    turisAnak: null ,
                },
            ],
        },
    ])
    return ( 
        <div>
            <NavigationBar isTextShow={false}/>
            <WisataDescJembrana wisataJembrana={dataJembrana} />
            <Footer />
        </div>
     );
}
 
export default Jembrana;