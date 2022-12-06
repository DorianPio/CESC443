import { useEffect, useState } from "react";
import { makeGETRequest } from "../../request/rawRequest";
import { User } from "../../type/types";

interface ContainerProps {
  endpoint: string;
  title: string;
  description: string;
}

export const Cards: React.FC<ContainerProps> = ({
  endpoint,
  title,
  description,
}) => {
  const [users, setUserNumber] = useState<Number>(0);
  const [isRequested, setRequested] = useState(false);
  const [request, setRequest] = useState(0);

  useEffect(() => {
    if (!isRequested && request < 10) {
      setRequest(request + 1);
      makeGETRequest(endpoint).then((response) => {
        const usersNumber: Array<User> = response;
        setUserNumber(usersNumber.length);
        setRequested(true);
        setRequest(0);
      });
    }
  });
  return (
    <>
      <div className="bg-gray-800 pt-9 pb-9 h-full">
        <div className="ml-14">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              {title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{description}</p>
            <h5 className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              {String(users)}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
