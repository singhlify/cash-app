interface FeatureTextProps {
  title: {
    text: string;
    color: string;
  };
  description: {
    text: string;
    color: string;
  };
  position?: {
    top: number;
    left: number;
  };
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
  position = {
    top: 0,
    left: 0,
  },
}: FeatureTextProps): JSX.Element => {
  if (position?.top) {
    return (
      <div
        className={`hidden md:flex flex-col z-[1] leading-normal justify-center w-[352px] absolute top-[${position.top}px] left-[${position.left}px]`}
      >
        <h2 className={`font-bold text-left text-${title?.color} text-[40px]`}>
          {title?.text}
        </h2>
        <p className={`text-base text-left text-${description?.color}`}>
          {description?.text}
        </p>
      </div>
    );
  }

  return (
    <div className="leading-normal flex flex-col z-[1] justify-center p-4 mb-7 md:hidden">
      <h2 className={`font-bold text-left text-${title?.color} text-[40px]`}>
        {title?.text}
      </h2>
      <p className={`text-base text-left text-${description?.color}`}>
        {description?.text}
      </p>
    </div>
  );
};
