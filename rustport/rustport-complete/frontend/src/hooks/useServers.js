import { useEffect, useState } from "react";
import { getServers } from "../api/serverApi";
export default function useServers(params = {}) {
  const [state, setState] = useState({ servers: [], pagination: {}, loading: true });
  useEffect(() => {
    getServers(params).then(data => setState({ ...data, loading: false }))
      .catch(error => setState({ servers: [], pagination: {}, loading: false, error: error.message }));
  }, [JSON.stringify(params)]);
  return state;
}
