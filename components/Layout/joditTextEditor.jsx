// import React, { useState, useRef, useMemo } from 'react';
// import JoditEditor from 'jodit-react';
// function JoditTextEditor({placeholder}) {
//     const editor = useRef(null);
// 	const [content, setContent] = useState('');


    // const config = {
    //     readonly: false,
    //     height: 400
    //   };
//     // useEffect(() => {

//     // }, [content]);

// 	return (<>
// 		<JoditEditor
// 			ref={editor}
// 			value={content}
// 			config={config}
// 			tabIndex={1} // tabIndex of textarea
// 			onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
// 			onChange={(newContent) => {}}
// 		/>
// 		<div className="container p-4 alert-danger"> {content} </div>
// 		</>
// 	);
// }


// export default JoditTextEditor;

import JoditEditor from "jodit-react";
import "jodit/build/jodit.min.css";
