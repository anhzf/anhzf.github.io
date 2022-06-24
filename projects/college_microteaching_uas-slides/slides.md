---
theme: apple-basic
highlighter: shiki
layout: intro
---


# Aplikasi Web Interaktif menggunakan <img src="https://vuejs.org/logo.svg" class="w-1em inline">ueJS
## Pemrograman Web dan Perangkat Bergerak
oleh: Alwan Nuha


---


# Indikator Pencapaian
- 3.24 Menerapkan teknologi framework dalam aplikasi web.
- 4.24 Membuat aplikasi web menggunakan teknologi framework.


---


<!-- # What you can expect from learning this? -->
# Apa yang dapat kalian ekspektasikan dari mempelajari ini? 🤔
- Web kalian akan menjadi lebih menarik.
- Kalian tidak akan lagi membuat web statis yang itu-itu aja.
- Menulis kode lebih sedikit tapi powerful.
- Meningkatkan kinerja tim kalian.
- Eksplorasi lebih jauh apa saja yang dapat web lakukan.


---


# Save this for later 🔖
https://vuejs.org/examples/

Garansi tidak remidi untuk semester ini bagia yang dapat menyelesaikan challenge nanti.

#challenge


---
layout: image-right
image: ./naruto-swing-scene.jpg
class: has-finger-list-style
---

# Flashback ↩️
- Logika dan Algoritma
- Percabangan (if, if else, else if, switch)
- Perulangan (for, while)
- Membuat web (HTML, CSS, JavaScript)

<!-- Saya yakin kalian sudah pernah mempelajarinya meskipun kurang  -->


---
class: has-finger-list-style
---

# Framework❓
- Mempercepat proses pengembangan.
- Meningkatkan kinerja tim.
- Fokus kepada pengembangan aplikasi, tidak ke implementasi teknisnya.
- Menyediakan deklarasi penulisan kode tingkat tinggi.
- ...Banyak lagi fitur yang ditawarkan masing-masing framework.

<!--
Apabila dalam projek baru kita tidak akan mulai dari 0.

Tingkat tinggi? seperti yang kita ketahui bahwa dalam penerapannya kita biasanya tidak langsung menuangkan apa yang kita inginkan, kita harus tau juga mekanisme cara kerja web misalnya. Dengan adanya penulisan kode tingkat tinggi kita akan langsung dihadapkan dengan apa yang kita butuhkan.
Misal untuk mengubah class ketika tombol diklik maka, hal pertama yg harus dilakukan kita harus mengambil elemen tersebut kemudian menangkap event darinya lalu baru kita eksekusi perubahan class tsb. lain halnya jika dengan penulisan tingkat tinggi, dalam kita tinggal menaruh function pada atribut listener kemudian kita ubah class tsb.
-->


---


# Mengapa Vue?
- Declarative rendering
- Reactive
- Beginner friendly
- Single file component


---
layout: two-cols
class: has-finger-list-style
---

# Sintaks Dasar
- Template (HTML)
- Script (ditulis dalam JavaScript)

::right::

## Contoh
```html {all|1-3|5-9}
<template>
  <h1>{{ message }}</h1>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
</script>
```


---


# Binding Data (Data Binding)
Membuat atribut dinamis, dimana datanya berasal dari sebuah variabel.

## Sintaks
```html
<div v-bind:id="dynamicId"></div>
```

## Shorthand
```html
<div v-bind:id="dynamicId"></div>
```

Dalam hal ini `dynamicId` merupakan variabel, sehingga ketika isi dari variabel `dynamicId` berubah maka `id` elemen `div` tersebut akan berubah juga.


---
layout: two-cols
---

# Pengkondisian (Conditional)
Menggunakan if else elseif pada VueJS

```html {all|6|6-8|9|9-11|all}
<template>
  <button @click="awesome = !awesome">
    Toggle
  </button>

  <h1 v-if="awesome">
    Vue is awesome!
  </h1>
  <h1 v-else>
    Oh no 😢
  </h1>
</template>

<script setup>
const awesome = ref(false);
</script>
```

::right::

## Hasil
<div class="demo-playground">
  <DemoConditional />
</div>

<!-- Janlup highlight dlu -->


---
layout: two-cols
---

# Event Binding
Menangani Event pada Elemen di browser.

```html {all|2|11|5|all}
<template>
  <button @click="count++">
    Add 1
  </button>
  <p>Count is: {{ count }}</p>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>
```

::right::

## Hasil
<div class="demo-playground">
  <DemoCounter />
</div>


---
layout: two-cols
---

# Perulangan (Looping)
```html {all|16-20|7|6-11|all}
<template>
  <button @click="list.push(list.length + 1)">Add Number</button>
  <button @click="list.pop()">Remove Number</button>

  <ul v-if="list.length > 0">
    <li
      v-for="item of list"
      :key="item"
    >
      {{ item }}
    </li>
  </ul>
  <p v-else>List is empty.</p>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([1, 2, 3]);
</script>
```

::right::

## Hasil
<div class="demo-playground">
  <DemoLoop />
</div>

<!-- Kita sediakan variabel array nya terlebih dahulu, pada template -->

---


# Memulai 🚀
## Persiapan
- Visual Studio Code (https://code.visualstudio.com/)
- NodeJS (https://nodejs.org/)

## Langkah-langkah
1. Buka terminal setelah NodeJS terinstall (Powershell, CMD, UNIX, dll).
2. Kemudian arahkan ke folder yang ingin ditempati.
   ```bash
   cd <FOLDER TUJUAN>
   ```
3. Untuk membuat projek Vue baru gunakan command berikut:
   ```bash
   npm init vite
   ```
4. Kemudian ikuti petunjuk yang diberikan.


---
layout: two-cols
---

# Praktek 🤘
Silakan buat projek Vue baru dengan cara ikuti petunjuk yang ada pada slide sebelumnya atau

Silakan akses link berikut: https://vite.new/vue

## Brief
Buatlah program yang dapat mengambil data daftar repository user dari github. Menambahkan fitur input menjadi nilai plus. Silakan manfaatkan apa yang telah didapat dari materi sebelumnya.

Untuk mengambil data dari GitHub silakan gunakan function yang sudah saya sediakan [disini](https://gist.github.com/anhzf/f5563fc201c99b2b48c3bae377218375).

Taruh function tersebut ke file baru, kemudian import function tersebut.

::right::

## Hasil akhir
<DemoTask />


---


# Tugas 🙏
Buatlah Modal atau Dialog seperti dibawah ini.
<DemoDialog />

Agar membiasakan menggunakan GitHub, silakan kumpulkan link repository saja ke.

## Referensi
- https://www.w3schools.com/
- https://developer.mozilla.org/en-US/docs/Web
- https://vuejs.org/


---
layout: center
---

# Terima Kasih
Ada pertanyaan?
