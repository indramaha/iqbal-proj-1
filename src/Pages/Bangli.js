import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import WisataDescBangli from "../Components/WisataDescBangli";

const Bangli = () => {
    const dataBangli = ([
        {
            no: 1,
            name: 'Kintamani',
            image: 'https://www.rentalmobilbali.net/wp-content/uploads/2018/10/Daya-Tarik-Pariwisata-Di-Kintamani.jpg',
            desc: 'Kintamani merupakan sebuah kawasan dataran tinggi di Bangli yang tidak pernah sepi dikunjungi wisatawan baik domestik maupun wisatawan mancanegara. Kawasan Kintamani menyuguhkan pemandangan Gunung Batur yang dikelilingi batuan vulkanik sisa letusan Gunung Batur yang merupakan salah satu gunung api yang masih aktif di Bali. Tidak hanya itu, keindahan Kawasan Kintamani dilengkapi dengan luasnya Danau Batur yang berada tepat disebelah timur Gunung Batur. Hal ini membuat Batur menjadi salah satu kaldera terindah menurut wisatawan yang berkunjung ke Kintamani. Di sekitar kawasan Kintamani terdapat banyak cafe-cafe yang menyajikan kopi dengan pemandangan Gunung dan Danau dari atas yang menyejukkan mata, sehingga cocok sebagai tempat bersantai wisatawan yang berkunjung ke kawasan ini.',
            tiket: [
                {
                    domestikDewasa: 20000 ,
                    domestikAnak: 10000 ,
                    turisDewasa: 50000 ,
                    turisAnak: 30000 ,
                    maps: 'https://goo.gl/maps/pyrAwa5rfHvDWtFs6',
                },
            ],
        },
        {
            no: 2,
            name: 'Gunung Batur',
            image: 'https://cdn.idntimes.com/content-images/community/2021/09/dan-the-drone-tvfqrdmasr4-unsplash-07a4f29dba4b014075e472810bb49bf0-2640a042e644be7d7be2300487c8b44e.jpg ',
            desc: 'Gunung Batur salah satu gunung berapi di pulau Bali yang masih aktif. objek wisata Gunung Batur memiliki keindahan pemandangan kaldera serta pemandangan danau, membuat Gunung Batur Bali menjadi salah satu tujuan wisata paling populer di Bali. Selain itu, udara sejuk daerah pegunungan, serta adanya kolam air panas alami yang lokasinya berdekatan, menambah minat wisatawan untuk berlibur ke objek wisata gunung berapi Kintamani Bali. Wisatawan yang ingin lebih dekat melihat danau serta lereng gunung Batur, dipersilahkan untuk menuruni daerah desa Penelokan menggunakan mobil dan menelusuri jalan berliku yang berada di sekitar area lereng gunung serta danau Batur. Gunung Batur di Kintamani sangat terkenal sebagai salah satu lokasi pendakian. Salah satu daya tarik yang membuat wisatawan rela mendaki ketinggian gunung di pagi hari, karena keindahan pemandangan matahari terbit dari puncak Gunung Batur. Wisatawan dapat mengamati matahari terbit dari atas gunung ini di trek pagi. Dari ketinggian, Anda dapat menikmati pemandangan yang menghadap ke kaldera Batur yang besar dan indah di barat lautnya. Danau Batur berada di sisi tenggara gunung berapi. Pendakian Gunung berapi Kintamani rata-rata memakan waktu sekitar dua hingga tiga jam.',
            tiket: [
                {
                    domestikDewasa: 15000 ,
                    domestikAnak: null ,
                    turisDewasa: 30000 ,
                    turisAnak: null ,
                    maps: 'https://goo.gl/maps/dfVaxk3dcabAyPoDA',
                },
            ],
        },
        {
            no: 3,
            name: 'Danau Batur',
            image: 'https://www.kintamani.id/wp-content/uploads/Pemandangan-menyejukkan-mata-Danau-Batur-Kintamani.jpg ',
            desc: 'Danau Batur merupakan danau kawah yang berlokasi Kabupaten Bangli. Lokasinya berada di dalam kaldera gunung berapi aktif, Gunung Batur namanya. Berada di ketinggian 1.050 meter di atas permukaan laut, cocok buat kamu yang mencari suasana sejuk dan jauh dari keramaian. Danau Batur menawarkan pemandangan danau dengan air yang berwarna hijau kebiru-biruan. Sebelum liburan ke sana, simak dulu informasi wisata Danau Batur Bali, mulai dari rute perjalanan ke lokasinya, harga tiket masuknya, dan tipsnya. Disekitar danau batur, terdapat banyak area camping yang disediakan serta tempat pemandian air panas yang menyajikan suasana berendam air panas di tepi danau.',
            tiket: [
                {
                    domestikDewasa: null ,
                    domestikAnak: null ,
                    turisDewasa: null ,
                    turisAnak: null ,
                    maps: 'https://goo.gl/maps/hk8jHs68wn3yHTVW8',
                },
            ],
        },
        {
            no: 4,
            name: 'Batur Natural Hot Spring',
            image: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/intisarifoto/original/38552_batur-natural-hotspring.jpeg ',
            desc: 'Toya Bungkah Hot Spring merupakan salah satu pemandian air panas di Kintamani dan juga terkenal dengan nama Batur Natural Hot Spring Kintamani. Arti dari nama Toya Bungkah berasal dari dua suku kata, Toya artinya air dan Bungkah artinya bongkahan batu. Karena sumber air panas berasal dari akuifer di kedalaman 635 meter dari permukaan tanah yang memiliki suhu air sekitar 50 derajat celcius. Air panas yang berasal dari pegunungan langsung dari sumber mata air panas dan tanpa adanya pengolahan, jadi sangat alami. Air panas juga mengandung mineral yang sangat bagus untuk kesehatan tubuh. Seperti mempercepat hilangnya memar, pemulihan rematik, untuk relaksasi dan peremajaan kulit. Ada beberapa jenis kolam, mulai dari kolam anak-anak, kolam terapi, kolam floating sunburn untuk berjemur dengan nuansa terpaan sinar matahari, dan kolam untuk berenang. Selain dapat menikmati berenang dengan air panas alami, keunikan dari Batur Natural Hot Spring Kintamani karena lokasinya yang berada di pinggir danau Batur. Jadi wisatawan yang berkunjung ke Batur Natural Hot Spring Kintamani, dapat berenang dan berendam sambil menikmati pemandangan danau Batur Kintamani.',
            tiket: [
                {
                    domestikDewasa: 70000 ,
                    domestikAnak: 35000 ,
                    turisDewasa: 190000 ,
                    turisAnak: null ,
                    maps: 'https://goo.gl/maps/LgqJ765Uk3wkz9B48',
                },
            ],
        },
        {
            no: 5,
            name: 'Desa Trunyan',
            image: 'https://www.kintamani.id/wp-content/uploads/Deretan-tengkorak-mepasah-di-Desa-Trunyan-Bali-1.jpg ',
            desc: 'Desa Trunyan menyajikan pengalaman liburan yang berbeda karena desa ini memiliki tradisi pemakaman yang unik. Orang-orang yang meninggal di sana tidak dikubur atau dikremasi, melainkan hanya ditaruh di bawah pohon Taru Menyan dan dipagari dengan ancak saji. Pohon Taru Menyan inilah yang nantinya mampu menghilangkan bau jenazah yang berada di sana. Hal ini menjadi daya tark tersendiri bagi wisatawan domestik maupun mancanegara yang berkunjung ke Kuburan trunyan Untuk mencapai Desa Trunyan, bisa melalui jalur darat maupun dengan menyewa perahu / speed boat melalui Dermaga Kedisan dengan waktu tempuh sekitar 30 menit. Namun, untuk pergi ke Kuburannya, tidak ada jalur selain menggunakan perahu.',
            tiket: [
                {
                    domestikDewasa: null ,
                    domestikAnak: null ,
                    turisDewasa: null ,
                    turisAnak: null ,
                    maps: 'https://goo.gl/maps/4uzJHZDRNUU8wiHL7',
                },
            ],
        },
        {
            no: 6,
            name: 'Desa Penglipuran',
            image: 'https://instiki.ac.id/wp-content/uploads/2022/05/Penglipuran1-1-scaled.jpg',
            desc: 'Desa Penglipuran merupakan salah satu dari sembilan desa adat di Bali. Lokasi desa terletak di Desa Kubu, Kecamatan Bangli, Kabupaten Bangli, Provinsi Bali. Salah satu obyek wisata di Bali ini sangat disukai oleh wisatawan asing dan belakang banyak juga wisatawan lokal yang berkunjung ke desa ini. Desa Penglipuran memiliki tatanan struktur desa tradisional di Bali. Ketenangan dan kesejukkan sangat terasa di desa yang mendapat predikat desa terbersih ketiga di dunia, setelah Desa Mawlynnong di India dan Giethoorn di Belanda. Keunikan pertama dari desa Penglipuran adalah model bangunannya. Desa ini dipenuhi dengan bangunan ala rumah penduduk yang terbilang cukup sederhana. Ini merupakan desa adat yang berisi komplek pemukiman warga yang ramah lingkungan. Terlihat, bangunan masih memanfaatkan material bebatuan, daun pisang, serta pintu ukiran untuk mempercantik rumah. Aneka tanaman dan pepohonan juga dibiarkan tumbuh dan membuat suasana perkampungan menjadi asri. Karena termasuk lokasi wisata yang dilestarikan, pembangunan desa ini tak sembarangan. Masyarakat lokal di sini masih menjunjung tinggi nilai-nilai luhur nenek moyang yang bersifat turun temurun dan perlu selalu dijaga.',
            tiket: [
                {
                    domestikDewasa: 25000 ,
                    domestikAnak: 15000 ,
                    turisDewasa: 50000 ,
                    turisAnak: 30000 ,
                    maps: 'https://goo.gl/maps/J4ZUT8cBoLAR7NC59',
                },
            ],
        },
    ])
    return ( 
        <div>
            <NavigationBar isTextShow={false}/>
            <WisataDescBangli wisataBangli={dataBangli} />
            <Footer />
        </div>
     );
}
 
export default Bangli;