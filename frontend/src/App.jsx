import React from "react";
import axios from "axios";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function ChildApp() {
  const getNames = async () => {
    const res = await axios.get("/name");
    console.log("names : ", res.data);
    return res.data;
  };
  const getCourse = async () => {
    const res = await axios.get("/api");
    console.log("course : ", res.data);
    return res.data;
  };

  // Queries
  const query = useQuery({ queryKey: ["names"], queryFn: getNames });
  const query2 = useQuery({ queryKey: ["course"], queryFn: getCourse });

  if (query.isLoading) return <p>Loading...</p>;
  if (query.isError) return <p>Error fetching data</p>;

  return (
    <>
      <p>Name of the students :</p>
      {query.isLoading && <p>Loading...</p>}
      {query.isError && <p>Error fetching data</p>}
      <table style={{ border: "1px solid gray", width: "400px" }}>
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>RollNo</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {query.data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Course</p>
      {query2.isLoading && <p>Loading...</p>}
      {query2.isError && <p>Error fetching data</p>}
      <table style={{ border: "1px solid gray", width: "400px" }}>
        <thead style={{ textAlign: "left" }}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {query2.data?.map((course, index) => (
            <tr key={index}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.isCompleted ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChildApp />
    </QueryClientProvider>
  );
}
