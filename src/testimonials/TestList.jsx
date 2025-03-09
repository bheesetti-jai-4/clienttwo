import AllCardMain from "../allhandles/AllCardMain"
import monialtest from "../store/Testmonials"

function TestList() {
    const data = monialtest.maxtestmonial
    // console.log("Gallery Page Data:", data); // Debugging
  return<AllCardMain storedata={data} />
}

export default TestList