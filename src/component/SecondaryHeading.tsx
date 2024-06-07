type SecondaryHeadingProps = {
  secondaryHeading: string;
  text: string;
};

export default function SecondaryHeading({
  secondaryHeading,
  text,
}: SecondaryHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto px-2 py-4">
      <h2 className="text-3xl font-inter font-semibold mb-5">{secondaryHeading}</h2>
      <p className="font-mono text-xl text-gray-500">{text}</p>
    </div>
  );
}
