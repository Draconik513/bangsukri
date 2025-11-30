import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
Sayangggg, today is your birthday dayy🎉, so happy birthday day sayangg🥳, hari ini adalah hari lahir kamu🤩, dan hari ini adalah hari kamu bertambah usia✨, semoga dengan nya kamu bertambah usia, kamu menjadi anak yang Sholehah 🧕, yang berbakti kepada orang tua🙂‍↕️, jadi kakak yang hebat buat Refan🫡, jadi adik yang penyayang buat Abang😚, di lancarin rezeki nya🌻, di sehatkan kan jiwa dan raga nya🌼, di lancarkan seluruh urusan nya📋,di kasih perlindungan sama Allah dari Bahaya dunia serta Bahaya akhirat 🛡️, selalu bahagia 🥰, dan terus jadi diri kamu sendiri ya🍯🐝

Terus berkembang menjadi lebih baik ya sayangkuuu💗, fokus sama impian kamu🌌, setiap impian kamu semoga menjadi kenyataan satu per satu 🌠, setiap langkah kamu di permudah sama allah 🕌, bukan hanya umur yang berkembang, tapi pemikiran dan prilaku kamu juga haru terus berkembang ya💬, menjadi wanita yang rendah hati 💟, kurangin kebiasaan jelek nya ❎, jangan terlalu fokus sama kelebihan orang lain terkadang Kupu-kupu tidak bisa melihat keindahan sayapnya sendiri, tetapi orang lain bisa🦋. Orang lain itu aku🫶, aku percaya sama kamu, kamu punya potensial sayangg, jadi jangan ngeremehin diri kamu sendiri ya, kalau kamu sendiri aja ga percaya sama diri kamu sendiri gimana kamu bisa berhasil?so mulai hari ini selalu percaya sama diri kamu sendiri ya💜, I’ll be here to support you 😊. Setiap kamu ngalamin  kegagalan jangan lupa terus bangkit dan belajar dari kesalahan 💫

Makasih juga karna udah bertahan sama aku🤧, jadi pengingat aku 🔊, selalu sabar menghadapi aku☺️, setelah aku mengenal kamu aku jadi banyak belajar tentang memahami, memperlakukan dan lain lain, aku ga janji tapi aku akan ngelakuin yang terbaik buat kamu 🙇,  jaga hubungan ini  yaa, kita lakuin yang terbaik buat kebaikan kita sendiri ya 💞

I love you more, and I will always love you from here 💜🩵🖤🤍

  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Reihani Nayla Mumtazah 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hanya kamu di hatiku, sayang 🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
