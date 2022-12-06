import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import WisataDescGianyar from "../Components/WisataDescGianyar";

const Gianyar = () => {
    const dataGianyar = ([
        {
            no: 1,
            name: 'Kawasan Seni Ubud',
            image: 'https://www.befreetour.com/img/attraction/ubud-art-market20191028113128.jpg',
            desc: 'Sebagai salah satu pusat seni di Bali, Gianyar memiliki beberapa wisata budaya, salah satunya dalah Kawasan Seni Ubud. Para wisatawan yang sangat menyukai seni bisa datang ke pasar seni dan terdapat beberapa museum di sana, seperti Museum Arma, Neka, Antonio Blanco, Rudana, dan Puri Lukisan. Para wisatawan juga bisa membeli berbagai produk seni lokal yang dijual di Pasar Seni Ubud. Saat ini, Ubud ramai dikunjungi wisatawan baik mancanegara maupun domestik, bahkan tak kalah dengan kawasan Kuta dan Canggu yang padat oleh wisatawan mancanegara, Kawasan Ubud juga menjadi salah satu tempat favorit wisatawan untuk menginap dan menghabiskan waktu di Pulau Bali.',
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
            name: 'Tegallalang Rice Terrace',
            image: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/bali/bali/tegallalang-rice-terrace-a-charm-of-the-green-in-ubud/view.jpg',
            desc: 'Tegallalang Rice Terrace terletak di sebuah ngarai sungai di perbukitan utara Ubud dan terkenal dengan terasiringnya. Sama seperti Jatiluwih, Tegallalang Rice Terrace menyajikan pemandangan terasering dan menjadi objek yang paling banyak dipotret di Bali. Menikmati pemandangan yang menyejukkan mata, menghirup udara segar, serta melewatkan waktu di bawah rindangnya pohon kelapa sambil menikmati atmosfer pedesaan merupakan hal yang wajib dicoba oleh wisatawan yang berkunjung ke Gianyar. Terasiring ini telah berumur lebih dari 2.000 tahun. Petani zaman dahulu menggunakan alat-alat primitif untuk membentuk teras-teras di lereng gunung. Ditopang oleh dinding-dinding penguat, terasiring ini merupakan sistem yang dirancang untuk mengendalikan aliran air yang mengalir dari gunung. Di puncak bukit juga terdapat banyak cafe yang menyediakan makanan serta minuman dengan pemandangan yang memanjakan mata.',
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
            name: 'Ubud Monkey Forest Mandala Suci Wenara Wana',
            image: 'https://ladypinem.com/en/wp-content/uploads/2017/07/Sacred-Monkey-Forest-Sanctuary-Ubud-Bali-4.jpg',
            desc: 'Monkey Forest Ubud Mandala Suci Wenara Wana merupakan sebuah kawasan cagar alam sekaligus komplek candi yang terletak di Ubud, Gianyar Bali. Tempat ini merupakan salah satu destinasi wisata populer di Ubud dan sering dikunjungi oleh lebih dari 10.000 wisatawan setiap bulannya. Monkey Forest Ubud menjadi tempat tinggal lebih dari 1000 ekor Macaca fascicularis yang lebih dikenal dengan kera ekor panjang dan 186 spesies tumbuhan. Kawanan monyet ini terbagi menjadi empat kelompok yang masing-masing menempati kawasan berbeda di dalam hutan. Di kawasan Monkey Forest Ubud, Para wisatawan dapat berjalan mengelilingi hutan sambil menikmati suasana tenang nan asri. Pasalnya, hutan ini memiliki luas sekitar 27 hektare dengan lebih dari 186 spesies tumbuhan berbeda di dalamnya. Tak hanya itu, di dalam kawasan hutan ini juga terdapat Pura Dalem Agung Padangtegal yang biasa digunakan untuk ritual pemujaan Dewa Siwa, serta pura-pura lainnya yang umum digunakan pada saat upacara Ngaben.',
            tiket: [
                {
                    domestikDewasa: 50000 ,
                    domestikAnak: 30000 ,
                    turisDewasa: 80000 ,
                    turisAnak: 60000 ,
                },
            ],
        },
        {
            no: 4,
            name: 'Pasar Seni Sukawati',
            image: 'https://awsimages.detik.net.id/community/media/visual/2022/10/31/7-oleh-oleh-khas-bali-harga-murah-wajib-dibeli-di-pasar-seni-sukawati.jpeg?w=700&q=90',
            desc: 'Salah satu tempat membeli oleh-oleh khas bali berupa kerajinan lokal yang populer di kalangan wisatawan mancanegara maupun domestik adalah Pasar Seni Sukawati. Pasar Seni menyediakan berbagai produk suvenir dan barang-barang menarik lainnya yang dibuat oleh warga lokal dengan nilai seni yang tinggi dengan harga yang relatif murah. Beberapa oleh-oleh khas pulau Bali yang bisa ditemui di tempat ini di antaranya seperti layangan tradisional yang punya aneka corak dan warna, lukisan khas Bali, tas anyaman, berbagai pilihan baju, celana, dan kain sarung, perlengkapan upacara umat Hindu di Bali, bed cover dengan beragam desain, hingga sederet aksesoris untuk wanita.',
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
            no: 4,
            name: 'Bali Zoo',
            image: 'https://www.bali-zoo.com/assets/img/home/jpg/2.jpg',
            desc: 'Bali Zoo merupakan tempat wisata edukasi dan tempat untuk mengenal alam dan margasatwa terlengkap di Bali. Bali Zoo merupakan kebun binatang yang dibuka pada tahun 2002 dan menjadi salah satu kebun binatang terbaik di Asia Pasifik. Kebun binatang ini tidak hanya menjadi tempat rekreasi keluarga saja, namun juga menjadi tempat untuk melestarikan berbagai satwa yang hampir punah. Dengan luas 3,5 hektar, kebun binatang ini sudah memiliki hingga 450 jenis satwa langka seperti merak, jalak Bali, harimau Sumatra, kasuari, singa, elang, rusa, singa Afrika, unta hingga kanguru. Para pengunjung tidak hanya bisa bertemu dengan berbagai penghuni di Bali Zoo, tetapi juga bisa memberi makan beberapa binatang jinak seperti rusa, gajah dan kelinci.',
            tiket: [
                {
                    domestikDewasa: 125000 ,
                    domestikAnak: 100000 ,
                    turisDewasa: 125000 ,
                    turisAnak: 100000 ,
                },
            ],
        },
    ])
    return ( 
        <div>
            <NavigationBar isTextShow={false}/>
            <WisataDescGianyar wisataGianyar={dataGianyar} />
            <Footer />
        </div>
     );
}
 
export default Gianyar; 