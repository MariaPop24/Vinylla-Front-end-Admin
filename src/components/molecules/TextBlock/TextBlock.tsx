import React from "react";
import "./TextBlock.scss";
import { FormattedMessage } from "react-intl";

const TextBlock = ({ messageId, text, id, ref }: Props) => {
  return (
    <div id={id} className="animate text-block-container" ref={ref}>
      {messageId && <FormattedMessage id={messageId} />}
      {text && text}
    </div>
  );
};

type Props = {
  messageId?: string;
  text?: string;
  id?: any;
  ref?: any;
};

export default TextBlock;
