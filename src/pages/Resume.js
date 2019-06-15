import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { PDFExport } from '@progress/kendo-react-pdf';
// import canvg from 'canvg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Grid, Row } from 'react-flexbox-grid';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import config from '../config';

import Content from '../components/Content';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Resume = () => {
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <Content />
            </div>
            <Footer />
        </>
    );
};

// const styles = mobile => {
//     return {
//         paperStyle: {
//             height: 792,
//             width: 612,
//             padding: 'none',
//             backgroundColor: 'white',
//             boxShadow: '5px 5px 5px #888888',
//             margin: 'auto',
//             overflowX: 'hidden',
//             overflowY: 'hidden'
//         },
//         paperBorder: {
//             height: '100%',
//             width: '100%',
//             padding: 12,
//             overflowX: 'hidden',
//             overflowY: 'hidden'
//         },
//         header: {
//             height: 60,
//             padding: 0,
//             margin: 0
//         },
//         body: {
//             padding: 0,
//             margin: 0
//         },
//         bodyHeaders: {
//             color: '#005696',
//             fontSize: 19,
//             fontWeight: 'bold',
//             margin: 0,
//             width: '100%',
//             paddingBottom: 4,
//             borderBottom: '0.5px solid #005696'
//         },
//         bodyContentHeaders: {
//             margin: 0,
//             width: '100%'
//         },
//         contentItemTitle: {
//             color: '#005696',
//             fontSize: 12,
//             fontWeight: 'bold',
//             padding: 0
//         },
//         contentItemRightContent: {
//             fontSize: 12,
//             textAlign: 'right',
//             padding: 0
//         },
//         col: {
//             padding: 0
//         },
//         headerItems: {
//             fontSize: 10.5,
//             color: '#005696',
//             marginLeft: 0,
//             marginBottom: 3 // between header items
//         },
//         headerItemIcon: {
//             textDecoration: 'none',
//             textAlign: 'center',
//             marginRight: 5
//         },
//         bodyItemIcon: {
//             textDecoration: 'none',
//             textAlign: 'center',
//             marginRight: 5
//         },
//         minHCol: {
//             width: (612 - 24) / 4 + 'px'
//         },
//         maxHCol: {
//             width: (612 - 24) / 2 + 'px'
//         },
//         middleHeader: {
//             textAlign: 'center',
//             fontSize: 40,
//             fontWeight: 'bold',
//             color: '#005696'
//         },
//         rightHeader: {
//             paddingLeft: 35 /// padding for right header
//         },
//         headerIconSize: {
//             height: 15,
//             width: 15
//         },
//         bodyIconSize: {
//             height: 20,
//             width: 20
//         }
//     };
// };

// const ResumeBody = () => {
//     return (
//         <PDFExport paperSize={'Letter'}
//                 fileName="WilliamKwokResume.pdf"
//                 title="William Kwok"
//                 subject="William Kwok"
//                 keywords="William Kwok Resume React Javascript Java Python C++ Vue ReactJS Native VueJS Bootstrap CSS HTML HTML5 JQuery LaTeX NodeJS Node.js Node Git Flow Firebase Router Redux"
//                 // ref={(r) => this.resume = r}
//                 >
//                 <div style={styles().paperStyle} className={'resume'}> {/* Resume content starts in here */}
//                     <div style={styles().paperBorder}>
//                         <Grid fluid style={{ padding: 0 }}>
//                             {/* =============================== Header =============================== */}
//                             <Row style={styles().header}>
//                                 <div style={{ ...styles().col, ...styles().minHCol }}>
//                                     {config.resume.leftHeader.map((item, index) => {
//                                         return <Row middle="xs" style={{ ...styles().headerItems }} key={'hiL' + index}>
//                                             <span style={styles().headerItemIcon}>
//                                                 <img src={item.icon} alt={""} style={styles().headerIconSize} />
//                                             </span>
//                                             {item.text}
//                                         </Row>
//                                     })}
//                                 </div>
//                                 <div style={{ ...styles().col, ...styles().maxHCol, ...styles().middleHeader }}>{config.resume.middleHeader[0]}</div>
//                                 <div style={{ ...styles().col, ...styles().minHCol, ...styles().rightHeader }}>
//                                     {config.resume.rightHeader.map((item, index) => {
//                                         return <Row middle="xs" style={{ ...styles().headerItems }} key={'hiR' + index}>
//                                             <span style={styles().headerItemIcon}>
//                                                 <img src={item.icon} alt={""} style={styles().headerIconSize} />
//                                             </span>
//                                             {item.text}
//                                         </Row>
//                                     })}
//                                 </div>
//                             </Row>

