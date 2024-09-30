import Button from "@/components/Buttons";
import ButtonWithProps from "@/components/ButtonWithProps";
import Card from "@/components/CardWithChildren";

/** file index.js  ini dibuat secara otomatis di folder src/pages.
 * file ini akan menjadi halaman utama di aplikasi next.js
 */
export default function Home() {
  return (
    <div className="bg-warnaGue p-4 font-poppins flex justify-center items-center text-primary min-h-screen">
      <h1>Welcome to Nextjs</h1>
      <Button />
      <ButtonWithProps buttonClassname={"bg-red-500 text-white"}/>
      <ButtonWithProps buttonClassname={"bg-yellow-500 text-white"}/>
      <ButtonWithProps buttonClassname={"bg-green-500 text-white"}textButton="sumbit"/>
      <Card cardClassname={"p-4"}>
        <h2 className="text-xl font-bold my-3">Card Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ratione laudantium laboriosam dolores obcaecati deleniti nisi ad, 
           eum recusandae tenetur nobis.</p>
      </Card>
    </div>
  );
}
