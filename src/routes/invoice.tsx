import { useParams, useNavigate  } from "react-router-dom";
import { getInvoice, deleteInvoice  } from "../data";

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId || "0", 10));


  
  return (
    <main style={{ padding: "1rem" }}>
      {!invoice ? (
        <div>Invoice Not found</div>
      ) : (
        <>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
          <p>
            <button
              onClick={() => {
                deleteInvoice(invoice ? invoice.number : 0);
                navigate("/invoices");
              }}
            >
              Delete
            </button>
          </p>
        </>
      )}
    </main>
  );
}
