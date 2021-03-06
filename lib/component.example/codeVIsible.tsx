import React from "react"
import Highlight, {defaultProps} from "prism-react-renderer";

interface Props {
    code: string;
}

const CodeVIsible:React.FunctionComponent<Props> = (props) =>{
    const {code,children} = props
    const codeBox = (
        <Highlight {...defaultProps} code={code} language="jsx">
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({token, key})} />
                      ))}
                    </div>
                  ))}
                </pre>
          )}
        </Highlight>
      );
    return(
        <div>
            <div className="example">
                {children}
            </div>
            <div>
                {codeBox}
            </div>
        </div>
    )
}

export default CodeVIsible