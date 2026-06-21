(function() {

    // 四种康养模式
    var modeNames = ["文化+健康养生", "生态+健康养生", "休闲+健康养生", "医疗+健康养生"];

    // 四种模式的核心特征向量 [文化, 生态, 休闲, 医疗]
    var modeFeatures = [
        [9, 1, 0, 2],
        [2, 8, 1, 1],
        [1, 2, 9, 1],
        [1, 1, 1, 9]
    ];

    // 各模式的详细信息，包括适合人群、推荐理由、活动、费用档次、图片
    var modeDetail = {
        0: {
            who: "文化探寻者",
            reason: "您对传统文化、历史遗产与民俗风情具有浓厚兴趣，追求旅途中的精神滋养。文化+模式精准匹配您的文化求知需求。",
            activities: "推荐游乐方式：参观历史文化名城、博物馆、非遗体验、传统手工艺课程、禅修静养、文化讲座等。",
            priceTiers: [
                { label: 'A档 · 经济型', tierClass: 'tier-a', price: '2,000 - 4,000 元',
                    detail: '本地文化景点游览、社区文化中心活动、免费博物馆参观、公园太极晨练、老年大学文化课程。' },
                { label: 'B档 · 舒适型', tierClass: 'tier-b', price: '4,000 - 8,000 元',
                    detail: '周边历史文化名城2-3日游、博物馆深度导览、非遗手工艺体验课、禅修静养周末营、文化主题民宿。' },
                { label: 'C档 · 品质型', tierClass: 'tier-c', price: '8,000 - 15,000 元',
                    detail: '跨省文化之旅5-7日、非遗传承人亲授工坊、历史文化研学团、高端禅修度假村、私人文化导游。' },
                { label: 'D档 · 高端型', tierClass: 'tier-d', price: '15,000 - 30,000 元',
                    detail: '私人定制文化之旅、国际文化交流参访、豪华文化主题酒店、专属摄影师跟拍、头等舱+五星级全程。' },
                { label: 'E档 · 奢华型', tierClass: 'tier-e', price: '30,000 元以上',
                    detail: '全球顶级文化之旅、私人飞机+头等舱、国际文化大师全程陪同、奢华宫殿酒店、专属文化顾问服务。' }
            ],
            images: [
                { src: 'photos/2.jpg', alt: ' ' },
                { src: 'photos/3.jpg', alt: ' ' }
            ]
        },
        1: {
            who: "自然热衷者",
            reason: "您追求自然环境的疗愈功效，乐于亲近自然、呼吸清新空气。生态+模式提供森林徒步、生态观光、冥想静养、温泉疗养等活动。",
            activities: "推荐游乐方式：森林浴、湿地漫步、海滨冥想、自然瑜伽、生态摄影、温泉疗养。",
            priceTiers: [
                { label: 'A档 · 经济型', tierClass: 'tier-a', price: '1,500 - 3,500 元',
                    detail: '近郊森林公园一日游、社区绿道徒步、免费湿地公园观鸟、公园自然瑜伽晨练、生态摄影基础课。' },
                { label: 'B档 · 舒适型', tierClass: 'tier-b', price: '3,500 - 7,000 元',
                    detail: '省内生态景区2-3日游、温泉疗养周末、森林徒步跟团、海滨冥想营地、生态民宿体验。' },
                { label: 'C档 · 品质型', tierClass: 'tier-c', price: '7,000 - 12,000 元',
                    detail: '跨省生态度假5-7日、国家级森林公园深度游、森林康养基地疗养、专业自然瑜伽导师陪同、高端温泉度假村。' },
                { label: 'D档 · 高端型', tierClass: 'tier-d', price: '12,000 - 25,000 元',
                    detail: '高端生态度假村私人定制、瑞士/新西兰自然疗愈之旅、直升机观光+徒步、专属养生管家、有机膳食全程。' },
                { label: 'E档 · 奢华型', tierClass: 'tier-e', price: '25,000 元以上',
                    detail: '全球顶级生态秘境探索、私人飞机前往世外桃源、顶级生态疗养中心、国际自然大师陪同、奢华生态度假村。' }
            ],
            images: [
                { src: 'photos/5.jpg', alt: ' ' },
                { src: 'photos/6.jpg', alt: ' ' }
            ]
        },
        2: {
            who: "都市逃离者",
            reason: "您意在缓解压力，享受轻松愉悦的假期，注重高品质住宿与休闲娱乐。休闲+模式为您量身打造轻度假体验。",
            activities: "推荐游乐方式：海滨度假村、温泉酒店、美食之旅、轻松水上活动、SPA护理、文化市集。",
            priceTiers: [
                { label: 'A档 · 经济型', tierClass: 'tier-a', price: '2,500 - 5,000 元',
                    detail: '本地度假酒店1-2晚、周边美食一日游、公园野餐放松、社区SPA体验、轻松市集逛逛。' },
                { label: 'B档 · 舒适型', tierClass: 'tier-b', price: '5,000 - 10,000 元',
                    detail: '省内海滨/温泉度假村2-3晚、美食探店之旅、水上活动体验、专业SPA护理、高尔夫练习场。' },
                { label: 'C档 · 品质型', tierClass: 'tier-c', price: '10,000 - 20,000 元',
                    detail: '跨省高品质度假5-7日、邮轮旅行、豪华温泉酒店、米其林/黑珍珠餐厅体验、私人SPA疗程。' },
                { label: 'D档 · 高端型', tierClass: 'tier-d', price: '20,000 - 40,000 元',
                    detail: '豪华度假村私人别墅、国际邮轮头等舱、私人厨师定制美食、直升机海岛游、24小时管家服务。' },
                { label: 'E档 · 奢华型', tierClass: 'tier-e', price: '40,000 元以上',
                    detail: '全球顶级度假海岛、私人飞机+豪华游艇、全球米其林餐厅美食之旅、顶级SPA水疗中心、24小时专属管家。' }
            ],
            images: [
                { src: 'photos/8.jpg', alt: ' ' },
                { src: 'photos/9.jpg', alt: ' ' }
            ]
        },
        3: {
            who: "活力养护者",
            reason: "您关注健康管理或康复疗养，需要专业医疗与养生结合的服务。医疗+模式整合优质医疗资源与中医养生。",
            activities: "推荐游乐方式：专业健康体检、中医理疗、康复训练、养生课程、温泉药浴、营养膳食计划。",
            priceTiers: [
                { label: 'A档 · 经济型', tierClass: 'tier-a', price: '3,000 - 6,000 元',
                    detail: '基础健康体检套餐、社区中医理疗、养生讲座与课程、基础康复训练指导、药膳食疗入门。' },
                { label: 'B档 · 舒适型', tierClass: 'tier-b', price: '6,000 - 12,000 元',
                    detail: '综合体检+专业报告解读、专业中医理疗疗程、康复训练私教、养生度假村2-3日、温泉药浴体验。' },
                { label: 'C档 · 品质型', tierClass: 'tier-c', price: '12,000 - 25,000 元',
                    detail: '高端体检+多学科会诊、中医名家调理、定制康复疗程5-7日、高端养生度假、营养师一对一膳食计划。' },
                { label: 'D档 · 高端型', tierClass: 'tier-d', price: '25,000 - 50,000 元',
                    detail: '顶级医疗康养综合体、海外医疗旅游、私人医生全程陪护、干细胞/抗衰等前沿项目、总统套房级疗养环境。' },
                { label: 'E档 · 奢华型', tierClass: 'tier-e', price: '50,000 元以上',
                    detail: '全球顶级医疗康养、国际顶尖医院全套服务、私人医疗团队全程陪护、前沿抗衰老项目、高端疗养别墅。' }
            ],
            images: [
                { src: 'photos/11.jpg', alt: ' ' },
                { src: 'photos/12.jpg', alt: ' ' }
            ]
        }
    };

    // 安全工程数据：各模式可能的安全问题分类及防护措施
    var safetyData = {
        0: {
            modeName: "文化+健康养生",
            icon: "📚",
            risks: [
                {
                    category: "🏛️ 场所安全",
                    level: "中",
                    items: [
                        "古迹遗址台阶陡峭、地面不平，老年人易发生跌倒摔伤",
                        "热门文化景点人流密集，存在拥挤踩踏隐患",
                        "古建筑内消防设施老旧，紧急疏散通道狭窄",
                        "部分非正规文化场所缺乏安全警示标识"
                    ]
                },
                {
                    category: "💪 健康安全",
                    level: "中",
                    items: [
                        "长时间步行参观导致体力透支、关节疼痛",
                        "户外文化遗址暴晒，易引发中暑或日射病",
                        "异地特色饮食可能引起消化不适或过敏",
                        "突发疾病时周边医疗资源可达性不足"
                    ]
                },
                {
                    category: "🔒 财产安全",
                    level: "中高",
                    items: [
                        "景区人流密集区域扒窃风险较高",
                        "拍照分心时贵重物品（手机/相机）易遗失",
                        "非正规导游/商贩消费欺诈",
                        "个人证件信息泄露风险"
                    ]
                },
                {
                    category: "🚌 交通安全",
                    level: "中",
                    items: [
                        "长途旅行大巴疲劳驾驶风险",
                        "景区接驳车辆老旧、超载问题",
                        "偏远文化景点路况复杂、救援困难",
                        "老年团队出行缺乏随行医疗保障"
                    ]
                }
            ],
            measures: [
                { title: "出行前准备", content: "选择正规旅行社，确认资质和保险；提前了解目的地天气和地形；携带常用药品（降压药、心脏病急救药等）；穿着防滑舒适鞋子，携带折叠拐杖。" },
                { title: "场所安全防护", content: "优先选择有无障碍设施的景区；避开节假日高峰时段出行；参观古迹时使用登山杖辅助；仔细阅读安全标识，遵守景区规则；保持与团队联系，不单独离队。" },
                { title: "健康与医疗", content: "随身携带个人病历卡（血型、过敏史、既往病史）；每2小时安排休息时间；注意饮食卫生，优先选择正规餐厅；随身携带充足饮用水；购买含紧急救援的旅游保险。" },
                { title: "财产与信息", content: "贵重物品分开放置，使用防盗背包；手机开启定位功能，保存紧急联系人；不轻信陌生人推荐的高价商品；提前将行程告知家属，保持通讯畅通。" }
            ],
            safetyScore: { culture: 3, eco: 0, leisure: 1, medical: 1 }
        },
        1: {
            modeName: "生态+健康养生",
            icon: "🌱",
            risks: [
                {
                    category: "🌲 自然环境风险",
                    level: "高",
                    items: [
                        "森林/山地步道湿滑、坡度大，跌倒风险高",
                        "天气突变（暴雨、雷电、大风）导致被困",
                        "山区信号盲区，紧急情况无法求援",
                        "野生动物出没（蛇、野蜂、野猪等）威胁"
                    ]
                },
                {
                    category: "🦟 生物安全",
                    level: "中高",
                    items: [
                        "蚊虫叮咬传播疾病（登革热、蜱虫病等）",
                        "花粉过敏引发呼吸道不适或哮喘",
                        "野外水源不洁导致肠道感染",
                        "接触有毒植物引起皮肤过敏"
                    ]
                },
                {
                    category: "🧭 方向迷失",
                    level: "中高",
                    items: [
                        "未按标识路线行走导致迷路",
                        "手机电量耗尽无法导航",
                        "团队分散后联系困难",
                        "夜间野外辨识度低，无法返回"
                    ]
                },
                {
                    category: "🏕️ 住宿/设施",
                    level: "中",
                    items: [
                        "生态民宿消防设施不完善",
                        "偏远营地医疗急救条件有限",
                        "温泉区域地面湿滑、水温过高烫伤",
                        "野外露营缺乏安全护栏和保护措施"
                    ]
                }
            ],
            measures: [
                { title: "出行前准备", content: "选择有资质的生态旅行社；查询天气预报，避开恶劣天气；准备防滑登山鞋、冲锋衣、登山杖；下载离线地图，携带充电宝和GPS定位器；购买含山地救援的保险。" },
                { title: "环境安全防护", content: "严格遵守景区标识路线，不擅自进入未开发区域；登山前做好热身运动；结伴而行，至少3人一组；携带哨子用于紧急求救；关注天气变化，及时调整行程。" },
                { title: "生物与卫生", content: "穿长袖长裤，使用含DEET的驱虫剂；携带抗过敏药物和蛇药片；不饮用未处理的山泉水；不随意触摸野生动植物；随身携带消毒湿巾和创可贴。" },
                { title: "应急保障", content: "出发前在保护区管理处登记行程；每2小时与家属/领队报备位置；携带应急毯、手电筒、高热量食物；学习基础野外急救知识；记住景区救援电话。" }
            ],
            safetyScore: { culture: 0, eco: 4, leisure: 1, medical: 1 }
        },
        2: {
            modeName: "休闲+健康养生",
            icon: "🛋",
            risks: [
                {
                    category: "🏊 水上活动安全",
                    level: "高",
                    items: [
                        "海滨游泳时遭遇暗流、离岸流",
                        "温泉/SPA区域地面湿滑导致摔伤",
                        "泡温泉时间过长引发心脑血管意外",
                        "水上项目（浮潜、划船）缺乏专业指导"
                    ]
                },
                {
                    category: "🍽️ 饮食与消费",
                    level: "中",
                    items: [
                        "海鲜过敏或食物中毒",
                        "饮酒过量引发健康问题",
                        "高档消费场所的价格欺诈",
                        "自助餐食品安全隐患"
                    ]
                },
                {
                    category: "🏨 住宿安全",
                    level: "中低",
                    items: [
                        "酒店消防通道不畅通",
                        "房间内防滑措施不足（浴缸/卫生间）",
                        "高层酒店阳台缺乏安全护栏",
                        "陌生人敲门/电话骚扰"
                    ]
                },
                {
                    category: "☀️ 环境因素",
                    level: "中",
                    items: [
                        "海滩长时间暴晒导致晒伤或中暑",
                        "空调房内外温差过大引发感冒",
                        "海水/泳池水质不达标",
                        "人多拥挤区域传染病传播风险"
                    ]
                }
            ],
            measures: [
                { title: "出行前准备", content: "选择正规度假村/酒店，查看安全评价；了解海滨浴场安全等级和救生设施；携带防晒霜、墨镜、遮阳帽；购买含水上运动保障的旅游保险；学习基础水上自救知识。" },
                { title: "活动安全防护", content: "仅在设有救生员的海域游泳，遵守安全旗标识；泡温泉每次不超过15分钟，出水后缓慢起身；水上活动全程穿救生衣；饮酒后不参与任何水上活动；随身携带房卡和酒店名片。" },
                { title: "饮食与健康", content: "选择卫生条件好的餐厅，避免生食海鲜；适量饮酒，不空腹饮酒；多喝瓶装水，注意补水防晒；随身携带防过敏药和肠胃药；了解当地医院位置。" },
                { title: "住宿与财产", content: "入住时确认消防通道位置；使用浴室防滑垫，穿防滑拖鞋；贵重物品存放酒店保险箱；不随意给陌生人开门；睡觉前检查门窗是否锁好。" }
            ],
            safetyScore: { culture: 0, eco: 1, leisure: 3, medical: 1 }
        },
        3: {
            modeName: "医疗+健康养生",
            icon: "🏥",
            risks: [
                {
                    category: "⚕️ 医疗安全",
                    level: "高",
                    items: [
                        "非正规医疗机构资质不明、操作不规范",
                        "中医理疗（针灸/推拿）消毒不严导致感染",
                        "药物过敏反应未提前评估",
                        "医疗项目与个人既往病症冲突"
                    ]
                },
                {
                    category: "💊 用药安全",
                    level: "高",
                    items: [
                        "异地购药来源不明、药品质量不可控",
                        "保健品与处方药相互作用风险",
                        "盲目尝试民间偏方或未经验证的治疗",
                        "旅行中用药时间打乱影响疗效"
                    ]
                },
                {
                    category: "🏨 机构安全",
                    level: "中高",
                    items: [
                        "康养机构虚假宣传，实际服务与承诺不符",
                        "医疗设备老旧或维护不当",
                        "紧急情况转诊通道不畅通",
                        "私人医生/护工资质不明确"
                    ]
                },
                {
                    category: "🧠 心理安全",
                    level: "中",
                    items: [
                        "对治疗效果期望过高导致心理落差",
                        "医疗环境陌生引发焦虑情绪",
                        "隔离式疗养产生孤独感",
                        "健康信息泄露引发隐私担忧"
                    ]
                }
            ],
            measures: [
                { title: "出行前准备", content: "咨询主治医生确认适合的治疗项目；携带完整病历（含影像资料、化验单）；准备充足日常用药（多带3-5天量）；选择有卫健委认证的正规康养机构；购买含医疗转运的高额旅游保险。" },
                { title: "医疗安全防护", content: "到店后查验机构营业执照和医疗资质；治疗前与医师充分沟通病史和过敏史；拒绝来历不明的注射/手术类项目；保留所有消费凭证和治疗记录；确保24小时急救通道可用。" },
                { title: "用药管理", content: "携带药品原包装和医生处方；按时用药，设置手机提醒；不随意更换药品品牌或剂量；不轻信推销人员推荐的保健品；了解药物相互作用的基础知识。" },
                { title: "心理与权益", content: "理性看待康养效果，保持适度期望；与家人保持每日沟通；选择有同伴陪同的行程；了解消费者权益保护法相关条款；遇到纠纷及时拨打12315或当地卫健委电话。" }
            ],
            safetyScore: { culture: 0, eco: 0, leisure: 1, medical: 4 }
        }
    };

    // 用户安全害怕度评分（在各旅游模式下的安全问题害怕程度）
    var safetyFearScores = {
        cultureMode: 0,
        ecoMode: 0,
        leisureMode: 0,
        medicalMode: 0,
        siteSafety: 0,
        healthSafety: 0,
        propertySafety: 0,
        trafficSafety: 0,
        naturalRisk: 0,
        bioSafety: 0,
        lostRisk: 0,
        accommodationSafety: 0,
        waterSafety: 0,
        foodSafety: 0,
        hotelSafety: 0,
        environmentSafety: 0,
        medicalSafety: 0,
        drugSafety: 0,
        institutionSafety: 0,
        mentalSafety: 0
    };

    // 安全认知度综合评分
    var safetyAwarenessScore = 0;
    var hasUserSetSafetyScores = false; // 用户是否主动完成过安全评价

    var usrVec = null;
    var bestIdx = null;
    var simScores = null;
    var navStack = [];

    var deepseekApiKey = 'sk-8ab028cdb27f44a38b712422179e63ba';
    var deepseekApiUrl = 'https://api.deepseek.com/chat/completions';
    var chatHistory = [];
    var isAiLoading = false;

    function buildSystemPrompt() {
        var currentResult = '暂无计算结果，用户尚未完成数据化选择。';
        if (bestIdx !== null && simScores) {
            currentResult = '当前计算结果：' +
                modeNames.map(function(name, i) { return name + '相似度' + simScores[i].toFixed(4); }).join('，') +
                '。推荐模式：' + modeNames[bestIdx] + '（匹配度' + simScores[bestIdx].toFixed(4) + '）。' +
                '适合人群：' + modeDetail[bestIdx].who + '。推荐理由：' + modeDetail[bestIdx].reason +
                '。' + modeDetail[bestIdx].activities;
        }
        return '你是"小旅"，一个友好、专业的康养旅游智能助手，服务于"健康养生旅游模式可视化选择系统"。' +
            '你的职责是帮助用户了解康养旅游模式、使用平台功能、解答相关问题。' +
            '请用简洁、亲切的中文回复，适当使用emoji增加亲和力。' +
            '\n\n【系统功能】' +
            '\n- 左侧导航栏包含：系统首页、研究背景、模式简介、养生方式、兴趣打分表、旅游组群、安全旅游分析、数据化选择、可视化分析' +
            '\n- 数据化选择：用户输入文化/生态/休闲/医疗兴趣值（0-10分），系统用余弦相似度算法匹配最佳康养模式' +
            '\n- 可视化分析：提供折线图、饼状图、散点图三种图表对比，并包含安全认知度自评打分' +
            '\n- 安全旅游分析：结合用户画像分析各模式安全问题（场所/健康/财产/交通/自然/生物/迷失/住宿/水上/饮食/医疗/用药/机构/心理等分类），给出防护措施' +
            '\n- 养生方式：展示四种模式的图片、消费档次（ABCDE五档，从经济型到奢华型）' +
            '\n- 兴趣打分表：包含五种兴趣类型10分制标准和旅游安全问题害怕度打分标准' +
            '\n- 支持导出Excel和Word报告' +
            '\n- 支持语音朗读推荐结果' +
            '\n\n【四种康养模式】' +
            '\n1. 文化+健康养生：以文化浸润+身心养生为核心，适合文化探寻者，活动包括参观历史文化名城、博物馆、非遗体验、禅修静养等' +
            '\n2. 生态+健康养生：以生态资源+身心修复为核心，适合自然热衷者，活动包括森林浴、湿地漫步、海滨冥想、温泉疗养等' +
            '\n3. 休闲+健康养生：以舒适度假、放松身心为核心，适合都市逃离者，活动包括海滨度假村、温泉酒店、美食之旅、SPA护理等' +
            '\n4. 医疗+健康养生：以专业医疗+健康管理为核心，适合活力养护者，活动包括健康体检、中医理疗、康复训练、营养膳食等' +
            '\n\n【消费档次】每种模式均有ABCDE五档：' +
            '\n- A档经济型：低价位，基础体验' +
            '\n- B档舒适型：中等价位，品质体验' +
            '\n- C档品质型：较高价位，高端体验' +
            '\n- D档高端型：高价位，定制奢华体验' +
            '\n- E档奢华型：顶级价位，全球奢华体验' +
            '\n\n【安全工程】系统内置安全旅游分析模块，覆盖四大模式共16类安全风险维度，提供出行前准备到应急保障的全链路防护措施。用户在可视化分析页可进行安全认知度自评，系统将安全因素纳入最终推荐。' +
            '\n\n【算法说明】使用K均值聚类将老年游客划分为四类用户画像（文化探寻者、自然热衷者、都市逃离者、活力养护者），再用余弦相似度量化用户与模式的匹配度' +
            '\n\n【当前状态】' + currentResult +
            '\n\n【注意事项】' +
            '\n- 如果用户问朗读/语音相关，告诉他们点击聊天框下方的🔊按钮或快捷按钮中的"朗读推荐"' +
            '\n- 如果用户问页面缩放，告诉他们使用聊天面板中的放大+/缩小-按钮' +
            '\n- 如果用户问安全问题，引导他们查看"安全旅游分析"页面' +
            '\n- 回复控制在200字以内，简洁明了' +
            '\n- 不要编造不存在的功能或数据';
    }

    var allPages = document.querySelectorAll('.page');
    var detailContent = document.getElementById('detailContent');
    var backFromDetail = document.getElementById('backFromDetail');
    var calcResultDisplay = document.getElementById('calcResultDisplay');
    var gotoVisualBtn = document.getElementById('gotoVisualBtn');
    var exportExcelFromCalcBtn = document.getElementById('exportExcelFromCalcBtn');
    var chartSelectionArea = document.getElementById('chartSelectionArea');
    var chartDisplayArea = document.getElementById('chartDisplayArea');
    let myChart = null;

    var sidebar = document.getElementById('sidebar');
    var sidebarToggle = document.getElementById('sidebarToggle');
    var navItems = document.querySelectorAll('.nav-item[data-page]');
    var homeCards = document.querySelectorAll('.home-card[id]');

    var aiAvatarBtn = document.getElementById('aiAvatarBtn');
    var aiChatPanel = document.getElementById('aiChatPanel');
    var aiChatClose = document.getElementById('aiChatClose');
    var aiChatBody = document.getElementById('aiChatBody');
    var aiChatInput = document.getElementById('aiChatInput');
    var aiSendBtn = document.getElementById('aiSendBtn');
    var aiSpeakLastBtn = document.getElementById('aiSpeakLastBtn');
    var aiBubble = document.getElementById('aiBubble');
    var aiQuickBtns = document.getElementById('aiQuickBtns');
    let lastAiMsg = '';
    let speaking = false;
    let voiceList = [];
    let speechMode = null;
    let audioEl = null;
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    function loadVoices() {
        if (!('speechSynthesis' in window)) return;
        voiceList = window.speechSynthesis.getVoices();
    }

    function getZhVoice() {
        if (voiceList.length === 0) loadVoices();
        return voiceList.find(function(v) { return v.lang === 'zh-CN'; }) ||
               voiceList.find(function(v) { return v.lang.startsWith('zh-CN'); }) ||
               voiceList.find(function(v) { return v.lang.startsWith('zh'); }) ||
               null;
    }

    // 渲染可视化页面的安全认知度打分网格
    function renderSafetyFearGrid() {
        var grid = document.getElementById('safetyFearGrid');
        if (!grid) return;

        // 将safetyFearScores中的值映射到滑块ID
        var scoreMap = {
            'safetyFearCulture': 'siteSafety', 'safetyFearHealth': 'healthSafety', 'safetyFearProperty': 'propertySafety', 'safetyFearTraffic': 'trafficSafety',
            'safetyFearNatural': 'naturalRisk', 'safetyFearBio': 'bioSafety', 'safetyFearLost': 'lostRisk', 'safetyFearAccommodation': 'accommodationSafety',
            'safetyFearWater': 'waterSafety', 'safetyFearFood': 'foodSafety', 'safetyFearHotel': 'hotelSafety', 'safetyFearEnv': 'environmentSafety',
            'safetyFearMedical': 'medicalSafety', 'safetyFearDrug': 'drugSafety', 'safetyFearInstitution': 'institutionSafety', 'safetyFearMental': 'mentalSafety'
        };

        var fearItems = [
            { id: 'safetyFearCulture', group: '📚 文化+', label: '场所安全害怕度', desc: '古迹地形/拥挤踩踏/消防安全' },
            { id: 'safetyFearHealth', group: '📚 文化+', label: '健康安全害怕度', desc: '体力透支/中暑/饮食卫生' },
            { id: 'safetyFearProperty', group: '📚 文化+', label: '财产安全害怕度', desc: '被盗/遗失/消费欺诈' },
            { id: 'safetyFearTraffic', group: '📚 文化+', label: '交通安全害怕度', desc: '长途疲劳/接驳车/路况' },
            { id: 'safetyFearNatural', group: '🌱 生态+', label: '自然风险害怕度', desc: '湿滑/天气突变/信号盲区' },
            { id: 'safetyFearBio', group: '🌱 生态+', label: '生物安全害怕度', desc: '蚊虫叮咬/过敏/水源不洁' },
            { id: 'safetyFearLost', group: '🌱 生态+', label: '迷失风险害怕度', desc: '迷路/通讯中断/团队分散' },
            { id: 'safetyFearAccommodation', group: '🌱 生态+', label: '住宿设施害怕度', desc: '民宿消防/急救条件/温泉' },
            { id: 'safetyFearWater', group: '🛋 休闲+', label: '水上安全害怕度', desc: '暗流/溺水/滑倒/SPA' },
            { id: 'safetyFearFood', group: '🛋 休闲+', label: '饮食消费害怕度', desc: '过敏/食物中毒/消费欺诈' },
            { id: 'safetyFearHotel', group: '🛋 休闲+', label: '酒店安全害怕度', desc: '消防/防滑/防盗' },
            { id: 'safetyFearEnv', group: '🛋 休闲+', label: '环境因素害怕度', desc: '暴晒/温差/水质' },
            { id: 'safetyFearMedical', group: '🏥 医疗+', label: '医疗操作害怕度', desc: '资质/感染/并发症' },
            { id: 'safetyFearDrug', group: '🏥 医疗+', label: '用药安全害怕度', desc: '药品来源/相互作用/偏方' },
            { id: 'safetyFearInstitution', group: '🏥 医疗+', label: '机构资质害怕度', desc: '虚假宣传/设备/转诊' },
            { id: 'safetyFearMental', group: '🏥 医疗+', label: '心理因素害怕度', desc: '期望落差/焦虑/隐私' }
        ];

        var currentGroup = '';
        var html = '';
        fearItems.forEach(function(item) {
            if (item.group !== currentGroup) {
                if (currentGroup !== '') html += '</div>';
                currentGroup = item.group;
                html += '<div class="safety-fear-group">' +
                    '<div class="safety-fear-group-title">' + item.group + '</div>';
            }
            var savedVal = scoreMap[item.id] ? (safetyFearScores[scoreMap[item.id]] || 0) : 0;
            html += '<div class="safety-fear-item">' +
                '<label class="safety-fear-label" title="' + item.desc + '">' + item.label + '<br><small>' + item.desc + '</small></label>' +
                '<div class="safety-fear-input-row">' +
                '<input type="range" class="safety-fear-slider" id="' + item.id + '" min="0" max="10" step="0.5" value="' + savedVal + '" oninput="window.updateSafetyFearValue(\'' + item.id + '\')">' +
                '<span class="safety-fear-val" id="' + item.id + 'Val">' + savedVal + '</span>' +
                '</div>' +
                '</div>';
        });
        if (currentGroup !== '') html += '</div>';

        grid.innerHTML = html;

        // 初始化实时面板
        setTimeout(function() { refreshLiveSafetyPanel(); }, 150);
    }

    // 实时更新安全害怕度：显示数值 + 同步全局分数 + 刷新实时面板
    function updateSafetyFearValue(sliderId) {
        var slider = document.getElementById(sliderId);
        var valEl = document.getElementById(sliderId + 'Val');
        if (!slider) return;
        var val = parseFloat(slider.value) || 0;
        if (valEl) valEl.textContent = val.toFixed(1);

        // 实时同步到全局 safetyFearScores
        var keyMap = {
            'safetyFearCulture': 'siteSafety', 'safetyFearHealth': 'healthSafety',
            'safetyFearProperty': 'propertySafety', 'safetyFearTraffic': 'trafficSafety',
            'safetyFearNatural': 'naturalRisk', 'safetyFearBio': 'bioSafety',
            'safetyFearLost': 'lostRisk', 'safetyFearAccommodation': 'accommodationSafety',
            'safetyFearWater': 'waterSafety', 'safetyFearFood': 'foodSafety',
            'safetyFearHotel': 'hotelSafety', 'safetyFearEnv': 'environmentSafety',
            'safetyFearMedical': 'medicalSafety', 'safetyFearDrug': 'drugSafety',
            'safetyFearInstitution': 'institutionSafety', 'safetyFearMental': 'mentalSafety'
        };
        if (keyMap[sliderId]) {
            safetyFearScores[keyMap[sliderId]] = val;
        }

        // 实时计算模式级和综合级安全认知度
        safetyFearScores.cultureMode = Math.round(((safetyFearScores.siteSafety + safetyFearScores.healthSafety + safetyFearScores.propertySafety + safetyFearScores.trafficSafety) / 4) * 10) / 10;
        safetyFearScores.ecoMode = Math.round(((safetyFearScores.naturalRisk + safetyFearScores.bioSafety + safetyFearScores.lostRisk + safetyFearScores.accommodationSafety) / 4) * 10) / 10;
        safetyFearScores.leisureMode = Math.round(((safetyFearScores.waterSafety + safetyFearScores.foodSafety + safetyFearScores.hotelSafety + safetyFearScores.environmentSafety) / 4) * 10) / 10;
        safetyFearScores.medicalMode = Math.round(((safetyFearScores.medicalSafety + safetyFearScores.drugSafety + safetyFearScores.institutionSafety + safetyFearScores.mentalSafety) / 4) * 10) / 10;

        var fearIds = ['safetyFearCulture','safetyFearHealth','safetyFearProperty','safetyFearTraffic',
            'safetyFearNatural','safetyFearBio','safetyFearLost','safetyFearAccommodation',
            'safetyFearWater','safetyFearFood','safetyFearHotel','safetyFearEnv',
            'safetyFearMedical','safetyFearDrug','safetyFearInstitution','safetyFearMental'];
        var total = 0;
        fearIds.forEach(function(id) {
            var el = document.getElementById(id);
            if (el) total += parseFloat(el.value) || 0;
        });
        safetyAwarenessScore = Math.round((total / fearIds.length) * 10) / 10;

        // 刷新实时面板
        refreshLiveSafetyPanel();

        // 如果图表已渲染，自动刷新（带防抖）
        if (chartDisplayArea && chartDisplayArea.style.display !== 'none' && currentChartType && bestIdx !== null) {
            clearTimeout(window._safetyDebounceTimer);
            window._safetyDebounceTimer = setTimeout(function() {
                renderChart(currentChartType);
            }, 400);
        }
    }

    // 刷新实时安全认知度面板
    function refreshLiveSafetyPanel() {
        var panel = document.getElementById('liveSafetyPanel');
        if (!panel) return;
        var levelText = safetyAwarenessScore <= 2 ? '🟢 极低（非常勇敢）' :
                        safetyAwarenessScore <= 4 ? '🟢 较低（比较放心）' :
                        safetyAwarenessScore <= 6 ? '🟡 中等（适度担忧）' :
                        safetyAwarenessScore <= 8 ? '🟠 较高（比较害怕）' : '🔴 极高（非常恐惧）';
        panel.innerHTML =
            '<div style="display:flex; gap:15px; flex-wrap:wrap; align-items:center; justify-content:space-between;">' +
            '<div><strong style="font-size:1.1em;">📊 实时综合安全认知度：<span style="color:#e76f51; font-size:1.3em;">' + safetyAwarenessScore.toFixed(1) + '</span> / 10</strong> ' +
            '<span style="font-size:0.95em;">' + levelText + '</span></div>' +
            '<div style="display:flex; gap:10px; flex-wrap:wrap; font-size:0.85rem;">' +
            '<span>📚文化+：<strong>' + safetyFearScores.cultureMode.toFixed(1) + '</strong></span>' +
            '<span>🌱生态+：<strong>' + safetyFearScores.ecoMode.toFixed(1) + '</strong></span>' +
            '<span>🛋休闲+：<strong>' + safetyFearScores.leisureMode.toFixed(1) + '</strong></span>' +
            '<span>🏥医疗+：<strong>' + safetyFearScores.medicalMode.toFixed(1) + '</strong></span>' +
            '</div></div>';
    }

    // 应用安全认知度打分（分数已实时同步，此处强制刷新图表和面板）
    function applySafetyFearScores() {
        // 刷新所有滑块值到全局（确保一致性）
        var fearIds = [
            'safetyFearCulture', 'safetyFearHealth', 'safetyFearProperty', 'safetyFearTraffic',
            'safetyFearNatural', 'safetyFearBio', 'safetyFearLost', 'safetyFearAccommodation',
            'safetyFearWater', 'safetyFearFood', 'safetyFearHotel', 'safetyFearEnv',
            'safetyFearMedical', 'safetyFearDrug', 'safetyFearInstitution', 'safetyFearMental'
        ];
        fearIds.forEach(function(id) { updateSafetyFearValue(id); });

        refreshLiveSafetyPanel();

        var fearLevel = safetyAwarenessScore <= 2 ? '极低（非常勇敢）' :
                        safetyAwarenessScore <= 4 ? '较低（比较放心）' :
                        safetyAwarenessScore <= 6 ? '中等（适度担忧）' :
                        safetyAwarenessScore <= 8 ? '较高（比较害怕）' : '极高（非常恐惧）';

        alert('🛡️ 安全认知度已确认！\n\n📊 综合安全害怕度：' + safetyAwarenessScore.toFixed(1) + ' / 10（' + fearLevel + '）\n\n' +
            '📚 文化+：' + safetyFearScores.cultureMode.toFixed(1) + ' | ' +
            '🌱 生态+：' + safetyFearScores.ecoMode.toFixed(1) + ' | ' +
            '🛋 休闲+：' + safetyFearScores.leisureMode.toFixed(1) + ' | ' +
            '🏥 医疗+：' + safetyFearScores.medicalMode.toFixed(1) + '\n\n' +
            '💡 分数已实时生效！您可直接去"数据化选择"页进行安全评价。');

        // 强制刷新图表
        if (bestIdx !== null && chartDisplayArea && chartDisplayArea.style.display !== 'none' && currentChartType) {
            renderChart(currentChartType);
        }
    }

    // 获取安全害怕度等级文字
    function getFearLevelText(score) {
        if (score <= 1) return '完全不害怕';
        if (score <= 2.5) return '基本放心';
        if (score <= 4) return '略有担忧';
        if (score <= 5.5) return '中等担忧';
        if (score <= 7) return '比较害怕';
        if (score <= 8.5) return '相当害怕';
        return '极度恐惧';
    }

    // 安全评价滑块变动时同步数值和等级文字
    function updateSafetyEvalSlider(sliderId) {
        var slider = document.getElementById(sliderId);
        if (!slider) return;
        var val = parseFloat(slider.value);
        hasUserSetSafetyScores = true; // 用户主动操作了安全滑块，标记已评测
        var numId = sliderId.replace('Slider', 'Num');
        var levelId = sliderId.replace('Slider', 'Level');
        var numEl = document.getElementById(numId);
        var levelEl = document.getElementById(levelId);
        if (numEl) numEl.value = val;
        if (levelEl) levelEl.textContent = getFearLevelText(val);

        // 实时刷新数据化选择页的安全认知度面板
        refreshDataSafetyLivePanel();
    }

    // 刷新数据化选择页的实时安全认知度面板（显示4模式分数+综合认知度+高风险提示）
    function refreshDataSafetyLivePanel() {
        var panel = document.getElementById('dataSafetyLivePanel');
        if (!panel) return;

        var scores = getUserSafetyEvalScores();
        var avg = Math.round(((scores[0] + scores[1] + scores[2] + scores[3]) / 4) * 10) / 10;
        var levelText = avg <= 1 ? '🟢 极低' : avg <= 4 ? '🟢 较低' : avg <= 6 ? '🟡 中等' : avg <= 8 ? '🟠 较高' : '🔴 极高';

        // 找出害怕度最高的模式，展示其高风险
        var maxMode = 0;
        var maxScore = scores[0];
        for (var i = 1; i < 4; i++) { if (scores[i] > maxScore) { maxScore = scores[i]; maxMode = i; } }
        var modeNamesShort = ['文化+', '生态+', '休闲+', '医疗+'];

        var highRiskHTML = '';
        if (maxScore > 0) {
            var sd = safetyData[maxMode];
            if (sd) {
                var topRisks = [];
                sd.risks.forEach(function(rg) {
                    if (rg.level === '高' || rg.level === '中高') {
                        topRisks.push(rg.category + '（' + rg.level + '风险）');
                    }
                });
                if (topRisks.length > 0) {
                    highRiskHTML = '<br><span style="font-size:0.85rem; color:#c0392b;">⚠️ ' + modeNamesShort[maxMode] + '需重点关注：' + topRisks.slice(0, 3).join('、') + '</span>';
                }
            }
        }

        var isEvaluated = (scores[0] !== 0 || scores[1] !== 0 || scores[2] !== 0 || scores[3] !== 0);
        var borderStyle = isEvaluated ? '2px solid #e76f51' : '2px dashed #bbb';
        var bgStyle = isEvaluated ? 'linear-gradient(135deg, #fff5f5, #ffe8e8)' : 'linear-gradient(135deg, #f5f5f5, #e8e8e8)';

        panel.style.background = bgStyle;
        panel.style.border = borderStyle;

        panel.innerHTML =
            '<div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center; justify-content:space-between;">' +
            '<div>' +
            '<strong style="font-size:1.05em;">📊 实时安全认知度：<span style="color:#e76f51; font-size:1.25em;">' +
            (isEvaluated ? avg.toFixed(1) + ' / 10' : '未评测') +
            '</span> <span style="font-size:0.9em;">' + levelText + '</span></strong>' +
            highRiskHTML +
            '</div>' +
            '<div style="display:flex; gap:8px; flex-wrap:wrap; font-size:0.82rem;">' +
            '<span>📚文化+：<strong style="color:' + (scores[0] > 5 ? '#d62828' : '#2d6a2d') + ';">' + scores[0].toFixed(1) + '</strong></span>' +
            '<span>🌱生态+：<strong style="color:' + (scores[1] > 5 ? '#d62828' : '#2d6a2d') + ';">' + scores[1].toFixed(1) + '</strong></span>' +
            '<span>🛋休闲+：<strong style="color:' + (scores[2] > 5 ? '#d62828' : '#2d6a2d') + ';">' + scores[2].toFixed(1) + '</strong></span>' +
            '<span>🏥医疗+：<strong style="color:' + (scores[3] > 5 ? '#d62828' : '#2d6a2d') + ';">' + scores[3].toFixed(1) + '</strong></span>' +
            '</div></div>';
    }

    // 安全评价数值框变动时同步滑块
    function syncSafetyEvalSlider(sliderId, value) {
        var val = parseFloat(value);
        if (isNaN(val)) val = 5;
        val = Math.max(0, Math.min(10, val));
        var slider = document.getElementById(sliderId);
        if (slider) slider.value = val;
        updateSafetyEvalSlider(sliderId);
    }

    // 获取用户在数据化选择页自行输入的各模式安全害怕度
    function getUserSafetyEvalScores() {
        var cultureSlider = document.getElementById('safetyEvalCultureSlider');
        var ecoSlider = document.getElementById('safetyEvalEcoSlider');
        var leisureSlider = document.getElementById('safetyEvalLeisureSlider');
        var medicalSlider = document.getElementById('safetyEvalMedicalSlider');
        return {
            0: cultureSlider ? parseFloat(cultureSlider.value) || 0 : 0,
            1: ecoSlider ? parseFloat(ecoSlider.value) || 0 : 0,
            2: leisureSlider ? parseFloat(leisureSlider.value) || 0 : 0,
            3: medicalSlider ? parseFloat(medicalSlider.value) || 0 : 0
        };
    }

    // 将可视化分析页的安全认知度同步到安全评价输入面板
    function syncSafetyFromVisualToEval() {
        var modeMap = {
            'safetyEvalCultureSlider': safetyFearScores.cultureMode,
            'safetyEvalEcoSlider': safetyFearScores.ecoMode,
            'safetyEvalLeisureSlider': safetyFearScores.leisureMode,
            'safetyEvalMedicalSlider': safetyFearScores.medicalMode
        };
        Object.keys(modeMap).forEach(function(sliderId) {
            var slider = document.getElementById(sliderId);
            if (slider) {
                slider.value = modeMap[sliderId];
                updateSafetyEvalSlider(sliderId);
            }
        });
        hasUserSetSafetyScores = true;
        refreshDataSafetyLivePanel();
        alert('📥 已从可视化分析页同步安全认知度打分！\n\n📚 文化+：' + safetyFearScores.cultureMode.toFixed(1) +
            '\n🌱 生态+：' + safetyFearScores.ecoMode.toFixed(1) +
            '\n🛋 休闲+：' + safetyFearScores.leisureMode.toFixed(1) +
            '\n🏥 医疗+：' + safetyFearScores.medicalMode.toFixed(1));
    }

    // 从数据化选择页的安全评价面板同步分数到可视化分析页的全局变量
    // 用户在数据化选择页设定的4个模式级害怕度 → 展开为16个维度级分数 → 更新全局safetyFearScores
    function syncVisualScoresFromDataEval() {
        var userScores = getUserSafetyEvalScores();
        if (!userScores) return;

        // 无条件从数据化选择页同步用户安全分数到全局变量
        // 用户可能在数据化选择页修改了安全评价面板的滑块值

        // 将模式级分数展开到16个维度
        safetyFearScores.siteSafety = userScores[0];
        safetyFearScores.healthSafety = userScores[0];
        safetyFearScores.propertySafety = userScores[0];
        safetyFearScores.trafficSafety = userScores[0];

        safetyFearScores.naturalRisk = userScores[1];
        safetyFearScores.bioSafety = userScores[1];
        safetyFearScores.lostRisk = userScores[1];
        safetyFearScores.accommodationSafety = userScores[1];

        safetyFearScores.waterSafety = userScores[2];
        safetyFearScores.foodSafety = userScores[2];
        safetyFearScores.hotelSafety = userScores[2];
        safetyFearScores.environmentSafety = userScores[2];

        safetyFearScores.medicalSafety = userScores[3];
        safetyFearScores.drugSafety = userScores[3];
        safetyFearScores.institutionSafety = userScores[3];
        safetyFearScores.mentalSafety = userScores[3];

        // 更新模式级
        safetyFearScores.cultureMode = userScores[0];
        safetyFearScores.ecoMode = userScores[1];
        safetyFearScores.leisureMode = userScores[2];
        safetyFearScores.medicalMode = userScores[3];

        // 重新计算综合认知度
        safetyAwarenessScore = Math.round(((userScores[0] + userScores[1] + userScores[2] + userScores[3]) / 4) * 10) / 10;

        // 如果用户有非0分数，标记已完成评测
        if (userScores[0] !== 0 || userScores[1] !== 0 || userScores[2] !== 0 || userScores[3] !== 0) {
            hasUserSetSafetyScores = true;
        }
    }

    // 重置安全评价输入面板为默认值
    function resetSafetyEvalInputs() {
        ['safetyEvalCultureSlider', 'safetyEvalEcoSlider', 'safetyEvalLeisureSlider', 'safetyEvalMedicalSlider'].forEach(function(sliderId) {
            var slider = document.getElementById(sliderId);
            if (slider) {
                slider.value = 0;
                updateSafetyEvalSlider(sliderId);
            }
        });
        hasUserSetSafetyScores = false; // 重置为未评测
    }

    // 安全评价：结合兴趣匹配度 + 安全认知度，综合推荐最优模式
    function performSafetyEvaluation() {
        // 先检查是否已进行兴趣计算
        if (!usrVec || bestIdx === null || !simScores) {
            alert('请先点击"快速计算"完成兴趣匹配计算，再进行安全评价。');
            return;
        }

        var consumption = parseFloat(document.getElementById('consumptionInput').value) || 5;

        // 获取用户在面板中自行输入的各模式安全害怕度
        var modeFearMap = getUserSafetyEvalScores();

        // 用户点击了执行安全评价，标记已完成评测
        hasUserSetSafetyScores = true;

        // 综合评分算法：
        // combinedScore = 兴趣相似度 × (1 - 安全害怕度/20) × 100
        // 安全害怕度惩罚系数：害怕度10分时打5折，害怕度0分时满分
        var combinedScores = [];
        var totalSim = 0;
        modeNames.forEach(function(name, i) {
            var sim = simScores[i];
            var fearPenalty = 1 - (modeFearMap[i] / 20);
            var combined = sim * fearPenalty * 100;
            totalSim += sim;
            combinedScores.push({
                index: i,
                name: name,
                sim: sim,
                fearScore: modeFearMap[i],
                fearPenalty: fearPenalty,
                combined: combined,
                safetyLevel: modeFearMap[i] <= 3 ? '🟢 安全放心' : modeFearMap[i] <= 6 ? '🟡 适度谨慎' : '🔴 高度警惕'
            });
        });

        // 按综合得分排序
        combinedScores.sort(function(a, b) { return b.combined - a.combined; });

        var bestBySafety = combinedScores[0];
        var detail = modeDetail[bestBySafety.index];
        var sd = safetyData[bestBySafety.index];
        var tier = getConsumptionTier(consumption);
        var smartRec = getIntelligentRecommendation(bestBySafety.index, consumption, modeFearMap);

        // 构建详细结果HTML
        var html = '<div style="background:linear-gradient(135deg, #fff0f0, #ffe8e8); padding:18px; border-radius:12px; border:2px solid #e76f51; margin-bottom:15px;">';
        html += '<strong style="font-size:1.2em; color:#c0392b;">🛡️ 安全评价 · 综合推荐结果</strong><br>';
        html += '<span style="color:#5a3030; font-size:0.9em;">算法：综合得分 = 兴趣余弦相似度 × (1 - 您自选的安全害怕度/20) × 100</span><br>';
        html += '<span style="color:#888; font-size:0.8em;">📝 安全害怕度来源：您在当前页面自行设定 | 📚 文化+:' + modeFearMap[0].toFixed(1) + ' | 🌱 生态+:' + modeFearMap[1].toFixed(1) + ' | 🛋 休闲+:' + modeFearMap[2].toFixed(1) + ' | 🏥 医疗+:' + modeFearMap[3].toFixed(1) + '</span>';
        html += '</div>';

        // 综合排名表
        html += '<div class="safety-overview-table"><table class="score-table"><thead><tr>' +
            '<th>排名</th><th>康养模式</th><th>兴趣相似度</th><th>安全害怕度</th><th>安全等级</th><th>综合得分</th>' +
            '</tr></thead><tbody>';

        combinedScores.forEach(function(cs, rank) {
            var isBest = rank === 0;
            var rowStyle = isBest ? 'background:#ffe0e0; font-weight:bold;' : '';
            html += '<tr style="' + rowStyle + '">' +
                '<td>' + (isBest ? '🥇' : rank === 1 ? '🥈' : rank === 2 ? '🥉' : '  ' + (rank + 1)) + '</td>' +
                '<td>' + cs.name + (isBest ? ' ⬅ 推荐' : '') + '</td>' +
                '<td>' + cs.sim.toFixed(4) + '</td>' +
                '<td>' + cs.fearScore.toFixed(1) + '/10</td>' +
                '<td>' + cs.safetyLevel + '</td>' +
                '<td><strong>' + cs.combined.toFixed(2) + '</strong></td>' +
                '</tr>';
        });
        html += '</tbody></table></div>';

        // 与纯兴趣推荐的对比
        if (bestBySafety.index !== bestIdx) {
            html += '<div style="background:#fff8e8; padding:15px; border-radius:10px; border:2px solid #e9c46a; margin:15px 0;">';
            html += '<strong style="color:#8a6520;">⚠️ 重要提示：安全评价结果与纯兴趣推荐不同！</strong><br>';
            html += '<span style="color:#5a4a20; line-height:1.7;">' +
                '• 纯兴趣推荐：<strong>' + modeNames[bestIdx] + '</strong>（相似度 ' + simScores[bestIdx].toFixed(4) + '）<br>' +
                '• 安全综合评价：<strong>' + bestBySafety.name + '</strong>（综合得分 ' + bestBySafety.combined.toFixed(2) + '）<br>' +
                '• 原因：您对"' + modeNames[bestIdx] + '"的安全害怕度为 <strong>' + modeFearMap[bestIdx].toFixed(1) + '/10</strong>，' +
                '经过安全加权后，"' + bestBySafety.name + '"因安全害怕度更低（' + bestBySafety.fearScore.toFixed(1) + '/10）而综合得分更高。<br>' +
                '• 建议您优先选择安全综合评价推荐的模式，或重新调整安全认知度打分后再次评价。</span>';
            html += '</div>';
        }

        // 最优模式详细信息
        html += '<div style="background:linear-gradient(135deg, #e8f5e0, #d4ecc8); padding:18px; border-radius:12px; border:2px solid #6bae5e; margin:15px 0;">';
        html += '<strong style="font-size:1.1em; color:#2d4a2d;">🎯 安全最优推荐：' + bestBySafety.name + '</strong><br>';
        html += '<em>适合人群：' + detail.who + '</em><br>';
        html += '<strong>推荐理由：</strong>' + detail.reason + '<br>';
        html += '<strong>' + detail.activities + '</strong><br><br>';
        html += smartRec.content;
        html += '</div>';

        // 安全分析详情
        if (sd) {
            html += '<div style="background:#fff; border:2px solid #e76f51; border-radius:12px; padding:18px; margin-top:15px;">';
            html += '<h4 style="color:#c0392b; margin-bottom:12px;">🚨 ' + bestBySafety.name + ' · 安全风险分析及防护措施</h4>';

            sd.risks.forEach(function(riskGroup) {
                var levelColor = riskGroup.level === '高' ? '#d62828' : riskGroup.level === '中高' ? '#e76f51' : riskGroup.level === '中' ? '#f4a261' : '#6a994e';
                html += '<div style="border-left:4px solid ' + levelColor + '; padding:10px 15px; margin-bottom:10px; background:#fafafa; border-radius:0 8px 8px 0;">' +
                    '<strong style="color:' + levelColor + ';">' + riskGroup.category + ' <span style="background:' + levelColor + '; color:#fff; padding:1px 8px; border-radius:10px; font-size:0.7rem;">' + riskGroup.level + '风险</span></strong>' +
                    '<ul style="margin:6px 0 0 20px; padding:0; color:#4a6b3a; font-size:0.9rem; line-height:1.6;">';
                riskGroup.items.forEach(function(item) {
                    html += '<li>' + item + '</li>';
                });
                html += '</ul></div>';
            });

            html += '<h4 style="color:#2d4a2d; margin:15px 0 10px;">🛡️ 安全防护措施（安全工程四层控制）</h4>';
            sd.measures.forEach(function(measure) {
                html += '<div style="background:#f0f7e8; border-radius:8px; padding:10px 14px; margin-bottom:8px; border-left:4px solid #6bae5e;">' +
                    '<strong style="color:#2d4a2d;">' + measure.title + '：</strong>' +
                    '<span style="color:#4a6b3a; line-height:1.6;">' + measure.content + '</span></div>';
            });
            html += '</div>';
        }

        // 操作按钮
        html += '<div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:15px;">' +
            '<button class="btn-accent" id="gotoVisualFromSafetyEval" style="background:linear-gradient(135deg, #e76f51, #c0392b);">📈 进入可视化分析</button>' +
            '<button class="btn-secondary" id="exportSafetyEvalBtn">📄 导出安全评价报告(Word)</button>' +
            '<button class="btn-return-chart" id="reEvalBtn">🔄 重新评价</button>' +
            '</div>';

        var resultEl = document.getElementById('safetyEvalResult');
        resultEl.innerHTML = html;
        resultEl.style.display = 'block';

        // 存储安全评价结果供导出使用
        resultEl.setAttribute('data-safety-eval', JSON.stringify({
            bestBySafety: { index: bestBySafety.index, name: bestBySafety.name, combined: bestBySafety.combined },
            combinedScores: combinedScores.map(function(cs) { return { name: cs.name, sim: cs.sim, fearScore: cs.fearScore, combined: cs.combined, safetyLevel: cs.safetyLevel }; }),
            bestByInterest: { index: bestIdx, name: modeNames[bestIdx], sim: simScores[bestIdx] }
        }));

        // 绑定安全评价结果内的按钮事件
        setTimeout(function() {
            var gotoVisualBtn2 = document.getElementById('gotoVisualFromSafetyEval');
            var exportBtn = document.getElementById('exportSafetyEvalBtn');
            var reEvalBtn = document.getElementById('reEvalBtn');

            if (gotoVisualBtn2) {
                gotoVisualBtn2.addEventListener('click', function() {
                    var safetyBestIdx = bestBySafety.index;
                    // 使用安全评价推荐的模式更新可视化
                    usrVec = [parseFloat(document.getElementById('cultureInput').value) || 0,
                              parseFloat(document.getElementById('ecoInput').value) || 0,
                              parseFloat(document.getElementById('leisureInput').value) || 0,
                              parseFloat(document.getElementById('medicalInput').value) || 0];
                    bestIdx = safetyBestIdx;
                    simScores = combinedScores.map(function(cs) { return cs.sim; });
                    resetToChartSelection();
                    showPage('visualPage');
                });
            }
            if (exportBtn) {
                exportBtn.addEventListener('click', exportSafetyEvalToWord);
            }
            if (reEvalBtn) {
                reEvalBtn.addEventListener('click', function() {
                    document.getElementById('safetyEvalResult').style.display = 'none';
                });
            }
        }, 100);
    }

    // 导出安全评价报告为Word
    function exportSafetyEvalToWord() {
        var resultEl = document.getElementById('safetyEvalResult');
        var evalDataStr = resultEl ? resultEl.getAttribute('data-safety-eval') : null;
        if (!evalDataStr) {
            alert('暂无安全评价结果，请先执行安全评价。');
            return;
        }
        if (typeof docx === 'undefined') {
            alert('Word导出组件正在加载，请稍后重试。');
            return;
        }

        var evalData = JSON.parse(evalDataStr);
        var Document = docx.Document;
        var Packer = docx.Packer;
        var Paragraph = docx.Paragraph;
        var TextRun = docx.TextRun;
        var HeadingLevel = docx.HeadingLevel;
        var AlignmentType = docx.AlignmentType;
        var Table = docx.Table;
        var TableRow = docx.TableRow;
        var TableCell = docx.TableCell;
        var WidthType = docx.WidthType;
        var BorderStyle = docx.BorderStyle;

        var children = [];

        children.push(new Paragraph({
            children: [new TextRun({ text: '康养旅游安全评价报告', bold: true, size: 36, color: 'C0392B', font: 'SimSun' })],
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 },
        }));

        children.push(new Paragraph({
            children: [new TextRun({ text: '综合评价结果', bold: true, size: 28, font: 'SimSun' })],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 150 },
        }));

        children.push(new Paragraph({
            children: [new TextRun({ text: '安全最优推荐：' + evalData.bestBySafety.name + '（综合得分：' + evalData.bestBySafety.combined.toFixed(2) + '）', size: 24, font: 'SimSun', bold: true, color: 'C0392B' })],
            spacing: { after: 100 },
        }));

        children.push(new Paragraph({
            children: [new TextRun({ text: '纯兴趣推荐：' + evalData.bestByInterest.name + '（相似度：' + evalData.bestByInterest.sim.toFixed(4) + '）', size: 22, font: 'SimSun' })],
            spacing: { after: 200 },
        }));

        children.push(new Paragraph({
            children: [new TextRun({ text: '各模式综合排名', bold: true, size: 24, font: 'SimSun' })],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 150, after: 100 },
        }));

        // 排名表格
        var tableRows = [
            new TableRow({
                children: ['排名', '康养模式', '兴趣相似度', '安全害怕度', '安全等级', '综合得分'].map(function(h) {
                    return new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 20, font: 'SimSun' })], alignment: AlignmentType.CENTER })],
                        width: { size: 1500, type: WidthType.DXA },
                    });
                }),
            }),
        ];

        evalData.combinedScores.forEach(function(cs, i) {
            tableRows.push(new TableRow({
                children: [
                    String(i + 1),
                    cs.name,
                    cs.sim.toFixed(4),
                    cs.fearScore.toFixed(1) + '/10',
                    cs.safetyLevel,
                    cs.combined.toFixed(2)
                ].map(function(text) {
                    return new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: text, size: 20, font: 'SimSun' })], alignment: AlignmentType.CENTER })],
                        width: { size: 1500, type: WidthType.DXA },
                    });
                }),
            }));
        });

        children.push(new Table({
            rows: tableRows,
            width: { size: 9000, type: WidthType.DXA },
        }));

        children.push(new Paragraph({
            children: [new TextRun({ text: '由康养旅游安全评价系统生成', size: 20, color: '888888', font: 'SimSun' })],
            alignment: AlignmentType.CENTER,
            border: { top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC', space: 10 } },
            spacing: { before: 300 },
        }));

        var doc = new Document({
            sections: [{
                properties: {},
                children: children,
            }],
        });

        Packer.toBlob(doc).then(function(blob) {
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = '康养旅游安全评价报告.docx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }).catch(function(err) {
            alert('导出Word失败: ' + err.message);
        });
    }

    // 重置安全认知度打分
    function resetSafetyFearScores() {
        var fearIds = [
            'safetyFearCulture', 'safetyFearHealth', 'safetyFearProperty', 'safetyFearTraffic',
            'safetyFearNatural', 'safetyFearBio', 'safetyFearLost', 'safetyFearAccommodation',
            'safetyFearWater', 'safetyFearFood', 'safetyFearHotel', 'safetyFearEnv',
            'safetyFearMedical', 'safetyFearDrug', 'safetyFearInstitution', 'safetyFearMental'
        ];
        fearIds.forEach(function(id) {
            var el = document.getElementById(id);
            if (el) {
                el.value = 0;
                updateSafetyFearValue(id);
            }
        });
        safetyAwarenessScore = 0;
        hasUserSetSafetyScores = false;
        var keys = Object.keys(safetyFearScores);
        keys.forEach(function(k) { safetyFearScores[k] = 0; });
        refreshLiveSafetyPanel();
        alert('🔄 安全认知度已重置（未评测状态）');
    }

    function showPage(pageId) {
        allPages.forEach(function(p) { p.classList.remove('active'); });
        var target = document.getElementById(pageId);
        if (target) target.classList.add('active');
        updateSidebarActive(pageId);
        if (myChart) {
            myChart.destroy();
            myChart = null;
        }
        closeSidebarOnMobile();
    }

    function updateSidebarActive(pageId) {
        navItems.forEach(function(item) {
            if (item.getAttribute('data-page') === pageId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function closeSidebarOnMobile() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    }

    function renderResearchBackground() {
        var el = document.getElementById('researchContent');
        el.innerHTML =
            '<div class="detail-title">📖 研究背景</div>' +
            '<div class="detail-text">当前，全球人口老龄化进程不断加快，中国作为人口大国，老龄化态势尤为突出，已正式步入中度老龄化社会。截至近年，我国60岁及以上老年人口突破3亿，占总人口比例超五分之一，且老年人口规模持续扩大，高龄化、空巢化、失能化趋势日益明显，传统家庭养老与公共养老服务体系面临严峻压力，养老供需矛盾逐渐凸显。与此同时，国家将积极应对人口老龄化上升为国家战略，陆续出台多项政策扶持银发经济发展，从顶层设计为产业发展指明方向，推动养老服务、健康医疗、适老用品、老年文旅等领域规范化、规模化发展。随着社会经济发展，老年群体消费观念逐步转变，从基础的生存型消费，向健康养生、精神文化、智慧养老等品质型、多元化消费升级，消费潜力持续释放。银发经济不仅是破解养老难题、保障老年群体福祉的重要抓手，更成为新时代扩大内需、培育经济发展新动能的关键领域，蕴含巨大市场空间。在此背景下，深入研究银发经济的发展现状、产业痛点与未来趋势，具有极强的现实意义与实践价值。</div>';
    }

    function renderModeIntroduction() {
        var el = document.getElementById('modeIntroContent');
        el.innerHTML =
            '<div class="detail-title">🧲 模式简介</div>' +
            '<div class="detail-text">本文构建文化+、生态+、休闲+、医疗+四类康养旅游模式，并运用K均值聚类+余弦相似度实现用户画像与旅游模式精准匹配。K均值聚类算法以文化体验、自然疗愈、休闲享乐、健康需求为维度，对样本数据迭代聚类，将老年游客划分为自然热衷者、都市逃离者、文化探寻者、活力养护者四类用户画像，实现需求群体精准细分。余弦相似度算法用于量化匹配度，先将用户特征与模式特征转化为四维向量，再通过向量夹角计算相似度，取值范围为[-1,1]，数值越接近1表示匹配度越高。基于算法计算，自然热衷者匹配生态+模式，都市逃离者匹配休闲+模式，文化探寻者匹配文化+模式，活力养护者匹配医疗+模式。该方法以数据驱动实现供需精准对接，有效解决康养旅游同质化、供需错配问题，为老年康养旅游精准服务提供科学支撑。</div>' +
            '<div class="detail-title" style="margin-top:30px;">🛡️ 安全工程与康养旅游融合</div>' +
            '<div class="detail-text">' +
            '<p style="margin-bottom:15px;"><strong>安全工程（Safety Engineering）</strong>是一门以识别、评估和控制各类系统中潜在危险为目标的综合性工程学科，其核心思想是通过系统化的风险管理手段，预防事故发生、减轻事故后果。在康养旅游领域，安全工程的应用尤为关键——老年游客群体具有身体机能下降、慢性病高发、应急反应迟缓等特点，对旅游安全提出了更高要求。</p>' +
            '<p style="margin-bottom:15px;">本研究将安全工程理念深度融入四种康养旅游模式：</p>' +
            '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:15px; margin:15px 0;">' +
            '<div style="background:#f0f7e8; border-radius:12px; padding:16px; border-left:4px solid #6bae5e;">' +
            '<strong>📚 文化+安全工程</strong><br><span style="font-size:0.9rem; color:#4a6b3a;">针对古迹地形风险、人流拥挤、消防疏散、长途交通等安全隐患，运用<em>人因工程+环境风险评估</em>方法，建立"场所-健康-财产-交通"四维安全防护体系。重点强调无障碍设施可达性评估、应急疏散预案制定、老年友好型参观路线设计。</span>' +
            '</div>' +
            '<div style="background:#e8f4e0; border-radius:12px; padding:16px; border-left:4px solid #5a9ac4;">' +
            '<strong>🌱 生态+安全工程</strong><br><span style="font-size:0.9rem; color:#4a6b3a;">针对自然环境多变、野生动物威胁、迷失方向、生物侵害等风险，运用<em>户外风险管理+应急救援体系</em>，建立"环境-生物-导航-设施"安全防护矩阵。核心措施包括：GPS定位追踪、卫星电话配备、野外急救培训、天气风险预警联动。</span>' +
            '</div>' +
            '<div style="background:#fff8e8; border-radius:12px; padding:16px; border-left:4px solid #e9c46a;">' +
            '<strong>🛋 休闲+安全工程</strong><br><span style="font-size:0.9rem; color:#4a6b3a;">针对水上活动、食品安全、酒店消防、高温暴晒等风险，运用<em>活动安全管理+食安管控体系</em>，建立"水上-饮食-住宿-环境"安全防护矩阵。重点强调：救生资质审核、食品安全溯源、酒店消防检查、SPA温度/时长标准化管控。</span>' +
            '</div>' +
            '<div style="background:#f0e8f0; border-radius:12px; padding:16px; border-left:4px solid #9b59b6;">' +
            '<strong>🏥 医疗+安全工程</strong><br><span style="font-size:0.9rem; color:#4a6b3a;">针对医疗操作风险、药物相互作用、机构资质不透明、心理安全等问题，运用<em>医疗质量管理+患者安全体系</em>，建立"医疗-用药-机构-心理"安全防护矩阵。核心措施：JCI/ISO医疗机构认证审核、用药审查系统、知情同意规范、心理健康监测。</span>' +
            '</div>' +
            '</div>' +
            '<p style="margin-top:15px;">通过将<strong>安全系统工程方法论</strong>（危险识别→风险评估→控制措施→监测改进）贯穿康养旅游全流程，实现从被动应对到主动预防的安全管理范式转变，为老年游客构建"玩得开心、游得放心"的全方位安全保障体系。</p>' +
            '</div>';
    }

    function renderInterestScorePage() {
        var el = document.getElementById('interestScoreContent');
        el.innerHTML =
            '<div class="detail-title">📋 五种兴趣类型10分制打分参考表</div>' +
            '<p style="color:#5a6a4a; font-size:14px; margin-bottom:20px; line-height:1.8;">' +
            '使用说明：请根据您的实际情况，对照以下各兴趣类型的评分标准进行自评。每个维度都采用10分制，<strong>0分表示完全没有兴趣或需求</strong>，<strong>10分表示非常强烈或极高</strong>。您可以将自评结果记录下来，作为"数据化选择"页面的输入参考。</p>' +
            
            '<div class="score-table-container">' +
            '<table class="score-table">' +
            '<thead><tr><th>兴趣类型</th><th>评分标准（10分制）</th><th>参考区间</th></tr></thead>' +
            '<tbody>' +
            
            '<tr><td rowspan="7"><strong>📚 文化兴趣</strong><br>（对历史文化、民俗风情、传统技艺等活动的喜爱程度）</td>' +
            '<td>0-2分：<span style="color:#6a994e;">较低</span> - 您对文化类活动兴趣较低，很少主动参与历史遗迹参观、博物馆游览、非遗体验等活动</td><td><span style="color:#6a994e;">0-2分</span></td></tr>' +
            '<tr><td>2-4分：<span style="color:#a7c957;">中等偏低</span> - 偶尔参与文化活动，但不会作为出行主要目的，更倾向于随大流参观</td><td><span style="color:#a7c957;">2-4分</span></td></tr>' +
            '<tr><td>4-6分：<span style="color:#e9c46a;">中等</span> - 对文化体验有一定兴趣，会主动安排参观博物馆、历史名城等，但频次不高</td><td><span style="color:#e9c46a;">4-6分</span></td></tr>' +
            '<tr><td>6-7分：<span style="color:#f4a261;">中高</span> - 经常关注文化类活动，会为了一场非遗展览专程出行，旅途中喜欢探索当地文化</td><td><span style="color:#f4a261;">6-7分</span></td></tr>' +
            '<tr><td>7-8分：<span style="color:#e76f51;">较高</span> - 文化探索是您旅行的核心动力，会为了一处古迹专程前往，对禅修、传统文化课程有浓厚兴趣</td><td><span style="color:#e76f51;">7-8分</span></td></tr>' +
            '<tr><td>8-9分：<span style="color:#d62828;">很高</span> - 您是深度的文化爱好者，会研究历史背景，对传统手工艺、书法、茶道等有专业级兴趣</td><td><span style="color:#d62828;">8-9分</span></td></tr>' +
            '<tr><td>9-10分：<span style="color:#a4133c;">极高</span> - 文化体验是您生命的重要组成部分，您追求深度的文化沉浸，愿意为高品质文化之旅投入大量时间和金钱</td><td><span style="color:#a4133c;">9-10分</span></td></tr>' +
            
            '<tr><td rowspan="6"><strong>🌱 生态兴趣</strong><br>（对自然环境、绿色生态、户外康养等活动的喜爱程度）</td>' +
            '<td>0-2分：<span style="color:#6a994e;">较低</span> - 您更喜欢室内活动或城市环境，对自然户外兴趣不大，不常进行徒步、登山等活动</td><td><span style="color:#6a994e;">0-2分</span></td></tr>' +
            '<tr><td>2-4分：<span style="color:#a7c957;">中等偏低</span> - 偶尔享受自然，但主要是陪同家人朋友，不主动寻找自然康养机会</td><td><span style="color:#a7c957;">2-4分</span></td></tr>' +
            '<tr><td>4-6分：<span style="color:#e9c46a;">中等</span> - 喜欢在自然环境中放松，会参加公园活动、周末郊游，但不会专门寻找生态康养目的地</td><td><span style="color:#e9c46a;">4-6分</span></td></tr>' +
            '<tr><td>6-7分：<span style="color:#f4a261;">中高</span> - 经常进行森林浴、湿地漫步等自然活动，注重空气质量和生态环境，会为了一片好风景专程前往</td><td><span style="color:#f4a261;">6-7分</span></td></tr>' +
            '<tr><td>7-8分：<span style="color:#e76f51;">较高</span> - 生态康养是您重要的生活方式，您喜欢海滨冥想、温泉疗养、森林氧吧等，会系统性地追求自然疗愈</td><td><span style="color:#e76f51;">7-8分</span></td></tr>' +
            '<tr><td>8-10分：<span style="color:#d62828;">很高-极高</span> - 自然是您心灵的归宿，您追求极致的生态康养体验，关注有机膳食、自然瑜伽，愿意为高端生态度假投入</td><td><span style="color:#d62828;">8-10分</span></td></tr>' +
            
            '<tr><td rowspan="6"><strong>🛋 休闲兴趣</strong><br>（对轻松舒适度假、休闲娱乐、美食SPA等活动的喜爱程度）</td>' +
            '<td>0-2分：<span style="color:#6a994e;">较低</span> - 您更偏好紧凑充实的行程，不喜欢纯粹的休闲放松，觉得度假浪费时间</td><td><span style="color:#6a994e;">0-2分</span></td></tr>' +
            '<tr><td>2-4分：<span style="color:#a7c957;">中等偏低</span> - 可以接受适度放松，但不会把休闲度假作为主要出行目的，更喜欢观光打卡</td><td><span style="color:#a7c957;">2-4分</span></td></tr>' +
            '<tr><td>4-6分：<span style="color:#e9c46a;">中等</span> - 喜欢轻松的假期，会享受温泉、SPA，但也会安排一些观光活动，注重旅途舒适度</td><td><span style="color:#e9c46a;">4-6分</span></td></tr>' +
            '<tr><td>6-7分：<span style="color:#f4a261;">中高</span> - 休闲度假是您旅行的核心目的，您追求高品质住宿、美食体验，喜欢海滨度假村、精品民宿</td><td><span style="color:#f4a261;">6-7分</span></td></tr>' +
            '<tr><td>7-8分：<span style="color:#e76f51;">较高</span> - 您追求精致的生活方式，喜欢邮轮旅行、米其林美食、高端SPA，对服务品质要求高</td><td><span style="color:#e76f51;">7-8分</span></td></tr>' +
            '<tr><td>8-10分：<span style="color:#d62828;">很高-极高</span> - 极致舒适是您的追求，您愿意为豪华度假村、私人管家服务、国际邮轮等投入，追求身心的全面放松与享受</td><td><span style="color:#d62828;">8-10分</span></td></tr>' +
            
            '<tr><td rowspan="6"><strong>🏥 医疗兴趣</strong><br>（对健康管理、医疗康养、康复疗养等服务的需求程度）</td>' +
            '<td>0-2分：<span style="color:#6a994e;">较低</span> - 您身体健康状况良好，几乎不需要医疗康养服务，不关注体检或康复项目</td><td><span style="color:#6a994e;">0-2分</span></tr>' +
            '<tr><td>2-4分：<span style="color:#a7c957;">中等偏低</span> - 会进行常规体检，但不会专门寻求医疗康养服务，对养生课程有轻度兴趣</td><td><span style="color:#a7c957;">2-4分</span></td></tr>' +
            '<tr><td>4-6分：<span style="color:#e9c46a;">中等</span> - 开始关注健康管理，会参加一些养生讲座、中医调理，对康养基地有一定兴趣</td><td><span style="color:#e9c46a;">4-6分</span></td></tr>' +
            '<tr><td>6-7分：<span style="color:#f4a261;">中高</span> - 有明确的健康维护需求，会定期体检，关注康复训练和营养膳食计划，对专业康养服务有较强需求</td><td><span style="color:#f4a261;">6-7分</span></td></tr>' +
            '<tr><td>7-8分：<span style="color:#e76f51;">较高</span> - 您非常注重健康管理，寻求专业的医疗康养服务，对中医名家调理、高端体检、私人医生有明确需求</td><td><span style="color:#e76f51;">7-8分</span></td></tr>' +
            '<tr><td>8-10分：<span style="color:#d62828;">很高-极高</span> - 健康是您生命的头等大事，您需要全方位的医疗康养服务，可能涉及海外医疗、康复疗养、抗衰老项目等高端服务</td><td><span style="color:#d62828;">8-10分</span></td></tr>' +
            
            '<tr><td rowspan="7"><strong>💰 消费预测</strong><br>（对康养旅游的预算投入意愿和消费能力预估）</td>' +
            '<td>0-2分：<span style="color:#6a994e;">经济型</span> - 预算有限，偏好免费或低价活动，选择经济型住宿，出行以周边短途为主，不愿在旅游上投入过多资金</td><td><span style="color:#6a994e;">0-2分</span></td></tr>' +
            '<tr><td>2-3分：<span style="color:#a7c957;">经济偏经济</span> - 注重性价比，愿意选择性价比高的目的地，可以接受经济型但希望有一定品质，偶尔参与周边低价游</td><td><span style="color:#a7c957;">2-3分</span></td></tr>' +
            '<tr><td>3-5分：<span style="color:#e9c46a;">舒适型</span> - 可以接受中等价位消费，愿意为舒适住宿支付溢价，偏好周边2-3日游，兼顾品质和价格</td><td><span style="color:#e9c46a;">3-5分</span></td></tr>' +
            '<tr><td>5-7分：<span style="color:#f4a261;">品质型</span> - 有一定消费能力，愿意为高品质体验付费，偏好跨省5-7日游，选择中高端度假村，愿意投资健康</td><td><span style="color:#f4a261;">5-7分</span></td></tr>' +
            '<tr><td>7-8分：<span style="color:#e76f51;">高端型</span> - 消费能力较强，追求高端定制服务，愿意选择奢华度假村、私人定制行程，对服务质量要求高</td><td><span style="color:#e76f51;">7-8分</span></td></tr>' +
            '<tr><td>8-9分：<span style="color:#d62828;">高端偏奢华</span> - 追求极致体验，愿意为顶级服务买单，接受直升机观光、私人管家、国际邮轮等高端项目</td><td><span style="color:#d62828;">8-9分</span></td></tr>' +
            '<tr><td>9-10分：<span style="color:#a4133c;">奢华型</span> - 不设预算上限，追求顶级奢华体验，愿意为总统套房、海外医疗旅游、专属定制等投入，收入可观或视健康为最高投资</td><td><span style="color:#a4133c;">9-10分</span></td></tr>' +
            
            '</tbody></table></div>' +
            
            '<!-- 安全问题害怕度打分标准 -->' +
            '<div class="detail-title" style="margin-top:40px;">🛡️ 旅游安全害怕度打分标准（10分制）</div>' +
            '<p style="color:#5a6a4a; font-size:14px; margin-bottom:20px; line-height:1.8;">' +
            '使用说明：请根据您对不同旅游模式下可能发生的安全问题的<strong>害怕/担忧程度</strong>进行打分。<strong>0分表示完全不害怕</strong>，<strong>10分表示极度害怕</strong>。该评分将用于可视化分析中的安全认知度评估。</p>' +

            '<div class="score-table-container">' +
            '<table class="score-table">' +
            '<thead><tr><th>旅游模式</th><th>安全维度</th><th>评分标准（10分制害怕度）</th><th>参考区间</th></tr></thead>' +
            '<tbody>' +

            '<tr><td rowspan="4"><strong>📚 文化+<br>健康养生</strong></td>' +
            '<td>🏛️ 场所安全<br><small>（古迹地形/拥挤/消防）</small></td>' +
            '<td>0-2分：不害怕 - 有信心应对；2-4分：略有担忧；4-6分：比较担心；6-8分：很担心；8-10分：极度恐惧</td><td>0-10分</td></tr>' +
            '<tr><td>💪 健康安全<br><small>（体力透支/中暑/饮食）</small></td>' +
            '<td>0-2分：身体好不担心；2-4分：略有顾虑；4-6分：比较在意；6-8分：很重视健康防护；8-10分：健康状况需要特别关注</td><td>0-10分</td></tr>' +
            '<tr><td>🔒 财产安全<br><small>（被盗/遗失/消费欺诈）</small></td>' +
            '<td>0-2分：不在意；2-4分：稍有警惕；4-6分：比较谨慎；6-8分：很重视财物安全；8-10分：对财产安全极度焦虑</td><td>0-10分</td></tr>' +
            '<tr><td>🚌 交通安全<br><small>（长途/接驳/路况）</small></td>' +
            '<td>0-2分：不担心交通；2-4分：略有顾虑；4-6分：比较关注交通安排；6-8分：很重视交通安全；8-10分：对出行交通非常担忧</td><td>0-10分</td></tr>' +

            '<tr><td rowspan="4"><strong>🌱 生态+<br>健康养生</strong></td>' +
            '<td>🌲 自然风险<br><small>（地形湿滑/天气突变/信号盲区）</small></td>' +
            '<td>0-2分：户外经验丰富不担心；2-4分：稍有顾虑；4-6分：比较关注安全；6-8分：很重视自然环境风险；8-10分：极度恐惧野外风险</td><td>0-10分</td></tr>' +
            '<tr><td>🦟 生物安全<br><small>（蚊虫叮咬/过敏/水源）</small></td>' +
            '<td>0-2分：不介意蚊虫；2-4分：会做基本防护；4-6分：比较在意生物侵害；6-8分：很重视生物安全；8-10分：极度害怕（有过敏史）</td><td>0-10分</td></tr>' +
            '<tr><td>🧭 迷失风险<br><small>（迷路/通讯中断/团队分散）</small></td>' +
            '<td>0-2分：方向感好不担心；2-4分：会注意路线；4-6分：比较担心迷路；6-8分：很担忧方向迷失；8-10分：极度害怕走失</td><td>0-10分</td></tr>' +
            '<tr><td>🏕️ 住宿设施<br><small>（民宿消防/急救条件/温泉）</small></td>' +
            '<td>0-2分：对住宿条件放心；2-4分：基本放心；4-6分：会注意检查设施；6-8分：很重视住宿安全；8-10分：对住宿安全极度敏感</td><td>0-10分</td></tr>' +

            '<tr><td rowspan="4"><strong>🛋 休闲+<br>健康养生</strong></td>' +
            '<td>🏊 水上安全<br><small>（暗流/溺水/滑倒）</small></td>' +
            '<td>0-2分：水性好不担心；2-4分：会注意水区标识；4-6分：比较担心水上活动安全；6-8分：很重视水上防范；8-10分：极度恐惧水域活动</td><td>0-10分</td></tr>' +
            '<tr><td>🍽️ 饮食消费<br><small>（过敏/中毒/欺诈）</small></td>' +
            '<td>0-2分：不挑食不担心；2-4分：会注意卫生；4-6分：比较关注食品安全；6-8分：很重视饮食和消费；8-10分：对饮食消费极度警惕</td><td>0-10分</td></tr>' +
            '<tr><td>🏨 酒店安全<br><small>（消防/防滑/防盗）</small></td>' +
            '<td>0-2分：住酒店很放心；2-4分：基本放心；4-6分：会检查消防通道；6-8分：很重视酒店安全；8-10分：对酒店安全极度担忧</td><td>0-10分</td></tr>' +
            '<tr><td>☀️ 环境因素<br><small>（暴晒/温差/水质）</small></td>' +
            '<td>0-2分：适应力强不担心；2-4分：会做好防晒；4-6分：比较关注环境因素；6-8分：很在意环境对健康影响；8-10分：环境因素严重困扰出行</td><td>0-10分</td></tr>' +

            '<tr><td rowspan="4"><strong>🏥 医疗+<br>健康养生</strong></td>' +
            '<td>⚕️ 医疗操作<br><small>（资质/感染/并发症）</small></td>' +
            '<td>0-2分：信任医疗机构；2-4分：会查看资质；4-6分：比较担忧医疗安全；6-8分：很重视医疗质量管控；8-10分：对医疗操作极度恐惧</td><td>0-10分</td></tr>' +
            '<tr><td>💊 用药安全<br><small>（药品来源/相互作用/偏方）</small></td>' +
            '<td>0-2分：用药经验丰富不担心；2-4分：会注意核对药品；4-6分：比较关注用药风险；6-8分：很重视用药安全管理；8-10分：对用药问题极度敏感</td><td>0-10分</td></tr>' +
            '<tr><td>🏨 机构资质<br><small>（虚假宣传/设备/转诊）</small></td>' +
            '<td>0-2分：会选择正规机构；2-4分：会甄别宣传内容；4-6分：比较关注机构可信度；6-8分：很重视机构资质审查；8-10分：对机构可信度极度怀疑</td><td>0-10分</td></tr>' +
            '<tr><td>🧠 心理因素<br><small>（期望落差/焦虑/隐私）</small></td>' +
            '<td>0-2分：心态好不受影响；2-4分：会自我调节；4-6分：比较关注心理感受；6-8分：很重视心理健康；8-10分：心理安全感极度缺失</td><td>0-10分</td></tr>' +

            '</tbody></table></div>' +

            '<div class="score-summary-box">' +
            '<h4 style="color:#2d4a2c; margin-bottom:12px;">📝 记录您的自评结果</h4>' +
            '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:15px;">' +
            '<div><strong>文化兴趣：</strong><input type="number" class="score-record-input" id="recordCulture" min="0" max="10" step="0.5" placeholder="0-10分"></div>' +
            '<div><strong>生态兴趣：</strong><input type="number" class="score-record-input" id="recordEco" min="0" max="10" step="0.5" placeholder="0-10分"></div>' +
            '<div><strong>休闲兴趣：</strong><input type="number" class="score-record-input" id="recordLeisure" min="0" max="10" step="0.5" placeholder="0-10分"></div>' +
            '<div><strong>医疗兴趣：</strong><input type="number" class="score-record-input" id="recordMedical" min="0" max="10" step="0.5" placeholder="0-10分"></div>' +
            '<div><strong>消费预测：</strong><input type="number" class="score-record-input" id="recordConsumption" min="0" max="10" step="0.5" placeholder="0-10分"></div>' +
            '</div>' +
            '<p style="color:#666; font-size:12px; margin-top:10px;">提示：记录完成后，点击"进入数据化选择"按钮将数值带入计算</p>' +
            '<button class="btn-primary" style="margin-top:15px;" id="gotoDataSelectBtn">➡ 进入数据化选择</button>' +
            '</div>';
        
        setTimeout(function() {
            var gotoBtn = document.getElementById('gotoDataSelectBtn');
            if (gotoBtn) {
                gotoBtn.addEventListener('click', function() {
                    var c = parseFloat(document.getElementById('recordCulture').value) || 0;
                    var e = parseFloat(document.getElementById('recordEco').value) || 0;
                    var l = parseFloat(document.getElementById('recordLeisure').value) || 0;
                    var m = parseFloat(document.getElementById('recordMedical').value) || 0;
                    var consumptionVal = parseFloat(document.getElementById('recordConsumption').value) || 0;
                    
                    document.getElementById('cultureInput').value = c;
                    document.getElementById('ecoInput').value = e;
                    document.getElementById('leisureInput').value = l;
                    document.getElementById('medicalInput').value = m;
                    var consumptionInput = document.getElementById('consumptionInput');
                    if (consumptionInput) consumptionInput.value = consumptionVal;
                    
                    showPage('dataSelectPage');
                });
            }
        }, 100);
    }

    function renderHealthStylePage() {
        var el = document.getElementById('healthStyleContent');
        var html =
            '<div class="detail-title">🌿 养生方式总览</div>' +
            '<div class="mode-cards">' +
            '<div class="mode-card" data-mode-index="0">' +
                '<span class="card-title">📚 文化体验旅游模式</span>' +
                '<div class="card-desc">文化体验康养旅游以文化浸润+身心养生为核心，融合历史文化、民俗风情、传统技艺与禅修静养等内容，依托文化古迹、传统村落、非遗资源打造沉浸式体验场景。</div>' +
                '<div class="card-hint">>> 点击查看图片展示 & 消费档次</div>' +
            '</div>' +
            '<div class="mode-card" data-mode-index="1">' +
                '<span class="card-title">🌱 自然疗愈旅游模式</span>' +
                '<div class="card-desc">自然疗愈康养旅游以生态资源+身心修复为核心，依托森林、湿地、海滨、温泉等自然生态环境，突出自然环境的疗愈功效与生态互动体验。</div>' +
                '<div class="card-hint">>> 点击查看图片展示 & 消费档次</div>' +
            '</div>' +
            '<div class="mode-card" data-mode-index="2">' +
                '<span class="card-title">🛋 休闲享乐旅游模式</span>' +
                '<div class="card-desc">休闲享乐康养旅游以舒适度假、放松身心为核心，面向追求高品质旅居体验的老年群体，主打轻松舒适的轻度假形态。</div>' +
                '<div class="card-hint">>> 点击查看图片展示 & 消费档次</div>' +
            '</div>' +
            '<div class="mode-card" data-mode-index="3">' +
                '<span class="card-title">🏥 健康需求旅游模式</span>' +
                '<div class="card-desc">健康需求康养旅游以专业医疗+健康管理为核心，面向存在健康维护、康复疗养或亚健康调理需求的老年群体，提供健康体检、中医理疗等服务。</div>' +
                '<div class="card-hint">>> 点击查看图片展示 & 消费档次</div>' +
            '</div>' +
            '</div>';
        el.innerHTML = html;

        setTimeout(function() {
            el.querySelectorAll('.mode-card[data-mode-index]').forEach(function(card) {
                card.addEventListener('click', function() {
                    var modeIdx = parseInt(this.getAttribute('data-mode-index'));
                    showModeDetail(modeIdx);
                });
            });
        }, 100);
    }

    // 渲染安全旅游分析页面
    function renderSafetyAnalysis(tab) {
        var el = document.getElementById('safetyAnalysisContent');
        if (!el) return;

        tab = tab || 'safety-overview';

        // 更新tab active状态
        document.querySelectorAll('.safety-tab').forEach(function(t) {
            t.classList.toggle('active', t.getAttribute('data-tab') === tab);
        });

        var html = '';

        if (tab === 'safety-overview') {
            // 安全总览 - 展示所有模式的对比
            html = '<div class="detail-title">📋 安全风险总览 · 四大模式对比</div>' +
                '<p style="color:#5a6a4a; margin-bottom:20px; line-height:1.8;">下表汇总了四种康养旅游模式中各安全维度的风险等级与核心问题。安全工程强调<strong>"预防为主、系统管控"</strong>，通过风险识别→评估→控制的闭环管理，最大限度降低老年游客在旅途中面临的各类安全威胁。</p>' +
                '<div class="safety-overview-table">' +
                '<table class="score-table">' +
                '<thead><tr><th>安全维度</th><th>📚 文化+</th><th>🌱 生态+</th><th>🛋 休闲+</th><th>🏥 医疗+</th></tr></thead>' +
                '<tbody>' +
                '<tr><td><strong>场所/自然风险</strong></td><td><span class="risk-level-medium">中风险</span><br>古迹地形、拥挤踩踏</td><td><span class="risk-level-high">高风险</span><br>山地湿滑、天气突变</td><td><span class="risk-level-low">低风险</span><br>室内为主</td><td><span class="risk-level-medium">中风险</span><br>医疗环境卫生</td></tr>' +
                '<tr><td><strong>健康/身体安全</strong></td><td><span class="risk-level-medium">中风险</span><br>体力透支、中暑</td><td><span class="risk-level-high">高风险</span><br>蚊虫叮咬、花粉过敏</td><td><span class="risk-level-medium">中风险</span><br>晒伤、温差感冒</td><td><span class="risk-level-high">高风险</span><br>医疗操作、药物反应</td></tr>' +
                '<tr><td><strong>财产/消费安全</strong></td><td><span class="risk-level-high">中高风险</span><br>扒窃、消费欺诈</td><td><span class="risk-level-low">低风险</span><br>装备丢失</td><td><span class="risk-level-medium">中风险</span><br>高价欺诈</td><td><span class="risk-level-high">中高风险</span><br>虚假宣传</td></tr>' +
                '<tr><td><strong>交通/出行安全</strong></td><td><span class="risk-level-medium">中风险</span><br>长途疲劳、接驳车</td><td><span class="risk-level-high">中高风险</span><br>路况复杂、救援难</td><td><span class="risk-level-low">低风险</span><br>度假区交通</td><td><span class="risk-level-medium">中风险</span><br>转诊通道</td></tr>' +
                '<tr><td><strong>生物/环境因素</strong></td><td><span class="risk-level-low">低风险</span><br>-</td><td><span class="risk-level-high">中高风险</span><br>野生动物、毒植</td><td><span class="risk-level-medium">中风险</span><br>水质、传染病</td><td><span class="risk-level-low">低风险</span><br>-</td></tr>' +
                '<tr><td><strong>迷失/通讯安全</strong></td><td><span class="risk-level-low">低风险</span><br>景区标识</td><td><span class="risk-level-high">中高风险</span><br>信号盲区、迷路</td><td><span class="risk-level-low">低风险</span><br>-</td><td><span class="risk-level-low">低风险</span><br>-</td></tr>' +
                '<tr><td><strong>水上/活动安全</strong></td><td><span class="risk-level-low">低风险</span><br>-</td><td><span class="risk-level-low">低风险</span><br>-</td><td><span class="risk-level-high">高风险</span><br>暗流、溺水</td><td><span class="risk-level-low">低风险</span><br>-</td></tr>' +
                '<tr><td><strong>心理/隐私安全</strong></td><td><span class="risk-level-low">低风险</span><br>-</td><td><span class="risk-level-low">低风险</span><br>-</td><td><span class="risk-level-low">低风险</span><br>-</td><td><span class="risk-level-medium">中风险</span><br>期望落差、隐私</td></tr>' +
                '</tbody></table></div>' +
                '<div style="background:linear-gradient(135deg, #fff8e8, #fff0d0); padding:18px; border-radius:12px; border:2px solid #e9c46a; margin-top:20px;">' +
                '<strong style="color:#8a6520;">🔔 各用户画像需特别关注的安全问题：</strong><br>' +
                '<span style="color:#5a4a20; line-height:1.8;">' +
                '• <strong>文化探寻者</strong>（文化+）：重点关注场所安全和财产安全，古迹游览时注意防滑防摔，避开人流高峰。<br>' +
                '• <strong>自然热衷者</strong>（生态+）：自然风险和生物安全是最大威胁，务必结伴出行、携带定位设备和急救包。<br>' +
                '• <strong>都市逃离者</strong>（休闲+）：水上活动和饮食安全需格外注意，选择有救生资质的正规场所。<br>' +
                '• <strong>活力养护者</strong>（医疗+）：医疗操作和用药安全是核心关注点，务必核实机构资质和医师证书。</span>' +
                '</div>';
        } else {
            // 单个模式的详细安全分析
            var modeIdx = { 'safety-culture': 0, 'safety-eco': 1, 'safety-leisure': 2, 'safety-medical': 3 }[tab];
            if (modeIdx === undefined) modeIdx = 0;
            var sd = safetyData[modeIdx];

            html = '<div class="detail-title">' + sd.icon + ' ' + sd.modeName + ' · 安全分析</div>' +
                '<div class="detail-text">' +
                '<p style="margin-bottom:15px;"><strong>适合人群：</strong>' + modeDetail[modeIdx].who + '</p>' +
                '<p style="margin-bottom:20px; color:#5a6a4a;">基于安全工程方法论，对该模式进行<em>危险识别→风险评估→控制措施</em>的系统分析。以下按安全维度分类列出可能发生的安全问题及对应防护措施。</p>';

            // 风险分类
            sd.risks.forEach(function(riskGroup) {
                var levelColor = riskGroup.level === '高' ? '#d62828' : riskGroup.level === '中高' ? '#e76f51' : riskGroup.level === '中' ? '#f4a261' : '#6a994e';
                html += '<div style="background:#fff; border:2px solid ' + levelColor + '; border-radius:12px; padding:18px; margin-bottom:15px;">' +
                    '<h4 style="color:' + levelColor + '; margin-bottom:10px;">' + riskGroup.category + ' <span style="background:' + levelColor + '; color:#fff; padding:2px 10px; border-radius:20px; font-size:0.75rem;">风险等级：' + riskGroup.level + '</span></h4>' +
                    '<ul style="list-style:none; padding:0; margin:0;">';
                riskGroup.items.forEach(function(item) {
                    html += '<li style="padding:8px 0; padding-left:24px; position:relative; color:#3a5535; line-height:1.6; border-bottom:1px dashed #e8e8d8;">' +
                        '<span style="position:absolute; left:0; color:' + levelColor + ';">⚠️</span>' + item + '</li>';
                });
                html += '</ul></div>';
            });

            // 防护措施
            html += '<div style="background:linear-gradient(135deg, #e8f5e0, #d4ecc8); border-radius:12px; padding:20px; border:2px solid #6bae5e; margin-top:20px;">' +
                '<h4 style="color:#2d4a2d; margin-bottom:15px;">🛡️ 安全防护措施（安全工程控制层级）</h4>';
            sd.measures.forEach(function(measure) {
                html += '<div style="background:#fff; border-radius:10px; padding:14px; margin-bottom:10px; border-left:4px solid #6bae5e;">' +
                    '<strong style="color:#2d4a2d;">' + measure.title + '：</strong>' +
                    '<span style="color:#4a6b3a; line-height:1.7;">' + measure.content + '</span></div>';
            });
            html += '</div>' +
                '<div style="margin-top:15px; padding:15px; background:#f0f7ff; border-radius:10px; border:1px solid #b8d4f0;">' +
                '<strong style="color:#2d5a8a;">📌 安全工程提示：</strong><span style="color:#3a5a7a;">根据<em>瑞士奶酪模型</em>，安全事故的发生是多层防御同时失效的结果。以上措施构成多层防护屏障（工程控制→管理控制→个人防护），建议逐层落实，不依赖单一防护手段。</span>' +
                '</div>';

            html += '</div>';
        }

        el.innerHTML = html;
    }

    function showModeDetail(modeIdx) {
        var detail = modeDetail[modeIdx];
        var imgHtml = renderImageGallery(detail.images);
        var tiersHtml = renderPriceTiers(detail.priceTiers, modeNames[modeIdx]);
        var contentHtml =
            '<h3 style="color:#2d4a2c; margin-bottom:10px;">' + modeNames[modeIdx] + '</h3>' +
            '<p style="color:#3a5535; line-height:1.7;">' + detail.reason + '</p>' +
            '<p style="color:#3a5535; line-height:1.7;"><strong>' + detail.activities + '</strong></p>' +
            '<h4 style="color:#4a6b3a; margin-top:18px;">🖼 图片展示</h4>' +
            imgHtml +
            '<h4 style="color:#4a6b3a; margin-top:18px;">💵 消费档次与消费预测匹配</h4>' +
            '<p style="color:#5a6a4a; font-size:13px; margin-bottom:12px;">请输入您的消费预测得分（0-10分），系统将为您匹配最合适的消费档次：</p>' +
            '<div style="margin-bottom:15px; display:flex; align-items:center; gap:10px; flex-wrap:wrap;">' +
            '<label style="font-weight:600;">您的消费预测得分：</label>' +
            '<input type="number" id="detailConsumptionInput" value="5" min="0" max="10" step="0.5" style="padding:8px 12px; border:2px solid #c8d8c0; border-radius:8px; width:80px; font-size:0.9rem;" oninput="updateMatchedTier(this.value, \'' + modeNames[modeIdx] + '\')">' +
            '<span style="color:#666; font-size:13px;">（0-10分）</span>' +
            '</div>' +
            '<div id="matchedTierDisplay" style="background:linear-gradient(135deg, #f0f7e8, #e8f5e0); padding:15px; border-radius:10px; border:2px solid #6bae5e; margin-bottom:15px;">' +
            '<strong style="color:#2d4a2d;">建议您选择：<span id="suggestedTierName">B档 · 舒适型</span></strong>' +
            '<br><span style="color:#5a6a4a; font-size:13px;">根据您的消费预测得分，系统推荐此档次。点击下方卡片了解更多详情。</span>' +
            '</div>' +
            '<div style="margin-bottom:15px;">' + tiersHtml + '</div>' +
            '<div style="margin-top:15px; text-align:center;">' +
            '<button class="btn-primary" onclick="window.askAIAboutMatchedTier(\'' + modeNames[modeIdx] + '\')" style="padding:12px 24px; font-size:0.95rem;">🤖 询问AI小助手了解详情</button>' +
            '</div>';

        detailContent.innerHTML =
            '<div class="detail-title">🌿 ' + modeNames[modeIdx] + ' · 详情</div>' +
            '<div class="detail-text">' + contentHtml + '</div>';

        navStack.push('healthStyle');
        showPage('detailPage');
        backFromDetail.textContent = '<< 返回养生方式';
        
        setTimeout(function() {
            var input = document.getElementById('detailConsumptionInput');
            if (input) {
                input.addEventListener('input', function() {
                    updateMatchedTier(this.value, modeNames[modeIdx]);
                });
            }
        }, 100);
    }

    function updateMatchedTier(consumptionScore, modeName) {
        var tier = getConsumptionTier(consumptionScore);
        var tierName = '';
        var tierLabel = '';
        var tierClass = '';
        
        if (tier === 'A') {
            tierLabel = 'A档 · 经济型';
            tierClass = 'tier-a';
        } else if (tier === 'B') {
            tierLabel = 'B档 · 舒适型';
            tierClass = 'tier-b';
        } else if (tier === 'C') {
            tierLabel = 'C档 · 品质型';
            tierClass = 'tier-c';
        } else if (tier === 'D') {
            tierLabel = 'D档 · 高端型';
            tierClass = 'tier-d';
        } else {
            tierLabel = 'E档 · 奢华型';
            tierClass = 'tier-e';
        }
        
        var display = document.getElementById('matchedTierDisplay');
        if (display) {
            var suggestedName = document.getElementById('suggestedTierName');
            if (suggestedName) {
                suggestedName.textContent = tierLabel;
            }
        }
        
        document.querySelectorAll('.tier-card').forEach(function(card) {
            card.style.opacity = '0.5';
            card.style.transform = 'scale(0.98)';
            card.style.border = '';
            if (card.querySelector('.tier-label').textContent.includes(tierLabel.split('·')[0].trim())) {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
                card.style.border = '3px solid #6bae5e';
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    function askAIAboutMatchedTier(modeName) {
        var consumptionScore = 5;
        var input = document.getElementById('detailConsumptionInput');
        if (input) {
            consumptionScore = parseFloat(input.value) || 5;
        }
        var tier = getConsumptionTier(consumptionScore);
        var tierName = getConsumptionLabelFromTier(tier);
        
        quickConsultConsumption(modeName, consumptionScore, tier);
    }

    function renderPriceTiers(tiers, modeName) {
        var html = '<div class="price-tiers">';
        tiers.forEach(function(t) {
            html +=
                '<div class="tier-card">' +
                  '<span class="tier-label ' + t.tierClass + '">' + t.label + '</span>' +
                  '<div class="tier-price">💰 ' + t.price + '</div>' +
                  '<div class="tier-detail">' + t.detail + '</div>' +
                '</div>';
        });
        html += '</div>';
        return html;
    }

    function renderImageGallery(images) {
        var html = '<div class="image-gallery">';
        images.forEach(function(img) {
            html +=
                '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy" decoding="async" onerror="this.style.display=\'none\';if(this.nextElementSibling)this.nextElementSibling.style.display=\'flex\';">' +
                '<div class="img-fallback" style="display:none;width:100%;max-width:320px;height:220px;background:#e8f0dd;border-radius:20px;align-items:center;justify-content:center;color:#7a9a60;font-size:0.9rem;text-align:center;padding:20px;">' +
                  '🖼 ' + img.alt + '<br><small>（图片待添加）</small>' +
                '</div>';
        });
        html += '</div>';
        return html;
    }

    // 余弦相似度计算函数
    // 通过计算两个向量的夹角余弦值来衡量相似程度
    // 返回值范围 [-1, 1]，值越大表示越相似
    function cosineSim(vecA, vecB) {
        var dot = 0, magA = 0, magB = 0;
        for (var i = 0; i < vecA.length; i++) {
            dot += vecA[i] * vecB[i];
            magA += vecA[i] ** 2;
            magB += vecB[i] ** 2;
        }
        magA = Math.sqrt(magA);
        magB = Math.sqrt(magB);
        if (magA === 0 || magB === 0) return 0;
        return dot / (magA * magB);
    }

    // 执行兴趣匹配计算
    // 读取用户输入的五维兴趣向量（含消费预测），与各模式特征向量计算余弦相似度
    function performCalculation() {
        var culture = parseFloat(document.getElementById('cultureInput').value);
        var eco = parseFloat(document.getElementById('ecoInput').value);
        var leisure = parseFloat(document.getElementById('leisureInput').value);
        var medical = parseFloat(document.getElementById('medicalInput').value);
        var consumption = parseFloat(document.getElementById('consumptionInput').value);
        if (isNaN(culture) || isNaN(eco) || isNaN(leisure) || isNaN(medical) || isNaN(consumption)) {
            alert('请填写所有兴趣值（包括消费预测，0-10分）');
            return null;
        }
        if ([culture, eco, leisure, medical, consumption].some(function(v) { return v < 0 || v > 10; })) {
            alert('每项兴趣值需在0到10之间');
            return null;
        }
        var userVec = [culture, eco, leisure, medical];
        var sims = modeFeatures.map(function(feat) { return cosineSim(userVec, feat); });
        var best = sims.indexOf(Math.max.apply(null, sims));
        return { userVec: userVec, sims: sims, bestIdx: best, consumption: consumption };
    }

    function getConsumptionTier(score) {
        if (score <= 2) return 'A';
        if (score <= 4) return 'B';
        if (score <= 6) return 'C';
        if (score <= 8) return 'D';
        return 'E';
    }

    function getConsumptionLabel(tier) {
        var labels = {
            'A': '经济型（0-2分）',
            'B': '舒适型（2-4分）',
            'C': '品质型（4-6分）',
            'D': '高端型（6-8分）',
            'E': '奢华型（8-10分）'
        };
        return labels[tier] || '';
    }

    function getConsumptionLabelFromTier(tier) {
        var labels = {
            'A': '经济型',
            'B': '舒适型',
            'C': '品质型',
            'D': '高端型',
            'E': '奢华型'
        };
        return labels[tier] || '品质型';
    }

    function getIntelligentRecommendation(bestModeIdx, consumption, optModeFearMap) {
        var tier = getConsumptionTier(consumption);
        var modeName = modeNames[bestModeIdx];
        var detail = modeDetail[bestModeIdx];
        var sd = safetyData[bestModeIdx];

        // 构建安全提示部分（优先使用传入的用户自选分数，否则用可视化分析页的全局分数）
        var fearSource = optModeFearMap || safetyFearScores;
        var modeKeys = ['cultureMode', 'ecoMode', 'leisureMode', 'medicalMode'];

        var safetyTip = '';
        if (sd && hasUserSetSafetyScores) {
            var modeFearScore = (optModeFearMap ? optModeFearMap[bestModeIdx] : safetyFearScores[modeKeys[bestModeIdx]]) || 0;
            var fearLevelText = modeFearScore <= 3 ? '较低' : modeFearScore <= 6 ? '中等' : '较高';

            // 安全认知度：如果传入了用户自选分数，用其均值；否则用全局评分
            var displayAwareness = optModeFearMap
                ? Math.round(((optModeFearMap[0] + optModeFearMap[1] + optModeFearMap[2] + optModeFearMap[3]) / 4) * 10) / 10
                : safetyAwarenessScore;

            safetyTip = '<br><br><strong>🛡️ 安全工程提示（安全认知度：' + displayAwareness.toFixed(1) + '/10）：</strong>' +
                '您对该模式的综合安全害怕度为<strong>' + modeFearScore.toFixed(1) + '分（' + fearLevelText + '）</strong>。' +
                '请重点关注以下安全风险：<br>';
            var topRisks = [];
            sd.risks.forEach(function(rg) {
                if (rg.level === '高' || rg.level === '中高') {
                    topRisks.push(rg.category + '（' + rg.level + '风险）');
                }
            });
            if (topRisks.length > 0) {
                safetyTip += '• ' + topRisks.slice(0, 3).join('<br>• ') + '<br>';
            }
            safetyTip += '建议查看"安全旅游分析"页面获取详细防护措施。请在出行前做好充分的安全准备，购买含紧急救援的旅游保险。';
        }

        var recommendations = {
            'A': {
                title: '💡 经济型智能对策',
                content: '根据您的兴趣特征，我们为您推荐 <strong>' + modeName + '</strong>。考虑到您的消费预测得分（' + consumption + '分），建议您选择 <span style="color:#6a994e;">A档·经济型</span> 消费档次。' +
                         '该档次提供高性价比的康养体验，例如：本地文化景点游览、社区文化中心活动、免费博物馆参观、公园太极晨练等。' +
                         '建议提前关注景区优惠活动，选择淡季出行，选择经济型住宿，让每一分钱都花在刀刃上。' + safetyTip
            },
            'B': {
                title: '💡 舒适型智能对策',
                content: '根据您的兴趣特征，我们为您推荐 <strong>' + modeName + '</strong>。考虑到您的消费预测得分（' + consumption + '分），建议您选择 <span style="color:#a7c957;">B档·舒适型</span> 消费档次。' +
                         '该档次在品质和价格间取得良好平衡，提供周边历史文化名城2-3日游、博物馆深度导览、非遗手工艺体验课等。' +
                         '建议选择口碑好的中高端民宿或度假村，关注团购优惠，提前预约热门项目。' + safetyTip
            },
            'C': {
                title: '💡 品质型智能对策',
                content: '根据您的兴趣特征，我们为您推荐 <strong>' + modeName + '</strong>。考虑到您的消费预测得分（' + consumption + '分），建议您选择 <span style="color:#e9c46a;">C档·品质型</span> 消费档次。' +
                         '该档次提供跨省文化之旅5-7日、非遗传承人亲授工坊、历史文化研学团、高端禅修度假村等高端体验。' +
                         '建议提前规划行程，选择优质旅行机构，注意旅途休息与营养搭配，让康养之旅更加充实。' + safetyTip
            },
            'D': {
                title: '💡 高端型智能对策',
                content: '根据您的兴趣特征，我们为您推荐 <strong>' + modeName + '</strong>。考虑到您的消费预测得分（' + consumption + '分），建议您选择 <span style="color:#f4a261;">D档·高端型</span> 消费档次。' +
                         '该档次提供私人定制文化之旅、国际文化交流参访、豪华文化主题酒店、专属摄影师跟拍、头等舱+五星级全程等尊享服务。' +
                         '建议联系专业旅行顾问进行个性化定制，选择口碑极佳的高端康养机构，确保服务品质与安全性。' + safetyTip
            },
            'E': {
                title: '💡 奢华型智能对策',
                content: '根据您的兴趣特征，我们为您推荐 <strong>' + modeName + '</strong>。考虑到您的消费预测得分（' + consumption + '分），建议您选择 <span style="color:#e76f51;">E档·奢华型</span> 消费档次。' +
                         '该档次提供顶级奢华体验，包括私人定制全程服务、国际顶级康养机构、海外医疗旅游、专属健康管理团队等。' +
                         '建议选择国际知名的高端康养品牌，关注健康管理的前沿项目（如抗衰老、干细胞等），同时注重旅途安全与医疗保障。' + safetyTip
            }
        };
        
        return recommendations[tier] || recommendations['C'];
    }

    function displayResult(result) {
        var sims = result.sims;
        var best = result.bestIdx;
        var consumption = result.consumption || 5;
        var detail = modeDetail[best];
        var tier = getConsumptionTier(consumption);
        var smartRec = getIntelligentRecommendation(best, consumption);
        
        var html = '<strong>🧮 余弦相似度计算结果：</strong><br>';
        modeNames.forEach(function(name, i) {
            var isBest = i === best ? ' <span style="color:#6bae5e; font-weight:bold;">【推荐】</span>' : '';
            html += name + '：' + sims[i].toFixed(4) + isBest + '<br>';
        });
        
        html += '<br><div style="background:linear-gradient(135deg, #e8f5e0, #d4ecc8); padding:18px; border-radius:12px; border:2px solid #6bae5e; margin:15px 0;">';
        html += '<strong style="font-size:1.2em; color:#2d4a2d;">🎯 为您智能推荐：' + modeNames[best] + '</strong>';
        html += '<br><span style="color:#4a6b3a;">匹配度：' + sims[best].toFixed(4) + '</span>';
        html += '<br><br><strong>适合人群：</strong>' + detail.who;
        html += '<br><br><strong>推荐理由：</strong>' + detail.reason;
        html += '<br><strong>' + detail.activities + '</strong>';
        html += '</div>';
        
        html += '<div style="background:linear-gradient(135deg, #fff8e8, #fff3d0); padding:18px; border-radius:12px; border:2px solid #e9c46a; margin:15px 0; display:flex; flex-wrap:wrap; gap:15px; align-items:flex-start;">';
        html += '<div style="flex:1; min-width:280px;">';
        html += '<strong style="font-size:1.1em; color:#8a6520;">' + smartRec.title + '</strong>';
        html += '<br><br><span style="color:#5a4a20; line-height:1.7;">' + smartRec.content + '</span>';
        html += '</div>';
        html += '<button class="btn-accent ai-quick-consult-btn" onclick="window.quickConsultConsumption(\'' + modeNames[best] + '\', ' + consumption + ', \'' + tier + '\')" style="flex-shrink:0; padding:12px 18px; font-size:0.9rem; border-radius:10px;">🤖 询问AI小助手<br>了解' + getConsumptionLabelFromTier(tier) + '详情</button>';
        html += '</div>';

        // 如果用户已完成安全评测，展示推荐模式的安全风险与措施
        if (hasUserSetSafetyScores && safetyData[best]) {
            var sd = safetyData[best];
            var scores = getUserSafetyEvalScores();
            var avg = Math.round(((scores[0] + scores[1] + scores[2] + scores[3]) / 4) * 10) / 10;
            var modeFear = scores[best];

            html += '<div style="background:#fff; border:2px solid #e76f51; border-radius:12px; padding:18px; margin-top:15px;">';
            html += '<h4 style="color:#c0392b; margin-bottom:8px;">🚨 安全认知度分析 · ' + modeNames[best] + '</h4>';
            html += '<p style="color:#5a3030; font-size:0.9em; margin-bottom:15px;">您的综合安全认知度：<strong>' + avg.toFixed(1) + '/10</strong> | 对该模式的害怕度：<strong>' + modeFear.toFixed(1) + '/10</strong></p>';

            // 安全问题分类列表
            sd.risks.forEach(function(riskGroup) {
                var levelColor = riskGroup.level === '高' ? '#d62828' : riskGroup.level === '中高' ? '#e76f51' : riskGroup.level === '中' ? '#f4a261' : '#6a994e';
                var highlight = (riskGroup.level === '高' || riskGroup.level === '中高') ? 'background:#fff5f5;' : '';
                html += '<div style="border-left:4px solid ' + levelColor + '; padding:8px 12px; margin-bottom:8px; ' + highlight + ' border-radius:0 8px 8px 0;">' +
                    '<strong style="color:' + levelColor + ';">' + riskGroup.category + '</strong> ' +
                    '<span style="background:' + levelColor + '; color:#fff; padding:1px 8px; border-radius:10px; font-size:0.7rem;">' + riskGroup.level + '风险</span>' +
                    '<ul style="margin:4px 0 0 18px; padding:0; color:#4a6b3a; font-size:0.85rem; line-height:1.6;">';
                riskGroup.items.forEach(function(item) { html += '<li>' + item + '</li>'; });
                html += '</ul></div>';
            });

            // 防护措施
            html += '<h4 style="color:#2d4a2d; margin:12px 0 8px;">🛡️ 防护措施（安全工程四层控制）</h4>';
            sd.measures.forEach(function(measure) {
                html += '<div style="background:#f0f7e8; border-radius:8px; padding:8px 12px; margin-bottom:6px; border-left:4px solid #6bae5e;">' +
                    '<strong style="color:#2d4a2d;">' + measure.title + '：</strong>' +
                    '<span style="color:#4a6b3a; line-height:1.6; font-size:0.85rem;">' + measure.content + '</span></div>';
            });
            html += '</div>';
        }

        calcResultDisplay.innerHTML = html;
        calcResultDisplay.style.display = 'block';
        gotoVisualBtn.style.display = 'inline-block';
        exportExcelFromCalcBtn.style.display = 'inline-block';

        calcResultDisplay.setAttribute('data-recommend-text',
            '为您推荐' + modeNames[best] + '。' + smartRec.title + '。' + detail.reason + ' ' + detail.activities);
    }

    function exportSimsToExcel() {
        if (!simScores || bestIdx === null) {
            alert('暂无计算结果，请先完成数据化选择。');
            return;
        }
        var rows = [
            ['康养模式', '余弦相似度']
        ];
        modeNames.forEach(function(name, i) { rows.push([name, simScores[i].toFixed(4)]); });
        rows.push([]);
        rows.push(['推荐模式', modeNames[bestIdx]]);
        rows.push(['用户文化兴趣', usrVec[0]]);
        rows.push(['用户生态兴趣', usrVec[1]]);
        rows.push(['用户休闲兴趣', usrVec[2]]);
        rows.push(['用户医疗兴趣', usrVec[3]]);
        var ws = XLSX.utils.aoa_to_sheet(rows);
        ws['!cols'] = [{ wch: 20 }, { wch: 18 }];
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, '康养模式推荐');
        XLSX.writeFile(wb, '康养模式匹配结果.xlsx');
    }

    function exportChartToWord() {
        var canvases = document.querySelectorAll('#chartDisplayArea canvas');
        if (canvases.length === 0) {
            alert('未找到图表，请先生成可视化图表。');
            return;
        }
        if (typeof docx === 'undefined') {
            alert('Word导出组件正在加载，请稍后重试。如持续无法导出，请检查网络连接。');
            return;
        }

        var explanationEl = document.getElementById('chartExplanation');
        var summaryEl = document.getElementById('recommendSummaryBox');
        var explanationText = explanationEl ? explanationEl.innerText : '';
        var summaryText = summaryEl ? summaryEl.innerText : '';

        var Document = docx.Document;
        var Packer = docx.Packer;
        var Paragraph = docx.Paragraph;
        var TextRun = docx.TextRun;
        var ImageRun = docx.ImageRun;
        var HeadingLevel = docx.HeadingLevel;
        var AlignmentType = docx.AlignmentType;
        var BorderStyle = docx.BorderStyle;

        var children = [];

        children.push(new Paragraph({
            children: [new TextRun({ text: '康养模式可视化分析报告', bold: true, size: 36, color: '2D4A2C', font: 'SimSun' })],
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 },
        }));

        children.push(new Paragraph({
            children: [new TextRun({ text: '图表展示', bold: true, size: 30, font: 'SimSun' })],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 150 },
        }));

        canvases.forEach(function(canvas) {
            var tempCanvas = document.createElement('canvas');
            var scale = 2;
            tempCanvas.width = canvas.width * scale;
            tempCanvas.height = canvas.height * scale;
            var tempCtx = tempCanvas.getContext('2d');
            tempCtx.scale(scale, scale);
            tempCtx.fillStyle = '#ffffff';
            tempCtx.fillRect(0, 0, canvas.width, canvas.height);
            tempCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

            var dataUrl = tempCanvas.toDataURL('image/png');
            var base64 = dataUrl.split(',')[1];
            var binaryString = atob(base64);
            var bytes = new Uint8Array(binaryString.length);
            for (var i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }

            var imgWidth = 480;
            var imgHeight = Math.round(480 * canvas.height / canvas.width);

            children.push(new Paragraph({
                children: [
                    new ImageRun({
                        data: bytes,
                        transformation: { width: imgWidth, height: imgHeight },
                        type: 'png',
                    }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
            }));
        });

        if (explanationText) {
            children.push(new Paragraph({
                children: [new TextRun({ text: '图表解读', bold: true, size: 30, font: 'SimSun' })],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 150 },
            }));
            explanationText.split('\n').forEach(function(line) {
                if (line.trim()) {
                    children.push(new Paragraph({
                        children: [new TextRun({ text: line.trim(), size: 22, font: 'SimSun' })],
                        spacing: { after: 80 },
                    }));
                }
            });
        }

        if (summaryText) {
            children.push(new Paragraph({
                children: [new TextRun({ text: '推荐总结', bold: true, size: 30, font: 'SimSun' })],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 150 },
            }));
            summaryText.split('\n').forEach(function(line) {
                if (line.trim()) {
                    children.push(new Paragraph({
                        children: [new TextRun({ text: line.trim(), size: 22, font: 'SimSun' })],
                        spacing: { after: 80 },
                    }));
                }
            });
        }

        children.push(new Paragraph({
            children: [new TextRun({ text: '由健康养生旅游模式系统生成', size: 20, color: '888888', font: 'SimSun' })],
            alignment: AlignmentType.CENTER,
            border: { top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC', space: 10 } },
            spacing: { before: 300 },
        }));

        var doc = new Document({
            sections: [{
                properties: {},
                children: children,
            }],
        });

        Packer.toBlob(doc).then(function(blob) {
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = '康养模式分析报告.docx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }).catch(function(err) {
            alert('导出Word失败: ' + err.message);
        });
    }

    function resetToChartSelection() {
        if (myChart) {
            myChart.destroy();
            myChart = null;
        }
        chartSelectionArea.style.display = 'block';
        chartDisplayArea.style.display = 'none';
        chartDisplayArea.innerHTML = '';
    }

    function ensureStandardChartLayout() {
        if (!document.getElementById('myChart')) {
            chartDisplayArea.innerHTML =
                '<div class="chart-container"><canvas id="myChart"></canvas></div>' +
                '<div id="chartExplanation" class="result-box" style="margin-top:10px;"></div>' +
                '<div id="recommendSummaryBox" class="recommend-summary"></div>' +
                '<div class="button-row">' +
                  '<button class="btn-return-chart" id="backToChartSelection">🔄 重新选择图表</button>' +
                  '<button class="btn-export-excel" id="exportExcelChart">📤 导出 Excel</button>' +
                  '<button class="btn-export-word" id="exportWordChart">📄 导出 Word</button>' +
                  '<button class="btn-return-home" id="backToHomeFromChart">↩ 返回主页</button>' +
                '</div>';
        }
    }

    function renderPieLayout() {
        chartDisplayArea.innerHTML =
            '<div style="display:flex; gap:25px; flex-wrap:wrap; justify-content:center;">' +
              '<div style="flex:1; min-width:260px;"><canvas id="pieUser" height="260"></canvas></div>' +
              '<div style="flex:1; min-width:260px;"><canvas id="pieMode" height="260"></canvas></div>' +
            '</div>' +
            '<div id="chartExplanation" class="result-box" style="margin-top:15px;"></div>' +
            '<div id="recommendSummaryBox" class="recommend-summary"></div>' +
            '<div class="button-row">' +
              '<button class="btn-return-chart" id="backToChartSelection">🔄 重新选择图表</button>' +
              '<button class="btn-export-excel" id="exportExcelChart">📤 导出 Excel</button>' +
              '<button class="btn-export-word" id="exportWordChart">📄 导出 Word</button>' +
              '<button class="btn-return-home" id="backToHomeFromChart">↩ 返回主页</button>' +
            '</div>';
    }

    function renderChart(chartType) {
        if (!usrVec || bestIdx === null) {
            alert('请先完成数据计算');
            return;
        }
        var userVec = usrVec;
        var bestModeIdx = bestIdx;
        var modeVec = modeFeatures[bestModeIdx];
        var dimLabels = ['文化兴趣', '生态兴趣', '休闲兴趣', '医疗兴趣'];
        var detail = modeDetail[bestModeIdx];

        if (myChart) {
            myChart.destroy();
            myChart = null;
        }
        chartSelectionArea.style.display = 'none';
        chartDisplayArea.style.display = 'block';

        if (chartType === 'pie') {
            renderPieLayout();
            var userColors = ['#6a994e', '#a7c957', '#f2e8cf', '#bc6c25'];
            var modeColors = ['#386641', '#dda15e', '#fefae0', '#a98467'];
            new Chart(document.getElementById('pieUser'), {
                type: 'pie',
                data: {
                    labels: dimLabels,
                    datasets: [{ data: userVec, backgroundColor: userColors, borderColor: '#ffffff', borderWidth: 2 }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: { display: true, text: '您的兴趣分布', color: '#2d4a2c', font: { size: window.innerWidth < 768 ? 12 : 15 } },
                        legend: { position: 'bottom', labels: { font: { size: window.innerWidth < 768 ? 10 : 12 }, padding: 10 } }
                    }
                }
            });
            new Chart(document.getElementById('pieMode'), {
                type: 'pie',
                data: {
                    labels: dimLabels,
                    datasets: [{ data: modeVec, backgroundColor: modeColors, borderColor: '#ffffff', borderWidth: 2 }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: { display: true, text: '推荐模式：' + modeNames[bestModeIdx], color: '#2d4a2c', font: { size: window.innerWidth < 768 ? 12 : 15 } },
                        legend: { position: 'bottom', labels: { font: { size: window.innerWidth < 768 ? 10 : 12 }, padding: 10 } }
                    }
                }
            });
            document.getElementById('chartExplanation').innerHTML =
                '<strong>🥧 饼图解读：</strong>左侧为用户兴趣占比（多彩自然色），右侧为推荐模式特征占比（大地暖色系），颜色对比鲜明且结构相似度极高。';
        } else {
            ensureStandardChartLayout();
            var canvas = document.getElementById('myChart');
            var ctx = canvas.getContext('2d');
            if (chartType === 'line') {
                myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: dimLabels,
                        datasets: [
                            { label: '您的兴趣值', data: userVec, borderColor: '#4c8b4c',
                                backgroundColor: 'rgba(76,139,76,0.1)', tension: 0.2, pointRadius: 6,
                                pointBackgroundColor: '#2d5a2d', borderWidth: 3 },
                            { label: '推荐模式：' + modeNames[bestModeIdx], data: modeVec,
                                borderColor: '#d98c5f', backgroundColor: 'rgba(217,140,95,0.1)',
                                tension: 0.2, pointRadius: 6, pointBackgroundColor: '#b45f2a',
                                borderWidth: 3, borderDash: [6, 3] }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: { intersect: false, mode: 'index' },
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: { font: { size: window.innerWidth < 768 ? 11 : 13 }, padding: 15, usePointStyle: true }
                            }
                        },
                        scales: {
                            x: {
                                grid: { display: false },
                                ticks: { font: { size: window.innerWidth < 768 ? 10 : 12 } }
                            },
                            y: {
                                beginAtZero: true,
                                max: 10,
                                grid: { color: 'rgba(0,0,0,0.06)' },
                                ticks: { font: { size: window.innerWidth < 768 ? 10 : 12 } }
                            }
                        }
                    }
                });
                document.getElementById('chartExplanation').innerHTML =
                    '<strong>📉 折线图解读：</strong>绿色实线代表您的兴趣分布，橙色虚线为推荐模式的特征。两者在关键维度上高度重合。';
            } else if (chartType === 'scatter') {
                myChart = new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        datasets: [
                            { label: '您的兴趣点', data: userVec.map(function(v, i) { return { x: i, y: v }; }),
                                backgroundColor: '#2d6a4f', pointRadius: window.innerWidth < 768 ? 8 : 10, pointHoverRadius: 13 },
                            { label: '推荐模式点', data: modeVec.map(function(v, i) { return { x: i, y: v }; }),
                                backgroundColor: '#d97c4a', pointRadius: window.innerWidth < 768 ? 8 : 10, pointHoverRadius: 13, pointStyle: 'triangle' }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: { intersect: false, mode: 'index' },
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: { font: { size: window.innerWidth < 768 ? 11 : 13 }, padding: 15, usePointStyle: true }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        var dimLabels = ['文化', '生态', '休闲', '医疗'];
                                        return context.dataset.label + ' - ' + dimLabels[context.parsed.x] + ': ' + context.parsed.y;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                min: -0.5,
                                max: 3.5,
                                ticks: {
                                    stepSize: 1,
                                    callback: function(value) {
                                        var labels = ['文化', '生态', '休闲', '医疗'];
                                        return labels[value] || '';
                                    },
                                    font: { size: window.innerWidth < 768 ? 9 : 12 }
                                },
                                title: { display: true, text: '兴趣维度', color: '#2d4a2c', font: { size: window.innerWidth < 768 ? 10 : 13 } },
                                grid: { color: 'rgba(0,0,0,0.06)' }
                            },
                            y: {
                                beginAtZero: true,
                                max: 10,
                                title: { display: true, text: '兴趣值', color: '#2d4a2c', font: { size: window.innerWidth < 768 ? 10 : 13 } },
                                grid: { color: 'rgba(0,0,0,0.06)' },
                                ticks: { font: { size: window.innerWidth < 768 ? 9 : 12 } }
                            }
                        }
                    }
                });
                document.getElementById('chartExplanation').innerHTML =
                    '<strong>⚪ 散点图解读：</strong>绿色圆点为您，橙色三角为推荐模式，位置越接近匹配越佳。';
            }
        }

        var summaryEl = document.getElementById('recommendSummaryBox');
        if (summaryEl) {
            var consumptionScore = 5;
            var consumptionInput = document.getElementById('consumptionInput');
            if (consumptionInput) {
                consumptionScore = parseFloat(consumptionInput.value) || 5;
            }
            var tier = getConsumptionTier(consumptionScore);
            var tierName = getConsumptionLabelFromTier(tier);
            // 直接从数据化选择页的安全评价滑块读取分数，保证与数据选择页的安全最终评分一致
            var evalScores = getUserSafetyEvalScores();
            var smartRec = getIntelligentRecommendation(bestModeIdx, consumptionScore, evalScores);

            var sd = safetyData[bestModeIdx];
            var safetySummaryHtml = '';
            if (sd) {
                if (!hasUserSetSafetyScores) {
                    // 用户尚未完成安全评价，显示提示
                    safetySummaryHtml =
                        '<div style="background:linear-gradient(135deg, #f5f5f5, #e8e8e8); padding:12px; border-radius:10px; border:2px dashed #bbb; margin-bottom:15px;">' +
                        '<strong style="color:#888;">🛡️ 安全认知度：<span style="color:#e76f51;">未评测</span></strong><br>' +
                        '<span style="color:#999; font-size:0.85em;">请先到<a href="javascript:void(0)" onclick="window.showPage(\'dataSelectPage\');" style="color:#c0392b;text-decoration:underline;">数据化选择</a>页面完成安全评价打分，系统将根据您的安全认知度给出综合推荐</span>' +
                        '</div>';
                } else {
                    // 直接从数据化选择页的安全评价滑块读取分数（与displayResult同一数据源）
                    var modeFearScore = evalScores[bestModeIdx] || 0;
                    var evalAvg = Math.round(((evalScores[0] + evalScores[1] + evalScores[2] + evalScores[3]) / 4) * 10) / 10;
                    var highRisks = [];
                    sd.risks.forEach(function(rg) {
                        if (rg.level === '高' || rg.level === '中高') highRisks.push(rg.category.replace(/[^一-龥]/g, ''));
                    });
                    safetySummaryHtml =
                        '<div style="background:linear-gradient(135deg, #fff0f0, #ffe8e8); padding:12px; border-radius:10px; border:2px solid #e76f51; margin-bottom:15px;">' +
                        '<strong style="color:#c0392b;">🛡️ 安全认知度综合评分：' + evalAvg.toFixed(1) + '/10</strong><br>' +
                        '<span style="color:#5a3030; font-size:0.9em; line-height:1.6;">' +
                        '对' + modeNames[bestModeIdx] + '的害怕度：<strong>' + modeFearScore.toFixed(1) + '</strong> | ' +
                        '需重点关注：' + (highRisks.length > 0 ? highRisks.join('、') : '各项风险均需关注') + '<br>' +
                        '请在出行前查看<a href="javascript:void(0)" onclick="window.showPage(\'safetyAnalysisPage\');window.renderSafetyAnalysis(\'safety-overview\');" style="color:#c0392b;text-decoration:underline;">安全旅游分析</a>获取详细防护措施</span>' +
                        '</div>';
                }
            }

            summaryEl.innerHTML =
                safetySummaryHtml +
                '<div style="background:linear-gradient(135deg, #e8f5e0, #d4ecc8); padding:15px; border-radius:10px; border:2px solid #6bae5e; margin-bottom:15px;">' +
                '<strong style="font-size:1.1em; color:#2d4a2d;">🎯 最终推荐：' + modeNames[bestModeIdx] + '</strong><br>' +
                '<em>适合人群：' + detail.who + '</em><br>' +
                '<strong>推荐理由：</strong>' + detail.reason + '<br>' +
                '<strong>' + detail.activities + '</strong>' +
                '</div>' +
                '<div style="background:linear-gradient(135deg, #fff8e8, #fff3d0); padding:15px; border-radius:10px; border:2px solid #e9c46a; margin-bottom:15px; display:flex; flex-wrap:wrap; gap:15px; align-items:flex-start;">' +
                '<div style="flex:1; min-width:250px;">' +
                '<strong style="font-size:1em; color:#8a6520;">' + smartRec.title + '</strong><br>' +
                '<span style="color:#5a4a20; line-height:1.6; font-size:0.9em;">' + smartRec.content + '</span>' +
                '</div>' +
                '<button class="btn-accent ai-quick-consult-btn" onclick="window.quickConsultConsumption(\'' + modeNames[bestModeIdx] + '\', ' + consumptionScore + ', \'' + tier + '\')" style="flex-shrink:0; padding:10px 15px; font-size:0.85rem; border-radius:8px;">🤖 询问AI小助手<br>了解' + tierName + '详情</button>' +
                '</div>';

            summaryEl.setAttribute('data-recommend-text',
                '最终推荐' + modeNames[bestModeIdx] + '。适合人群：' + detail.who + '。' + smartRec.title + '。' + detail.reason + ' ' + detail.activities);
        }
    }

    function speakText(text) {
        if (speaking) {
            stopSpeaking();
            return;
        }
        if ('speechSynthesis' in window && window.speechSynthesis) {
            tryNativeSpeech(text);
        } else {
            tryAudioTTS(text);
        }
    }

    function tryNativeSpeech(text) {
        window.speechSynthesis.cancel();
        loadVoices();
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.9;
        utterance.pitch = 1.05;
        utterance.volume = 1;
        var zhVoice = getZhVoice();
        if (zhVoice) {
            utterance.voice = zhVoice;
        }
        utterance.onstart = function() {
            speaking = true;
            speechMode = 'native';
            updateSpeakBtnState();
        };
        utterance.onend = function() {
            speaking = false;
            speechMode = null;
            updateSpeakBtnState();
        };
        utterance.onerror = function(e) {
            if (e.error !== 'canceled') {
                tryAudioTTS(text);
            } else {
                speaking = false;
                speechMode = null;
                updateSpeakBtnState();
            }
        };
        if (isIOS) {
            window.speechSynthesis.speak(utterance);
        } else {
            setTimeout(function() {
                window.speechSynthesis.speak(utterance);
            }, 50);
        }
    }

    function tryAudioTTS(text) {
        var maxLen = 200;
        var chunks = [];
        var remaining = text;
        while (remaining.length > 0) {
            chunks.push(remaining.substring(0, maxLen));
            remaining = remaining.substring(maxLen);
        }
        speaking = true;
        speechMode = 'audio';
        updateSpeakBtnState();
        playAudioChunks(chunks, 0, text);
    }

    function playAudioChunks(chunks, index, originalText) {
        if (index >= chunks.length || !speaking) {
            speaking = false;
            speechMode = null;
            updateSpeakBtnState();
            return;
        }
        var audio = new Audio();
        audio.src = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&q=' + encodeURIComponent(chunks[index]);
        audioEl = audio;
        audio.onended = function() {
            playAudioChunks(chunks, index + 1, originalText);
        };
        audio.onerror = function() {
            speaking = false;
            speechMode = null;
            audioEl = null;
            updateSpeakBtnState();
            copyTextFallback(originalText);
        };
        audio.play().catch(function() {
            speaking = false;
            speechMode = null;
            audioEl = null;
            updateSpeakBtnState();
            copyTextFallback(originalText);
        });
    }

    function copyTextFallback(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                alert('当前浏览器不支持语音朗读，推荐内容已复制到剪贴板，您可以使用手机自带的朗读功能阅读。');
            }).catch(function() {
                fallbackCopyText(text);
            });
        } else {
            fallbackCopyText(text);
        }
    }

    function fallbackCopyText(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('当前浏览器不支持语音朗读，推荐内容已复制到剪贴板，您可以使用手机自带的朗读功能阅读。');
        } catch (e) {
            alert('当前浏览器不支持语音朗读，请使用Chrome、Safari或Edge浏览器访问。');
        }
        document.body.removeChild(textarea);
    }

    function stopSpeaking() {
        if (speechMode === 'native' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        if (audioEl) {
            audioEl.pause();
            audioEl.currentTime = 0;
            audioEl = null;
        }
        speaking = false;
        speechMode = null;
        updateSpeakBtnState();
    }

    function updateSpeakBtnState() {
        var btn = document.getElementById('aiSpeakLastBtn');
        if (btn) {
            if (speaking) {
                btn.textContent = '⏹';
                btn.title = '停止朗读';
                btn.classList.add('speaking');
            } else {
                btn.textContent = '🔊';
                btn.title = '朗读最后一条回复';
                btn.classList.remove('speaking');
            }
        }
    }

    function speakLastRecommendation() {
        var textToSpeak = '';
        var summaryEl = document.getElementById('recommendSummaryBox');
        if (summaryEl && summaryEl.getAttribute('data-recommend-text')) {
            textToSpeak = summaryEl.getAttribute('data-recommend-text');
        } else if (calcResultDisplay && calcResultDisplay.getAttribute('data-recommend-text')) {
            textToSpeak = calcResultDisplay.getAttribute('data-recommend-text');
        } else if (bestIdx !== null) {
            var detail = modeDetail[bestIdx];
            textToSpeak = '为您推荐' + modeNames[bestIdx] + '。适合人群：' + detail.who + '。' + detail.reason + ' ' + detail.activities;
        } else {
            textToSpeak = '暂无推荐结果，请先完成数据化选择。';
        }
        speakText(textToSpeak);
    }

    function addChatMessage(type, text) {
        var msgDiv = document.createElement('div');
        msgDiv.className = 'ai-msg ' + type;
        msgDiv.innerHTML = text;
        aiChatBody.appendChild(msgDiv);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
        if (type === 'assistant') {
            lastAiMsg = text.replace(/<[^>]*>/g, '');
        }
    }

    function handleLocalCommand(query) {
        var q = query.trim().toLowerCase();
        if (q.includes('朗读') || q.includes('读出') || q.includes('语音播报')) {
            if (speaking) {
                stopSpeaking();
                return '⏹ 已停止语音朗读。再次点击"朗读推荐"可重新朗读。';
            } else {
                if (bestIdx === null) {
                    return '⚠ 暂无推荐结果，请先完成数据化选择后再使用朗读功能。';
                } else {
                    speakLastRecommendation();
                    return '🔊 正在朗读推荐内容！点击聊天框下方的 ⏹ 按钮可停止朗读。';
                }
            }
        }
        return null;
    }

    // 调用DeepSeek API进行智能对话
    // 将用户消息和历史对话发送给DeepSeek模型，返回AI回复
    function callDeepSeekAPI(userMessage) {
        chatHistory.push({ role: 'user', content: userMessage });

        var messages = [{ role: 'system', content: buildSystemPrompt() }];
        var recentHistory = chatHistory.slice(-10);
        messages = messages.concat(recentHistory);

        return fetch(deepseekApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + deepseekApiKey
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: messages,
                max_tokens: 500,
                temperature: 0.7,
                stream: false
            })
        }).then(function(res) {
            if (!res.ok) {
                throw new Error('API请求失败: ' + res.status);
            }
            return res.json();
        }).then(function(data) {
            var reply = data.choices && data.choices[0] && data.choices[0].message
                ? data.choices[0].message.content
                : '抱歉，我暂时无法回答，请稍后再试。';
            chatHistory.push({ role: 'assistant', content: reply });
            if (chatHistory.length > 20) {
                chatHistory = chatHistory.slice(-16);
            }
            return reply;
        }).catch(function(err) {
            chatHistory.pop();
            return '⚠ 网络连接异常，请检查网络后重试。(' + err.message + ')';
        });
    }

    function handleAIQuery(query) {
        if (!query.trim() || isAiLoading) return;
        addChatMessage('user', query);
        aiChatInput.value = '';

        var localResponse = handleLocalCommand(query);
        if (localResponse !== null) {
            setTimeout(function() {
                addChatMessage('assistant', localResponse);
            }, 200);
            return;
        }

        isAiLoading = true;
        var loadingDiv = document.createElement('div');
        loadingDiv.className = 'ai-msg assistant';
        loadingDiv.id = 'aiLoadingMsg';
        loadingDiv.innerHTML = '🤔 思考中<span class="loading-dots">...</span>';
        aiChatBody.appendChild(loadingDiv);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;

        callDeepSeekAPI(query).then(function(reply) {
            var loadEl = document.getElementById('aiLoadingMsg');
            if (loadEl) loadEl.remove();
            isAiLoading = false;
            var safeReply = reply
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\n/g, '<br>');
            addChatMessage('assistant', safeReply);
        });
    }

    function toggleAIChat() {
        var isOpen = aiChatPanel.classList.contains('open');
        if (isOpen) {
            aiChatPanel.classList.remove('open');
            aiBubble.style.display = 'block';
        } else {
            aiChatPanel.classList.add('open');
            aiBubble.style.display = 'none';
            aiChatBody.scrollTop = aiChatBody.scrollHeight;
        }
    }

    function quickConsultConsumption(modeName, consumptionScore, tier) {
        aiChatPanel.classList.add('open');
        aiBubble.style.display = 'none';
        
        var tierName = getConsumptionLabelFromTier(tier);
        var tierLabel = tier;
        var priceRange = '';
        var tierDetail = '';
        
        if (tier === 'A') {
            tierLabel = 'A档 · 经济型';
            priceRange = '1,500 - 6,000 元';
            tierDetail = '经济型方案性价比高，适合预算有限但想体验康养旅游的朋友。';
        } else if (tier === 'B') {
            tierLabel = 'B档 · 舒适型';
            priceRange = '3,500 - 12,000 元';
            tierDetail = '舒适型方案在品质和价格间取得良好平衡，适合追求一定品质又不想花费太多的朋友。';
        } else if (tier === 'C') {
            tierLabel = 'C档 · 品质型';
            priceRange = '7,000 - 25,000 元';
            tierDetail = '品质型方案提供高端体验，适合注重服务品质和深度体验的朋友。';
        } else if (tier === 'D') {
            tierLabel = 'D档 · 高端型';
            priceRange = '12,000 元以上';
            tierDetail = '高端型方案提供尊享定制服务，适合追求极致体验的朋友。';
        } else if (tier === 'E') {
            tierLabel = 'E档 · 奢华型';
            priceRange = '25,000 元以上';
            tierDetail = '奢华型方案不设预算上限，追求顶级奢华体验。';
        }
        
        var question = '我的消费预测得分是' + consumptionScore + '分（' + tierName + '），想了解' + modeName + '的' + tierLabel + '（价格区间：' + priceRange + '），请给出详细建议，包括具体的行程安排、住宿推荐、注意事项等。' + tierDetail;
        
        addChatMessage('user', question);
        aiChatInput.value = '';
        handleAIQuery(question);
    }

    function zoomPage(factor) {
        var body = document.body;
        var currentZoom = parseFloat(body.style.fontSize || '1') || 1;
        var newZoom = Math.max(0.7, Math.min(1.6, currentZoom + factor));
        body.style.fontSize = newZoom + 'rem';
    }

    function resetZoom() {
        document.body.style.fontSize = '1rem';
    }

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var pageId = this.getAttribute('data-page');
            if (pageId === 'researchPage') {
                renderResearchBackground();
                renderModeIntroduction();
            }
            if (pageId === 'interestScorePage') renderInterestScorePage();
            if (pageId === 'groupPage') {
                showPage('groupPage');
                return;
            }
            if (pageId === 'healthStylePage') renderHealthStylePage();
            if (pageId === 'safetyAnalysisPage') {
                renderSafetyAnalysis('safety-overview');
            }
            if (pageId === 'visualPage') {
                if (!usrVec || bestIdx === null) {
                    alert('请先通过"数据化选择"完成计算。');
                    return;
                }
                resetToChartSelection();
            }
            showPage(pageId);
        });
    });

    homeCards.forEach(function(card) {
        card.addEventListener('click', function() {
            var cardId = this.id;
            if (cardId === 'homeCardResearch') {
                renderResearchBackground();
                renderModeIntroduction();
                showPage('researchPage');
            } else if (cardId === 'homeCardHealth') {
                renderHealthStylePage();
                showPage('healthStylePage');
            } else if (cardId === 'homeCardInterest') {
                renderInterestScorePage();
                showPage('interestScorePage');
            } else if (cardId === 'homeCardGroup') {
                showPage('groupPage');
            } else if (cardId === 'homeCardData') {
                showPage('dataSelectPage');
            } else if (cardId === 'homeCardSafety') {
                renderSafetyAnalysis('safety-overview');
                showPage('safetyAnalysisPage');
            } else if (cardId === 'homeCardFeedback') {
                showPage('feedbackPage');
            } else if (cardId === 'homeCardVisual') {
                if (!usrVec || bestIdx === null) {
                    alert('请先通过"数据化选择"完成计算。');
                    return;
                }
                resetToChartSelection();
                showPage('visualPage');
            }
        });
    });

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    backFromDetail.addEventListener('click', function() {
        if (navStack.length > 0) {
            var prevPage = navStack.pop();
            if (prevPage === 'healthStyle') {
                renderHealthStylePage();
                showPage('healthStylePage');
            } else {
                showPage('homePage');
            }
        } else {
            showPage('homePage');
        }
    });

    document.getElementById('quickCalcBtn').addEventListener('click', function() {
        var r = performCalculation();
        if (r) {
            usrVec = r.userVec;
            bestIdx = r.bestIdx;
            simScores = r.sims;
            displayResult(r);
        }
    });

    var feedbackToggleBtn = document.getElementById('feedbackToggleBtn');
    var feedbackSubmitBtn = document.getElementById('feedbackSubmitBtn');
    var feedbackContent = document.querySelector('.feedback-section-content');
    var feedbackText = document.getElementById('feedbackText');
    var toggleIcon = feedbackToggleBtn ? feedbackToggleBtn.querySelector('.toggle-icon') : null;
    var toggleText = feedbackToggleBtn ? feedbackToggleBtn.querySelector('.toggle-text') : null;

    if (feedbackToggleBtn) {
        feedbackToggleBtn.onclick = function() {
            if (feedbackContent.style.display === 'none') {
                feedbackContent.style.display = 'block';
                if (toggleIcon) toggleIcon.textContent = '▼';
                if (toggleText) toggleText.textContent = '收起建议';
            } else {
                feedbackContent.style.display = 'none';
                if (toggleIcon) toggleIcon.textContent = '▶';
                if (toggleText) toggleText.textContent = '展开建议';
            }
        };
    }

    if (feedbackSubmitBtn) {
        feedbackSubmitBtn.onclick = function() {
            if (!feedbackText || !feedbackText.value.trim()) {
                alert('请填写反馈内容后再提交！');
                return;
            }
            alert('感谢您的反馈！您的意见对我们非常重要，我们会认真考虑并加以改进。');
            feedbackText.value = '';
            feedbackContent.style.display = 'none';
            if (toggleIcon) toggleIcon.textContent = '▶';
            if (toggleText) toggleText.textContent = '展开建议';
        };
    }

    exportExcelFromCalcBtn.addEventListener('click', exportSimsToExcel);

    gotoVisualBtn.addEventListener('click', function() {
        resetToChartSelection();
        showPage('visualPage');
    });

    chartSelectionArea.addEventListener('click', function(e) {
        if (e.target.classList.contains('chart-type-btn')) {
            renderChart(e.target.getAttribute('data-chart'));
        }
    });

    chartDisplayArea.addEventListener('click', function(e) {
        if (e.target.id === 'backToChartSelection') resetToChartSelection();
        if (e.target.id === 'backToHomeFromChart') {
            resetToChartSelection();
            showPage('homePage');
        }
        if (e.target.id === 'exportExcelChart') exportSimsToExcel();
        if (e.target.id === 'exportWordChart') exportChartToWord();
    });

    aiAvatarBtn.addEventListener('click', toggleAIChat);
    aiChatClose.addEventListener('click', function() {
        aiChatPanel.classList.remove('open');
        aiBubble.style.display = 'block';
    });
    aiSendBtn.addEventListener('click', function() { handleAIQuery(aiChatInput.value); });
    aiChatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleAIQuery(aiChatInput.value);
    });
    aiSpeakLastBtn.addEventListener('click', function() {
        if (speaking) {
            stopSpeaking();
        } else if (lastAiMsg) {
            speakText(lastAiMsg);
        } else {
            speakLastRecommendation();
        }
    });

    aiQuickBtns.addEventListener('click', function(e) {
        if (e.target.classList.contains('ai-quick-btn')) {
            var q = e.target.getAttribute('data-q');
            handleAIQuery(q);
        }
    });

    document.getElementById('aiZoomIn').addEventListener('click', function() { zoomPage(0.1); });
    document.getElementById('aiZoomOut').addEventListener('click', function() { zoomPage(-0.1); });
    document.getElementById('aiZoomReset').addEventListener('click', resetZoom);

    if ('speechSynthesis' in window) {
        loadVoices();
        window.speechSynthesis.onvoiceschanged = function() {
            loadVoices();
        };
        setInterval(function() {
            if (speaking && speechMode === 'native' && !window.speechSynthesis.speaking) {
                speaking = false;
                speechMode = null;
                updateSpeakBtnState();
            }
        }, 1000);
    }

    // 首页打字机效果的文字列表
    var typewriterTexts = [
        '实时化旅游模式系统',
        '健康养生 · 智能推荐',
        '康养旅游 · 数据驱动',
        '余弦相似度 · 精准匹配',
        '银发经济 · 品质生活'
    ];
    var typewriterIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typewriterEl = document.getElementById('homeTypewriterText');
    var cursorEl = document.getElementById('typewriterCursor');

    // 打字机效果核心函数
    // 实现打字->停顿->删除->下一条的打字机动画效果
    function typewriterTick() {
        var currentText = typewriterTexts[typewriterIndex];
        if (!isDeleting) {
            charIndex++;
            typewriterEl.textContent = currentText.substring(0, charIndex);
            if (charIndex === currentText.length) {
                setTimeout(function() {
                    isDeleting = true;
                    typewriterTick();
                }, 2000);
                return;
            }
            setTimeout(typewriterTick, 120);
        } else {
            charIndex--;
            typewriterEl.textContent = currentText.substring(0, charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
                setTimeout(typewriterTick, 500);
                return;
            }
            setTimeout(typewriterTick, 60);
        }
    }
    typewriterTick();

    // 轮播图数据列表（精简为4张）
    var carouselImages = [
        { src: 'photos/1.jpg', caption: '🌿 康养旅游 · 自然疗愈之旅' },
        { src: 'photos/5.jpg', caption: '🌱 生态养生 · 森林氧吧漫步' },
        { src: 'photos/8.jpg', caption: '🛋 休闲度假 · 温泉SPA享乐' },
        { src: 'photos/11.jpg', caption: '🏥 健康管理 · 中医理疗养生' }
    ];
    var currentSlide = 0;
    var carouselTrack = document.getElementById('carouselTrack');
    var carouselDots = document.getElementById('carouselDots');
    var autoSlideTimer = null;

    // 初始化轮播图组件
    function initCarousel() {
        var trackHtml = '';
        var dotsHtml = '';
        carouselImages.forEach(function(img, i) {
            trackHtml +=
                '<div class="carousel-slide">' +
                    '<img src="' + img.src + '" alt="' + img.caption + '" loading="' + (i < 2 ? 'eager' : 'lazy') + '" decoding="async">' +
                    '<div class="carousel-slide-overlay">' + img.caption + '</div>' +
                '</div>';
            dotsHtml += '<button class="carousel-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></button>';
        });
        carouselTrack.innerHTML = trackHtml;
        carouselDots.innerHTML = dotsHtml;
        startAutoSlide();
    }

    function goToSlide(index) {
        currentSlide = index;
        if (currentSlide >= carouselImages.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = carouselImages.length - 1;
        carouselTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        var dots = carouselDots.querySelectorAll('.carousel-dot');
        dots.forEach(function(d, i) {
            d.classList.toggle('active', i === currentSlide);
        });
    }

    function startAutoSlide() {
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(function() {
            goToSlide(currentSlide + 1);
        }, 4000);
    }

    document.getElementById('carouselPrev').addEventListener('click', function() {
        goToSlide(currentSlide - 1);
        startAutoSlide();
    });
    document.getElementById('carouselNext').addEventListener('click', function() {
        goToSlide(currentSlide + 1);
        startAutoSlide();
    });
    carouselDots.addEventListener('click', function(e) {
        if (e.target.classList.contains('carousel-dot')) {
            goToSlide(parseInt(e.target.getAttribute('data-index')));
            startAutoSlide();
        }
    });
    initCarousel();

    var newsData = [
        {
            tag: '政策',
            tagClass: 'news-tag-policy',
            title: '国务院办公厅印发《关于发展银发经济增进老年人福祉的意见》',
            date: '2025-01',
            url: 'https://www.gov.cn/zhengce/jiedu/tujie/202401/content_6926184.htm'
        },
        {
            tag: '行业',
            tagClass: 'news-tag-industry',
            title: '文旅部：推动康养旅游高质量发展，打造一批国家级康养基地',
            date: '2025-03',
            url: 'https://zwgk.mct.gov.cn/zfxxgkml/zhgl/jytadf/202111/t20211104_928754.html'
        },
        {
            tag: '健康',
            tagClass: 'news-tag-health',
            title: '国家卫健委：老龄健康促进行动持续推进，中医养生融入社区',
            date: '2025-02',
            url: 'https://www.nhc.gov.cn/lljks/c100158/202412/a4ddde4785364e789845032258591b7a.shtml'
        },
        {
            tag: '养老',
            tagClass: 'news-tag-aging',
            title: '民政部：全国养老服务体系建设取得新进展，社区养老覆盖率达90%',
            date: '2025-04',
            url: 'https://www.mca.gov.cn/n2623/n2684/n2694/c1662004999980010553/content.html'
        },
        {
            tag: '行业',
            tagClass: 'news-tag-industry',
            title: '2025中国康养旅游市场规模预计突破千亿，生态疗愈成新热点',
            date: '2025-05',
            url: 'http://www.qingdao.gov.cn/zwgk/xxgk/fgw/ywfl/shfz/202507/t20250725_9912138.shtml'
        },
        {
            tag: '政策',
            tagClass: 'news-tag-policy',
            title: '十四五老龄事业规划：构建居家社区机构相协调的养老服务体系',
            date: '2024-12',
            url: 'https://www.mca.gov.cn/n152/n166/c45259/content.html'
        },
        {
            tag: '安全',
            tagClass: 'news-tag-safety',
            title: '文旅部发布《老年旅游安全服务指南》：从出行准备到应急处理全流程规范',
            date: '2025-06',
            url: 'https://www.mct.gov.cn/'
        },
        {
            tag: '安全',
            tagClass: 'news-tag-safety',
            title: '国家旅游局：加强老年旅游团安全管理，要求每团配备随行医护人员',
            date: '2025-04',
            url: 'https://www.mct.gov.cn/'
        },
        {
            tag: '健康',
            tagClass: 'news-tag-health',
            title: '中国老年学会：65岁以上老人出游前应进行健康评估，慢性病管理不可忽视',
            date: '2025-05',
            url: 'https://www.nhc.gov.cn/'
        },
        {
            tag: '安全',
            tagClass: 'news-tag-safety',
            title: '多地景区推出老年人专属安全通道和无障碍设施，适老化改造全面提速',
            date: '2025-03',
            url: 'https://www.gov.cn/'
        },
        {
            tag: '行业',
            tagClass: 'news-tag-industry',
            title: '2025康养旅游安全白皮书发布：生态探险类项目风险最高，医疗康养投诉增长',
            date: '2025-06',
            url: 'https://www.qingdao.gov.cn/'
        },
        {
            tag: '安全',
            tagClass: 'news-tag-safety',
            title: '保险公司推出"银发旅游无忧险"：覆盖意外医疗、紧急救援、行程取消等风险',
            date: '2025-02',
            url: 'https://www.gov.cn/'
        }
    ];

    function initNews() {
        var grid = document.getElementById('homeNewsGrid');
        var html = '';
        newsData.forEach(function(news) {
            html +=
                '<a class="home-news-card" href="' + news.url + '" target="_blank" rel="noopener noreferrer">' +
                    '<span class="home-news-card-tag ' + news.tagClass + '">' + news.tag + '</span>' +
                    '<div class="home-news-card-title">' + news.title + '</div>' +
                    '<div class="home-news-card-date">' + news.date + '</div>' +
                '</a>';
        });
        grid.innerHTML = html;
    }
    initNews();

    var cSlider = document.getElementById('cSlider');
    var eSlider = document.getElementById('eSlider');
    var lSlider = document.getElementById('lSlider');
    var mSlider = document.getElementById('mSlider');
    var cVal = document.getElementById('cVal');
    var eVal = document.getElementById('eVal');
    var lVal = document.getElementById('lVal');
    var mVal = document.getElementById('mVal');
    var sideResult = document.getElementById('sideResult');
    var currentChartType = null;

    function syncSlidersFromUserVec() {
        if (usrVec) {
            cSlider.value = usrVec[0];
            eSlider.value = usrVec[1];
            lSlider.value = usrVec[2];
            mSlider.value = usrVec[3];
            cVal.textContent = usrVec[0];
            eVal.textContent = usrVec[1];
            lVal.textContent = usrVec[2];
            mVal.textContent = usrVec[3];
        }
        updateVisualSidebarResult();
    }

    function updateVisualSidebarResult() {
        var vec = [
            parseFloat(cSlider.value),
            parseFloat(eSlider.value),
            parseFloat(lSlider.value),
            parseFloat(mSlider.value)
        ];
        var sims = modeFeatures.map(function(mf) { return cosineSim(vec, mf); });
        var maxSim = -1;
        var maxIdx = 0;
        sims.forEach(function(s, i) {
            if (s > maxSim) { maxSim = s; maxIdx = i; }
        });
        sideResult.innerHTML =
            '<strong>🌟 推荐模式：</strong>' + modeNames[maxIdx] + '<br>' +
            '<strong>匹配度：</strong>' + maxSim.toFixed(4) + '<br>' +
            sims.map(function(s, i) {
                return modeNames[i] + '：' + s.toFixed(4);
            }).join('<br>');
    }

    function onSliderChange() {
        cVal.textContent = parseFloat(cSlider.value).toFixed(1);
        eVal.textContent = parseFloat(eSlider.value).toFixed(1);
        lVal.textContent = parseFloat(lSlider.value).toFixed(1);
        mVal.textContent = parseFloat(mSlider.value).toFixed(1);
        updateVisualSidebarResult();

        var vec = [
            parseFloat(cSlider.value),
            parseFloat(eSlider.value),
            parseFloat(lSlider.value),
            parseFloat(mSlider.value)
        ];
        usrVec = vec;
        var sims = modeFeatures.map(function(mf) { return cosineSim(vec, mf); });
        var maxSim = -1;
        var maxIdx = 0;
        sims.forEach(function(s, i) {
            if (s > maxSim) { maxSim = s; maxIdx = i; }
        });
        bestIdx = maxIdx;
        simScores = sims;

        if (currentChartType && chartDisplayArea.style.display !== 'none') {
            renderChart(currentChartType);
        }
    }

    if (cSlider) cSlider.addEventListener('input', onSliderChange);
    if (eSlider) eSlider.addEventListener('input', onSliderChange);
    if (lSlider) lSlider.addEventListener('input', onSliderChange);
    if (mSlider) mSlider.addEventListener('input', onSliderChange);

    var sidePanel = document.getElementById('sidePanel');
    var sideHead = document.getElementById('sideHead');
    var sideExpanded = false;

    function toggleSidePanel() {
        sideExpanded = !sideExpanded;
        if (sideExpanded) {
            sidePanel.classList.add('expanded');
        } else {
            sidePanel.classList.remove('expanded');
        }
    }

    if (sideHead) {
        sideHead.addEventListener('click', toggleSidePanel);
    }

    var origRenderChart = renderChart;
    renderChart = function(chartType) {
        currentChartType = chartType;
        origRenderChart(chartType);
    };

    var origResetToChartSelection = resetToChartSelection;
    resetToChartSelection = function() {
        currentChartType = null;
        origResetToChartSelection();
    };

    var origShowPage = showPage;
    showPage = function(pageId) {
        origShowPage(pageId);
        if (pageId === 'visualPage') {
            if (usrVec) {
                syncSlidersFromUserVec();
            }
            // 静默同步：从数据化选择页拉取用户安全分数到全局变量
            // 图表推荐中的安全认知度将使用用户真实值，初始为0
            syncVisualScoresFromDataEval();
        }
        if (pageId === 'safetyAnalysisPage') {
            renderSafetyAnalysis('safety-overview');
        }
    };

    var origRenderPriceTiers = renderPriceTiers;
    renderPriceTiers = function(tiers, modeName) {
        var mName = modeName || '康养旅游';
        console.log('renderPriceTiers called, modeName:', mName);
        var html = '<div class="price-tiers">';
        tiers.forEach(function(t, idx) {
            html +=
                '<div class="tier-card tier-card-clickable" data-tier-label="' + t.label + '" data-tier-price="' + t.price + '" data-tier-detail="' + t.detail.replace(/"/g, '&quot;') + '" data-tier-mode="' + mName + '">' +
                  '<div class="tier-tooltip">&#x1F4AC; 点击问我了解详情！</div>' +
                  '<span class="tier-label ' + t.tierClass + '">' + t.label + '</span>' +
                  '<div class="tier-price">&#x1F4B0; ' + t.price + '</div>' +
                  '<div class="tier-detail">' + t.detail + '</div>' +
                '</div>';
        });
        html += '</div>';
        setTimeout(function() {
            console.log('Setting up click handlers for', document.querySelectorAll('.tier-card-clickable').length, 'cards');
            document.querySelectorAll('.tier-card-clickable').forEach(function(card) {
                card.onclick = function() {
                    console.log('Tier card clicked!');
                    var label = this.getAttribute('data-tier-label');
                    var price = this.getAttribute('data-tier-price');
                    var detail = this.getAttribute('data-tier-detail');
                    var mode = this.getAttribute('data-tier-mode');
                    var question = '我想了解' + mode + '的' + label + '（价格：' + price + '），请给出详细建议';
                    if (!aiChatPanel.classList.contains('open')) {
                        aiChatPanel.classList.add('open');
                        aiBubble.style.display = 'none';
                    }
                    addChatMessage('user', question);
                    aiChatInput.value = '';
                    var localReply = buildTierLocalReply(mode, label, price, detail);
                    setTimeout(function() {
                        addChatMessage('assistant', localReply);
                        var loadingDiv = document.createElement('div');
                        loadingDiv.className = 'ai-msg assistant';
                        loadingDiv.id = 'tierLoadingMsg';
                        loadingDiv.innerHTML = '&#x1F916; 小旅正在思考补充建议<span class="loading-dots">...</span>';
                        aiChatBody.appendChild(loadingDiv);
                        aiChatBody.scrollTop = aiChatBody.scrollHeight;
                    }, 300);
                    isAiLoading = true;
                    callDeepSeekAPI(question).then(function(reply) {
                        isAiLoading = false;
                        var loadEl = document.getElementById('tierLoadingMsg');
                        if (loadEl) loadEl.remove();
                        var safeReply = reply
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/\n/g, '<br>');
                        addChatMessage('assistant', '&#x1F916; 小旅补充建议：<br>' + safeReply);
                    }).catch(function() {
                        isAiLoading = false;
                        var loadEl = document.getElementById('tierLoadingMsg');
                        if (loadEl) loadEl.remove();
                    });
                };
            });
        }, 200);
        return html;
    };

    // 安全旅游分析Tab切换事件
    var safetyTabs = document.getElementById('safetyTabs');
    if (safetyTabs) {
        safetyTabs.addEventListener('click', function(e) {
            if (e.target.classList.contains('safety-tab')) {
                var tab = e.target.getAttribute('data-tab');
                renderSafetyAnalysis(tab);
            }
        });
    }

    // 安全认知度应用和重置按钮事件
    var applySafetyFearBtn = document.getElementById('applySafetyFearBtn');
    var resetSafetyFearBtn = document.getElementById('resetSafetyFearBtn');
    if (applySafetyFearBtn) {
        applySafetyFearBtn.addEventListener('click', applySafetyFearScores);
    }
    if (resetSafetyFearBtn) {
        resetSafetyFearBtn.addEventListener('click', resetSafetyFearScores);
    }

    function buildTierLocalReply(mode, label, price, detail) {
        var tierType = '';
        if (label.indexOf('A') !== -1) tierType = '经济型';
        else if (label.indexOf('B') !== -1) tierType = '舒适型';
        else if (label.indexOf('C') !== -1) tierType = '品质型';
        else if (label.indexOf('D') !== -1) tierType = '高端型';

        var tips = '';
        if (tierType === '经济型') {
            tips = '&#x1F4A1; 小旅提示：经济型方案性价比高，适合预算有限但想体验康养旅游的朋友。建议提前关注景区优惠活动，选择淡季出行更划算哦！';
        } else if (tierType === '舒适型') {
            tips = '&#x1F4A1; 小旅提示：舒适型方案在品质和价格间取得良好平衡，适合追求一定品质又不想花费太多的朋友。建议选择口碑好的中高端民宿或度假村！';
        } else if (tierType === '品质型') {
            tips = '&#x1F4A1; 小旅提示：品质型方案提供高端体验，适合注重服务品质和深度体验的朋友。建议提前预约热门项目，确保行程顺利！';
        } else if (tierType === '高端型') {
            tips = '&#x1F4A1; 小旅提示：高端型方案提供尊享定制服务，适合追求极致体验的朋友。建议联系专业旅行顾问进行个性化定制，让每一刻都物超所值！';
        }

        return '&#x1F33F; <strong>' + mode + ' · ' + label + '</strong><br><br>' +
            '&#x1F4B0; 价格区间：' + price + '<br><br>' +
            '&#x1F4CB; 具体内容：' + detail + '<br><br>' +
            tips;
    }

    // ========== 各页面的导航按钮事件监听 ==========

    // 背景与模式页按钮
    function bindBtn(id, action) {
        var btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                action();
            });
        }
    }

    bindBtn('btnHomeFromResearch', function() { showPage('homePage'); });
    bindBtn('btnHealthFromResearch', function() { renderHealthStylePage(); showPage('healthStylePage'); });
    bindBtn('btnSafetyFromResearch', function() { renderSafetyAnalysis('safety-overview'); showPage('safetyAnalysisPage'); });

    // 养生方式页按钮
    bindBtn('btnHomeFromHealth', function() { showPage('homePage'); });
    bindBtn('btnDataFromHealth', function() { showPage('dataSelectPage'); });
    bindBtn('btnSafetyFromHealth', function() { renderSafetyAnalysis('safety-overview'); showPage('safetyAnalysisPage'); });

    // 兴趣打分表页按钮
    bindBtn('btnHomeFromInterest', function() { showPage('homePage'); });
    bindBtn('btnDataFromInterest', function() { showPage('dataSelectPage'); });
    bindBtn('btnSafetyFromInterest', function() { renderSafetyAnalysis('safety-overview'); showPage('safetyAnalysisPage'); });

    // 安全旅游分析页按钮
    bindBtn('btnHomeFromSafety', function() { showPage('homePage'); });
    bindBtn('btnInterestFromSafety', function() { showPage('interestScorePage'); });
    bindBtn('btnVisualFromSafety', function() {
        if (!usrVec || bestIdx === null) {
            alert('请先通过"数据化选择"完成计算，再进行可视化分析。');
            return;
        }
        resetToChartSelection();
        showPage('visualPage');
    });

    // 数据化选择页按钮
    bindBtn('btnHomeFromData', function() { showPage('homePage'); });
    bindBtn('btnInterestFromData', function() { showPage('interestScorePage'); });
    bindBtn('btnSafetyFromData', function() { renderSafetyAnalysis('safety-overview'); showPage('safetyAnalysisPage'); });

    // 可视化分析页按钮
    bindBtn('btnHomeFromVisual', function() { showPage('homePage'); });
    bindBtn('btnSafetyFromVisual', function() { renderSafetyAnalysis('safety-overview'); showPage('safetyAnalysisPage'); });

    // 安全评价按钮
    var safetyEvalBtn = document.getElementById('safetyEvalBtn');
    if (safetyEvalBtn) {
        safetyEvalBtn.addEventListener('click', performSafetyEvaluation);
    }

    // 安全评价面板：同步和重置按钮
    var syncSafetyFromVisualBtn = document.getElementById('syncSafetyFromVisualBtn');
    if (syncSafetyFromVisualBtn) {
        syncSafetyFromVisualBtn.addEventListener('click', syncSafetyFromVisualToEval);
    }
    var resetSafetyEvalInputBtn = document.getElementById('resetSafetyEvalInputBtn');
    if (resetSafetyEvalInputBtn) {
        resetSafetyEvalInputBtn.addEventListener('click', function() {
            resetSafetyEvalInputs();
            alert('🔄 安全评价已重置（未评测状态）');
        });
    }

    // ========== 将关键函数暴露到全局作用域，确保所有onclick按钮可调用 ==========
    window.showPage = showPage;
    window.renderSafetyAnalysis = renderSafetyAnalysis;
    window.renderHealthStylePage = renderHealthStylePage;
    window.renderInterestScorePage = renderInterestScorePage;
    window.performSafetyEvaluation = performSafetyEvaluation;
    window.applySafetyFearScores = applySafetyFearScores;
    window.resetSafetyFearScores = resetSafetyFearScores;
    window.askAIAboutMatchedTier = askAIAboutMatchedTier;
    window.quickConsultConsumption = quickConsultConsumption;
    window.updateMatchedTier = updateMatchedTier;
    window.updateSafetyEvalSlider = updateSafetyEvalSlider;
    window.syncSafetyEvalSlider = syncSafetyEvalSlider;
    window.getUserSafetyEvalScores = getUserSafetyEvalScores;
    window.syncSafetyFromVisualToEval = syncSafetyFromVisualToEval;
    window.resetSafetyEvalInputs = resetSafetyEvalInputs;
    window.updateSafetyFearValue = updateSafetyFearValue;
    window.refreshLiveSafetyPanel = refreshLiveSafetyPanel;
    window.refreshDataSafetyLivePanel = refreshDataSafetyLivePanel;
    window.syncVisualScoresFromDataEval = syncVisualScoresFromDataEval;
    window.hasUserSetSafetyScores = hasUserSetSafetyScores;

})();
