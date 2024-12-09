import { TreeSelect } from "antd";
import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

const treeData = [
	{
		title: "de1",
		value: "612360084988416000",
		key: "612360084988416000",
		children: [
			{
				title: "34",
				value: "612682084420210688",
				key: "612682084420210688",
				children: [],
			},
			{
				title: "de1",
				value: "612360108967251968",
				key: "612360108967251968",
				children: [],
			},
			{
				title: "生产组",
				value: "614478143412817920",
				key: "614478143412817920",
				children: [],
			},
			{
				title: "11",
				value: "614765050948538368",
				key: "614765050948538368",
				children: [],
			},
			{
				title: "二级！@#@￥%……#￥……%*……&%&￥%……#%",
				value: "615251976138838016",
				key: "615251976138838016",
				children: [
					{
						title: "<>?\":{}|+_)(*&^%$#@!",
						value: "615252087019458560",
						key: "615252087019458560",
						children: [
							{
								title: "?><\":|}{+_)(*&^%$#@!",
								value: "615252146096230400",
								key: "615252146096230400",
								children: [
									{
										title:
											"{}|}_)(*&^%$#@!WERTYUIOP{}\":LKJHGFDScvbnm,.,mnbvcxbnjtrew34567876ytrewergjhhgfghmghnfdfgghhgyf",
										value: "615252246675640320",
										key: "615252246675640320",
										children: [],
									},
								],
							},
						],
					},
				],
			},
			{
				title: "测试组织1",
				value: "612680875261087744",
				key: "612680875261087744",
				children: [],
			},
		],
	},
	{
		title: "技术部",
		value: "614449968913895424",
		key: "614449968913895424",
		children: [
			{
				title: "技术2组",
				value: "614451623864619008",
				key: "614451623864619008",
				children: [
					{
						title: "技术小分队1",
						value: "614453865401339904",
						key: "614453865401339904",
						children: [],
					},
					{
						title: "技术1组小分队2",
						value: "614455952147271680",
						key: "614455952147271680",
						children: [],
					},
				],
			},
			{
				title: "技术1组",
				value: "614451373707939840",
				key: "614451373707939840",
				children: [],
			},
		],
	},
	{
		title: "1",
		value: "612963618465771520",
		key: "612963618465771520",
		children: [
			{
				title: "de",
				value: "612964358659764224",
				key: "612964358659764224",
				children: [],
			},
		],
	},
	{
		title: "222",
		value: "613376644465553408",
		key: "613376644465553408",
		children: [],
	},
	{
		title: "华东事业中心",
		value: "612363340468768768",
		key: "612363340468768768",
		children: [],
	},
	{
		title: "产品部",
		value: "614449075413897216",
		key: "614449075413897216",
		children: [],
	},
];

async function setupApp() {
	const rootElement = document.getElementById("root");
	if (!rootElement)
		return;
	const root = createRoot(rootElement);

	root.render(
		<StrictMode>
			<TreeSelect style={{ width: 800 }} treeData={treeData}></TreeSelect>
		</StrictMode>,
	);
}

setupApp();
