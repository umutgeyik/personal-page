import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";


const AnimatedText = (props) => {   

const values = [props.title, props.subTitle, props.text];
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
        dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, []);

  return <div className="home-title-text">{result}</div>;
};

export default AnimatedText;