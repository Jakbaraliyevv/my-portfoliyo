function AboutComponents() {
  return (
    <section className="bg-[#1a0b2e] py-[60px]">
      <div className="w-[90%] m-auto flex flex-col gap-[40px]">
       <div className="relative mb-16 z-10">
        <h1 className="text-5xl font-bold text-center text-[#FFF]">
          <span className="inline-block relative">
            <span className="relative z-10">About Me</span>
            <span
              className="absolute -inset-1 blur-lg bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-70"
              style={{ animation: "pulse 3s infinite" }}
            ></span>
          </span>
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-4"></div>
      </div>
        <p className="text-[#FFF] text-[19px]">
          Men Aziz Jakbaraliyev 19 yoshdaman. Andijon
          viloyatida tug‘ilganman. Najot Ta’lim markazida Front-End
          ReactJS yo‘nalishi bo‘yicha muvaffaqiyatli tahsil olib, hozirda frontend
          dasturchi sifatida faoliyat yuritmoqdaman. Veb-sayt yaratish va dizayn
          qilishni yoqtiraman. Men foydalanuvchilar uchun qulay, zamonaviy va
          estetik jihatdan mukammal saytlar yaratishga intilaman. Har bir loyiha
          men uchun yangi imkoniyat, uni oson, chiroyli va funksional qilish esa
          asosiy maqsadimdir. Frontend sohasida bilimlarimni doimiy ravishda
          kengaytirib, yangi texnologiyalarni o‘zlashtirishga intilaman. Ishimda
          sifatlilik va zamonaviylikni ustun qo‘yaman, chunki men uchun
          foydalanuvchi tajribasi – har bir veb-saytning yuragi hisoblanadi.
          Kelajakda yanada murakkab va innovatsion loyihalarda ishtirok etishni,
          shuningdek, o‘z bilimlarimni boshqalar bilan baham ko‘rish orqali yosh
          dasturchilarga yo‘l ko‘rsatishni reja qilganman. Mening maqsadim –
          har bir saytni sodda, go‘zal va har kim uchun tushunarli qilishdir.
        </p>
      </div>
    </section>
  );
}

export default AboutComponents;
