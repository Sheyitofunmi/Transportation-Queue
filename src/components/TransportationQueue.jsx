
import React from 'react';

const TransportationQueue = ({ customers, setDataComingFrom }) => {
  return (
    <div className="w-11/12">
      <h2 className="font-bold text-2xl mb-7 mt-3 text-center">Logistic Queue</h2>
      <div className="w-full">
        <table className="table-auto w-full border-collapse border text-center md:mt-12">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100">ID</th>
              <th className="px-4 py-2 bg-gray-100">Name</th>
              <th className="px-4 py-2 bg-gray-100">Pick Up location</th>
              <th className="px-4 py-2 bg-gray-100">Drop off Location</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id} 
                draggable
                onDragStart={(e) => {
                  setDataComingFrom("transportation")
                  e.dataTransfer.setData('customerID', customer.id.toString());
                  console.log(customer)
                 
                }}
                className="border-t hover:bg-gray-100"
              >
                <td className="px-4 py-2">{customer.id}</td>
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.pickUpLocation}</td>
                <td className="px-4 py-2">{customer.dropOffLocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default TransportationQueue