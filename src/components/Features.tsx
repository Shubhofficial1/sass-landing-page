import Feature from "./Feature";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis iusto impedit adipisci deleniti eius nulla molestias dolorem accusamus pariatur",
  },
  {
    title: "Goal Setting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis iusto impedit adipisci deleniti eius nulla molestias dolorem accusamus pariatur",
  },
  {
    title: "Secure Data Encryption",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis iusto impedit adipisci deleniti eius nulla molestias dolorem accusamus pariatur",
  },
];

const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl text-center font-bold tracking-tighter ">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            leverage CI/CD with GitHub Actions, developers can automate testing
            and deployment across staging, development, and production
            environments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {features.map(({ title, description }) => (
            <Feature title="title" description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
