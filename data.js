const dataIstighosah = [
  {
    arab: 'اشهد ان لا اله الا الله و اشهد ان محمد رسول الله.٣',
    arti: 'Saya bersaksi bahwa sesungguhnya tidak ada tuhan yang wajib di sembah kecuali Allah, dan saya bersaksi bahwa sesungguhnya Nabi Muhammad adalah utusan Allah.'
  },
  {
    arab: 'إِلَى حَضَرَةِ النَّبِيِّ الْمُصْطَفَى سَيِّدِنَا مُحَمَّدٍ صَلَّى اللّٰه عَلَيْهِ وَسَلَّمَ وَعَلَى اَلِهِ وَصَحْبِهِ وَاَزْوَاجِهِ وَذُرِيَّتِهِ شَيْئٌ لِلّٰهِ الفاتحة',
    arti: ''
  },
  {
    arab: 'ثُمَّ إِلَى جَمِيْعِ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالشُّهَدَاءِ وَالصَّلِحِيْنَ وَالْأَوْلِيَاءِ وَالْعُلَمَاء الْعَامِلِيْنَ وَالْمَلَا ئِكَةِ الْمُقَرَّبِيْنَ وَالْفُقَهَاءِ وَالْمُصَنِّفِيْنَ وَالْخُلَفَاءِ الرَّشِدِيْنَ خُصُوصًا الشَّيْخ عَبْدَ الْقَدِرِ الْجَيْلَانِي وَالشَّيْخ أَبِى الْحَسَانِ الشَذِلِي وَالشَّيْخ أَبِي مُحَمَّدْ بِنْ سُلَيْمَانْ قَدَّسَ اللّٰهُ سِرَّهُمْ وَنَفَعَنَا بِعُلُوْمِهِمْ وَبَرَكَاتِهِمْ شَيْئٌ لِلّٰهِ لَهُم الفاتحة',
    arti: ''
  },
  {
    arab: 'اِسْتَغْفِرُوْا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا',
    arti: 'Mintalah Ampunan Kepada Tuhanmu, Sesungguhnya Ia Maha Pengampun'
  },
  {
    arab: 'أَسْتَغْفِرُ اللّٰهَ الْعَظِيْم. ٣٣',
    arti: 'Aku Memohon Ampun kepada Allah Yang Maha Agung'
  },
  {
    arab: 'بِسْمِ اللّٰهِ الرَّحْمَنِ الرَّحِيْمِ .٣٣',
    arti: 'Dengan Menyebut Nama Allah Yang Maha Pengasih Lagi Maha Penyayang'
  },
  {
    arab: 'يَا فَتَّاحُ يَا عَلِيْمُ .٣٣',
    arti: 'Wahai Dzat Pembuka, wahai Dzat Yang Maha mengetahui.'
  },
  {
    arab: 'يَا فَتَّاحُ يَا رَزَّاقُ .٣٣',
    arti: 'Wahai Dzat Pembuka (pintu Rahmat), wahai Dzat Pemberi rizki.'
  },
  {
    arab: '… الفاتحة',
    arti: ''
  },
  {
    arab: 'يَاقَوِيُّ يَامَتِيْنُ .٣٣',
    arti: 'Wahai Dzat Yang Maha Kuat lagi Kokoh.'
  },
  {
    arab: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّه. .١١',
    arti: 'Tidak ada daya dan kekuatan kecuali dari Allah SWT.'
  },
  {
   arab: 'حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ..١١',
   arti: 'Cukup bagi kami Allah sebagai penolong dan Dia-lah sebaik-baik wakil.'
  },
  {
    arab: '… الفاتحة',
    arti: ''
  },
  {
    arab: 'يَاغَنِيُّ يَاحَمِيْدُ يَامُبْدِءُ يَامُعِيْدُ ..١١',
    arti: 'Wahai Dzat yang Maha kaya, yang Terpuji, yang Memulai lagi, yang Mengembalikan.'
  },
  {
    arab: 'يَاحَفِيْظُ يَالَطِيْفُ يَانَصِيْرُ يَاوَكِيْلُ يَا اللّٰهُ..١١',
    arti: 'Wahai Dzat yang maha Menjaga lagi maha Belas Kasih, maha Menolong, Wahai Dzat yang maha Mewakili Ya Allah.',
  },
  {
    arab: 'يَا حَيُّ يَاقَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ لَا إِلَهَ إِلَّا اَنْتَ سُبْحَانَكَ إِنِّى كُنْتُ مِنَ الظَّالِمِيْنَ..٣',
    arti: 'Wahai Dzat yang maha Hidup lagi Berdiri Sendiri, dengan Rahmat-Mu aku mohon pertolongan. Tiada tuhan kecuali Engkau, Maha suci Engkau, sungguh aku ini termasuk orang yang dzolim.'
  },
  {
    arab: '… الفاتحة',
    arti: ''
  },
  {
    arab: 'بِسْمِ اللّٰهِ مَا شَاءَ اللّٰهُ لَا قُوَّةَ اِلَّا بِاللّٰهِ، مَا شَاءَ اللّٰهُ',
    arti: 'Dengan Nama Allah, Apa saja yang Allah kehendaki sama sekali tidak ada kekuatan untuk melakukan taat, kecuali dengan pertolongan Allah, mudah-mudahan Allah Berkehendak.'
  },
  {
    arab: 'بِسْمِ اللّٰهِ مَا شَاءَ اللّٰهُ مَا كَانَ مِنْ نِعْمَةٍ فَمِنَ اللّٰه، مَا شَاءَ اللّٰهُ',
    arti: 'Dengan nama Allah, apa saja yang telah Allah Kehendaki, Hanya dari Allah Kenikmatan itu datang, mudah-mudahan Allah Berkehendak.'
  },
  {
    arab: 'بِسْمِ اللّٰهِ مَا شَاءَ اللّٰهُ لَا يَصْرِفُ السُّوْءَ إِلَّا للّٰه مَا شَاءَ اللّٰهُ',
    arti: 'Dengan nama Allah, apa saja yang telah Allah Kehendaki, Tidak ada yang dapat menyingkirkan kejelekan itu terjadi, keuali Allah.'
  },
  {
    arab: 'بِسْمِ اللّٰهِ مَا شَاءَ اللّٰهُ لَا يَسُوْقُ الْخَيْرَ اِلَّا اللّٰه مَا شَاءَ اللّٰهُ',
    arti: 'Dengan nama Allah, apa saja yang telah Allah Kehendaki, Tidak ada yang dapat mendorong kebaikan kecuali Allah'
  },
  {
    arab: 'بسْمِ اللّٰهِ مَا شَاءَ اللّٰهُ لَا يَأْتِي بِالْحَسَنَاتِ اِلَّا اللّٰه مَا شَاءَ اللّٰهُ',
    arti: 'Dengan nama Allah, Sesuatu Yang telah Allah kehendaki (pasti tercapai), Tidak akan bisa mendatangkan terhadap suatu kebaikan, kecuali Allah, Mudah-mudahan Allah Berkehendak.'
  },
  {
    arab: 'بِسْمِ اللّٰهِ مَا شَاءَ اللّٰهُ لَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيْمِ',
    arti: 'Dengan nama Allah, Apa saja yang Allah kehendaki sama sekali tidak ada daya untuk menyingkir dari maksiat dan tidak ada kekuatan untuk melakukan taat, kecuali dengan pertolongan Allah, Mudah-mudahan Allah Berkehendak.'
  },
  {
    arab: 'اَللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِينَا بِهَا مِنْ جَمِيعِ الْأَهْوَالِ وَالْآفَاتِ، وَتَقْضِي لَنَا بِهَا جَمِيعَ الْحَاجَاتِ، وَتُطَهِّرُنَا بِهَا مِنْ جَمِيعِ السَّيِّئَاتِ، وَتَرْفَعُنَا بِهَا عِنْدَكَ أَعْلَى الدَّرَجَاتِ، وَتُبَلِّغُنَا بِهَا أَقْصَى الْغَايَاتِ مِنْ جَمِيعِ الْخَيْرَاتِ فِي الْحَيَاةِ وَبَعْدَ الْمَمَاتِ. بِرَحْمَتِكَ يَا اَرْحَمَ الرَّحِمِيْنَ',
    arti: ''
  },
  {
    arab: 'اللَّهُمَّ صَلِّ صَلَاتاً كَامِلَةً وَسَلِّمْ سَلَاماً تَامّاً عَلَى سَيِّدِنَا مُحَمَّدٍ الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ وَتَنْفَرِجُ بِهِ الْكُرَبُ وَتُقْضَى بِهِ الْحَوَائِجُ وَتُنَالُ بِهِ الرَّغَائِبُ وَحُسْنُ الْخَوَاتِمِ وَيُسْتَسْقَى الْغَمَامُ بِوَجْهِهِ الْكَرِيمِ وَعَلَى آلِهِ وَصَحْبِهِ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ بِعَدَدِ كُلِّ مَعْلُومٍ لَك',
    arti: ''
  },
  {
    arab: 'اَللّٰهُمَّ صَلِّ عَلٰى سَيِّدِنَا مُحَمَّدٍ، طِبِّ الْقُلُوْبِ وَدَوَائِهَا، وَعَافِيَةِ الْاَبْدَانِ وَشِفَائِهَا، وَنُوْرِ الْاَبْصَارِ وَضِيَائِهَا، وَعَلٰى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ',
    arti: ''
  },
  {
    arab: '… الفاتحة',
    arti: ''
  },
  {
    arab: 'صَلَّى اللّٰهُ عَلَى مُحَمَّدْ...١١١',
    arti: ''
  },
  {
    arab: 'لَا إِلَهَ اِلَّا اللَّه...١١١',
    arti: ''
  },
  {
    arab: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ..١١',
    arti: ''
  },
  {
    arab: '… الفاتحة',
    arti: ''
  },
  {
    arab: 'اَللهُ الْكَافِى، رَبُنَا الْكَافِى، قَصَدْنَا الْكَافِى، وَجَدْنَا الْكَافِى، لِكُلِّ كَافِى، كَفَانَا الْكَافِى، وَنِعْمَ الْكَافِى اَلحَمْدُ لِلهِ...٣',
    arti: ''
  },
  {
    arab: '… الفاتحة',
    arti: ''
  },
  {
    arab: '… الفاتحة',
    arti: ''
  },
  {
    arab: 'يَا اللّٰه...١١١',
    arti: ''
  },
  {
    arab: '… الفاتحة',
    arti: ''
  },
  {
    arab: 'مَوْلَايَ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا',
    arti: ''
  },
  {
    arab: 'عَلَى حَبِيبِكَ خَيْرِ الْخَلْقِ كُلِّهِمِ',
    arti: ''
  },
  {
    arab: 'هُوَ الْحَبِيبُ الَّذِي تُرْجَى شَفَاعَتُهُ',
    arti: ''
  },
  {
    arab: 'لِكُلِّ هَوْلٍ مِنَ الْأَهْوَالِ مُقْتَحِمِ',
    arti: ''
  },
  {
    arab: 'يَا رَبِّ بِالْمُصْطَفَى بَلِّغْ مَقَاصِدَنَا',
    arti: ''
  },
  {
    arab: 'وَاغْفِرْ لَنَا مَا مَضَى يَا وَاسِعَ الْكَرَمِ',
    arti: ''
  },
  {
    arab: 'صَلَّى اللّٰهُ رَبُّنَا عَلَى نُوْرِ الْمُبِيْنِ',
    arti: ''
  },
   {
    arab: 'أَحْمَدَ الْمُصْطَفَى سَيِّدِ الْمُرْسَلِيْنَ',
    arti: ''
  },
   {
   arab: 'وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِيْنَ',
   arti: ''
  },
];