//                             {/* =============================== Main Body =============================== */}
//                             {config.resume.mainBody.map((bodyItem, index) => {
//                                 return <Row style={{ ...styles().body }} key={"mainBody" + index}>
//                                     <Row middle="xs" style={{ ...styles().bodyHeaders, marginBottom: 3 }}>
//                                         <span style={{ ...styles().bodyItemIcon, paddingBottom: 3 }}>
//                                             <img src={bodyItem.icon} alt={""} style={styles().bodyIconSize} />
//                                         </span>
//                                         {bodyItem.title}
//                                     </Row>
//                                     {bodyItem.content.map((contentItem, j) => {
//                                         return <Row key={"bc" + index + '-' + j} style={{ ...styles().bodyContentHeaders, padding: 0, marginBottom: 4 }}>
//                                             <div style={{ ...styles().contentItemTitle, width: '70%', paddingLeft: 3, marginBottom: 2 }}>{contentItem.title}</div>
//                                             <div style={{ ...styles().contentItemRightContent, width: '30%', }}>{contentItem.rightContent}</div>
//                                             <ul style={{ paddingLeft: 0, margin: 0, fontSize: 8, listStyleType: 'none' }}>
//                                                 {contentItem.bullets.map((bullet, k) => {
//                                                     return <li key={'bc' + index + '-' + j + '-' + k} style={{ marginBottom: 0, paddingLeft: 7 }}>
//                                                         <span style={{ marginLeft: -4, fontSize: 10 }}>
//                                                             <img alt={""} src={config.resume.bullet[0].icon} style={{ width: 3, height: 3, marginRight: 5 }} />{bullet}
//                                                         </span>
//                                                     </li>
//                                                 })}
//                                             </ul>
//                                         </Row>
//                                     })}
//                                 </Row>
//                             })}

//                             {/* =============================== Bottom =============================== */}
//                             {config.resume.bottom.map((bodyItem, index) => {
//                                 return <Row style={{ ...styles().body }} key={"bottomBody" + index}>
//                                     <Row middle="xs" style={{ ...styles().bodyHeaders, marginBottom: 3 }}>
//                                         <span style={{ ...styles().bodyItemIcon, paddingBottom: 3 }}>
//                                             <img src={bodyItem.icon} alt={""} style={styles().bodyIconSize} />
//                                         </span>
//                                         {bodyItem.title}
//                                     </Row>
//                                     {bodyItem.items.map((contentItem, j) => {
//                                         return <Row key={"bc" + index + '-' + j} style={{ ...styles().bodyContentHeaders, padding: 0, marginBottom: 0 }}>
//                                             <div style={{ ...styles().contentItemTitle, paddingLeft: 3, marginBottom: 2 }}>
//                                                 {contentItem.title}
//                                                 <span style={{ fontSize: 10, color: 'black', fontWeight: 'normal' }}>
//                                                     {contentItem.list.join(", ")}
//                                                 </span>
//                                             </div>

//                                         </Row>
//                                     })}
//                                 </Row>
//                             })}

//                         </Grid>
//                     </div>
//                 </div>
//             </PDFExport>
//     )
// }

// const Resume = () => {
//     const canvLoaded = false;
//     const remainingHeightForBody =
//         styles().paperStyle.height -
//         (styles().paperBorder.padding * 2 + styles().header.height);

//     const exportPDFWithMethod = () => {
//         this.resume.save();
//     };

//     const convertSvgToImage = arr => {
//         let canv = this.refs.canvas;
//         canv.getContext('2d');

//         arr.forEach((d, i) => {
//             let htmlString = ReactDOMServer.renderToStaticMarkup(
//                 <FontAwesomeIcon
//                     icon={d.icon}
//                     size={'3x'}
//                     style={{
//                         color: '#005696',
//                         height: '500px',
//                         width: '500px'
//                     }}
//                 />
//             );
//             canvg(canv, htmlString);
//             d.icon = canv.toDataURL('image/png');
//         });
//     };

//     const convertBulletToImage = arr => {
//         let canv = this.refs.canvas;
//         canv.getContext('2d');

//         arr.forEach((d, i) => {
//             let htmlString = ReactDOMServer.renderToStaticMarkup(
//                 <FontAwesomeIcon
//                     icon={d.icon}
//                     size={'2x'}
//                     style={{
//                         color: '#000000',
//                         height: '500px',
//                         width: '500px'
//                     }}
//                 />
//             );
//             canvg(canv, htmlString);
//             d.icon = canv.toDataURL('image/png');
//         });
//     };

//     return (
//         <div style={{ margin: 'auto', textAlign: 'center', marginBottom: 10 }}>
//             This page doesn't appear correctly on mobile, sorry!
//             <br />
//             <br />
//             <div
//                 onClick={exportPDFWithMethod}
//                 style={{
//                     cursor: 'pointer',
//                     margin: 'auto',
//                     textDecoration: 'none',
//                     color: '#005696',
//                     minWidth: '60px',
//                     textAlign: 'center'
//                 }}
//             >
//                 <FontAwesomeIcon icon={faDownload} size={'2x'} /> Download PDF
//                 <ResumeBody />
//             </div>
//         </div>
//     );
// };

export default Resume;
