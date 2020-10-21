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

      <h2 className="text-3xl font-bold leading-tight py-4 mt-8">
        NPTEL Login and Registration
      </h2>

      <p className="text-gray-700 font-medium py-4">
        NPTEL follows the simple steps for login or registration as any other
        website does.
      </p>

      <p className="text-gray-700 font-medium py-2">
        There are four ways to login:
      </p>

      <ul className="list-disc px-6">
        <li>
          <span className="text-gray-700 font-medium">Facebook</span>
        </li>
        <li>
          <span className="text-gray-700 font-medium">Google</span>
        </li>
        <li>
          <span className="text-gray-700 font-medium">Microsoft</span>
        </li>
        <li>
          <span className="text-gray-700 font-medium">
            Create a Custom Account
          </span>
        </li>
      </ul>

      <p className="text-gray-700 font-medium py-4">
        If you want to create a custom NPTEL login, you will need an email ID,
        username, and password. Once your account is created, you can use this
        email and password for login.
      </p>

      <div className="py-12">
        <a
          target="_blank"
          hrefLang="en"
          href="https://swayam.gov.in/wso?redirect=/"
          className="py-3 px-6 rounded  bg-blue-600  text-white  cursor-pointer"
        >
          Click Here to Login to NPTEL
        </a>
      </div>
    </DynamicLayout>
  );
};

export default Home;
