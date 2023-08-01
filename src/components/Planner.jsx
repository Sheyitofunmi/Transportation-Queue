
import React from "react";

const Planner = ({
  plannerData,
  onDropCustomer,
  setDataComingFrom,
  setPlannerData,
}) => {
  const handleDrop = (e, plannerIndex, slotIndex) => {
    e.preventDefault();
    const customerId = e.dataTransfer.getData("customerID");
    console.log(customerId, "planner");
    onDropCustomer(customerId, plannerIndex, slotIndex);
    console.log(plannerData[plannerIndex]);
  };

  const handleDragStart = (e, index, date) => {
    setDataComingFrom("planner");

    const customerExists = plannerData[date][index];
    const oldSlotArr = plannerData[date];
    const newSlotArr = [...oldSlotArr];
    newSlotArr[index] = null;

    const newPlannerData = {
      ...plannerData,
      [date]: newSlotArr,
    };

    console.log(customerExists);
    setPlannerData(newPlannerData);

    if (!customerExists) {
      return;
    }

    e.dataTransfer.setData("customerID", customerExists.id);
  };
  return (
    <div className="w-11/12 ml-1">
      <h2 className="font-bold text-2xl mb-7 mt-2 text-center">Planner</h2>
      <div className="flex justify-center items-center mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Slot 1</th>
              <th>Slot 2</th>
              <th>Slot 3</th>
              <th className="hidden sm:table-cell">Slot 4</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(plannerData).map((date, dayIndex) => {
              return (
                <tr key={date}>
                  <td className="border px-4 py-2">{date}</td>

                  <td
                    className="border px-4 py-2  md:table-cell"
                    onDragExit={() => {
                      console.log("exit");
                    }}
                    onDragStart={(e) => handleDragStart(e, 0, date)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, date, 0)}
                  >
                    {plannerData[date][0] ? (
                      <div
                        draggable
                        onDrop={(e) => {
                          const droppedItem =
                            e.dataTransfer.getData("customerID");
                          console.log(droppedItem);
                        }}
                        onDragOver={(e) => e.preventDefault()}
                      >
                        {plannerData[date][0].name}
                      </div>
                    ) : (
                      <div className="py-3 px-6"></div>
                    )}
                  </td>
                  <td
                    className="border px-4 py-2 hidden md:table-cell"
                    onDragStart={(e) => handleDragStart(e, 1, date)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, date, 1)}
                  >
                    {plannerData[date][1] ? (
                      <div
                        draggable
                        onDragStart={(e) =>
                          e.dataTransfer.setData(
                            "customerID",
                            plannerData[date][1].customerID
                          )
                        }
                      >
                        {plannerData[date][1].name}
                      </div>
                    ) : (
                      <div className="py-3 px-6"></div>
                    )}
                  </td>
                  <td
                    className="border px-4 py-2  md:table-cell"
                    onDragStart={(e) => handleDragStart(e, 2, date)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, date, 2)}
                  >
                    {plannerData[date][2] ? (
                      <div
                        draggable
                        onDragStart={(e) =>
                          e.dataTransfer.setData(
                            "customerID",
                            plannerData[date][2].customerID
                          )
                        }
                      >
                        {plannerData[date][2].name}
                      </div>
                    ) : (
                      <div className="py-3 px-6"></div>
                    )}
                  </td>
                  <td
                    className="border px-4 py-2  md:table-cell"
                    onDragStart={(e) => handleDragStart(e, 3, date)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, date, 3)}
                  >
                    {plannerData[date][3] ? (
                      <div
                        draggable
                        onDragStart={(e) =>
                          e.dataTransfer.setData(
                            "customerID",
                            plannerData[date][3].customerID
                          )
                        }
                      >
                        {plannerData[date][3].name}
                      </div>
                    ) : (
                      <div className="py-3 px-6"></div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Planner;
