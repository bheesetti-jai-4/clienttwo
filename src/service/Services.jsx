import AllCardMain from "../allhandles/AllCardMain"
import seconddata from "../store/Service"

function Services() {
    const data = seconddata.servicemax
    // console.log("Gallery Page Data:", data); // Debugging
  return<AllCardMain storedata={data} />
}

export default Services