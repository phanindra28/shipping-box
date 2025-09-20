import { useContext } from "react";
import ShippingContext from "../../context/ShippingContext.jsx";

export default function ListView() {
  const { boxes } = useContext(ShippingContext);
  return (
    <div>
      <table
        className={"table-auto m-auto rounded border-2 text-gray-950 w-full"}
      >
        <thead>
          <tr className={"bg-sky-600 text-white"}>
            <th className={"py-4 px-2 border-r-2 border-b-2 border-gray-950"}>
              Receiver Name
            </th>
            <th
              className={
                "py-4 min-w-[100px] px-2 border-r-2 border-b-2 border-gray-950"
              }
            >
              Box Weight (In Kgs)
            </th>
            <th className={"py-4 px-2 border-r-2 border-b-2 border-gray-950"}>
              Box Color
            </th>
            <th className={"py-4 px-2 border-r-2 border-b-2 border-gray-950"}>
              Destination Country
            </th>
            <th className={"py-4 px-2 border-r-2 border-b-2 border-gray-950"}>
              Shipping Cost (In INR)
            </th>
          </tr>
        </thead>
        <tbody>
          {boxes.map((box, idx) => {
            return (
              <tr
                key={`data-${idx}`}
                className={"text-center odd:bg-white even:bg-sky-100"}
              >
                <td className={"py-4 px-2 border-r-2 border-b-2 text-center"}>
                  {box.receiverName}
                </td>
                <td className={"py-4 px-2 border-r-2 border-b-2 text-center"}>
                  {box.weight}
                </td>
                <td className={"py-4 px-2 border-r-2 border-b-2 text-center"}>
                  <div className={"flex items-center justify-center"}>
                    <div
                      className={"w-5 h-5 rounded-full border mr-2"}
                      style={{ backgroundColor: box.color }}
                    />
                    <span>{box.color?.toUpperCase()}</span>
                  </div>
                </td>
                <td className={"py-4 px-2 border-r-2 border-b-2 text-center"}>
                  {box.country}
                </td>
                <td className={"py-4 px-2 border-r-2 border-b-2 text-center"}>
                  {box.shippingCost?.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
