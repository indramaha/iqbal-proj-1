import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import WisataDescTabanan from "../Components/WisataDescTabanan";

const Tabanan = () => {
    const dataTabanan = ([
        {
            no: 1,
            name: 'Pura Tanah Lot',
            image: 'https://www.agoda.com/wp-content/uploads/2020/01/Daytime-tour-Tanah-Lot-Temple.jpg',
            desc: 'Tanah Lot merupakan salah satu objek wisata yang menjadi ikon Pulau Bali. Tanah Lot memiliki keunikannya tersendiri, yaitu Pura yang berada di atas batu karang di tengah laut dekat pantai. Selain identik dengan Puranya, Tanah Lot memiliki beberapa lokasi yang menjadi spot foto dengan pemandangan yang memanjakan mata. Selain terkenal dengan Puranya, Tanah Lot juga menjadi salah satu sunset point terbaik di Bali. Di Tanah Lot juga terdapat beberapa penginapan dan restaurant untuk wisatawan yang ingin menginap di areaTanah Lot.',
            tiket: [
                {
                    domestikDewasa: 20000 ,
                    domestikAnak: 15000 ,
                    turisDewasa: 60000 ,
                    turisAnak: 30000 ,
                },
            ],
        },
        {
            no: 2,
            name: 'Pura Ulun Danu Beratan',
            image: 'https://travelspromo.com/wp-content/uploads/2019/10/Pura-Ulun-Danu-Baratan-Martyn-Ravel.jpg',
            desc: 'Tempat wisata yang menjadi ikon Pulau Bali ini menjadi salah satu tempat wisata terpopuler bagi wisatawan domestik maupun mancanegara. Bedugul Bali adalah sebuah daerah pegunungan yang memiliki udara yang sejuk dengan pemandangan yang indah dari danau Beratan yang membuat daerah ini menjadi tempat wisata yang menarik dan terkena serta memiliki beberapa lokasi yang instagramable dan wajib dikunjungi di Bali dan salah satu tujuan wisata yang terbaik di pulau Dewata yang dikunjungi oleh ribuan wisatawan baik lokal maupun internasional.',
            tiket: [
                {
                    domestikDewasa: 30000 ,
                    domestikAnak: 20000 ,
                    turisDewasa: 30000 ,
                    turisAnak: 20000 ,
                },
            ],
        },
        {
            no: 3,
            name: 'Kebun Raya Eka Karya',
            image: 'https://seringjalan.com/wp-content/uploads/2019/07/Kebun-Raya-Bedugul-Bali-1024x768.jpg',
            desc: 'Tempat wisata yang menjadi ikon Pulau Bali ini menjadi salah satu tempat wisata terpopuler bagi wisatawan domestik maupun mancanegara. Bedugul Bali adalah sebuah daerah pegunungan yang memiliki udara yang sejuk dengan pemandangan yang indah dari danau Beratan yang membuat daerah ini menjadi tempat wisata yang menarik dan terkena serta memiliki beberapa lokasi yang instagramable dan wajib dikunjungi di Bali dan salah satu tujuan wisata yang terbaik di pulau Dewata yang dikunjungi oleh ribuan wisatawan baik lokal maupun internasional.',
            tiket: [
                {
                    domestikDewasa: 20000 ,
                    domestikAnak: 20000 ,
                    turisDewasa: 20000 ,
                    turisAnak: 20000 ,
                },
            ],
        },
        {
            no: 4,
            name: 'The Bloom Garden',
            image: 'https://asset.kompas.com/crops/wRmpg7AFKbZjue80L2vgy7CWyEc=/0x0:1080x720/750x500/data/photo/2021/12/14/61b84d5334a26.jpg',
            desc: 'Tempat wisata yang menjadi ikon Pulau Bali ini menjadi salah satu tempat wisata terpopuler bagi wisatawan domestik maupun mancanegara. Bedugul Bali adalah sebuah daerah pegunungan yang memiliki udara yang sejuk dengan pemandangan yang indah dari danau Beratan yang membuat daerah ini menjadi tempat wisata yang menarik dan terkena serta memiliki beberapa lokasi yang instagramable dan wajib dikunjungi di Bali dan salah satu tujuan wisata yang terbaik di pulau Dewata yang dikunjungi oleh ribuan wisatawan baik lokal maupun internasional.',
            tiket: [
                {
                    domestikDewasa: 30000 ,
                    domestikAnak: 15000 ,
                    turisDewasa: 40000 ,
                    turisAnak: 20000 ,
                },
            ],
        },
        {
            no: 5,
            name: 'Jatiluwih',
            image: 'https://www.itrip.id/wp-content/uploads/2021/06/Desa-Wisata-Jatiluwih.jpg',
            desc: 'Jatiluwih merupakan obyek wisata yang memiliki bentang persawahan yang menjadi daya tarik bagi wisatawan domestik maupun mancanegara. Pada tanggal 29 Juni 2012 Jatiluwih ditetapkan sebagai salah satu warisan budaya dunia oleh UNESCO. Jatiluwih memiliki pemandangan alam yang memanjakan mata serta udara yang sejuk serta beberapa spot foto terbaik yang wajib dikunjungi wisatawan saat berlibur ke Bali. Di Jatiluwih, wisatawan dapat melihat pemandangan alam dan para petani lokal yang melakukan aktivitas sehari-hari seperti menanam padi. Para wisatawan juga dapat melihat keindahan air terjun serta menikmati segarnya bermain air di Jatiluwih.',
            tiket: [
                {
                    domestikDewasa: 15000 ,
                    domestikAnak: 15000 ,
                    turisDewasa: 40000 ,
                    turisAnak: 40000 ,
                },
            ],
        },
    ])
    return ( 
        <div>
            <NavigationBar isTextShow={false}/>
            <WisataDescTabanan wisataTabanan = {dataTabanan} />
            <Footer />
        </div>
     );
}
 
export default Tabanan;