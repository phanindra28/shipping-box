import { useContext, useState } from "react";
import { calculateShippingCost } from "../../utils/boxUtils.js";
import ShippingContext from "../../context/ShippingContext.jsx";

export default function AddBox() {
  const { handleAddBox } = useContext(ShippingContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const INITIAL_STATE = {
    receiverName: "",
    weight: "",
    color: "#000000",
    country: "Sweden",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.receiverName || !formData.weight) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      handleAddBox?.({
        ...formData,
        shippingCost: calculateShippingCost(formData.country, formData.weight),
      });
      setShowSuccess(true);
      setFormData(INITIAL_STATE);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className={"m-auto text-gray-950  w-full md:w-3/4 lg:w-1/2  my-4"}>
      <div
        className={" border-2 rounded-xl bg-white shadow-lg border-slate-200"}
      >
        <form
          className={
            "flex flex-col md:grid md:grid-cols-[40%_1fr] gap-4 m-4 align-middle"
          }
          onSubmit={handleSubmit}
        >
          <label htmlFor={"ReceiverName"} className={"p-2"}>
            Receiver Name <span className={"text-red-600"}>*</span>
          </label>
          <input
            name={"receiverName"}
            className={"ml-2 md:ml-4 rounded border-1 p-2"}
            type={"text"}
            value={formData.receiverName}
            onChange={handleChange}
            placeholder={"Enter Name"}
            required
          />
          <label htmlFor={"weight"} className={"p-2"}>
            Weight (in Kgs)<span className={"text-red-600"}>*</span>
          </label>
          <input
            name={"weight"}
            type={"number"}
            className={"ml-2 md:ml-4 rounded border-1 p-2"}
            placeholder={"Weight in Kg"}
            min={0.001}
            step={0.001}
            value={formData.weight}
            onChange={handleChange}
            required
          />
          <label htmlFor={"weight"} className={"p-2"}>
            Box Color <span className={"text-red-600"}>*</span>
          </label>
          <input
            type={"color"}
            className={"ml-2 md:ml-4 rounded border-1 p-1"}
            value={formData.color}
            onChange={handleChange}
            name={"color"}
            required
          />
          <label htmlFor={"weight"} className={"p-2"}>
            Destination Country <span className={"text-red-600"}>*</span>
          </label>
          <select
            id="country"
            name="country"
            className={"ml-2 md:ml-4 rounded border-1 p-1"}
            value={formData.country}
            onChange={handleChange}
          >
            <option value="Sweden">Sweden</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
          </select>
          <div className={"col-span-2 text-center mt-4"}>
            <button
              type={"submit"}
              className={
                "border-1 bg-blue-700 hover:bg-blue-800 text-white rounded-full py-2 cursor-pointer w-3/4 items-center"
              }
              onClick={handleSubmit}
            >
              Add Box
            </button>
          </div>
        </form>
      </div>
      {showSuccess && (
        <div className={"mt-4 text-center text-green-700 font-bold"}>
          Added Successfully!
        </div>
      )}
      {showError && (
        <div className={"mt-4 text-center text-red-600 font-bold"}>
          Please fill all the required fields!
        </div>
      )}
    </div>
  );
}
