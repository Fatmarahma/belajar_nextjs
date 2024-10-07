import Button from "@/components/atoms/Buttons";
import Card from "@/components/molecules/CardWithChildren";
import { isMobileScreenAtom } from "@/jotai/atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobileScreen, setIsMobileScreen] = useAtom(isMobileScreenAtom);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileScreen(window.innerWidth < 768);
      setIsLargeScreen(window.innerWidth >= 1240);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileScreen]);
  console.log(isMobileScreen, isLargeScreen);

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
