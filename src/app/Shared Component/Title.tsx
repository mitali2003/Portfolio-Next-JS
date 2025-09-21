import SubTitle from "./SubTitle";

const Title = ({ title, subTitle }: { title: string; subTitle: string }) => (
  <section className="mb-11">
    <h1 className="bg-gradient-to-r from-blue-500 font-bold to-purple-500 text-3xl md:text-4xl bg-clip-text text-transparent text-center mb-4 ">
      {title}
    </h1>
    <SubTitle subTitle={subTitle} />
  </section>
);

export default Title;
