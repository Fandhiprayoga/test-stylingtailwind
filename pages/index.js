

import React, { useState } from 'react';

function ListMenu(props){
  const {Menu}=props
  return(
    <ul className={Menu ? " absolute  text-gray-700 pt-1":"absolute hidden text-gray-700 pt-1"}>
    <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
    <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
    <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
  </ul>
  )
}

export default function Home() {
  const [Menu, setMenu]=useState(false)
  return (
    <>
      <div className='container mx-auto px-20 py-10 w-4/6' >
          <nav className="lg:flex justify-between mt-6">
              <div className="flex items-center">
                  <img src='/logo.png' width="50"/>
                  <input className="bg-gray-100 ml-5 px-2 focus:outline-none" type="text" placeholder="mau belajar apa ?"></input>
              </div>
              <div className="flex">
                  <a href="#" className="px-2  text-blue-900">Belajar</a>
                  <a href="#" className="px-2  text-blue-900">Nongkrong</a>
                  <a href="#" className="px-2  text-blue-900">Login</a>
                  <div class=" inline-block relative">
                    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" onClick={Menu ? (e)=>setMenu(false):(e)=>setMenu(true)}>
                      <span class="mr-1">Dropdown</span>
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                    </button>
                    <ListMenu Menu={Menu}/>
                  </div>
              </div>
          </nav>

          <section className=" lg:flex mt-10">
              <div className="text-center px-12 py-12 lg:w-4/6">
                  <img width="250" className="mx-auto" src="/computer.png"></img>
                  <h1 className="text-2xl mt-3"><b>Belajar Pemrograman Mulai dari NOL</b></h1>
                  <h2 className="text-gray-500 text-lg mt-3">
                    Belajar membuat website dan aplikasi. Bingung mulai dari mana ? tenang, mari bergabung 
                    bersama 100 ribu+ teman lainnya. Mau bekerja sebagai programmer atau membuat karya, kamu juga bisa !
                  </h2>
              </div>
              <div className="shadow-md px-8 py-8 lg:w-2/6 rounded-md text-center">
                  <p>Daftar dengan:</p>
                  <div className="xl:flex  justify-around mt-2 mb-2">
                      <button className="bg-red-500 hover:bg-red-300 py-2 px-3 ml-2 text-white rounded-md text-sm">Google</button>
                      <button className="bg-black hover:bg-gray-500 py-2 px-3 ml-2 text-white rounded-md text-sm">Github</button>
                      <button className="bg-blue-700 hover:bg-blue-500 py-2 px-3 ml-2 text-white rounded-md text-sm">Twitter</button>
                  </div>
                  <p className="my-2">atau daftar dengan email</p>
                    <form action="#"   className="text-left my-2">
                      <div className="bg-gray-100 p-2   rounded-md my-2">
                        <label className="block text-gray-500"for="username">Username</label>
                        <input type="text" className="bg-transparent w-full text-xl focus:outline-none"/>
                      </div>

                      <div className="bg-gray-100 p-2   rounded-md my-2">
                        <label className="block text-gray-500"for="email">Email</label>
                        <input type="text" className="bg-transparent w-full text-xl focus:outline-none"/>
                      </div>

                      <div className="bg-gray-100 p-2   rounded-md my-2">
                        <label className="block text-gray-500"for="password">Password</label>
                        <input type="password" className="bg-transparent w-full text-xl focus:outline-none"/>
                      </div>

                      <button className="bg-blue-500 hover:bg-blue-300 w-full p-2 mt-3 rounded-md text-white" type="submit">Daftar</button>
                    </form>
                    <p className="mt-3 text-xs">Dengan mendaftar, kamu setuju dengan <a href="#"><u>syarat dan ketentuan</u></a> kami</p>
              </div>
          </section>

          <section className="md:flex m-2 my-5 p-2 justify-around mx-auto">
                    <div className="p-2">
                        <img src="/ipad.png" width="200" className="mx-auto"></img>
                        <p className="my-2 text-center">Belajar lewat 1926 video, kapan & di mana saja. Bingung mulainya? Ngga masalah!</p>
                    </div>
                    <div className="p-2">
                        <img src="/coffee.png" width="200" className="mx-auto"></img>
                        <p className="my-2 text-center">Forum untuk berdiskusi dengan teman-teman lain Sudah ada 50485 aktivitas</p>
                    </div>
                    <div className="p-2">
                        <img src="/pot.png" width="200" className="mx-auto"></img>
                        <p className="my-2 text-center">Publish hasil karya kamu di Mading dan dapatkan feedback. Sudah ada 743 karya</p>
                    </div>
              </section>
              
            <section className="m-3">
                  <h1 className="text-xl text-center"><b>Apa Kata Member?</b></h1>
                  <div className="md:grid gap-4 grid-cols-3 items-center m-3 p-2">
                      <div className="text-center">
                            <img src="/dummy.jpg" width="70" className="mx-auto rounded-full"></img>
                            <p >@asdass</p>
                            <p>Terima kasih banyak sekolah koding semasa saya sedang skripsi banyak video premium yang membantu saya untuk improve saat mengerjakan tugas akhir.</p>
                      </div>
                      <div className="text-center m-2">
                            <img src="/dummy.jpg" width="70" className="mx-auto rounded-full"></img>
                            <p>@asdass</p>
                            <p>Terima kasih banyak sekolah koding semasa saya sedang skripsi banyak video premium yang membantu saya untuk improve saat mengerjakan tugas akhir.</p>
                      </div>
                      <div className="text-center m-2">
                            <img src="/dummy.jpg" width="70" className="mx-auto rounded-full"></img>
                            <p>@asdass</p>
                            <p>Terima kasih banyak sekolah koding semasa saya sedang skripsi banyak video premium yang membantu saya untuk improve saat mengerjakan tugas akhir.</p>
                      </div>
                      <div className="text-center m-2">
                            <img src="/dummy.jpg" width="70" className="mx-auto rounded-full"></img>
                            <p>@asdass</p>
                            <p>Terima kasih banyak sekolah koding semasa saya sedang skripsi banyak video premium yang membantu saya untuk improve saat mengerjakan tugas akhir.</p>
                      </div>
                      <div className="text-center m-2">
                            <img src="/dummy.jpg" width="70" className="mx-auto rounded-full"></img>
                            <p>@asdass</p>
                            <p>Terima kasih banyak sekolah koding semasa saya sedang skripsi banyak video premium yang membantu saya untuk improve saat mengerjakan tugas akhir.</p>
                      </div>
                      <div className="text-center m-2">
                            <img src="/dummy.jpg" width="70" className="mx-auto rounded-full"></img>
                            <p>@asdass</p>
                            <p>Terima kasih banyak sekolah koding semasa saya sedang skripsi banyak video premium yang membantu saya untuk improve saat mengerjakan tugas akhir.</p>
                      </div>
                      <div className="text-center m-2">
                            <img src="/dummy.jpg" width="70" className="mx-auto rounded-full"></img>
                            <p>@asdass</p>
                            <p>Terima kasih banyak sekolah koding semasa saya sedang skripsi banyak video premium yang membantu saya untuk improve saat mengerjakan tugas akhir.</p>
                      </div>
                  </div>
                  <a href="#" className="text-sm text-center block"><u>dan masih banyak lagi ...</u></a>
            </section>
            <hr/>
            <section className="mt-10 w-4/6 mx-auto" >
              <h1 className="text-xl text-center"><b>Apa saja yang bisa kamu pelajari?</b></h1>
              <p className="text-center mt-4 text-sm p-2">Frontend website / Backend website / PHP / Python / Javascript / Nodejs / Membuat portofolio / HTML / CSS / VueJs / Laravel / Codeigniter / Slim / Firebase / Hosting / Database / Flask / Django / API / AJAX / Single Page Application / SEO / Progressive Web App / ReactJS / NextJS / GraphQL / Go Lang / Kotlin / Android / Membuat Website / Membuat aplikasi / SQLite / Hugo / Responsive Web Design / NuxtJS / Tailwind CSS / AlpineJS / Livewire / Flutter / Dart / Git / GulpJS /</p>
              <hr className="m-5"/>
              <h1 className="text-center text-sm ">Perempuan atau laki-laki, Anak IT atau bukan, punya bakat atau tidak, kamu juga bisa mulai belajar programming, daftar gratis sekarang juga!</h1>
              <div className="flex justify-center mt-4"> 
                  <button className="bg-blue-300 hover:bg-blue-100 p-2 px-5 rounded-md text-white ">Daftar Gratis</button>
              </div>
            </section>
      </div>
      <section className="bg-gray-400 container mx-auto px-20 py-5 w-4/6">
                <p className="text-center text-sm">© Sekolah Koding 2015 - 2021</p>
                <p className="text-center text-sm  block">Video tutorial web development dan programming dalam bahasa Indonesia. Luaskan ilmu, luaskan manfaat.</p>
                <div className="grid-cols-4 flex justify-around mt-8">
                    <div className="text-sm">
                        <h1><b>Belajar</b></h1>
                        <h3>Kelas</h3>
                        <h3>Panduan</h3>
                        <h3>Perjalanan</h3>
                        <h3>Kenapa Belajar koding</h3>
                        <h3>Premium</h3>                     
                    </div>
                    <div className="text-sm">
                        <h1><b>Diskusi</b></h1>
                        <h3>Upacara</h3>
                        <h3>Forum</h3>
                        <h3>Artikel</h3>
                        <h3>Mading</h3>                     
                    </div>
                    <div className="text-sm">
                        <h1><b>NonTeknis</b></h1>
                        <h3>Podcast</h3>
                        <h3>Hadiah untuk programme</h3>                    
                    </div>
                    <div className="text-sm">
                        <h1><b>Informasi</b></h1>
                        <h3>FAQ</h3>
                        <h3>Tentang</h3>
                        <h3>Syarat</h3>
                        <h3>Media</h3>
                        <h3>Kata member</h3>
                        <h3>Masuk</h3>
                        <h3>Daftar</h3>
                        <h3>Iklan</h3>                     
                    </div>
                </div>

                <p className="text-sm text-center mt-4 mb-4 p-2" >Dibuat dengan cinta di Makassar & Berlin</p>
            </section>
      </>
  )
}
