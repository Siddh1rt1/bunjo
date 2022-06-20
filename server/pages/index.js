(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-tagcloud"
const external_react_tagcloud_namespaceObject = require("react-tagcloud");
// EXTERNAL MODULE: ./pages/jsontext.js
var jsontext = __webpack_require__(505);
// EXTERNAL MODULE: ./pages/newlistjobs.js
var newlistjobs = __webpack_require__(999);
;// CONCATENATED MODULE: external "chart.js"
const external_chart_js_namespaceObject = require("chart.js");
;// CONCATENATED MODULE: external "react-chartjs-2"
const external_react_chartjs_2_namespaceObject = require("react-chartjs-2");
;// CONCATENATED MODULE: ./pages/index.js









external_chart_js_namespaceObject.Chart.register(external_chart_js_namespaceObject.CategoryScale, external_chart_js_namespaceObject.LinearScale, external_chart_js_namespaceObject.PointElement, external_chart_js_namespaceObject.LineElement, external_chart_js_namespaceObject.Filler, external_chart_js_namespaceObject.Title, external_chart_js_namespaceObject.Tooltip, external_chart_js_namespaceObject.Legend);

function Home() {
    const { 0: search , 1: setSearch  } = (0,external_react_.useState)(false);
    const { 0: labeldata , 1: setLabeldata  } = (0,external_react_.useState)([
        "1.",
        "2.",
        "3.",
        "4.",
        "5.",
        "6.",
        "7.",
        "8.",
        "9.",
        "10.",
        "11.",
        "12.",
        "13.",
        "14.",
        "15.",
        "16.",
        "17.",
        "18.",
        "19.",
        "20."
    ]);
    const { 0: graphdata , 1: setGraphdata  } = (0,external_react_.useState)([
        1.0
    ], [
        2.0
    ]);
    const { 0: rangeval , 1: setRangeval  } = (0,external_react_.useState)(50);
    const { 0: rangeval2 , 1: setRangeval2  } = (0,external_react_.useState)(5);
    const { 0: inText , 1: setInText  } = (0,external_react_.useState)("Rechtsanwalt");
    const graphdata21 = [
        0.1,
        0.4,
        0.2,
        0.1,
        0.5
    ];
    const labeldata21 = [
        "1.",
        "2.",
        "3.",
        "4.",
        "5.",
        "6.",
        "7.",
        "8.",
        "9.",
        "10.",
        "11.",
        "12.",
        "13.",
        "14.",
        "15.",
        "16.",
        "17.",
        "18.",
        "19.",
        "20."
    ];
    const changeLabeldata = (labeldata2)=>setLabeldata(labeldata2)
    ;
    const changeGraphdata = (graphdata2)=>setGraphdata(graphdata2)
    ;
    const linkdata = newlistjobs.list_data;
    const data1 = {
        labels: labeldata,
        datasets: [
            {
                data: graphdata
            }, 
        ]
    };
    const tagdata = jsontext.tagdata_main;
    function searchStringInArray(str, strArray) {
        for(var j = 0; j < strArray.length; j++){
            if (strArray[j].match(str)) return j;
        }
        return -1;
    }
    function hello(input) {
        console.log(input);
        console.log("hey ich bi erst link data" + linkdata[0]);
        console.log("first time in: " + linkdata.indexOf("Rechtsanwalt"));
        var array = [
            [
                2,
                3,
                4
            ],
            [
                4,
                5,
                "hello"
            ],
            [
                2,
                3,
                9
            ]
        ];
        var number = input[0];
        var indexOfRemainingArray = linkdata.findIndex(function(sub) {
            return sub.indexOf(number) !== -1;
        });
        console.log("index of" + indexOfRemainingArray);
        let oldarray = linkdata[indexOfRemainingArray];
        const arr = oldarray.slice(1);
        console.log("yes lets go" + arr[0]);
        setGraphdata(arr);
        const lastarray = [
            "rentner",
            "oldschool",
            "heavy"
        ];
        var a = searchStringInArray("Rentner", lastarray);
        var newarray = lastarray[2];
        console.log(newarray);
    }
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            if (search) {
                setIsLoading(true);
                setPrinti(()=>" "
                );
                const res = await fetch(`/api/openai`, {
                    body: JSON.stringify({
                        name: search
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                const data = await res.json();
                setData(data);
                setIsLoading(false);
                console.log("run");
                setIsRunning(true);
            }
        };
        fetchData();
    }, [
        search
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: (Home_module_default()).title,
                        children: [
                            "Welcome to ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://nextjs.org",
                                children: "Next.js!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "range",
                        className: "custom-range",
                        min: "20",
                        max: "350",
                        onChange: (event)=>setRangeval(event.target.value)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        children: [
                            "The max value is ",
                            rangeval
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "range",
                        className: "custom-range2",
                        min: "2",
                        max: "20",
                        onChange: (event)=>setRangeval2(event.target.value)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        children: [
                            "The min value is ",
                            rangeval2
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_tagcloud_namespaceObject.TagCloud, {
                        minSize: 12,
                        maxSize: rangeval,
                        tags: tagdata,
                        onClick: (tag)=>hello([
                                `${tag.value}`
                            ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>changeLabeldata(labeldata21)
                        ,
                        children: "hello"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>changeGraphdata(graphdata21)
                        ,
                        children: "bello"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: inText
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_chartjs_2_namespaceObject.Line, {
                        data: data1,
                        width: 100,
                        height: 40
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (Home_module_default()).description,
                        children: [
                            "Get started by editing",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                className: (Home_module_default()).code,
                                children: "pages/index.js"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).grid,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://nextjs.org/docs",
                                className: (Home_module_default()).card,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Documentation \u2192"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Find in-depth information about Next.js features and API."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://nextjs.org/learn",
                                className: (Home_module_default()).card,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Learn \u2192"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Learn about Next.js in an interactive course with quizzes!"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://github.com/vercel/next.js/tree/canary/examples",
                                className: (Home_module_default()).card,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Examples \u2192"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Discover and deploy boilerplate example Next.js projects."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                                className: (Home_module_default()).card,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Deploy \u2192"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Instantly deploy your Next.js site to a public URL with Vercel."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (Home_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        "Powered by",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Home_module_default()).logo,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/vercel.svg",
                                alt: "Vercel Logo",
                                width: 72,
                                height: 16
                            })
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,999,505], () => (__webpack_exec__(134)));
module.exports = __webpack_exports__;

})();