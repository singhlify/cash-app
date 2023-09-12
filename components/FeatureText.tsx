interface FeatureTextProps {
  title: {
    text: string;
    color: string;
  };
  description: {
    text: string;
    color: string;
  };
  position?: string;
}

export const FeatureText = ({
  title = {
    text: "",
    color: "",
  },
  description = {
    text: "",
    color: "",
  },
  position = "",
}: FeatureTextProps): JSX.Element => {
  if (position) {
    return (
      <div
        className={`hidden md:flex flex-col z-[3] leading-normal justify-center w-[352px] absolute ${position}`}
      >
        <h2 className={`font-bold text-left ${title.color} text-[40px]`}>
          {title.text}
        </h2>
        <p className={`text-base text-left text-${description.color}`}>
          {description.text}
        </p>
      </div>
    );
  }

  return (
    <div className="leading-normal flex flex-col z-[3] justify-center p-4 mb-7 md:hidden">
      <h2 className={`font-bold text-left ${title.color} text-[40px]`}>
        {title.text}
      </h2>
      <p className={`text-base text-left text-${description.color}`}>
        {description.text}
      </p>
    </div>
  );
};
