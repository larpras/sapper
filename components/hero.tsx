import cn from "classnames";
import styleUtils from "./utils.module.css";
import styles from "./hero.module.css";
import React, { useState } from "react";
import Form from "./form";

import { Connection } from "@solana/web3.js";

export default function Hero() {
  const url = "https://api.mainnet-beta.solana.com";

  const [latestQuote, setLatestQuote] = useState("123,456");

  const connection = new Connection(url, "singleGossip");
  const version = connection.getVersion().then(() => {
    console.log("Connection to cluster established:", url, version);
    // await connection.getAccountInfo(programId);
  });

  return (
    <div className={styles.wrapper}>
      <h1
        className={cn(
          styleUtils.appear,
          styleUtils["appear-third"],
          styles.hero
        )}
      >
        Manage your decentralized assets in one interface.
      </h1>

      <Form />
      <div
        className={cn(
          styleUtils.appear,
          styleUtils["appear-fourth"],
          styles.info
        )}
      >
        <p>
          <strong>${latestQuote}</strong>
        </p>
      </div>
    </div>
  );
}
