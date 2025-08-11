import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Iprops {
    content: string | undefined;
}

const FileSyntaxHighlighter = ({ content }: Iprops) => {
    return(
        <SyntaxHighlighter language="javascript" style={atomOneDark}
        customStyle={{
            backgroundColor: 'transparent',
            width: '100%',
            maxHeight: '100vh',
            overflowX: 'auto',
            fontSize: '1.5rem'
        }}
        showLineNumbers={true}
        >
            {content ?? ""}
        </SyntaxHighlighter>
    );
}

export default FileSyntaxHighlighter