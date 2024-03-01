import { EnvironmentFilled, FacebookFilled, TwitterCircleFilled, LinkedinFilled, InstagramFilled  } from "@ant-design/icons"
import coverImage from "../../assets/article-views/detail-article/article-one/cover.png"
import oneImage from "../../assets/article-views/detail-article/article-one/1.png"
import twoImage from "../../assets/article-views/detail-article/article-one/2.png"
import threeImage from "../../assets/article-views/detail-article/article-one/3.png"
import fourImage from "../../assets/article-views/detail-article/article-one/4.png"
import fiveImage from "../../assets/article-views/detail-article/article-one/5.png"

const DetailArticleOne = () => {
    return (
        <section className="my-32">
            <div className="container">
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-8">
                    <div className="col-span-4 lg:col-span-9 flex flex-col gap-4 md:gap-9">
                        <h3 className="text-2xl md:text-4xl leading-[150%] font-bold">Perlu Kamu Ketahui, Ini Starter Pack Wajib untuk Kamu Berlibur Ke Bali!</h3>
                        <div className="flex gap-4 text-captions text-xs md:text-xl font-semibold items-center">
                            <p>Oleh Admin Perbekel Cemagi</p>
                            <span>|</span>
                            <div className="flex gap-2 items-center">
                                <EnvironmentFilled />
                                <p>Rabu, 27 Desember 2024</p>
                            </div>
                        </div>
                        

                        <div className="flex flex-col gap-8 md:gap-12">
                            <div className="flex flex-col gap-4">
                                <img className="h-[200px] md:h-[460px]" src={coverImage} alt="cover-image" />
                                <div className="grid grid-cols-6 gap-2">
                                    <img className="h-[50px] md:h-[100px]" src={oneImage} alt="image-1" />
                                    <img className="h-[50px] md:h-[100px]" src={twoImage} alt="image-2" />
                                    <img className="h-[50px] md:h-[100px]" src={threeImage} alt="image-3" />
                                    <img className="h-[50px] md:h-[100px]" src={fourImage} alt="image-4" />
                                    <img className="h-[50px] md:h-[100px]" src={fiveImage} alt="image-5" />
                                    <img className="h-[50px] md:h-[100px]" src={coverImage} alt="image-6" />
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-4 text-sm md:text-xl text-captions leading-[180%]">
                                    <p>Apakah kamu merencanakan liburan ke Pulau Dewata, Bali? Jika iya, kamu pasti ingin memastikan bahwa persiapanmu sudah lengkap agar pengalaman liburanmu semakin berkesan. Bali menawarkan beragam keindahan alam, budaya yang kaya, dan aktivitas seru yang bisa kamu nikmati. Nah, agar liburanmu semakin nyaman dan menyenangkan, ada beberapa item wajib yang harus ada dalam starter packmu. Yuk, simak apa saja yang perlu kamu siapkan sebelum berlibur ke Bali!</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-3xl">1. Pakaian Nyaman dan Modis</h4>
                                    <p className="text-sm md:text-xl text-captions leading-[180%]">Bali memiliki iklim tropis yang cenderung hangat sepanjang tahun. Pastikan kamu membawa pakaian yang nyaman, ringan, dan modis. Pilihlah pakaian berbahan katun yang bisa menyerap keringat dengan baik. Jangan lupa untuk juga membawa beberapa pakaian berbahan adem seperti kaos, celana pendek, dan rok. Selain itu, jangan lupa untuk membawa pakaian renang, terutama jika kamu berencana untuk menjelajahi pantai-pantai indah di Bali.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-3xl">2. Perlengkapan Sunblock dan Pelindung Matahari</h4>
                                    <p className="text-sm md:text-xl text-captions leading-[180%]">Matahari di Bali bisa sangat terik, jadi pastikan kamu membawa perlindungan matahari yang memadai. Sunblock dengan SPF tinggi, topi atau payung pantai, serta kacamata hitam adalah perlengkapan wajib untuk melindungi kulit dan mata dari sinar UV yang berbahaya. Dengan perlindungan ini, kamu bisa menikmati keindahan Bali tanpa khawatir terbakar sinar matahari.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-3xl">3. Sandal atau Sepatu Nyaman</h4>
                                    <p className="text-sm md:text-xl text-captions leading-[180%]">Bali adalah tempat yang penuh dengan kegiatan outdoor, mulai dari menjelajahi pantai-pantai hingga mendaki gunung. Oleh karena itu, pastikan kamu membawa sandal atau sepatu yang nyaman dan cocok untuk berbagai aktivitas. Sandal jepit atau sandal hiking bisa menjadi pilihan yang tepat untuk menyesuaikan dengan kegiatanmu.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-3xl">4. Perlengkapan Anti Nyamuk</h4>
                                    <p className="text-sm md:text-xl text-captions leading-[180%]">Meskipun Bali sangat indah, namun kamu perlu bersiap menghadapi nyamuk, terutama di daerah pedesaan atau saat senja di sepanjang pantai. Jangan lupa untuk membawa obat anti nyamuk atau lotion dengan kandungan DEET yang dapat melindungi kulitmu dari gigitan nyamuk yang mengganggu.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-3xl">5. Power Bank dan Perlengkapan Elektronik</h4>
                                    <p className="text-sm md:text-xl text-captions leading-[180%]">Pastikan kamu membawa power bank ekstra dan perlengkapan elektronik seperti kamera, smartphone, dan peralatan pengisian daya lainnya. Bali memiliki pemandangan yang menakjubkan dan kamu pasti ingin mengabadikan momen-momen indah selama liburanmu.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-3xl">6. Uang Tunai dan Kartu Kredit</h4>
                                    <p className="text-sm md:text-xl text-captions leading-[180%]">Meskipun sebagian besar tempat di Bali menerima pembayaran dengan kartu kredit, namun memiliki uang tunai juga sangat penting terutama untuk transaksi kecil atau di tempat-tempat yang lebih tradisional. Pastikan kamu juga memiliki beberapa pecahan uang rupiah untuk memudahkan transaksi sehari-hari.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    {/* <h4 className="font-bold text-3xl">6. Uang Tunai dan Kartu Kredit</h4> */}
                                    <p className="text-sm md:text-xl text-captions leading-[180%]">Dengan mempersiapkan starter pack ini sebelum berlibur ke Bali, kamu akan lebih siap menghadapi petualangan seru di Pulau Dewata ini. Jangan lupa untuk selalu menjaga kebersihan lingkungan dan menghormati budaya lokal saat menjelajahi Bali. Selain itu, cek juga menu Destinasi pada Pesona Dewata untuk mendapatkan rekomendasi tempat yang apik. Selamat berlibur dan nikmati setiap momennya!</p>
                                </div>
                            </div>
                            

                        </div>

                        <div className="flex gap-8 text-4xl">
                            <FacebookFilled />
                            <TwitterCircleFilled />
                            <LinkedinFilled />
                            <InstagramFilled />
                        </div>
                    </div>
                    <div className="hidden lg:block col-span-4 lg:col-span-3">
                        <div className="bg-white p-6 shadow-lg">
                            <p className="text-lg font-bold">Table of Content</p>
                            <div className="flex flex-col gap-2 mt-8 text-captions">
                                <p>Description</p>
                                <p>Description</p>
                                <p>Description</p>
                                <p>Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailArticleOne