import Button from "@/components/atoms/Buttons";
import Card from "@/components/molecules/CardWithChildren";
import { useSelector } from "react-redux";

/** file index.js  ini dibuat secara otomatis di folder src/pages.
 * file ini akan menjadi halaman utama di aplikasi next.js
 */
export default function Home() {
  const isMobileScreen = useSelector((state) => state.screen.isMobileScreen);
  console.log(isMobileScreen);

  return (
    <div className=" p-4 font-poppins flex justify-center items-center min-h-screen">
      {isMobileScreen ? <h1>Ini halaman Mobile </h1> : <h1>ini halaman desktop</h1>}
      <Button />
      {isMobileScreen && (
        <>
          <Card cardClassname={"p-4"}>
            <h2 className="text-xl font-bold my-3">Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium laboriosam dolores obcaecati
              deleniti nisi ad, eum recusandae tenetur nobis.
            </p>
          </Card>
          <Card cardClassname={"p-4"}>
            <h2 className="text-xl font-bold my-3">Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium laboriosam dolores obcaecati
              deleniti nisi ad, eum recusandae tenetur nobis.
            </p>
          </Card>
        </>
      )}
    </div>
  );
}
