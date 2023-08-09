import React from "react";
import getData from "../services/getData";
import { useState, useEffect, useMemo } from "react";

import Table from "../components/table";
import { TableColumns, TableData } from "../utils/column";
import Spinner from "../components/spiner";

function Home() {
  const columns: TableColumns[] = useMemo(
    () => [
      {
        Header: "Products",

        columns: [
          {
            Header: "id",
            accessor: "id",
          },
          {
            Header: "title",
            accessor: "title",
          },
          {
            Header: "price",
            accessor: "price",
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState<TableData[]>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getProductData = async () => {
      try {
        setLoading(true);
        const productList = await getData();
        setData(productList.data.products);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(true);
      }
    };

    getProductData();
  }, []);

  if (!error) {
    return (
      <div>
        {data && !loading ? (
          <Table columns={columns} data={data} />
        ) : (
          <div>
            <Spinner />
            <p>Still loading Content...</p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <p>Error occurs</p>
      </div>
    );
  }
}

export default Home;
