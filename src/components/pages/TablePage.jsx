import React from "react";
import styled from "styled-components";

const users = [
  { name: "Alice Johnson", email: "alice@example.com" },
  { name: "Bob Smith", email: "bob@example.com" },
  { name: "Charlie Brown", email: "charlie@example.com" },
  { name: "Diana Prince", email: "diana@example.com" },
  { name: "Ethan Hunt", email: "ethan@example.com" },
  { name: "Fiona Apple", email: "fiona@example.com" },
  { name: "George Clooney", email: "george@example.com" },
  { name: "Hannah Montana", email: "hannah@example.com" },
  { name: "Isaac Newton", email: "isaac@example.com" },
  { name: "Jack Sparrow", email: "jack@example.com" },
];

const TablePage = () => {
  return (
    <TableContainer>
      {users.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Email</Th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Здесь ничего нет</p>
      )}
    </TableContainer>
  );
};

export default TablePage;

const TableContainer = styled.div`
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ccc;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
