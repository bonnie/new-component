import React from "react";
import { css } from "~/styled-system/css";

export type COMPONENT_NAMEProps = {};

function COMPONENT_NAME({}: COMPONENT_NAMEProps) {
  return <div className={styles.wrapper}></div>;
}

const styles = {
  wrapper: css({}),
};

export default COMPONENT_NAME;
