type Props = {
  children: React.ReactNode;
  href?: string;
};

export const Link = (props: Props) => {
  const { children, href } = props;

  return (
    <a
      className="text-[#7C3AED] font-semibold hover:underline focus:underline"
      href={href}
    >
      {children}
    </a>
  );
};
