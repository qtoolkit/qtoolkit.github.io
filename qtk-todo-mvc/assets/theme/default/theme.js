window.appThemeJson = {
	"widget" : {
		"common" : {
			"lineWidth" : 1,
			"fontSize" : 12,
			"textColor" : "black",
			"backGroundColor" : "#FFFFFF"
		},
		"normal" : {},
		"active" : {},
		"over" : {},
		"selected" : {},
		"disable" : {
			"textColor" : "gray"
		}
	},
	"button.remove": {
		"extends": "widget",
		"common" : {
			"backGroundColor" : null,
			"foreGroundImage":"images/@density/remove.png"
		}
	},
	"filter-button.checked": {
		"extends": "widget",
		"common" : {
			"roundRadius" : 5,
			"lineColor" : "#FF8888"
		}
	},
	"filter-button.unchecked": {
		"extends": "widget"
	},
	"label.title": {
		"extends": "widget",
		"common" : {
			"textAlign" : "center",
			"fontSize" : 36
		}
	},
	"completed.checked": {
		"extends": "widget",
		"common" : {
			"backGroundColor" : null,
			"foreGroundImage":"images/@density/completed.png"
		}
	},
	"completed.unchecked": {
		"extends": "widget",
		"common" : {
			"backGroundColor" : null,
			"foreGroundImage":"images/@density/uncompleted.png"
		}
	}
}
