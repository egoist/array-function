module.exports = function (json) {
	json = (typeof json === 'string') ? JSON.parse(json) : json
	if (!Array.isArray(json)) {
		throw new TypeError('Expected an array but got ' + typeof json)
	}
	var fnName = json[0]
	var fnArgs = json
		.slice(1)
		.map(function (val) {
			return JSON.stringify(val)
		})
	// return fnName + '(' + fnArgs + ')'
	return function (fns) {
		if (typeof fns === 'function') {
			fns.apply(this, fnArgs)
		} else {
			fns[fnName].apply(this, fnArgs)
		}
	}
}
