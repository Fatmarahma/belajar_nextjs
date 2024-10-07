import { SET_IS_LARGE_SCREEN, SET_IS_MOBILE_SCREEN } from "./constant";

/**file action : object yang mendeskripsikan perubahan yang ingin dilakukan pada state
 * atau sederhananya action seperti sebuah PERINTAH yang akan dikirimkan ke reducer
 */

export const setIsMobileScreen = (isMobile) => ({
  type: SET_IS_MOBILE_SCREEN,
  payload: isMobile,
});

export const setIsLargeScreen = (isMobile) => ({
  type: SET_IS_LARGE_SCREEN,
  payload: isMobile,
});
