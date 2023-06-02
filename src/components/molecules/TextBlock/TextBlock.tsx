import React from "react";
import "./TextBlock.scss";
import { FormattedMessage } from "react-intl";

const TextBlock = ({ messageId }: Props) => {
  return (
    <div id="text-block-container" className="fadeIn-animate">
      <FormattedMessage id={messageId} />
    </div>
  );
};

type Props = {
  messageId: string;
};

export default TextBlock;
