import React from "react";

/** props (singkatan dari "properties")
 * props : cara untuk mengirim data dari satu komponen ke komponen lainnya.
 * props adalah  object yang diteruskan sebagai argumnen/parameter dan digunakan
 * untuk mengkustomisasi style komponen,mengirim data dari API dan sebagainya
 */

const ButtonWithProps = ({ buttonClassname = "bg-blue-500",textButton = "Button" }) => {
  return <button className={`h-10 px-6 font-semibold rounded-md ${buttonClassname}`}>{textButton}</button>;
};

export default ButtonWithProps;
