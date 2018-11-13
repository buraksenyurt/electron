# Electron Öğrenmeye Çalıştım

Node.js ile cross-platform tabanlı uygulamalar geliştirebiliyoruz. Örneğin Ubuntu'da yazdığmız bir masaüstü uygulamasını, MacOS veya Windows üzerinde çalıştırabiliyoruz. Bunun için Electron modülünden yararlanılıyor. Node.js'in Chromium ile entegre çalıştırılması sayesinde istediğimiz sonuçları elde ediyoruz. Bu repo'da çalışma odamda yaptığım deneysel tutorial'lar yer almakta. Öncesinde biraz Node.js, temel düzeyde HTML ve Bootstrap bilgisine sahip olunmasında yarar var.

## Örnekler

Tamamen ortamı tanıma amaçlı olarak yaptığım örneklere ait kısa bilgileri aşağıda bulabilirsiniz. Bir kısmını West-World'de(Ubuntu işletim sisteminde) diğer bir kısmını Windows platformunda yazdım. Github reposunu kullandığım için zaman zaman evden zaman zaman iş yerinden kod geliştirdim.

Örnek           | Açıklama
--------------- | ----------------------------------------------------------------------
Lesson01 | Hello World.
Lesson02 | Bootstrap işin içine dahil edilir, text alanına girilen değerin button click olayında yakalanması sağlanır.
Lesson03 | Kullanıcının girdiği kitap adları ve okundu bilgisinin text dosyaya yazdırılması ve ekrandaki listede gösterilmesi sağlanır(Dosya sistemi ile basit etkileşim)
Lesson04 | OS modülünün kullanımı ve sistem hakkında basit bilgilerin sayfaya dökümü. Uygulamanın çalıştığı platform, mimari, bellek durumu, driver'ları vs
Lesson05 | Net modülü kullanımı örneği. Sunucu belli aralıklarla istemciye rastgele sayılar gönderir.
Lesson06 | Basit IPC(Inter Process Communication) kullanımı örneği. İstemcinin IPC üzerinden sunucuya gönderdiği bilgiyi sunucu kendisine geri gönderir.
Lesson07 | ShowDialog kullanımı. Kullanıcı dosya açma pencersinden seçtiği bir imajı ekranında görür.

 [Electron ile ilgili olarak burdan detaylı bilgi alabilirsiniz](https://electronjs.org/)