const styles = {
  boxWidth: "w-full",

  heading1:
    "font-display font-bold xs:text-[52px] text-[30px] tracking-tighter xs:leading-[1.1] leading-[1.2] w-full text-fg",
  heading2:
    "font-display font-bold xs:text-[44px] text-[28px] tracking-tighter xs:leading-[1.15] leading-[1.25] w-full text-fg",
  heading3:
    "font-display font-bold xs:text-[44px] text-[28px] tracking-tighter xs:leading-[1.15] leading-[1.25] w-full text-gradient-accent",

  paragraph:
    "font-body font-normal text-muted xs:text-[16px] text-[15px] leading-[28px]",
  paragraph2:
    "font-body font-normal text-muted xs:text-[16px] text-[15px] leading-[28px]",
  paragraph3:
    "font-body font-normal text-muted xs:text-[16px] text-[15px] leading-[28px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-20 py-10",
  padding: "sm:px-16 px-6 sm:py-14 py-8",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-8",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
