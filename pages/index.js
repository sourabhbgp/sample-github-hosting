import DynamicLayout from "../components/dynamicLayout";
import Title from "../components/title";

const Home = () => {
  return (
    <DynamicLayout>
      <Title
        title={
          "A Complete Guide to NPTEL Login, Course Enrollment and Certification"
        }
      />

      <p className="text-gray-700 font-medium py-4">
        NPTEL or National Programme on Technology Enhanced Learning is a project
        started by the top seven IIT colleges ( Bombay, Delhi, Guwahati, Kanpur,
        Kharagpur, Madras, and Roorkee ) and IISc Bengaluru to provide free
        online lectures from the professor of these colleges in the field such
        as Civil, Computer Science, Electrical, Electronics and Communication,
        and Mechanical Engineering.
      </p>
    </DynamicLayout>
  );
};

export default Home;
