import "@/styles/globals.css";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { setIsMobileScreen } from "@/store/screen/screenSlice";
import store from "@/store/store";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    function handleResize() {
      store.dispatch(setIsMobileScreen(window.innerWidth < 768));
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
