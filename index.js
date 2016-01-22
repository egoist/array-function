module.exports = function (json) {
	json = (typeof json === 'string') ? JSON.parse(json) : json
	if (!Array.isArray(json)) {
		throw new TypeError('Expected an array but got ' + typeof json)
	}
	var fnName = json[0]
	var fnArgs = json.slice(1)
	return {
		name: fnName,
		args: fnArgs
	}
}
