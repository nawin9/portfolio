import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { PDFExport } from '@progress/kendo-react-pdf';
import canvg from 'canvg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Grid, Row } from 'react-flexbox-grid';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import config from '../config';
import { blue } from 'ansi-colors';

// import Content from '../components/Content';
// import Sidebar from '../components/Sidebar';
// import Footer from '../components/Footer';

// const Resume = () => {
//     return (
//         <>
//             <div className="wrapper">
//                 <Sidebar />
//                 <Content />
//             </div>
//             <Footer />
//         </>
//     );
// };

const styles = mobile => {
    return {
        paperStyle: {
            height: 792,
            width: 612,
            padding: 'none',
            backgroundColor: 'white',
            boxShadow: '5px 5px 5px #888888',
            margin: 'auto',
            overflowX: 'hidden',
            overflowY: 'hidden'
        },
        paperBorder: {
            height: '100%',
            width: '100%',
            padding: 12,
            overflowX: 'hidden',
            overflowY: 'hidden'
        },
        header: {
            height: 60,
            padding: 0,
            margin: 0
        },
        body: {
            padding: 0,
            margin: 0
        },
        bodyHeaders: {
            color: '#005696',
            fontSize: 19,
            fontWeight: 'bold',
            margin: 0,
            width: '100%',
            paddingBottom: 4,
            borderBottom: '0.5px solid #005696'
        },
        bodyContentHeaders: {
            margin: 0,
            width: '100%'
        },
        contentItemTitle: {
            color: '#005696',
            fontSize: 12,
            fontWeight: 'bold',
            padding: 0,
            background: 'red'
        },
        contentItemRightContent: {
            fontSize: 12,
            textAlign: 'right',
            padding: 0,
            background: 'blue'
        },
        col: {
            padding: 0
        },
        headerItems: {
            fontSize: 10.5,
            color: '#005696',
            background: 'white',
            textAlign: 'left'
        },
        headerItemIcon: {
            textDecoration: 'none',
            textAlign: 'center',
            marginRight: 5
        },
        bodyItemIcon: {
            textDecoration: 'none',
            textAlign: 'center',
            marginRight: 5
        },
        minHCol: {
            // width: (612 - 24) / 4 + 'px'
        },
        maxHCol: {
            width: (612 - 24) / 2 + 'px'
        },
        middleHeader: {
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
            color: '#005696'
        },
        rightHeader: {
            paddingLeft: 35 /// padding for right header
        },
        headerIconSize: {
            height: 15,
            width: 15
        },
        bodyIconSize: {
            height: 20,
            width: 20
        }
    };
};

const Grid = styled.div`
    width: 21cm;
    height: 29.7cm;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 20px;
    grid-auto-rows: minmax(100px, auto);
`;

const InfoColumn = styled.div`
    grid-row: 1;
    grid-column: 1;
    background: red;
    display: grid;
    grid-gap: 30px;
    grid-template-rows: 10% 10% 10%;
`;

const DetailColumn = styled.div`
    grid-row: 1;
    grid-column: 2;
    background: green;
    display: grid;
    text-align: left;
`;

const DateRow = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-top: 10px;
`;

const BulletRow = styled.div`
    padding-left: 7px;
`;

const ContactRow = styled.li`
    grid-column: 1;
    grid-row: 1;
    background: red;
