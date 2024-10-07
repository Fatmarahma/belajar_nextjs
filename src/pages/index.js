import Button from "@/components/atoms/Buttons";
import CardProduct from "@/components/molecules/CardProduct";
import Card from "@/components/molecules/CardWithChildren";
import { isMobileScreenAtom } from "@/jotai/atoms";
import { getEvents } from "@/services/events";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export default function Home({ events }) {
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
  console.log(events);

  return (
    <div className=" p-4 font-poppins flex justify-center items-center min-h-screen">
      {isMobileScreen ? <h1>Ini halaman Mobile </h1> : <h1>ini halaman desktop</h1>}
      <Button />
      <div className="flex gap-6">
        {events.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Body title={item.title} desc={item.participant} />
            {item.location}
          </CardProduct>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const [eventResult] = await Promise.all([getEvents()]);
    return {
      props: {
        events: eventResult,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
