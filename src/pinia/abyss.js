import { defineStore } from 'pinia'

/**
 * 网站数据
 * 
 */
export const useAbyssStore = defineStore({
    id: 'abyss',
    state: () => ({
        'stack': [
            {
                "name": "常用推荐",
                "icon": "👀",
                "web": [
                    {
                        "url": "https://dribbble.com/",
                        "logo": "assets/images/logos/dribbble.png",
                        "title": "Dribbble",
                        "desc": "全球UI设计师作品分享平台。"
                    },
                    {
                        "url": "https://behance.net/",
                        "logo": "assets/images/logos/behance.png",
                        "title": "Behance",
                        "desc": "Adobe旗下的设计师交流平台，来自世界各地的设计师在这里分享自己的作品。"
                    },
                    {
                        "url": "https://dribbble.com/",
                        "logo": "assets/images/logos/dribbble.png",
                        "title": "UI中国",
                        "desc": "图形交互与界面设计交流、作品展示、学习平台。"
                    },
                    {
                        "url": "http://www.zcool.com.cn/",
                        "logo": "assets/images/logos/zcool.png",
                        "title": "站酷",
                        "desc": "中国人气设计师互动平台"
                    },
                    {
                        "url": "https://www.pinterest.com/",
                        "logo": "assets/images/logos/pinterest.png",
                        "title": "Pinterest",
                        "desc": "全球美图收藏采集站"
                    },
                    {
                        "url": "http://huaban.com/",
                        "logo": "assets/images/logos/huaban.png",
                        "title": "花瓣",
                        "desc": "收集灵感,保存有用的素材"
                    },
                    {
                        "url": "https://medium.com/",
                        "logo": "assets/images/logos/medium.png",
                        "title": "Medium",
                        "desc": "高质量设计文章"
                    },
                    {
                        "url": "http://www.uisdc.com/",
                        "logo": "assets/images/logos/uisdc.png",
                        "title": "优设",
                        "desc": "设计师交流学习平台"
                    },
                    {
                        "url": "https://www.producthunt.com",
                        "logo": "assets/images/logos/producthunt.png",
                        "title": "Producthunt",
                        "desc": "发现新鲜有趣的产品"
                    },
                    {
                        "url": "https://www.youtube.com",
                        "logo": "assets/images/logos/youtube.png",
                        "title": "Youtube",
                        "desc": "全球最大的学习分享平台"
                    },
                    {
                        "url": "https://www.google.com",
                        "logo": "assets/images/logos/google.png",
                        "title": "Google",
                        "desc": "全球最大的UI学习分享平台"
                    }
                ]
            },
            {
                "name": "社区资讯",
                "icon": "👀",
                "web": [
                    {
                        "url": "https://www.leiphone.com/",
                        "logo": "assets/images/logos/leiphone.png",
                        "title": "雷锋网",
                        "desc": "人工智能和智能硬件领域的互联网科技媒体"
                    },
                    {
                        "url": "http://36kr.com/",
                        "logo": "assets/images/logos/36kr.png",
                        "title": "36kr",
                        "desc": "创业资讯、科技新闻"
                    },
                    {
                        "url": "https://www.digitaling.com/",
                        "logo": "assets/images/logos/digitaling.png",
                        "title": "数英网",
                        "desc": "数字媒体及职业招聘网站"
                    },
                    {
                        "url": "http://www.lieyunwang.com/",
                        "logo": "assets/images/logos/lieyunwang.png",
                        "title": "猎云网",
                        "desc": "互联网创业项目推荐和创业创新资讯"
                    },
                    {
                        "url": "http://www.woshipm.com/",
                        "logo": "assets/images/logos/woshipm.png",
                        "title": "人人都是产品经理",
                        "desc": "产品经理、产品爱好者学习交流平台"
                    },
                    {
                        "url": "https://www.zaodula.com/",
                        "logo": "assets/images/logos/zaodula.png",
                        "title": "互联网早读课",
                        "desc": "互联网行业深度阅读与学习平台"
                    },
                    {
                        "url": "http://www.chanpin100.com/",
                        "logo": "assets/images/logos/chanpin100.png",
                        "title": "产品壹佰",
                        "desc": "为产品经理爱好者提供最优质的产品资讯、原创内容和相关视频课程"
                    },
                    {
                        "url": "http://www.pmcaff.com/",
                        "logo": "assets/images/logos/pmcaff.png",
                        "title": "PMCAFF",
                        "desc": "中国第一产品经理人气组织，专注于研究互联网产品"
                    },
                    {
                        "url": "http://www.iyunying.org/",
                        "logo": "assets/images/logos/iyunying.png",
                        "title": "爱运营",
                        "desc": "网站运营人员学习交流，专注于网站产品运营管理、淘宝运营。"
                    },
                    {
                        "url": "http://www.niaogebiji.com/",
                        "logo": "assets/images/logos/niaogebiji.png",
                        "title": "鸟哥笔记",
                        "desc": "移动互联网第一干货平台"
                    },
                    {
                        "url": "http://www.gtn9.com/",
                        "logo": "assets/images/logos/gtn9.png",
                        "title": "古田路9号",
                        "desc": "国内专业品牌创意平台"
                    },
                    {
                        "url": "http://www.uigreat.com/",
                        "logo": "assets/images/logos/uigreat.png",
                        "title": "优阁网",
                        "desc": "UI设计师学习交流社区"
                    }
                ]
            },
            {
                "name": "灵感采集",
                "icon": "👀",
                "children": [
                    {
                        "name": "发现产品",
                        "web": [
                            {
                                "url": "https://www.producthunt.com/",
                                "logo": "assets/images/logos/producthunt.png",
                                "title": "Producthunt",
                                "desc": "发现新鲜有趣的产品"
                            },
                            {
                                "url": "http://next.36kr.com/posts",
                                "logo": "assets/images/logos/NEXT.png",
                                "title": "NEXT",
                                "desc": "不错过任何一个新产品"
                            },
                            {
                                "url": "https://sspai.com/",
                                "logo": "assets/images/logos/sspai.png",
                                "title": "少数派",
                                "desc": "高品质数字消费指南"
                            },
                            {
                                "url": "http://liqi.io/",
                                "logo": "assets/images/logos/liqi.png",
                                "title": "利器",
                                "desc": "创造者和他们的工具"
                            },
                            {
                                "url": "http://today.itjuzi.com/",
                                "logo": "assets/images/logos/today.png",
                                "title": "Today",
                                "desc": "为身边的新产品喝彩"
                            },
                            {
                                "url": "https://faxian.appinn.com/",
                                "logo": "assets/images/logos/appinn.png",
                                "title": "小众软件",
                                "desc": "在这里发现更多有趣的应用"
                            }
                        ]
                    },
                    {
                        "name": "界面灵感",
                        "web": [
                            {
                                "url": "https://www.pttrns.com/",
                                "logo": "assets/images/logos/Pttrns.png",
                                "title": "Pttrns",
                                "desc": "Check out the finest collection of design patterns, resources, mobile apps and inspiration"
                            },
                            {
                                "url": "http://collectui.com/",
                                "logo": "assets/images/logos/CollectUI.png",
                                "title": "Collect UI",
                                "desc": "Daily inspiration collected from daily ui archive and beyond"
                            },
                            {
                                "url": "http://ui.uigreat.com/",
                                "logo": "assets/images/logos/uiuigreat.png",
                                "title": "UI uigreat",
                                "desc": "APP界面截图参考"
                            },
                            {
                                "url": "http://androidniceties.tumblr.com/",
                                "logo": "assets/images/logos/AndroidNiceties.png",
                                "title": "Android Niceties",
                                "desc": "A collection of screenshots encompassing some of the most beautiful looking Android apps"
                            }
                        ]
                    },
                    {
                        "name": "网页灵感",
                        "is_hot": true,
                        "web": [
                            {
                                "url": "https://www.awwwards.com/'",
                                "logo": "assets/images/logos/awwwards.png",
                                "title": "Awwwards",
                                "desc": "Awwwards are the Website Awards that recognize and promote the talent and effort of the best developers, designers and web agencies in the world."
                            },
                            {
                                "url": "https://www.cssdesignawards.com/",
                                "logo": "assets/images/logos/CSSDesignAwards.png",
                                "title": "CSS Design Awards",
                                "desc": "Website Awards & Inspiration - CSS Gallery"
                            },
                            {
                                "url": "https://thefwa.com/",
                                "logo": "assets/images/logos/fwa.png",
                                "title": "The FWA",
                                "desc": "FWA - showcasing innovation every day since 2000"
                            },
                            {
                                "url": "http://www.ecommercefolio.com/",
                                "logo": "assets/images/logos/Ecommercefolio.png",
                                "title": "Ecommercefolio",
                                "desc": "Only the Best Ecommerce Design Inspiration"
                            },
                            {
                                "url": "http://www.lapa.ninja/",
                                "logo": "assets/images/logos/Lapa.png",
                                "title": "Lapa",
                                "desc": "The best landing page design inspiration from around the web."
                            },
                            {
                                "url": "http://reeoo.com/",
                                "logo": "assets/images/logos/reeoo.png",
                                "title": "Reeoo",
                                "desc": "web design inspiration and website gallery"
                            },
                            {
                                "url": "https://designmunk.com/",
                                "logo": "assets/images/logos/designmunk.png",
                                "title": "Designmunk",
                                "desc": "Best Homepage Design Inspiration"
                            },
                            {
                                "url": "https://bestwebsite.gallery/",
                                "logo": "assets/images/logos/BWG.png",
                                "title": "Best Websites Gallery",
                                "desc": "Website Showcase Inspiration | Best Websites Gallery"
                            },
                            {
                                "url": "http://www.pages.xyz/",
                                "logo": "assets/images/logos/pages.png",
                                "title": "Pages",
                                "desc": "Curated directory of the best Pages"
                            },
                            {
                                "url": "https://sitesee.co/",
                                "logo": "assets/images/logos/SiteSee.png",
                                "title": "SiteSee",
                                "desc": "SiteSee is a curated gallery of beautiful, modern websites collections."
                            },
                            {
                                "url": "https://www.siteinspire.com/",
                                "logo": "assets/images/logos/siteInspire.png",
                                "title": "Site Inspire",
                                "desc": "A CSS gallery and showcase of the best web design inspiration."
                            },
                            {
                                "url": "http://web.uedna.com/",
                                "logo": "assets/images/logos/WebInspiration.png",
                                "title": "WebInspiration",
                                "desc": "网页设计欣赏,全球顶级网页设计"
                            },
                            {
                                "url": "http://navnav.co/",
                                "logo": "assets/images/logos/navnav.png",
                                "title": "navnav",
                                "desc": "A ton of CSS, jQuery, and JavaScript responsive navigation examples, demos, and tutorials from all over the web."
                            },
                            {
                                "url": "https://www.reallygoodux.io/",
                                "logo": "assets/images/logos/ReallyGoodUX.png",
                                "title": "Really Good UX",
                                "desc": "A library of screenshots and examples of really good UX. Brought to you by"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "素材资源",
                "icon": "👀-up",
                "children": [
                    {
                        "name": "图标素材",
                        "web": [
                            {
                                "url": "https://www.iconfinder.com",
                                "logo": "assets/images/logos/Iconfinder.png",
                                "title": "Iconfinder",
                                "desc": "2,100,000+ free and premium vector icons"
                            },
                            {
                                "url": "http://www.iconfont.cn",
                                "logo": "assets/images/logos/iconfont.png",
                                "title": "iconfont",
                                "desc": "阿里巴巴矢量图标库"
                            },
                            {
                                "url": "https://iconmonstr.com",
                                "logo": "assets/images/logos/iconmonstr.png",
                                "title": "iconmonstr",
                                "desc": "Free simple icons for your next project"
                            },
                            {
                                "url": "http://www.iconarchive.com",
                                "logo": "assets/images/logos/iconarchive.png",
                                "title": "Icon Archive",
                                "desc": "Search 590,912 free icons"
                            },
                            {
                                "url": "https://findicons.com",
                                "logo": "assets/images/logos/FindIcons.png",
                                "title": "FindIcons",
                                "desc": "Search through 300,000 free icons"
                            },
                            {
                                "url": "https://icomoon.io/app",
                                "logo": "assets/images/logos/IcoMoonApp.png",
                                "title": "IcoMoonApp",
                                "desc": "Icon Font, SVG, PDF &amp; PNG Generator"
                            },
                            {
                                "url": "http://www.easyicon.net",
                                "logo": "assets/images/logos/easyicon.png",
                                "title": "easyicon",
                                "desc": "PNG、ICO、ICNS格式图标搜索、图标下载服务"
                            },
                            {
                                "url": "https://www.flaticon.com",
                                "logo": "assets/images/logos/flaticon.png",
                                "title": "flaticon",
                                "desc": "634,000+ Free vector icons in SVG, PSD, PNG, EPS format or as ICON FONT"
                            },
                            {
                                "url": "http://ui-cloud.com",
                                "logo": "assets/images/logos/UICloud.png",
                                "title": "UICloud",
                                "desc": "The largest user interface design database in the world"
                            },
                            {
                                "url": "https://material.io/icons",
                                "logo": "assets/images/logos/Materialicons.png",
                                "title": "Material icons",
                                "desc": "Access over 900 material system icons, available in a variety of sizes and densities, and as a web font"
                            },
                            {
                                "url": "http://www.fontawesome.com.cn/faicons/",
                                "logo": "assets/images/logos/fontawesomeicon.png",
                                "title": "Font Awesome Icon",
                                "desc": "The complete set of 675 icons in Font Awesome"
                            },
                            {
                                "url": "http://ionicons.com",
                                "logo": "assets/images/logos/ionicons.png",
                                "title": "ion icons",
                                "desc": "The premium icon font for Ionic Framework"
                            },
                            {
                                "url": "http://simplelineicons.com",
                                "logo": "assets/images/logos/simplelineicons.png",
                                "title": "Simpleline Icons",
                                "desc": "Simple line Icons pack"
                            }
                        ]
                    },
                    {
                        "name": "LOGO设计",
                        "web": [
                            {
                                "url": "http://www.iconsfeed.com",
                                "logo": "assets/images/logos/iconsfeed.png",
                                "title": "Iconsfeed",
                                "desc": "iOS icons gallery"
                            },
                            {
                                "url": "http://iosicongallery.com",
                                "logo": "assets/images/logos/iosicongallery.png",
                                "title": "iOS Icon Gallery",
                                "desc": "Showcasing beautiful icon designs from the iOS App Store"
                            },
                            {
                                "url": "https://worldvectorlogo.com",
                                "logo": "assets/images/logos/worldvectorlogo.png",
                                "title": "World Vector Logo",
                                "desc": "Brand logos free to download"
                            },
                            {
                                "url": "http://instantlogosearch.com",
                                "logo": "assets/images/logos/InstantLogoSearch.png",
                                "title": "Instant Logo Search",
                                "desc": "Search & download thousands of logos instantly"
                            }
                        ]
                    },
                    {
                        "name": "平面素材",
                        "web": [
                            {
                                "url": "https://www.freepik.com",
                                "logo": "assets/images/logos/freepik.png",
                                "title": "freepik",
                                "desc": "More than a million free vectors, PSD, photos and free icons."
                            },
                            {
                                "url": "https://wallhalla.com",
                                "logo": "assets/images/logos/wallhalla.png",
                                "title": "wallhalla",
                                "desc": "Find awesome high quality wallpapers for desktop and mobile in one place."
                            },
                            {
                                "url": "https://365psd.com",
                                "logo": "assets/images/logos/365PSD.png",
                                "title": "365PSD",
                                "desc": "Free PSD &amp; Graphics, Illustrations"
                            },
                            {
                                "url": "https://medialoot.com",
                                "logo": "assets/images/logos/Medialoot.png",
                                "title": "Medialoot",
                                "desc": "Free &amp; Premium Design Resources &mdash; Medialoot"
                            },
                            {
                                "url": "http://www.58pic.com",
                                "logo": "assets/images/logos/qiantu.png",
                                "title": "千图网",
                                "desc": "专注免费设计素材下载的网站"
                            },
                            {
                                "url": "http://588ku.com",
                                "logo": "assets/images/logos/qianku.png",
                                "title": "千库网",
                                "desc": "免费png图片背景素材下载"
                            },
                            {
                                "url": "http://www.ooopic.com",
                                "logo": "assets/images/logos/wotu.png",
                                "title": "我图网",
                                "desc": "我图网,提供图片素材及模板下载,专注正版设计作品交易"
                            },
                            {
                                "url": "http://90sheji.com",
                                "logo": "assets/images/logos/90sheji.png",
                                "title": "90设计",
                                "desc": "电商设计（淘宝美工）千图免费淘宝素材库"
                            },
                            {
                                "url": "http://www.nipic.com",
                                "logo": "assets/images/logos/nipic.png",
                                "title": "昵图网",
                                "desc": "原创素材共享平台"
                            },
                            {
                                "url": "http://www.lanrentuku.com",
                                "logo": "assets/images/logos/lanrentuku.png",
                                "title": "懒人图库",
                                "desc": "懒人图库专注于提供网页素材下载"
                            },
                            {
                                "url": "http://so.ui001.com",
                                "logo": "assets/images/logos/sousucai.png",
                                "title": "素材搜索",
                                "desc": "设计素材搜索聚合"
                            },
                            {
                                "url": "http://psefan.com",
                                "logo": "assets/images/logos/psefan.png",
                                "title": "PS饭团网",
                                "desc": "不一样的设计素材库！让自己的设计与众不同！"
                            },
                            {
                                "url": "http://www.sccnn.com",
                                "logo": "assets/images/logos/sccnn.png",
                                "title": "素材中国",
                                "desc": "免费素材共享平台"
                            }
                        ]
                    },
                    {
                        "name": "UI资源",
                        "web": [
                            {
                                "url": "https://freebiesbug.com",
                                "logo": "assets/images/logos/freebiesbug.png",
                                "title": "Freebiesbug",
                                "desc": "Hand-picked resources for web designer and developers, constantly updated."
                            },
                            {
                                "url": "https://freebiesupply.com",
                                "logo": "assets/images/logos/freebiesupply.png",
                                "title": "Freebie Supply",
                                "desc": "Free Resources For Designers"
                            },
                            {
                                "url": "https://www.yrucd.com",
                                "logo": "assets/images/logos/yrucd.png",
                                "title": "云瑞",
                                "desc": "优秀设计资源的分享网站"
                            },
                            {
                                "url": "https://designmodo.com",
                                "logo": "assets/images/logos/Designmodo.png",
                                "title": "Designmodo",
                                "desc": "Web Design Blog and Shop"
                            },
                            {
                                "url": "https://xituqu.com",
                                "logo": "assets/images/logos/xituqu.png",
                                "title": "稀土区",
                                "desc": "优质设计开发资源分享"
                            },
                            {
                                "url": "https://ui8.net",
                                "logo": "assets/images/logos/ui8.png",
                                "title": "ui8",
                                "desc": "UI Kits, Wireframe Kits, Templates, Icons and More"
                            },
                            {
                                "url": "https://www.uplabs.com",
                                "logo": "assets/images/logos/uplabs.png",
                                "title": "uplabs",
                                "desc": "Daily resources for product designers & developers"
                            },
                            {
                                "url": "http://www.uikit.me",
                                "logo": "assets/images/logos/uikitme.png",
                                "title": "UIkit.me",
                                "desc": "最便捷新鲜的uikit资源下载网站"
                            },
                            {
                                "url": "http://www.fribbble.com",
                                "logo": "assets/images/logos/Fribbble.png",
                                "title": "Fribbble",
                                "desc": "Free PSD files and other free design resources by Dribbblers."
                            },
                            {
                                "url": "http://principlerepo.com",
                                "logo": "assets/images/logos/PrincipleRepo.png",
                                "title": "PrincipleRepo",
                                "desc": "Free, High Quality Principle Resources"
                            }
                        ]
                    },
                    {
                        "name": "Sketch资源",
                        "web": [
                            {
                                "url": "https://sketchapp.com",
                                "logo": "assets/images/logos/Sketch.png",
                                "title": "Sketch",
                                "desc": "The digital design toolkit"
                            },
                            {
                                "url": "http://utom.design/measure",
                                "logo": "assets/images/logos/SketchMeasure.png",
                                "title": "Sketch Measure",
                                "desc": "Friendly user interface offers you a more intuitive way of making marks."
                            },
                            {
                                "url": "https://www.sketchappsources.com",
                                "logo": "assets/images/logos/sketchappsources.png",
                                "title": "Sketch App Sources",
                                "desc": "Free design resources and plugins - Icons, UI Kits, Wireframes, iOS, Android Templates for Sketch"
                            },
                            {
                                "url": "http://www.sketch.im",
                                "logo": "assets/images/logos/sketchIm.png",
                                "title": "Sketch.im",
                                "desc": "Sketch 相关资源汇聚"
                            },
                            {
                                "url": "http://sketchhunt.com",
                                "logo": "assets/images/logos/sketchhunt.png",
                                "title": "Sketch Hunt",
                                "desc": "Sketch Hunt is an independent blog sharing gems in learning, plugins &amp; design tools for fans of Sketch app."
                            },
                            {
                                "url": "http://www.sketchcn.com",
                                "logo": "assets/images/logos/sketchcn.png",
                                "title": "Sketch中文网",
                                "desc": "分享最新的Sketch中文手册"
                            },
                            {
                                "url": "https://awesome-sket.ch",
                                "logo": "assets/images/logos/AwesomeSketchPlugins.png",
                                "title": "Awesome Sketch Plugins",
                                "desc": "A collection of really useful Sketch plugins."
                            },
                            {
                                "url": "https://www.sketchcasts.net",
                                "logo": "assets/images/logos/sketchcasts.png",
                                "title": "Sketchcasts",
                                "desc": "Learn Sketch Train your design skills with a weekly video tutorial"
                            }
                        ]
                    },
                    {
                        "name": "字体资源",
                        "web": [
                            {
                                "url": "https://fonts.google.com",
                                "logo": "assets/images/logos/googlefont.png",
                                "title": "Google Font",
                                "desc": "Making the web more beautiful, fast, and open through great typography"
                            },
                            {
                                "url": "https://typekit.com",
                                "logo": "assets/images/logos/typekit.png",
                                "title": "Typekit",
                                "desc": "Quality fonts from the world’s best foundries."
                            },
                            {
                                "url": "http://www.foundertype.com",
                                "logo": "assets/images/logos/Fondertype.png",
                                "title": "方正字库",
                                "desc": "方正字库官方网站"
                            },
                            {
                                "url": "http://ziticq.com",
                                "logo": "assets/images/logos/ziticq.png",
                                "title": "字体传奇网",
                                "desc": "中国首个字体品牌设计师交流网"
                            },
                            {
                                "url": "http://sicangziti.com",
                                "logo": "assets/images/logos/sicangziti.png",
                                "title": "私藏字体",
                                "desc": "优质字体免费下载站"
                            },
                            {
                                "url": "https://www.fontsquirrel.com",
                                "logo": "assets/images/logos/fontsquirrel.png",
                                "title": "Fontsquirrel",
                                "desc": "FREE fonts for graphic designers"
                            },
                            {
                                "url": "https://www.urbanfonts.com",
                                "logo": "assets/images/logos/UrbanFonts.png",
                                "title": "Urban Fonts",
                                "desc": "Download Free Fonts and Free Dingbats."
                            },
                            {
                                "url": "http://www.losttype.com",
                                "logo": "assets/images/logos/losttype.png",
                                "title": "Lost Type",
                                "desc": "Lost Type is a Collaborative Digital Type Foundry"
                            },
                            {
                                "url": "https://fonts2u.com",
                                "logo": "assets/images/logos/fonts2u.png",
                                "title": "FONTS2U",
                                "desc": "Download free fonts for Windows and Macintosh."
                            },
                            {
                                "url": "http://www.fontex.org",
                                "logo": "assets/images/logos/fontex.png",
                                "title": "Fontex",
                                "desc": "Free Fonts to Download + Premium Typefaces"
                            },
                            {
                                "url": "http://fontm.com",
                                "logo": "assets/images/logos/FontM.png",
                                "title": "FontM",
                                "desc": "Free Fonts"
                            },
                            {
                                "url": "http://www.myfonts.com",
                                "logo": "assets/images/logos/MyFonts.png",
                                "title": "My Fonts",
                                "desc": "Fonts for Print, Products & Screens"
                            },
                            {
                                "url": "https://www.dafont.com",
                                "logo": "assets/images/logos/dafont.png",
                                "title": "Da Font",
                                "desc": "Archive of freely downloadable fonts."
                            },
                            {
                                "url": "https://www.onlinewebfonts.com",
                                "logo": "assets/images/logos/OnlineWebFonts.png",
                                "title": "OnlineWebFonts",
                                "desc": "WEB Free Fonts for Windows and Mac / Font free Download"
                            },
                            {
                                "url": "http://www.abstractfonts.com",
                                "logo": "assets/images/logos/abstractfonts.png",
                                "title": "Abstract Fonts",
                                "desc": "Abstract Fonts (13,866 free fonts)"
                            }
                        ]
                    },
                    {
                        "name": "Mockup",
                        "web": [
                            {
                                "url": "https://mockup.zone",
                                "logo": "assets/images/logos/MockupZone.png",
                                "title": "MockupZone",
                                "desc": "Mockup Zone is an online store where you can find free and premium PSD mockup files to show your designs in a professional way."
                            },
                            {
                                "url": "http://dunnnk.com",
                                "logo": "assets/images/logos/Dunnnk.png",
                                "title": "Dunnnk",
                                "desc": " Generate Product Mockups For Free"
                            },
                            {
                                "url": "http://www.graphberry.com",
                                "logo": "assets/images/logos/graphberry.png",
                                "title": "Graphberry",
                                "desc": "Free design resources, Mockups, PSD web templates, Icons"
                            },
                            {
                                "url": "http://threed.io",
                                "logo": "assets/images/logos/threed.png",
                                "title": "Threed",
                                "desc": "Generate 3D Mockups right in your Browser"
                            },
                            {
                                "url": "https://free.lstore.graphics",
                                "logo": "assets/images/logos/mockupworld.png",
                                "title": "Mockup World",
                                "desc": "The best free Mockups from the Web"
                            },
                            {
                                "url": "https://free.lstore.graphics",
                                "logo": "assets/images/logos/lstore.png",
                                "title": "Lstore",
                                "desc": "Exclusive mindblowing freebies for designers and developers"
                            },
                            {
                                "url": "https://www.pixeden.com",
                                "logo": "assets/images/logos/pixeden.png",
                                "title": "pixeden",
                                "desc": "free web resources and graphic design templates."
                            },
                            {
                                "url": "http://forgraphictm.com",
                                "logo": "assets/images/logos/forgraphictm.png",
                                "title": "For Graphic TM",
                                "desc": "High Quality PSD Mockups for Graphic Designers."
                            }
                        ]
                    },
                    {
                        "name": "摄影图库",
                        "web": [
                            {
                                "url": "https://unsplash.com",
                                "logo": "assets/images/logos/unsplash.png",
                                "title": "Unsplash",
                                "desc": "Beautiful, free photos."
                            },
                            {
                                "url": "https://visualhunt.com",
                                "logo": "assets/images/logos/visualhunt.png",
                                "title": "visualhunt",
                                "desc": "100% Free High Quality Photos"
                            },
                            {
                                "url": "https://librestock.com",
                                "logo": "assets/images/logos/librestock.png",
                                "title": "librestock",
                                "desc": "65,084 high quality do-what-ever-you-want stock photos"
                            },
                            {
                                "url": "https://pixabay.com",
                                "logo": "assets/images/logos/pixabay.png",
                                "title": "pixabay",
                                "desc": "可在任何地方使用的免费图片和视频"
                            },
                            {
                                "url": "https://www.splitshire.com",
                                "logo": "assets/images/logos/SplitShire.png",
                                "title": "SplitShire",
                                "desc": "Free Stock Photos and Videos for commercial use."
                            },
                            {
                                "url": "https://stocksnap.io",
                                "logo": "assets/images/logos/StockSnap.png",
                                "title": "StockSnap",
                                "desc": "Beautiful free stock photos"
                            },
                            {
                                "url": "http://albumarium.com",
                                "logo": "assets/images/logos/albumarium.png",
                                "title": "albumarium",
                                "desc": "The best place to find & share beautiful images"
                            },
                            {
                                "url": "https://myphotopack.com",
                                "logo": "assets/images/logos/myphotopack.png",
                                "title": "myphotopack",
                                "desc": "A free photo pack just for you. Every month."
                            },
                            {
                                "url": "http://notaselfie.com",
                                "logo": "assets/images/logos/notaselfie.png",
                                "title": "Notaselfie",
                                "desc": "Photos that happen along the way. You can use the images anyway you like. Have fun!"
                            },
                            {
                                "url": "http://papers.co",
                                "logo": "assets/images/logos/papers.png",
                                "title": "papers",
                                "desc": "Wallpapers Every Hour!Hand collected :)"
                            },
                            {
                                "url": "http://stokpic.com",
                                "logo": "assets/images/logos/stokpic.png",
                                "title": "stokpic",
                                "desc": "Free Stock Photos For Commercial Use"
                            },
                            {
                                "url": "https://55mm.co/visuals",
                                "logo": "assets/images/logos/55mm.png",
                                "title": "55mm",
                                "desc": "Use our FREE photos to tell your story! "
                            },
                            {
                                "url": "http://thestocks.im",
                                "logo": "assets/images/logos/thestocks.png",
                                "title": "thestocks",
                                "desc": "Use our FREE photos to tell your story! "
                            },
                            {
                                "url": "http://freenaturestock.com",
                                "logo": "assets/images/logos/freenaturestock.png",
                                "title": "freenaturestock",
                                "desc": "Exclusive mindblowing freebies for designers and developers"
                            },
                            {
                                "url": "https://negativespace.co",
                                "logo": "assets/images/logos/negativespace.png",
                                "title": "negativespace",
                                "desc": "Beautiful, High-Resolution Free Stock Photos"
                            },
                            {
                                "url": "https://gratisography.com",
                                "logo": "assets/images/logos/gratisography.png",
                                "title": "gratisography",
                                "desc": "Free high-resolution pictures you can use on your personal and commercial projects, free of copyright restrictions. "
                            },
                            {
                                "url": "http://imcreator.com/free",
                                "logo": "assets/images/logos/imcreator.png",
                                "title": "imcreator",
                                "desc": "A curated collection of free web design resources, all for commercial use."
                            },
                            {
                                "url": "http://www.lifeofpix.com",
                                "logo": "assets/images/logos/lifeofpix.png",
                                "title": "lifeofpix",
                                "desc": "Free high resolution photography"
                            },
                            {
                                "url": "https://skitterphoto.com",
                                "logo": "assets/images/logos/skitterphoto.png",
                                "title": "skitterphoto",
                                "desc": "Free Stock Photos for Creative Professionals"
                            },
                            {
                                "url": "https://mmtstock.com",
                                "logo": "assets/images/logos/mmtstock.png",
                                "title": "mmtstock",
                                "desc": "Free photos for commercial use"
                            },
                            {
                                "url": "https://skitterphoto.com",
                                "logo": "assets/images/logos/skitterphoto.png",
                                "title": "skitterphoto",
                                "desc": "a place to find, show and share public domain photos"
                            },
                            {
                                "url": "https://magdeleine.co/browse",
                                "logo": "assets/images/logos/magdeleine.png",
                                "title": "magdeleine",
                                "desc": "HAND-PICKED FREE PHOTOS FOR YOUR INSPIRATION"
                            },
                            {
                                "url": "http://jeshoots.com",
                                "logo": "assets/images/logos/jeshoots.png",
                                "title": "jeshoots",
                                "desc": "New Free Photos & Mockups in to your Inbox!"
                            },
                            {
                                "url": "https://www.hdwallpapers.net",
                                "logo": "assets/images/logos/hdwallpapers.png",
                                "title": "hdwallpapers",
                                "desc": "High Definition Wallpapers & Desktop Backgrounds"
                            },
                            {
                                "url": "http://publicdomainarchive.com",
                                "logo": "assets/images/logos/publicdomainarchive.png",
                                "title": "publicdomainarchive",
                                "desc": "New 100% Free Stock Photos. Every. Single. Week."
                            }
                        ]
                    },
                    {
                        "name": "PPT资源",
                        "web": [
                            {
                                "url": "http://www.officeplus.cn/Template/Home.shtml",
                                "logo": "assets/images/logos/officeplus.png",
                                "title": "OfficePLUS",
                                "desc": "OfficePLUS，微软Office官方在线模板网站！"
                            },
                            {
                                "url": "http://www.ypppt.com/",
                                "logo": "assets/images/logos/ypppt.png",
                                "title": "优品PPT",
                                "desc": "高质量的模版，而且还有PPT图表，PPT背景图等资源"
                            },
                            {
                                "url": "http://www.pptplus.cn/",
                                "logo": "assets/images/logos/pptplus.png",
                                "title": "PPT+",
                                "desc": "PPT加直播、录制和分享—PPT+语音内容分享平台"
                            },
                            {
                                "url": "http://www.pptmind.com/",
                                "logo": "assets/images/logos/pptmind.png",
                                "title": "PPTMind",
                                "desc": "分享高端ppt模板与keynote模板的数字作品交易平台"
                            },
                            {
                                "url": "http://www.tretars.com/ppt-templates",
                                "logo": "assets/images/logos/tretars.png",
                                "title": "tretars",
                                "desc": "The best free Mockups from the Web"
                            },
                            {
                                "url": "http://ppt.500d.me/",
                                "logo": "assets/images/logos/500d.png",
                                "title": "5百丁",
                                "desc": "中国领先的PPT模板共享平台"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "常用工具",
                "icon": "👀",
                "children": [
                    {
                        "name": "图形创意",
                        "web": [
                            {
                                "url": "https://www.adobe.com/cn/products/photoshop.html",
                                "logo": "assets/images/logos/photoshop.png",
                                "title": "photoshop",
                                "desc": "Photoshop不需要解释"
                            },
                            {
                                "url": "https://affinity.serif.com/",
                                "logo": "assets/images/logos/AffinityDesigner.png",
                                "title": "Affinity Designer",
                                "desc": "专业创意软件"
                            },
                            {
                                "url": "https://www.adobe.com/cn/products/illustrator/",
                                "logo": "assets/images/logos/Illustrator.png",
                                "title": "Illustrator",
                                "desc": "矢量图形和插图。"
                            },
                            {
                                "url": "http://www.adobe.com/cn/products/indesign.html",
                                "logo": "assets/images/logos/INDESIGN .png",
                                "title": "indesign",
                                "desc": "页面设计、布局和出版。"
                            },
                            {
                                "url": "https://www.maxon.net/en/products/cinema-4d/overview/",
                                "logo": "assets/images/logos/cinema4d.png",
                                "title": "cinema-4d",
                                "desc": "Cinema 4D is the perfect package for all 3D artists who want to achieve breathtaking results fast and hassle-free."
                            },
                            {
                                "url": "https://www.autodesk.com/products/3ds-max/overview",
                                "logo": "assets/images/logos/3dsmax.png",
                                "title": "3ds-max",
                                "desc": "3D modeling, animation, and rendering software"
                            },
                            {
                                "url": "https://www.blender.org/",
                                "logo": "assets/images/logos/blender.png",
                                "title": "Blender",
                                "desc": "Blender is the free and open source 3D creation suite."
                            }
                        ]
                    },
                    {
                        "name": "界面设计",
                        "web": [
                            {
                                "url": "https://sketchapp.com/",
                                "logo": "assets/images/logos/sketchapp.png",
                                "title": "Sketch",
                                "desc": "The digital design toolkit"
                            },
                            {
                                "url": "http://www.adobe.com/products/xd.html",
                                "logo": "assets/images/logos/ADOBEXDCC.png",
                                "title": "Adobe XD",
                                "desc": "Introducing Adobe XD. Design. Prototype. Experience."
                            },
                            {
                                "url": "https://www.invisionapp.com/",
                                "logo": "assets/images/logos/invisionapp.png",
                                "title": "invisionapp",
                                "desc": "Powerful design prototyping tools"
                            },
                            {
                                "url": "https://marvelapp.com/",
                                "logo": "assets/images/logos/marvelapp.png",
                                "title": "marvelapp",
                                "desc": "Simple design, prototyping and collaboration"
                            },
                            {
                                "url": "https://creative.adobe.com/zh-cn/products/download/muse",
                                "logo": "assets/images/logos/MuseCC.png",
                                "title": "Muse CC",
                                "desc": "无需利用编码即可进行网站设计。"
                            },
                            {
                                "url": "https://www.figma.com/",
                                "logo": "assets/images/logos/figma.png",
                                "title": "figma",
                                "desc": "Design, prototype, and gather feedback all in one place with Figma."
                            }
                        ]
                    },
                    {
                        "name": "交互动效",
                        "web": [
                            {
                                "url": "https://www.adobe.com/cn/products/aftereffects/",
                                "logo": "assets/images/logos/AdobeAfterEffectsCC.png",
                                "title": "Adobe After Effects CC",
                                "desc": "电影般的视觉效果和动态图形。"
                            },
                            {
                                "url": "http://principleformac.com/",
                                "logo": "assets/images/logos/principle.png",
                                "title": "principle",
                                "desc": "Animate Your Ideas, Design Better Apps"
                            },
                            {
                                "url": "https://www.flinto.com/",
                                "logo": "assets/images/logos/flinto.png",
                                "title": "flinto",
                                "desc": "Flinto is a Mac app used by top designers around the world to create interactive and animated prototypes of their app designs."
                            },
                            {
                                "url": "https://framer.com/",
                                "logo": "assets/images/logos/framer.png",
                                "title": "framer",
                                "desc": "Design everything from detailed icons to high-fidelity interactions—all in one place."
                            },
                            {
                                "url": "http://www.protopie.cn/",
                                "logo": "assets/images/logos/protopie.png",
                                "title": "ProtoPie",
                                "desc": "高保真交互原型设计"
                            }
                        ]
                    },
                    {
                        "name": "在线配色",
                        "web": [
                            {
                                "url": "http://khroma.co/generator/",
                                "logo": "assets/images/logos/khroma.png",
                                "title": "khroma",
                                "desc": "Khroma is the fastest way to discover, search, and save color combos you'll want to use."
                            },
                            {
                                "url": "https://uigradients.com",
                                "logo": "assets/images/logos/uigradients.png",
                                "title": "uigradients",
                                "desc": "Beautiful colored gradients"
                            },
                            {
                                "url": "http://gradients.io/",
                                "logo": "assets/images/logos/gradients.png",
                                "title": "gradients",
                                "desc": "Curated gradients for designers and developers"
                            },
                            {
                                "url": "https://webkul.github.io/coolhue/",
                                "logo": "assets/images/logos/Coolest.png",
                                "title": "Coolest",
                                "desc": "Coolest handpicked Gradient Hues for your next super ⚡ amazing stuff"
                            },
                            {
                                "url": "https://webgradients.com/",
                                "logo": "assets/images/logos/webgradients.png",
                                "title": "webgradients",
                                "desc": "WebGradients is a free collection of 180 linear gradients that you can use as content backdrops in any part of your website. "
                            },
                            {
                                "url": "https://www.grabient.com/",
                                "logo": "assets/images/logos/grabient.png",
                                "title": "grabient",
                                "desc": "2017 Grabient by unfold"
                            },
                            {
                                "url": "http://www.thedayscolor.com/",
                                "logo": "assets/images/logos/thedayscolor.png",
                                "title": "thedayscolor",
                                "desc": "The daily color digest"
                            },
                            {
                                "url": "http://flatuicolors.com/",
                                "logo": "assets/images/logos/flatuicolors.png",
                                "title": "flatuicolors",
                                "desc": "Copy Paste Color Pallette from Flat UI Theme"
                            },
                            {
                                "url": "https://coolors.co/",
                                "logo": "assets/images/logos/coolors.png",
                                "title": "coolors",
                                "desc": "The super fast color schemes generator!"
                            },
                            {
                                "url": "http://www.colorhunt.co/",
                                "logo": "assets/images/logos/colorhunt.png",
                                "title": "colorhunt",
                                "desc": "Beautiful Color Palettes"
                            },
                            {
                                "url": "https://color.adobe.com/zh/create/color-wheel",
                                "logo": "assets/images/logos/AdobeColorCC.png",
                                "title": "Adobe Color CC",
                                "desc": "Create color schemes with the color wheel or browse thousands of color combinations from the Color community."
                            },
                            {
                                "url": "http://www.flatuicolorpicker.com/",
                                "logo": "assets/images/logos/flatuicolorpicker.png",
                                "title": "flatuicolorpicker",
                                "desc": "Best Flat Colors For UI Design"
                            },
                            {
                                "url": "http://qrohlf.com/trianglify-generator/",
                                "logo": "assets/images/logos/trianglify.png",
                                "title": "trianglify",
                                "desc": "Trianglify Generator"
                            },
                            {
                                "url": "https://klart.co/colors/",
                                "logo": "assets/images/logos/klart.png",
                                "title": "klart",
                                "desc": "Beautiful colors and designs to your inbox every week"
                            },
                            {
                                "url": "http://www.vanschneider.com/colors",
                                "logo": "assets/images/logos/vanschneider.png",
                                "title": "vanschneider",
                                "desc": "Color Claim was created in 2012 by Tobias van Schneider with the goal to collect & combine unique colors for my future projects."
                            }
                        ]
                    },
                    {
                        "name": "在线工具",
                        "web": [
                            {
                                "url": "https://tinypng.com/",
                                "logo": "assets/images/logos/tinypng.png",
                                "title": "tinypng",
                                "desc": "Optimize your images with a perfect balance in quality and file size."
                            },
                            {
                                "url": "http://goqr.me/",
                                "logo": "assets/images/logos/goqr.png",
                                "title": "goqr",
                                "desc": "create QR codes for free (Logo, T-Shirt, vCard, EPS)"
                            },
                            {
                                "url": "https://ezgif.com",
                                "logo": "assets/images/logos/ezgif.png",
                                "title": "ezgif",
                                "desc": "simple online GIF maker and toolset for basic animated GIF editing."
                            },
                            {
                                "url": "http://inloop.github.io/shadow4android/",
                                "logo": "assets/images/logos/Android9patch.png",
                                "title": "Android 9 patch",
                                "desc": "Android 9-patch shadow generator fully customizable shadows"
                            },
                            {
                                "url": "http://screensiz.es/",
                                "logo": "assets/images/logos/screensizes.png",
                                "title": "screen sizes",
                                "desc": "Viewport Sizes and Pixel Densities for Popular Devices"
                            },
                            {
                                "url": "https://jakearchibald.github.io/svgomg/",
                                "logo": "assets/images/logos/svgomg.png",
                                "title": "svgomg",
                                "desc": "SVG在线压缩平台"
                            },
                            {
                                "url": "https://www.gaoding.com",
                                "logo": "assets/images/logos/gaoding.png",
                                "title": "稿定抠图",
                                "desc": "免费在线抠图软件,图片快速换背景-抠白底图"
                            }
                        ]
                    },
                    {
                        "name": "Chrome插件",
                        "web": [
                            {
                                "url": "https://www.wappalyzer.com/",
                                "logo": "assets/images/logos/wappalyzer.png",
                                "title": "wappalyzer",
                                "desc": "Identify technology on websites"
                            },
                            {
                                "url": "http://usepanda.com/",
                                "logo": "assets/images/logos/usepanda.png",
                                "title": "Panda",
                                "desc": "A smart news reader built for productivity."
                            },
                            {
                                "url": "https://sizzy.co/",
                                "logo": "assets/images/logos/sizzy.png",
                                "title": "sizzy",
                                "desc": "A tool for developing responsive websites crazy-fast"
                            },
                            {
                                "url": "https://csspeeper.com/",
                                "logo": "assets/images/logos/csspeeper.png",
                                "title": "csspeeper",
                                "desc": "Smart CSS viewer tailored for Designers."
                            },
                            {
                                "url": "http://insight.io/",
                                "logo": "assets/images/logos/insight.png",
                                "title": "insight",
                                "desc": "IDE-like code search and navigation, on the cloud"
                            },
                            {
                                "url": "http://mustsee.earth/",
                                "logo": "assets/images/logos/mustsee.png",
                                "title": "mustsee",
                                "desc": "Discover the world's most beautiful places at every opened tab."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "学习教程",
                "icon": "👀",
                "children": [
                    {
                        "name": "设计规范",
                        "web": [
                            {
                                "url": "http://designguidelines.co/",
                                "logo": "assets/images/logos/designguidelines.png",
                                "title": "Design Guidelines",
                                "desc": "Design Guidelines &mdash; The way products are built."
                            },
                            {
                                "url": "https://github.com/alexpate/awesome-design-systems",
                                "logo": "assets/images/logos/awesome_design_systems.png",
                                "title": "Awesome design systems",
                                "desc": " A collection of awesome design systems"
                            },
                            {
                                "url": "https://material.io/guidelines/",
                                "logo": "assets/images/logos/Material_Design.png",
                                "title": "Material Design",
                                "desc": "Introduction - Material Design"
                            },
                            {
                                "url": "https://developer.apple.com/ios/human-interface-guidelines",
                                "logo": "assets/images/logos/human_interface_guidelines.png",
                                "title": "Human Interface Guidelines",
                                "desc": "Human Interface Guidelines iOS"
                            },
                            {
                                "url": "http://viggoz.com/photoshopetiquette/",
                                "logo": "assets/images/logos/photoshopetiquette.png",
                                "title": "Photoshop Etiquette",
                                "desc": "PS礼仪-WEB设计指南"
                            }
                        ]
                    },
                    {
                        "name": "视频教程",
                        "web": [
                            {
                                "url": "http://www.photoshoplady.com/",
                                "logo": "assets/images/logos/PhotoshopLady.png",
                                "title": "Photoshop Lady",
                                "desc": "Your Favourite Photoshop Tutorials in One Place"
                            },
                            {
                                "url": "http://doyoudo.com/",
                                "logo": "assets/images/logos/doyoudo.png",
                                "title": "doyoudo",
                                "desc": "创意设计软件学习平台"
                            },
                            {
                                "url": "http://www.c945.com/web-ui-tutorial/",
                                "logo": "assets/images/logos/web_ui_tutorial.png",
                                "title": "没位道",
                                "desc": "WEB UI免费视频公开课"
                            },
                            {
                                "url": "https://www.imooc.com/",
                                "logo": "assets/images/logos/imooc.png",
                                "title": "慕课网",
                                "desc": "程序员的梦工厂（有UI课程）"
                            }
                        ]
                    },
                    {
                        "name": "设计文章",
                        "web": [
                            {
                                "url": "http://www.uisdc.com/",
                                "logo": "assets/images/logos/uisdc.png",
                                "title": "优设网",
                                "desc": "设计师交流学习平台"
                            },
                            {
                                "url": "https://webdesignledger.com",
                                "logo": "assets/images/logos/webdesignledger.png",
                                "title": "Web Design Ledger",
                                "desc": "Web Design Blog"
                            },
                            {
                                "url": "https://medium.com/",
                                "logo": "assets/images/logos/medium.png",
                                "title": "Medium",
                                "desc": "Read, write and share stories that matter"
                            }
                        ]
                    },
                    {
                        "name": "设计电台",
                        "web": [
                            {
                                "url": "http://uxcoffee.co/",
                                "logo": "assets/images/logos/uxcoffee.png",
                                "title": "UX Coffee",
                                "desc": "《UX Coffee 设计咖》是一档关于用户体验的播客节目。我们邀请来自硅谷和国内的学者和职人来聊聊「产品设计」、「用户体验」和「个人成长」。"
                            },
                            {
                                "url": "https://anyway.fm/",
                                "logo": "assets/images/logos/anyway.png",
                                "title": "Anyway.FM",
                                "desc": "设计杂谈 • UI 设计师 JJ 和 Leon 主播的设计播客"
                            },
                            {
                                "url": "https://www.yineng.fm",
                                "logo": "assets/images/logos/yineng.png",
                                "title": "异能电台",
                                "desc": "将全宇宙设计师的故事讲给你听。"
                            }
                        ]
                    },
                    {
                        "name": "交互设计",
                        "is_hot": true,
                        "web": [
                            {
                                "url": "http://littlebigdetails.com/",
                                "logo": "assets/images/logos/littlebigdetails.png",
                                "title": "Little Big Details",
                                "desc": "Little Big Details is a curated collection of the finer details of design, updated every day. "
                            },
                            {
                                "url": "https://www.smashingmagazine.com/category/user-experience",
                                "logo": "assets/images/logos/smashingmagazine.png",
                                "title": "Smashing Magazine",
                                "desc": "Below you’ll find the best tips to take not only your UX design process but also the experiences you craft to the next level."
                            },
                            {
                                "url": "https://www.nngroup.com/articles/",
                                "logo": "assets/images/logos/nngroup.png",
                                "title": "nngroup",
                                "desc": "Evidence-Based User Experience Research, Training, and Consulting"
                            },
                            {
                                "url": "http://boxesandarrows.com/",
                                "logo": "assets/images/logos/boxesandarrows.png",
                                "title": "Boxes and Arrows",
                                "desc": "Boxes and Arrows is devoted to the practice, innovation, and discussion of design; including graphic design, interaction design, information architecture and the design of business. "
                            },
                            {
                                "url": "http://uxdesignweekly.com/",
                                "logo": "assets/images/logos/uxdesignweekly.png",
                                "title": "UX Design Weekly",
                                "desc": " get a hand picked list of the best user experience design links every week. "
                            },
                            {
                                "url": "http://uxren.cn/",
                                "logo": "assets/images/logos/uxren.png",
                                "title": "UX Ren",
                                "desc": "用户体验人的专业社区"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "UED团队",
                "icon": "👀",
                "web": [
                    {
                        "url": "https://airbnb.design",
                        "logo": "assets/images/logos/AirbnbDesign.png",
                        "title": "Airbnb Design",
                        "desc": "Airbnb Design"
                    },
                    {
                        "url": "http://facebook.design/",
                        "logo": "assets/images/logos/FacebookDesign.png",
                        "title": "Facebook Design",
                        "desc": "Facebook Design"
                    },
                    {
                        "url": "https://design.google/",
                        "logo": "assets/images/logos/GoogleDesign.png",
                        "title": "Google Design",
                        "desc": "Google Design"
                    },
                    {
                        "url": "http://eicodesign.com/",
                        "logo": "assets/images/logos/eico.png",
                        "title": "eico design",
                        "desc": "数字化咨询与产品专家"
                    },
                    {
                        "url": "http://www.niceui.cn/",
                        "logo": "assets/images/logos/niceui.png",
                        "title": "nice design",
                        "desc": "nicedesign奈思设计是领先的用户体验设计与互联网品牌建设公司"
                    },
                    {
                        "url": "http://cdc.tencent.com/",
                        "logo": "assets/images/logos/cdc.png",
                        "title": "腾讯CDC",
                        "desc": "腾讯CDC关注于互联网视觉设计、交互设计、用户研究、前端开发。"
                    },
                    {
                        "url": "http://tgideas.qq.com/",
                        "logo": "assets/images/logos/tgideas.png",
                        "title": "TGideas",
                        "desc": "TGideas隶属于腾讯公司互动娱乐业务系统的专业推广类设计团队"
                    },
                    {
                        "url": "https://isux.tencent.com/",
                        "logo": "assets/images/logos/isux.png",
                        "title": "ISUX",
                        "desc": "腾讯社交用户体验设计部"
                    },
                    {
                        "url": "http://mxd.tencent.com/",
                        "logo": "assets/images/logos/mxd.png",
                        "title": "MXD",
                        "desc": "腾讯MIG无线互联网事业群设计团队"
                    },
                    {
                        "url": "http://www.aliued.com/",
                        "logo": "assets/images/logos/aliued.png",
                        "title": "Aliued",
                        "desc": "阿里巴巴国际UED团队"
                    },
                    {
                        "url": "http://www.aliued.cn/",
                        "logo": "assets/images/logos/aliuedcn.png",
                        "title": "U一点",
                        "desc": "阿里巴巴（中国站）用户体验设计部博客U一点设计 UED团队"
                    },
                    {
                        "url": "http://uedc.163.com/",
                        "logo": "assets/images/logos/uedc.png",
                        "title": "网易uedc",
                        "desc": "网易用户体验设计中心（User Experience Design Center）"
                    },
                    {
                        "url": "http://ued.baidu.com/",
                        "logo": "assets/images/logos/uedbaidu.png",
                        "title": "百度用户体验中心",
                        "desc": "百度用户体验中心"
                    },
                    {
                        "url": "http://jdc.jd.com/",
                        "logo": "assets/images/logos/jdc.png",
                        "title": "京东设计中心",
                        "desc": "京东设计中心"
                    },
                    {
                        "url": "http://eux.baidu.com/",
                        "logo": "assets/images/logos/euxbaidu.png",
                        "title": "百度企业产品用户体验中心",
                        "desc": "百度企业产品用户体验中心"
                    },
                    {
                        "url": "http://ued.ctrip.com/",
                        "logo": "assets/images/logos/ctrip.png",
                        "title": "携程设计委员会",
                        "desc": "携程设计委员会-Ctrip Design Committee"
                    }
                ]
            }
        ],
        'selected_name': "常用推荐"
    }),
    getters: {
    },
    actions: {
    },
})