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
        className={`absolute z-[3] hidden w-[352px] flex-col justify-center leading-normal md:flex ${position}`}
      >
        <h2 className={`text-left font-bold ${title.color} text-[40px]`}>
          {title.text}
        </h2>
        <p className={`text-left text-base text-${description.color}`}>
          {description.text}
        </p>
      </div>
    );
  }

  return (
    <div className="z-[3] mb-7 flex flex-col justify-center p-4 leading-normal md:hidden">
      <h2 className={`text-left font-bold ${title.color} text-[40px]`}>
        {title.text}
      </h2>
      <p className={`text-left text-base text-${description.color}`}>
        {description.text}
      </p>
    </div>
  );
};
