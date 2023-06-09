const styles = {
  boxWidth: "xl:max-w-[1280] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-center items-end",
  flexBase: "flex justify-center items-baseline",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  parFooter: "text-[#3c479e] text-[20px]",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  img: " -z-10 h-[120px] flex mx-auto justify-center my-5 xl:px-0 sm:px-16 px-6 center",
  gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",

  navBg: "bg-[#171718]",
  primaryBg: "bg-[#363538]",
  };

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;