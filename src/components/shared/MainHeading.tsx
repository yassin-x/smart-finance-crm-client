interface Props {
  title: string;
  subTitle: string;
}

export default function MainHeading({ title, subTitle }: Props) {
  return (
    <div className="element-center flex-col text-center select-none pb-6">
      <p className="text-lg! md:text-xl text-muted-foreground mt-4 font-normal italic">
        {subTitle}
      </p>
      <h2 className="text-2xl! md:text-5xl font-bold text-primary">{title}</h2>
    </div>
  );
}
