import styles from "./Main.module.scss";
import Table from "../../components/Table/Table";
import { useEffect, useState } from "react";
import MyContext from '../../CreateContext.js';

function Mainpage() {

  const handlePageClick = (childValue) => {
    if (childValue.trim() !== '') {
      const filteredVal = childValue.split("."); // Diviser la chaîne en utilisant " : " comme délimiteur
      const refTableToSearch = filteredVal[1].split(" :")[0];
      handleSearch(refTableToSearch);
    }

    // Faites ici ce que vous souhaitez avec l'événement de clic propagé et la valeur associée
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("http://localhost:3000/tab");
      const data = await response.json();
      setData(data);
    }
    fetchdata();
  }, []);

  const handleSearch = (searchText) => {

    let data = {
      "search": {
        "text": searchText
      }
    }
    if (searchText.length > 2) {
      fetch(`http://localhost:3000/tab`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Request error ");
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          // console.log("Request response :", data);
        })
        .catch(error => {
          console.error("Request error :", error);
        });
    }
  };

  const [tabCommentText, setText] = useState('');

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value);
    }
  };




  return (
    <div className={styles.contentcard}>
      <div className={styles.staticmenu}>


        <div className={styles.searchzone}><input className={styles.searchinput} value={tabCommentText} onChange={handleTextAreaChange} onKeyDown={handleKeyDown}></input></div>
        <div className={styles.countzone}>{data.length}</div>
      </div>

      <div className={styles.grid}>
        <MyContext.Provider value={{ onClick: handlePageClick }}>
          {data.map((table) => (
            <Table
              key={table.id}
              tabCollection={table.tab_collection}
              tabName={table.tab_name}
              tabDesc={table.tab_desc}
              tabEnum={table.tab_enum}
              tabCount={table.tab_count}
              tabModel={table.tab_model}
              tabComment={table.tab_comment}
              tabLastCreated={table.tab_last_created}
              tabLastUpdated={table.tab_last_updated}
              tabId={table.tab_id}
              id={table.id}
              onClick={handlePageClick}
            />
          ))}
        </MyContext.Provider>
      </div>
    </div>


  );
}
export default Mainpage;