`;

const ResumeBody = () => {
    return (
        <Grid>
            <InfoColumn>
                <section>
                    {config.resume.leftHeader.map((item, index) => {
                        return (
                            <div
                                style={{ ...styles().headerItems }}
                                key={index}
                            >
                                <FontAwesomeIcon icon={item.icon} size={'1x'} />
                                {item.text}
                            </div>
                        );
                    })}
                    {config.resume.rightHeader.map((item, index) => {
                        return (
                            <div
                                style={{ ...styles().headerItems }}
                                key={index}
                            >
                                <FontAwesomeIcon icon={item.icon} size={'1x'} />
                                {item.text}
                            </div>
                        );
                    })}
                </section>
                <section>
                    <h3 style={{ ...styles().headerItems }}>LANGUAGES</h3>
                    {['EN', 'FR', 'KH'].map((e, index) => {
                        return (
                            <div
                                key={index}
                                style={{ ...styles().headerItems }}
                            >
                                {e}
                            </div>
                        );
                    })}
                </section>
                <section>
                    <h3 style={{ ...styles().headerItems }}>INTERESTS</h3>
                    {['Soccer', 'Climbing', 'Cooking', 'Spirituality'].map(
                        (e, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{ ...styles().headerItems }}
                                >
                                    {e}
                                </div>
                            );
                        }
                    )}
                </section>
            </InfoColumn>
            <DetailColumn>
                {config.resume.mainBody.map((bodyItem, index) => {
                    return (
                        <div key={index} style={{ ...styles().body }}>
                            <div
                                style={{
                                    ...styles().bodyHeaders,
                                    marginBottom: 3
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={bodyItem.icon}
                                    size={'1x'}
                                />
                                {bodyItem.title}
                            </div>
                            {bodyItem.content.map((contentItem, j) => {
                                return (
                                    <div
                                        key={'bc' + index + '-' + j}
                                        style={{
                                            ...styles().bodyContentHeaders,
                                            padding: 0,
                                            marginBottom: 4
                                        }}
                                    >
                                        <DateRow>
                                            <p style={{ background: 'red' }}>
                                                {contentItem.title}
                                            </p>
                                            <p
                                                style={{
                                                    background: 'blue',
                                                    textAlign: 'right'
                                                }}
                                            >
                                                {contentItem.rightContent}
                                            </p>
                                        </DateRow>
                                        <ul>
                                            {contentItem.bullets.map(
                                                (bullet, index) => {
                                                    return (
                                                        <BulletRow key={index}>
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    config
                                                                        .resume
                                                                        .bullet[0]
                                                                        .icon
                                                                }
                                                                size={'1x'}
                                                            />{' '}
                                                            {bullet}
                                                        </BulletRow>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}

                {config.resume.bottom.map((bodyItem, index) => {
                    return (
                        <div key={index} style={{ ...styles().body }}>
                            <div
                                style={{
                                    ...styles().bodyHeaders,
                                    marginBottom: 3
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={bodyItem.icon}
                                    size={'1x'}
                                />
                                {bodyItem.title}
                            </div>
                            {bodyItem.items.map((contentItem, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            ...styles().bodyContentHeaders,
                                            padding: 0,
                                            marginBottom: 0
                                        }}
                                    >
                                        <div
                                            style={{
                                                ...styles().contentItemTitle,
                                                paddingLeft: 3,
                                                marginBottom: 2
                                            }}
                                        >
                                            {contentItem.title}
                                            <span
                                                style={{
                                                    fontSize: 10,
                                                    color: 'black',
                                                    fontWeight: 'normal'
                                                }}
                                            >
                                                {contentItem.list.join(', ')}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </DetailColumn>
        </Grid>
    );
};

const Resume = () => {
    let resume;
    let canvas;

    const canvLoaded = false;
    const remainingHeightForBody =
        styles().paperStyle.height -
        (styles().paperBorder.padding * 2 + styles().header.height);

    const exportPDFWithMethod = () => {
        convertSvgToImage(config.resume.leftHeader);
        convertBulletToImage(config.resume.bullet);
        resume.save();
    };

    const convertSvgToImage = arr => {
        console.log(canvas);
        if (canvas) {
            canvas.getContext('2d');

            arr.forEach((d, i) => {
                let htmlString = ReactDOMServer.renderToStaticMarkup(
                    <FontAwesomeIcon
                        icon={d.icon}
                        size={'1x'}
                        style={{
                            color: '#005696'
                            // height: '500px',
                            // width: '500px'
                        }}
                    />
                );
                canvg(canvas, htmlString);
                d.icon = canvas.toDataURL('image/png');
            });
        }
    };

    const convertBulletToImage = arr => {
        if (canvas) {
            canvas.getContext('2d');

            arr.forEach((d, i) => {
                let htmlString = ReactDOMServer.renderToStaticMarkup(
                    <FontAwesomeIcon
                        icon={d.icon}
                        size={'2x'}
                        style={{
                            color: '#000000',
                            // height: '500px',
                            // width: '500px'
                            height: 25,
                            width: 25
                        }}
                    />
                );
                canvg(canvas, htmlString);
                d.icon = canvas.toDataURL('image/png');
            });
        }
    };

    return (
        <div style={{ margin: 'auto', textAlign: 'center', marginBottom: 10 }}>
            This page doesn't appear correctly on mobile, sorry!
            {!canvLoaded && (
                <canvas
                    ref={ref => (canvas = ref)}
                    style={{ display: 'none' }}
                />
            )}
            <br />
            <br />
            <div
                onClick={exportPDFWithMethod}
                style={{
                    cursor: 'pointer',
                    margin: 'auto',
                    textDecoration: 'none',
                    color: '#005696',
                    minWidth: '60px',
                    textAlign: 'center'
                }}
            >
                <FontAwesomeIcon icon={faDownload} size={'2x'} /> Download PDF
            </div>
            <PDFExport
                paperSize={'A4'}
                fileName="NawinKimResume.pdf"
                title="Nawin Kim"
                subject="Resume"
                keywords="Nawin Resume React Javascript Java Python C++ ReactJS Native Bootstrap CSS3 HTML5 JQuery NodeJS Node.js Node Git Flow Firebase Router Redux"
                ref={r => (resume = r)}
            >
                <ResumeBody />
            </PDFExport>
        </div>
    );
};

export default Resume;
