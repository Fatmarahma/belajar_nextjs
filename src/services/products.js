// import depedency axios untuk integrasi ke API.
import axios from "axios";

/**impor dan simpan variabel api yang berisi URL public dari variabel NEXT_PUBLIC_API
 * proses.env.NEXT_PUBLIC_blablabla untuk mengakses variable enviroment yang mau dipakai
 */
const api = process.env.NEXT_PUBLIC_API;
//export fungsi getProducts yang mengembalikan data produk dari API
export async function getProducts() {
  //eksekusi di blok try catch
  try {
    //buat request GET ke URL produk menggunakan axios kemudian tampung hasilnya di variable response
    const response = await axios.get(`${api}/products`);
    //kembalikan data produk dari response jika berhasil
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
