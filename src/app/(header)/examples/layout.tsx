import { ExamplesNav } from "@/components/examples-nav";

interface PropsType {
  children: Readonly<React.ReactNode>;
}

const ExamplesLayout = (props: PropsType) => {
  const { children } = props;
  return <main>{children}</main>;
};

export default ExamplesLayout;
