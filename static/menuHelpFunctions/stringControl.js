let controlString;

(function () {	

	controlString = {};

	controlString.isNormalChar = function(c) {
		const s = "abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		const n = s.indexOf(c);
		
		return n !== -1;
	};

	controlString.isGoodString = function(s) {
		const n = s.length;
		
		if(n === 0)
		{
			return "EMPTY";
		}
		
		for(let i = 0; i < n; i++) {
			let c = s.charAt(i);
			if(this.isNormalChar(c) === false) {
				return "NO_CORR";
			}
		}
		
		return "OK";
	};

})();