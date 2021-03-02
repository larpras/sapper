import { useState } from "react";
import { ConfDataContext, PageState, UserData } from "@lib/hooks/use-conf-data";
import Layout from "./layout";
import ConfContainer from "./conf-container";
import Hero from "./hero";

type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
  defaultPageState?: PageState;
};

export default function Conf({
  defaultUserData,
  defaultPageState = "registration",
}: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>(defaultPageState);

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState,
      }}
    >
      <Layout>
        <ConfContainer>
          <Hero />
        </ConfContainer>
      </Layout>
    </ConfDataContext.Provider>
  );
}
