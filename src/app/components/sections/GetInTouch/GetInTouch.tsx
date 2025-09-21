import Title from "@/app/Shared Component/Title";
import GetInTouchInfo from "./elements/GetInTouchInfo";
import SocialInfo from "./elements/SocialInfo";

const GetInTouch = () => (
  <section className="py-10">
    <Title
      title="Get In Touch"
      subTitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
    />
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4">
      <GetInTouchInfo />
      <SocialInfo />
    </section>
  </section>
);

export default GetInTouch;
